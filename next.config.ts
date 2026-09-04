import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статическая сборка — чистые HTML/CSS/JS в папке out/ для Cloudflare Pages
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
