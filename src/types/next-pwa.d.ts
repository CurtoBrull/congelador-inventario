// src/types/next-pwa.d.ts
declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  export interface PWAOptions {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    scope?: string;
    sw?: string;
    buildExcludes?: string[];
    runtimeCaching?: Array<Record<string, unknown>>;
    fallbacks?: Record<string, string>;
    mode?: 'production' | 'development';
    publicExcludes?: string[];
    cacheStartUrl?: boolean;
    reloadOnOnline?: boolean;
    [key: string]: unknown; // sin usar any
  }

  export default function withPWA(config: NextConfig & { pwa?: PWAOptions }): NextConfig;
}
