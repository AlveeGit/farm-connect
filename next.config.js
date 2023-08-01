/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

// module.exports = nextConfig

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/data/products/**",
      },
    ],
  },
};