/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/event',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
