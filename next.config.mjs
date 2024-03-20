/** @type {import('next').NextConfig} */
const withSitemap = require("next-sitemap");

module.exports = withSitemap({
  // Your Next.js config options
  // Add sitemap configuration here
  sitemap: {
    hostname: "https://generate-readme.vercel.app/",
  },
});
const nextConfig = {};

export default nextConfig;
