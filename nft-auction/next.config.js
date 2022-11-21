/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  env: {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Dashboard",
        permanent: true,
      },
    ];
  },
};
