
// Fix broken localStorage injected by IDX/Firebase --localstorage-file flag
if (typeof globalThis !== 'undefined' && typeof globalThis.localStorage !== 'undefined') {
  const ls = globalThis.localStorage as any;
  if (typeof ls.getItem !== 'function') {
    (globalThis as any).localStorage = {
      _data: {} as Record<string, string>,
      getItem(key: string) { return this._data[key] ?? null; },
      setItem(key: string, value: string) { this._data[key] = String(value); },
      removeItem(key: string) { delete this._data[key]; },
      clear() { this._data = {}; },
      key(index: number) { return Object.keys(this._data)[index] ?? null; },
      get length() { return Object.keys(this._data).length; },
    };
  }
}

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.realpython.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'w.wallhaven.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bsb1-1.xx.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'previews.dropbox.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
