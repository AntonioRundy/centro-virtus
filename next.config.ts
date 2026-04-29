import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // When deploying to GitHub Pages at github.com/<user>/<repo>,
  // set NEXT_PUBLIC_BASE_PATH to "/<repo-name>" in your GitHub Actions env.
  // Leave empty if using a custom domain (e.g., username.github.io).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
};

export default nextConfig;
