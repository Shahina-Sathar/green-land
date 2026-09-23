import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product photos live in the store's public bucket, the same source the
    // shopping app uses.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
