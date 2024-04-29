/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "audiophile-ecommerce-bay.vercel.app",
      },
    ],
  },
};

export default nextConfig;
