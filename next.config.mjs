/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
