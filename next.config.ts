import type { NextConfig } from "next";

// Single source of truth — update here when the repo name changes.
const BASE_PATH = "/centro-galileu3";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: BASE_PATH,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Inject BASE_PATH into every build automatically.
  // asset() in lib/basePath.ts reads process.env.NEXT_PUBLIC_BASE_PATH.
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
