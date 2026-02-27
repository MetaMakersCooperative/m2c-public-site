import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  basePath: isProd ? '/m2c-public-site' : '',
  assetPrefix: isProd ? '/m2c-public-site/' : '',
};

export default nextConfig;