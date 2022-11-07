/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [process.env.NEXT_PUBLIC_FRONT_DOMAIN],
  },
};

module.exports = nextConfig;
