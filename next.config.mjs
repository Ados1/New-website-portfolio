/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "audiophile-ecommerce-bay.vercel.app",
      },
    ],
  },
};

export default nextConfig;
