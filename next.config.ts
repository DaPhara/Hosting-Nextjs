import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        // port: "", //if no port. this port are optional
        pathname: "/img/*",
        // search: "",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
