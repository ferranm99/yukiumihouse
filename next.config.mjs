/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yukiumihouse.files.wordpress.com",
        port: "",
        pathname: "/2023/04/**",
      },
    ],
  },
};

export default nextConfig;
