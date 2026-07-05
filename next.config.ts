import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow the SVG portrait placeholder to be served via next/image
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
