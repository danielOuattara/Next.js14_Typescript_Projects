/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/diqqf3eq2/image/upload/**",
      },
    ],
  },
};

export default nextConfig;

// "https://www.course-api.com/react-tours-project"

// https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg
