import type { NextConfig } from 'next';
import { basePath, siteOrigin } from './site.config.mjs';

const nextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
  transpilePackages: [],
  typedRoutes: true,
  experimental: {
    cssChunking: true,
    reactCompiler: true,
    extensionAlias: {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.jsx': ['.tsx', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
      '.cjs': ['.cts', '.cjs'],
    },
  },
  compiler: { removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin,
  },
} satisfies NextConfig;

export default nextConfig;
