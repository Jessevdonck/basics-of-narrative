/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // houdt TypeScript-buildfouten tegen
  },
  images: {
    unoptimized: true, // nodig voor export naar statische site
  },
  output: 'export', // nodig voor static export
  basePath: '/basics-of-narrative', // repository subfolder op GitHub Pages
  assetPrefix: '/basics-of-narrative/', // prefix voor assets zoals afbeeldingen
};

module.exports = nextConfig;
