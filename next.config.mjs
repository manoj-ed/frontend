/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "equipmentsdekho.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logowik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logos-download.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
