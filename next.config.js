/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // NEXT_BACKEND_URL: 'http://52.87.179.217:3000'
    NEXT_BACKEND_URL: process.env.NEXT_BACKEND_URL,
    CALLBACK_URL: process.env.CALLBACK_URL
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
