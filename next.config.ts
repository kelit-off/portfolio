import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_SITE_URL: "https://theokillian.kitbase.fr",
  },
};

export default nextConfig;
