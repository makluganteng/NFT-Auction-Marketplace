/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  "loader": "akamai",
  "path": "",   
}
module.exports = {
  trailingSlash: true,
  nextConfig
}

