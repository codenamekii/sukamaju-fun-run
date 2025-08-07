"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface InfiniteMovingCardsProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return 10;
      case "slow":
        return 10;
      default:
        return 10;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (!container || !scroller) return;

    const scrollWidth = scroller.scrollWidth / 2;
    let position = 0;

    const step = () => {
      position = direction === "left" ? position - 1 : position + 1;

      if (Math.abs(position) >= scrollWidth) {
        position = 0;
      }

      scroller.style.transform = `translateX(${position}px)`;
      animationRef = requestAnimationFrame(step);
    };

    let animationRef = requestAnimationFrame(step);

    if (pauseOnHover) {
      container.addEventListener("mouseenter", () => cancelAnimationFrame(animationRef));
      container.addEventListener("mouseleave", () => (animationRef = requestAnimationFrame(step)));
    }

    return () => cancelAnimationFrame(animationRef);
  }, [direction, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden relative w-full", className)}
    >
      <ul
        ref={scrollerRef}
        className="flex gap-10 w-max animate-none"
        style={{
          animationDuration: `${getSpeed()}s`,
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center flex-shrink-0 min-w-[300px] min-h-[160px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};