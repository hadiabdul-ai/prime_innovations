const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: 'export',  // Enable static exports
  basePath: '/prime_innovations', // Your repo name
  assetPrefix: '/prime_innovations/',
  images: {
    unoptimized: true, // Required for static export
  }
};

module.exports = withMDX(nextConfig);
