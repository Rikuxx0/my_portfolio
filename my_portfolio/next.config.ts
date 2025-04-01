import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:  `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              img-src 'self' data: https://tryhackme.com;
              frame-src 'self' https://tryhackme.com;
            `.replace(/\s{2,}/g, " ") // 余分なスペースを削除
          }
        ]
      }
    ]
  },
  
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};

export default nextConfig;
