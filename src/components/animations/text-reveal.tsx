"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TextRevealProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export function TextReveal({
  text,
  as = "p",
  className,
  delay = 0,
  stagger = 0.05,
  duration = 1.2,
}: TextRevealProps) {
  const Component: any = as;
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const words = containerRef.current?.querySelectorAll(".word-inner");
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        {
          y: "120%",
          opacity: 0,
          rotate: 5,
        },
        {
          y: "0%",
          opacity: 1,
          rotate: 0,
          duration: duration,
          ease: "expo.out",
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Component ref={containerRef} className={cn("flex flex-wrap", className)}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="word-inner inline-block will-change-transform pb-1">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
