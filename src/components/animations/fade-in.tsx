"use client";

import { useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-registry";
import { useGSAP } from "@gsap/react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  yOffset = 20,
  duration = 0.8,
  className = "",
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: elementRef });

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
