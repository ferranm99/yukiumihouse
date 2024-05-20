/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yukiumihouse.wordpress.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yukiumihouse.files.wordpress.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
