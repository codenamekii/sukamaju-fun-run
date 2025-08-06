import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // nonaktifkan optimasi bawaan Next.js (aman untuk gambar lokal statis)
  },
};

export default nextConfig;