import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // דגלי מדינות
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
      // לוגואים של מועדוני כדורגל (ESPN)
      {
        protocol: 'https',
        hostname: 'a.espncdn.com',
        pathname: '/**',
      },
      // תמונות שחקנים (TheSportsDB)
      {
        protocol: 'https',
        hostname: 'r2.thesportsdb.com',
        pathname: '/**',
      },
      // ויקימדיה (לגיבוי)
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
