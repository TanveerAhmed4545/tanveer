"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — Shehata style.
 * - Small orange dot that follows the cursor instantly
 * - Larger ring that lags behind with smooth easing
 * - Hides on touch devices via CSS @media (hover: none)
 * 
 * Optimized to use DOM refs instead of React state to prevent massive re-renders
 * and eliminate lag during high-frequency mousemove events.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Keep hover state in React to easily apply classes, but this only changes on enter/leave
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const updateRing = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
      
      rafId = requestAnimationFrame(updateRing);
    };

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      }
      
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor='hover'], input, textarea, .project-card");
      const text = interactive?.getAttribute("data-cursor-text") || "";
      
      // Only update state if it changed to avoid unnecessary re-renders
      setIsHovering((prev) => {
        const next = !!interactive;
        return prev !== next ? next : prev;
      });

      setCursorText((prev) => prev !== text ? text : prev);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    rafId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor bg-primary"
        style={{
          width: isHovering ? "8px" : "12px",
          height: isHovering ? "8px" : "12px",
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring flex items-center justify-center font-mono text-[9px] tracking-widest text-primary uppercase font-bold"
        style={{
          width: cursorText ? "100px" : isHovering ? "64px" : "36px",
          height: cursorText ? "100px" : isHovering ? "64px" : "36px",
          opacity: isVisible ? (isHovering ? 1 : 0.7) : 0,
          borderColor: "var(--primary)",
          backgroundColor: cursorText ? "rgba(12, 12, 12, 0.8)" : "transparent",
          backdropFilter: cursorText ? "blur(4px)" : "none",
        }}
        aria-hidden
      >
        <span className={`transition-opacity duration-300 ${cursorText ? "opacity-100" : "opacity-0"}`}>
          {cursorText}
        </span>
      </div>
    </>
  );
}

