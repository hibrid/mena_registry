/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Mena Technologies - KASM Registry',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://hibrid.github.io/mena_registry/',
    contactUrl: 'https://github.com/hibrid/mena_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/mena_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
