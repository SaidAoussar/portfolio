/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    //https://github.com/vercel/next.js/discussions/30174
    styledComponents: true
  }
};

module.exports = nextConfig;
