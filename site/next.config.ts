import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vendr-price-check",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
