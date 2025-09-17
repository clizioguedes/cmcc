import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  compress: true,
  swcMinify: true,
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'ewwwgw4s48cwoogwk0ok8w8o.82.25.68.46.sslip.io',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
