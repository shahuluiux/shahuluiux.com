/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    minimumCacheTTL: 60,
    domains: ['mdbcdn.b-cdn.net'],
    unoptimized: true,
  },
}

module.exports = nextConfig
