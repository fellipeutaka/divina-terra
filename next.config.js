/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh5.googleusercontent.com", "instagram.fbjp1-1.fna.fbcdn.net"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
