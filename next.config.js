/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/event',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
