/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.raccoonstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.pixieset.com",
      },
    ],
    // Keep optimized variants cached for a year instead of the 4-hour default.
    // Remote sources are immutable/versioned (Raccoon static URLs carry ?ts=
    // params; Pixieset URLs are content-addressed), so a long TTL eliminates
    // repeated re-optimizations and image cache writes.
    minimumCacheTTL: 31536000,
    // Generate WebP only, at a single quality, so each source image produces
    // one cached variant per size rather than extra AVIF/quality combinations.
    formats: ["image/webp"],
    qualities: [75],
    // Trim the responsive breakpoints (8 -> 4 and 7 -> 4). Fewer sizes means
    // fewer transformations and fewer image cache writes per source image.
    deviceSizes: [640, 1080, 1920, 3840],
    imageSizes: [64, 128, 256, 384],
  },
};

export default nextConfig;
