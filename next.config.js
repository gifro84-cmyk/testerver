/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
}

module.exports = nextConfig
