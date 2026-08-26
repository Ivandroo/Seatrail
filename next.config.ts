import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Substitui pelo domínio da tua galeria
        port: '',
        pathname: '/**', // Permite todos os caminhos desse domínio
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Substitui pelo domínio da tua galeria
        port: '',
        pathname: '/**', // Permite todos os caminhos desse domínio
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com', // Substitui pelo domínio da tua galeria
        port: '',
        pathname: '/**', // Permite todos os caminhos desse domínio
      },
    ],
  },
};

export default nextConfig;
