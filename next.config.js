const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  
  // Add support for static export
  output: 'export',
  
  // Set the base path to match your repository name
  basePath: '/prime_innovations', // Replace <repository-name> with your repo name
  
  assetPrefix: '/prime_innovations/',
  // Optionally, add other Next.js config
};

module.exports = withMDX(nextConfig);
