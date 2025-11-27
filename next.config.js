/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',               // voor static export
  basePath: '/basics-of-narrative',  // subpath van GitHub Pages
  assetPrefix: '/basics-of-narrative/', // voor statische assets zoals afbeeldingen
};

module.exports = nextConfig;
