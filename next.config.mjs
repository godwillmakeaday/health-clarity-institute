/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: "/for-hospitals",
        destination: "/for-hospitals-institutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
