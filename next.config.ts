import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the old swapnadeep.com/resume link working.
  async redirects() {
    return [
      { source: "/resume", destination: "/Swapnadeep_Mohapatra_8763039380_Resume.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
