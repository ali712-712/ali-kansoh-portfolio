import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ali Kansoh — Architecture Portfolio",
    template: "%s — Ali Kansoh",
  },
  description: "Architectural portfolio and CV of Ali Kansoh, M.Arch and B.Arch graduate from Universidad Europea de Madrid.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
