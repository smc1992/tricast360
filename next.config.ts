import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" to enable API routes
  images: {
    // Enable image optimization for better performance
    unoptimized: false,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  env: {
    SITE_URL: 'https://tricast360.de',
  },
};

export default nextConfig;
