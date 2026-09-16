import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = "https://alikansoh-architecture.alikanso725.chatgpt.site";
const portfolioPages = Array.from({ length: 70 }, (_, index) => index + 6);
const masterPages = Array.from({ length: 25 }, (_, index) => index + 1);

const files = [
  ...portfolioPages.map((page) => `/assets/portfolio/page-${String(page).padStart(2, "0")}.jpg`),
  ...masterPages.map((page) => `/assets/master/master-${String(page).padStart(2, "0")}.jpg`),
  "/assets/cv/cv-1.jpg",
  "/documents/Ali-Kansoh-CV-2026.pdf",
];

async function download(file) {
  const response = await fetch(`${origin}${file}`);
  if (!response.ok) throw new Error(`Failed to download ${file}: ${response.status}`);
  const destination = path.join(process.cwd(), "public", file.replace(/^\//, ""));
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  process.stdout.write(`Downloaded ${file}\n`);
}

for (let index = 0; index < files.length; index += 6) {
  await Promise.all(files.slice(index, index + 6).map(download));
}
