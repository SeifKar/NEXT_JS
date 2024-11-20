/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  // Configure images for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
