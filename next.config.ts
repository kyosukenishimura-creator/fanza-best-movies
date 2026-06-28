import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.chil-chil.net" },
      { protocol: "https", hostname: "*.dmm.co.jp" },
      { protocol: "https", hostname: "*.dmm.com" },
    ],
  },
};

export default nextConfig;
