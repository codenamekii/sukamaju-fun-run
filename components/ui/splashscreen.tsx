"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // tampil selama 2 detik

    return () => clearTimeout(timeout);
  }, []);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="text-center">
        <Image
          src="/logo.png"
          alt="Sukamaju Run"
          width={100}
          height={100}
          className="mx-auto animate-pulse"
        />
        <p className="text-white mt-4 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}