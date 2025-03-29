import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)", // すべてのリクエストに適用
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://apis.google.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              img-src 'self' data: https://your-image-cdn.com;
              connect-src 'self' https://api.example.com;
              frame-src 'none';
            `.replace(/\s{2,}/g, " "), // 不要なスペースを削除
          },
        ],
      },
    ];
  },
  
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};

export default nextConfig;
