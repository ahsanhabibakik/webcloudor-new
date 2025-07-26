/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    typedRoutes: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['example.com'], // Add your image domains here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.commons = {
        name: 'commons',
        chunks: 'all',
        minChunks: 2,
      }
    }
    
    return config
  },
  // Enable compression
  compress: true,
  // Generate source maps in production for better debugging
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig