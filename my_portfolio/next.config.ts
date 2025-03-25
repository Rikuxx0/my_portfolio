import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)", //全てのページにCSPを適応 //nonceの導入を検討
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              img-src 'self' data:;
              connect-src 'self';
            `.replace(/\s{2,}/g, " ").trim(),
          }
        ]
      }
    ]
  }
};

export default nextConfig;
