"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
  children: React.ReactNode;
}

export function MagneticButton({
  children,
  strength = 40,
  className,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const xTextTo = useRef<gsap.QuickToFunc | null>(null);
  const yTextTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(() => {
    // gsap.quickTo gives us buttery smooth continuous performance
    xTo.current = gsap.quickTo(buttonRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    yTo.current = gsap.quickTo(buttonRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
    
    xTextTo.current = gsap.quickTo(textRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    yTextTo.current = gsap.quickTo(textRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    xTo.current?.(x * (strength / 100));
    yTo.current?.(y * (strength / 100));
    xTextTo.current?.(x * (strength / 200)); // text moves slightly less to create depth parallax
    yTextTo.current?.(y * (strength / 200));
  };

  const handleMouseLeave = () => {
    // Reset back to center
    xTo.current?.(0);
    yTo.current?.(0);
    xTextTo.current?.(0);
    yTextTo.current?.(0);
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex items-center justify-center rounded-full will-change-transform",
        className
      )}
      {...props}
    >
      <span ref={textRef} className="pointer-events-none block will-change-transform">
        {children}
      </span>
    </button>
  );
}
