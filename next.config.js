/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BACKEND_URL: process.env.NEXT_BACKEND_URL
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
