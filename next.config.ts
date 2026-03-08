import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',  // ← YE ZAROORI HAI
        pathname: '/img/wn/**',
      },
    ],
  },
};

export default nextConfig