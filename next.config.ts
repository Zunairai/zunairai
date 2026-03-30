import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  devIndicators: {
    position: "bottom-right", // ✅ only valid option now
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;