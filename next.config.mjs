/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * doesn't work because cloudflare doesn't support optimizing next/images
   */
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "normanau.com",
  //     },
  //   ],
  // },
  output: "standalone",
};

export default nextConfig;
