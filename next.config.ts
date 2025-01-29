import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.instagram.com',
        port: '',
        pathname: '/static/images/**',
      },
      {
        protocol: 'https',
        hostname: 'static.cdninstagram.com',
        port: '',
        pathname: '/rsrc.php/**',
      },
    ],
  },
};

export default nextConfig;
