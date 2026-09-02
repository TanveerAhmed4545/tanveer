"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-registry";
import { cn } from "@/lib/utils";

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 1 = normal scroll, < 1 = slower, > 1 = faster
}

export function ParallaxScroll({ children, className, speed = 0.5 }: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Y movement = offset based on speed
      const yShift = (1 - speed) * 30; // 30% shift based on speed diff
      
      gsap.fromTo(
        targetRef.current,
        { yPercent: -yShift },
        {
          yPercent: yShift,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", 
            end: "bottom top", 
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  // We add scale-110 by default to avoid seeing edges during parallax movement
  return (
    <div ref={containerRef} className={cn("overflow-hidden w-full h-full", className)}>
      <div ref={targetRef} className="w-full h-full will-change-transform scale-110">
        {children}
      </div>
    </div>
  );
}
