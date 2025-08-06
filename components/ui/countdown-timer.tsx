"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetDate: string;
};

const SlideDigit = ({ number }: { number: number }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={number}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-block w-8 text-3xl py-4 md:text-4xl text-white text-center"
      >
        {number.toString().padStart(2, "0")}
      </motion.span>
    </AnimatePresence>
  );
};

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const totalSeconds = Math.max(0, Math.floor(countDown / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex gap-4 justify-center items-center text-white font-bold">
      <div className="text-center">
        <SlideDigit number={days} />
        <div className="text-xs md:text-sm">Hari</div>
      </div>
      <div className="text-center">
        <SlideDigit number={hours} />
        <div className="text-xs md:text-sm">Jam</div>
      </div>
      <div className="text-center">
        <SlideDigit number={minutes} />
        <div className="text-xs md:text-sm">Menit</div>
      </div>
      <div className="text-center">
        <SlideDigit number={seconds} />
        <div className="text-xs md:text-sm">Detik</div>
      </div>
    </div>
  );
}