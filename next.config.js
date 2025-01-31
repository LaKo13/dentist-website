/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/dentist-website', // Replace with your repository name
}

module.exports = nextConfig 