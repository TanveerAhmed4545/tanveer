"use client";

import { useEffect, useState } from "react";

/**
 * Custom cursor — Shehata style.
 * - Small orange dot that follows the cursor instantly
 * - Larger ring that lags behind with smooth easing
 * - Hides on touch devices via CSS @media (hover: none)
 */
export function CustomCursor() {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const updateRing = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setRingPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(updateRing);
    };

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setDotPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor='hover'], input, textarea, .project-card");
      setIsHovering(!!interactive);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
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
        className="custom-cursor"
        style={{
          transform: `translate(${dotPos.x}px, ${dotPos.y}px) translate(-50%, -50%)`,
          width: isHovering ? "8px" : "12px",
          height: isHovering ? "8px" : "12px",
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden
      />
      <div
        className="custom-cursor-ring"
        style={{
          transform: `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`,
          width: isHovering ? "64px" : "36px",
          height: isHovering ? "64px" : "36px",
          opacity: isVisible ? (isHovering ? 1 : 0.7) : 0,
          borderColor: isHovering ? "#FF5500" : "#FF5500",
        }}
        aria-hidden
      />
    </>
  );
}
