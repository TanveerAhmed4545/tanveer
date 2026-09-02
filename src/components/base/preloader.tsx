"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GRAIN = 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix values=\'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

// Diagonal polygon helpers without CSS calc() to prevent layout thrashing on animation frames
const darkPoly  = (t: number, b: number) => `polygon(0 0, ${t}% 0, ${b}% 100%, 0 100%)`;
const limePoly  = (t: number, b: number) => `polygon(${t}% 0, 100% 0, 100% 100%, ${b}% 100%)`;
const seamPoly  = (t: number, b: number) =>
  `polygon(${t - 0.15}% 0, ${t + 0.15}% 0, ${b + 0.15}% 100%, ${b - 0.15}% 100%)`;

const STATUS = "> initializing portfolio assets...";

const NameDark = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="flex flex-col items-center leading-[0.82] tracking-[-0.04em]">
      <span className="font-display font-black text-[17vw] md:text-[14vw] text-primary whitespace-nowrap">TANVEER</span>
      <span className="font-display font-black text-[17vw] md:text-[14vw] text-primary whitespace-nowrap">AHMED</span>
    </div>
  </div>
);

const NameLime = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="flex flex-col items-center leading-[0.82] tracking-[-0.04em]">
      <span className="font-display font-black text-[17vw] md:text-[14vw] text-background whitespace-nowrap">TANVEER</span>
      <span className="font-display font-black text-[17vw] md:text-[14vw] text-background whitespace-nowrap">AHMED</span>
    </div>
  </div>
);

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  const darkRef    = useRef<HTMLDivElement>(null);
  const limeRef    = useRef<HTMLDivElement>(null);
  const seamRef    = useRef<HTMLDivElement>(null);

  const progTextRef = useRef<HTMLSpanElement>(null);
  const progBarRef  = useRef<HTMLDivElement>(null);
  const barHeadRef  = useRef<HTMLDivElement>(null);
  const statusRef   = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // ── Initial diagonal at 45° ─────────────────────────────────────
    // topX=65, bottomX=35 → diagonal goes top-right to bottom-left
    const START_T = 65, START_B = 35;
    const END_T   = 50, END_B   = 50; // vertical seam at 100%

    gsap.set(darkRef.current,  { clipPath: darkPoly(START_T, START_B) });
    gsap.set(limeRef.current,  { clipPath: limePoly(START_T, START_B) });
    gsap.set(seamRef.current,  { clipPath: seamPoly(START_T, START_B) });

    // ── Name: fade in both panels together ─────────────────────────
    gsap.fromTo(
      [darkRef.current, limeRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // ── Status typewriter ──────────────────────────────────────────
    const chars = STATUS.split("");
    gsap.to({}, {
      duration: chars.length * 0.038,
      ease: "none",
      onUpdate: function () {
        const n = Math.floor(this.progress() * chars.length);
        if (statusRef.current)
          statusRef.current.textContent =
            chars.slice(0, n).join("") + (n < chars.length ? "█" : "");
      },
      onComplete: () => {
        if (statusRef.current) statusRef.current.textContent = STATUS;
      },
    });

    // ── Main timeline: progress + diagonal ────────────────────────
    const tl = gsap.timeline();
    const prog = { value: 0 };

    tl.to(prog, {
      value: 100,
      duration: 2.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const p   = Math.floor(prog.value);
        const pct = p / 100;

        // Counter (use textContent to prevent layout thrashing)
        if (progTextRef.current)
          progTextRef.current.textContent = p.toString().padStart(3, "0");

        // Bar (use scaleX transform instead of width reflow)
        if (progBarRef.current)  progBarRef.current.style.transform = `scaleX(${pct})`;
        if (barHeadRef.current)  barHeadRef.current.style.left   = `${p}%`;

        // Diagonal rotation: topX 65→50, bottomX 35→50
        const tX = START_T + (END_T - START_T) * pct; // 65→50
        const bX = START_B + (END_B - START_B) * pct; // 35→50

        if (darkRef.current)  darkRef.current.style.clipPath  = darkPoly(tX, bX);
        if (limeRef.current)  limeRef.current.style.clipPath  = limePoly(tX, bX);
        if (seamRef.current)  seamRef.current.style.clipPath  = seamPoly(tX, bX);
      },
    }, 0);

    // ── Glitch flickers ────────────────────────────────────────────
    [{ t: 1.1, v: 38 }, { t: 2.1, v: 79 }].forEach(({ t, v }) => {
      tl.call(() => {
        const real = Math.floor(prog.value);
        if (progTextRef.current) {
          progTextRef.current.textContent = v.toString().padStart(3, "0");
          setTimeout(() => {
            if (progTextRef.current)
              progTextRef.current.textContent = real.toString().padStart(3, "0");
          }, 60);
        }
      }, undefined, t);
    });

    // ── Hold ──────────────────────────────────────────────────────
    tl.to({}, { duration: 0.22 });

    // ── Exit: horizontal slide ────────────────────────────────────
    tl.to(darkRef.current, { xPercent: -105, duration: 1.05, ease: "expo.inOut" }, "exit");
    tl.to(limeRef.current, { xPercent:  105, duration: 1.05, ease: "expo.inOut" }, "exit");
    tl.to(seamRef.current, { opacity: 0, duration: 0.3, ease: "none" }, "exit");
    tl.call(() => setIsVisible(false));
  });

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[1000] overflow-hidden pointer-events-none select-none font-mono">

      {/* ── SINGLE STATIC GRAIN OVERLAY ─────────────────────────────
          Placed outside animating clip-paths so the SVG noise texture
          is rasterized only once and never causes GPU/CPU re-painting! */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-30" style={{ backgroundImage: GRAIN }} />

      {/* ══ DARK PANEL ══════════════════════════════════════════════ */}
      <div
        ref={darkRef}
        className="absolute inset-0 bg-background"
        style={{ clipPath: darkPoly(65, 35), willChange: "clip-path, transform" }}
      >
        {/* Name: lime on dark */}
        <NameDark />

        {/* Bottom-left: status + counter + bar */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 flex flex-col gap-3 max-w-[55vw]">
          {/* Status line */}
          <span
            ref={statusRef}
            className="text-primary/70 text-[10px] tracking-widest block"
          />

          {/* Big counter */}
          <div className="font-display font-black text-[clamp(3.5rem,10vw,7rem)] leading-none tracking-tighter text-foreground tabular-nums flex items-end gap-2">
            <span ref={progTextRef}>000</span>
            <span className="text-primary text-[clamp(1.5rem,4vw,3rem)] mb-1">%</span>
          </div>

          {/* Progress bar */}
          <div className="w-40 md:w-56 h-px bg-white/10 relative">
            <div
              ref={progBarRef}
              className="absolute top-0 left-0 h-full w-full bg-primary origin-left scale-x-0"
              style={{ willChange: "transform" }}
            />
            <div
              ref={barHeadRef}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-primary shadow-[0_0_10px_3px_rgba(201,226,101,0.7)]"
              style={{ left: "0%", willChange: "left" }}
            />
          </div>

          {/* Label */}
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Loading</span>
        </div>

        {/* Top-left: build tag */}
        <div className="absolute top-0 left-0 p-8 md:p-12 z-10">
          <span className="text-primary/50 text-[10px] tracking-widest">[BUILD · 2026]</span>
        </div>
      </div>

      {/* ══ DIAGONAL SEAM (glowing line at the split) ═══════════════ */}
      <div
        ref={seamRef}
        className="absolute inset-0 bg-primary/30 pointer-events-none z-20"
        style={{ clipPath: seamPoly(65, 35), willChange: "clip-path, opacity" }}
      />

      {/* ══ LIME PANEL ══════════════════════════════════════════════ */}
      <div
        ref={limeRef}
        className="absolute inset-0 bg-primary"
        style={{ clipPath: limePoly(65, 35), willChange: "clip-path, transform" }}
      >
        {/* Name: dark on lime */}
        <NameLime />

        {/* Top-right: role + year */}
        <div className="absolute top-0 right-0 p-8 md:p-12 z-10 text-right flex flex-col gap-[3px]">
          <span className="text-background/50 text-[10px] tracking-widest uppercase">Creative Frontend Dev</span>
          <span className="text-background font-bold text-sm tracking-widest">Tanveer Ahmed</span>
        </div>

        {/* Bottom-right: subtle label */}
        <div className="absolute bottom-0 right-0 p-8 md:p-12 z-10 text-right">
          <span className="text-background/30 text-[10px] tracking-[0.2em] uppercase">Portfolio</span>
        </div>
      </div>

    </div>
  );
}
