import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import worker from "./dist/server/index.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist", "client");
const contentTypes = {
  ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon", ".jpeg": "image/jpeg", ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf", ".png": "image/png", ".svg": "image/svg+xml",
  ".webp": "image/webp", ".woff": "font/woff", ".woff2": "font/woff2",
};

async function assetResponse(request) {
  const url = new URL(request.url);
  const pathname = decodeURIComponent(url.pathname);
  const candidate = path.resolve(root, pathname.replace(/^\/+/, ""));
  if (candidate !== root && !candidate.startsWith(`${root}${path.sep}`)) return new Response("Not found", { status: 404 });
  try {
    const info = await stat(candidate);
    if (!info.isFile()) return new Response("Not found", { status: 404 });
    const headers = new Headers({
      "Content-Length": String(info.size),
      "Content-Type": contentTypes[path.extname(candidate).toLowerCase()] || "application/octet-stream",
    });
    if (pathname.startsWith("/_next/static/")) headers.set("Cache-Control", "public, max-age=31536000, immutable");
    return new Response(createReadStream(candidate), { status: 200, headers, duplex: "half" });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

const env = { ASSETS: { fetch: assetResponse } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function sendResponse(req, res, response) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  if (req.method === "HEAD") return res.end();
  res.end(Buffer.from(await response.arrayBuffer()));
}

const server = http.createServer(async (req, res) => {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host || "localhost";
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = chunks.length ? Buffer.concat(chunks) : undefined;
    const request = new Request(`${protocol}://${host}${req.url || "/"}`, {
      method: req.method, headers: req.headers, body, duplex: body ? "half" : undefined,
    });
    const asset = await assetResponse(request);
    if (asset.status !== 404) return await sendResponse(req, res, asset);
    return await sendResponse(req, res, await worker.fetch(request, env, ctx));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal server error");
  }
});

server.listen(Number(process.env.PORT || 10000), "0.0.0.0");
