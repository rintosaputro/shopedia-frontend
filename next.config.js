/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BACKEND_URL: 'https://localhost:5000'
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
