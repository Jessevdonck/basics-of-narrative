/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/basics-of-narrative',
  assetPrefix: '/basics-of-narrative/',
};

module.exports = nextConfig;
