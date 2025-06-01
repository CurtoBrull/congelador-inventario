// next.config.ts
import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  // otras opciones
};

export default withPWA({
  ...config,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
