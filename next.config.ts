import type { NextConfig } from "next";
import createMDX from '@next/mdx';


const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "generated",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  async redirects() {
    return [
      {
        source: '/assets/SOP.pdf',
        destination: '/forms/sop.pdf',
        permanent: true,
      },
      {
        source: '/assets/event.pdf',
        destination: '/forms/event.pdf',
        permanent: true,
      },
      {
        source: '/assets/membership_form.pdf',
        destination: '/forms/membership.pdf',
        permanent: true,
      },
      {
        source: '/csrf.html',
        destination: '/grants/csrf',
        permanent: true,
      },
      {
        source: '/csrf',
        destination: '/grants/csrf',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);