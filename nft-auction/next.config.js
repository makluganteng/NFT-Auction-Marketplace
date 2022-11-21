/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env:{
  reactStrictMode: true,
    swcMinify: true,
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  },
}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Dashboard',
        permanent: true,
      },
    ]
  },
}

