"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export function ImageReveal({ src, alt, className, imgClassName }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const image = imageRef.current;
      
      // Setup initial state: Masked from top
      gsap.set(container, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
      gsap.set(image, { scale: 1.4 });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(container, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "expo.inOut",
      }).to(
        image,
        {
          scale: 1,
          duration: 1.5,
          ease: "expo.inOut",
        },
        "<" // start at the same time
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full will-change-transform", className)}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover will-change-transform", imgClassName)}
      />
    </div>
  );
}
