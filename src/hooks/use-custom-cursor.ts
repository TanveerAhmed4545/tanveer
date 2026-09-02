import { useEffect, useRef } from "react";

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const updateCursor = () => {
      // Spring-like follow
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentX - 16}px, ${currentY - 16}px)`;
      }
      
      rafId = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Only add listeners if device supports hover (ignores touch devices)
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      rafId = requestAnimationFrame(updateCursor);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return cursorRef;
}
