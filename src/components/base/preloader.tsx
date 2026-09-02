"use client";

import { useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * High-performance preloader — v3
 *
 * Design:
 * - Static diagonal split (no animated clip-path = no jank)
 * - Two text layers clipped by the same static diagonal so colors always align
 * - All motion uses GPU transforms (translate, scale, opacity)
 * - Counter via textContent (zero React re-renders)
 * - Clean vertical curtain exit
 */

const STATUS = "> initializing portfolio assets...";

// Static diagonal — never animated, so the browser composites once
const DARK_CLIP = "polygon(0 0, 100% 0, 0% 100%, 0 100%)";
const LIME_CLIP = "polygon(100% 0, 100% 0, 100% 100%, 0% 100%)";

export function Preloader() {
  const [isDone, setIsDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const progTextRef = useRef<HTMLSpanElement>(null);
  const progBarRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const bottomInfoRef = useRef<HTMLDivElement>(null);
  const topInfoRef = useRef<HTMLDivElement>(null);

  const handleComplete = useCallback(() => setIsDone(true), []);

  useGSAP(() => {
    if (isDone) return;

    const ctx = gsap.context(() => {
      // ── Entrance ───────────────────────────────────────────────
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(
        [bottomInfoRef.current, topInfoRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out", delay: 0.15 }
      );

      // ── Typewriter ─────────────────────────────────────────────
      const chars = STATUS.split("");
      gsap.to({ val: 0 }, {
        val: chars.length,
        duration: chars.length * 0.032,
        ease: "none",
        onUpdate: function () {
          const n = Math.floor(this.targets()[0].val);
          if (statusRef.current)
            statusRef.current.textContent =
              chars.slice(0, n).join("") + (n < chars.length ? "█" : "");
        },
        onComplete: () => {
          if (statusRef.current) statusRef.current.textContent = STATUS;
        },
      });

      // ── Progress ───────────────────────────────────────────────
      const tl = gsap.timeline();
      const prog = { value: 0 };

      tl.to(prog, {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          const p = Math.floor(prog.value);
          if (progTextRef.current)
            progTextRef.current.textContent = p.toString().padStart(3, "0");
          if (progBarRef.current)
            progBarRef.current.style.transform = `scaleX(${p / 100})`;
        },
      });

      // Glitch flickers
      [{ t: 0.8, v: 38 }, { t: 1.6, v: 81 }].forEach(({ t, v }) => {
        tl.call(() => {
          const real = Math.floor(prog.value);
          if (progTextRef.current) {
            progTextRef.current.textContent = v.toString().padStart(3, "0");
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (progTextRef.current)
                  progTextRef.current.textContent = real.toString().padStart(3, "0");
              });
            });
          }
        }, undefined, t);
      });

      // ── Hold ───────────────────────────────────────────────────
      tl.to({}, { duration: 0.12 });

      // ── Exit ───────────────────────────────────────────────────
      // Fade inner content
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 0.96,
        duration: 0.3,
        ease: "power2.in",
      }, "exit");

      // Curtain split — GPU transforms only
      tl.to(topCurtainRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      }, "exit+=0.12");

      tl.to(bottomCurtainRef.current, {
        yPercent: 100,
        duration: 0.8,
        ease: "power4.inOut",
      }, "exit+=0.12");

      tl.call(handleComplete, undefined, "exit+=0.95");
    }, rootRef);

    return () => ctx.revert();
  }, { scope: rootRef, dependencies: [isDone] });

  if (isDone) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[1000] overflow-hidden pointer-events-none select-none font-mono"
      aria-hidden="true"
    >
      {/* ══ TOP CURTAIN (dark) ════════════════════════════════════ */}
      <div
        ref={topCurtainRef}
        className="absolute inset-0"
        style={{ clipPath: DARK_CLIP, willChange: "transform" }}
      >
        <div className="absolute inset-0 bg-background" />
      </div>

      {/* ══ BOTTOM CURTAIN (lime) ═════════════════════════════════ */}
      <div
        ref={bottomCurtainRef}
        className="absolute inset-0"
        style={{ clipPath: LIME_CLIP, willChange: "transform" }}
      >
        <div className="absolute inset-0 bg-primary" />
      </div>

      {/* ══ CONTENT ═══════════════════════════════════════════════ */}
      <div ref={contentRef} className="absolute inset-0 z-10">

        {/* Name — two layers clipped to match background */}
        <div ref={nameRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">

          {/* Dark background layer → lime text */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ clipPath: DARK_CLIP }}>
            <div className="flex flex-col items-center leading-[0.82] tracking-[-0.04em]">
              <span className="font-display font-black text-[17vw] md:text-[14vw] text-primary whitespace-nowrap">TANVEER</span>
              <span className="font-display font-black text-[17vw] md:text-[14vw] text-primary whitespace-nowrap">AHMED</span>
            </div>
          </div>

          {/* Lime background layer → dark text */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ clipPath: LIME_CLIP }}>
            <div className="flex flex-col items-center leading-[0.82] tracking-[-0.04em]">
              <span className="font-display font-black text-[17vw] md:text-[14vw] text-background whitespace-nowrap">TANVEER</span>
              <span className="font-display font-black text-[17vw] md:text-[14vw] text-background whitespace-nowrap">AHMED</span>
            </div>
          </div>
        </div>

        {/* Bottom-left: status + counter + bar */}
        <div ref={bottomInfoRef} className="absolute bottom-0 left-0 p-8 md:p-12 z-10 flex flex-col gap-3 max-w-[55vw]">
          <span ref={statusRef} className="text-primary/70 text-[10px] tracking-widest block" />

          <div className="font-display font-black text-[clamp(3.5rem,10vw,7rem)] leading-none tracking-tighter text-foreground tabular-nums flex items-end gap-2">
            <span ref={progTextRef}>000</span>
            <span className="text-primary text-[clamp(1.5rem,4vw,3rem)] mb-1">%</span>
          </div>

          <div className="w-40 md:w-56 h-px bg-white/10 relative overflow-hidden">
            <div
              ref={progBarRef}
              className="absolute top-0 left-0 h-full w-full bg-primary origin-left"
              style={{ transform: "scaleX(0)", willChange: "transform" }}
            />
          </div>

          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Loading</span>
        </div>

        {/* Top-left: build tag */}
        <div ref={topInfoRef} className="absolute top-0 left-0 p-8 md:p-12 z-10">
          <span className="text-primary/50 text-[10px] tracking-widest">[BUILD · 2026]</span>
        </div>

        {/* Top-right: role */}
        <div className="absolute top-0 right-0 p-8 md:p-12 z-10 text-right flex flex-col gap-[3px]">
          <span className="text-background/50 text-[10px] tracking-widest uppercase">Creative Frontend Dev</span>
          <span className="text-background font-bold text-sm tracking-widest">Tanveer Ahmed</span>
        </div>

        {/* Bottom-right: label */}
        <div className="absolute bottom-0 right-0 p-8 md:p-12 z-10 text-right">
          <span className="text-background/30 text-[10px] tracking-[0.2em] uppercase">Portfolio</span>
        </div>
      </div>
    </div>
  );
}
