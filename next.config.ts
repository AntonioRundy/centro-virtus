import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/centro-galileu1",
  trailingSlash: true,
};

export default nextConfig;
