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
  },
};

export default nextConfig;
