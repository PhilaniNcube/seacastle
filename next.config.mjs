/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.raccoonstatic.com",
      },
    ],
  },
};

export default nextConfig;
