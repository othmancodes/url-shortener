/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === "development", // Only ignore errors during development
  },
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable experimental app directory if you're using it
  },
};

export default nextConfig;
