import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ];
  }
};

export default nextConfig;
