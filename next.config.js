/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BACKEND_URL: 'http://52.87.179.217:3000'
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
