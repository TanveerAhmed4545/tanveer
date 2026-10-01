"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-registry";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    
    // Sync GSAP with Lenis
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(500, 33); // Gentle frame-drop smoothing for GSAP + Lenis
    
    // Remove the GSAP ticker when component unmounts
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef}
      root 
      autoRaf={false}
      options={{ 
        lerp: 0.08, 
        duration: 1.5, 
        smoothWheel: true, 
      }}
    >
      {children}
    </ReactLenis>
  );
}
