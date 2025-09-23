import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" to enable API routes
  trailingSlash: true,
  images: {
    // Keep unoptimized for compatibility, but can be removed if using proper image optimization
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  env: {
    SITE_URL: 'https://tricast360.de',
  },
};

export default nextConfig;
