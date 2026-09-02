"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio.data";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-registry";

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance projects every 6 seconds unless user hovers or interacts
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowRight") {
        nextProject();
      } else if (e.key === "ArrowLeft") {
        prevProject();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  useGSAP(() => {
    ScrollTrigger.refresh();

    if (!containerRef.current) return;

    // Eyebrow and Titles entrance animation
    const headerElements = containerRef.current.querySelectorAll(".animate-header");
    gsap.fromTo(
      headerElements,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    // Tablet Stage 3D entrance
    if (tabletRef.current) {
      gsap.fromTo(
        tabletRef.current,
        { opacity: 0, scale: 0.85, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: tabletRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, { scope: containerRef });

  const activeProject = projects[activeIndex];
  const yearString = activeProject.date.split(" ").pop() || "2026";
  const yearFirstPart = yearString.slice(0, 2); // e.g. "20"
  const yearSecondPart = yearString.slice(2);   // e.g. "26" or "24"

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full bg-[#0d0d0f] text-foreground py-20 sm:py-28 md:py-36 overflow-hidden select-none font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[var(--lime)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[700px]">
        
        {/* ── LEFT COLUMN: PROJECT SELECTOR & BRANDING (Davies Style) ── */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full py-4 z-20">
          
          {/* Top Eyebrow */}
          <div className="animate-header flex items-center gap-3 mb-8 md:mb-12">
            <svg className="w-7 h-7 text-white/50" viewBox="0 0 32 32" fill="none" stroke="currentColor">
              <path d="M6 26 Q 14 14, 26 6" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
              SELECTED WORKS
            </span>
          </div>

          {/* Vertical Interactive Titles List */}
          <div className="flex flex-col gap-3 sm:gap-4 my-auto py-4">
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={project.slug}
                  onClick={() => setActiveIndex(idx)}
                  className="animate-header group cursor-pointer flex items-center gap-4 w-fit"
                >
                  <h3
                    className={`transition-all duration-500 font-bold tracking-tight ${
                      isActive
                        ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white pl-4 border-l-4 border-[var(--lime)] drop-shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
                        : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/25 hover:text-white/70 pl-0 border-l-4 border-transparent"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom Left: Rotating Award Badge & Active Project Category Pills */}
          <div className="animate-header flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
            {/* Rotating Circular Award Badge */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-full h-full animate-spin"
                style={{ animationDuration: "20s" }}
                viewBox="0 0 100 100"
              >
                <path
                  id="awardPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-mono uppercase tracking-[0.16em] fill-white/70 font-semibold">
                  <textPath href="#awardPath">
                    • WEBSITE OF THE DAY • AWARDED •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-xs font-mono text-[var(--lime)] tracking-tighter">
                  MERN
                </span>
              </div>
            </div>

            {/* Category Pills & Live Button */}
            <div className="flex flex-wrap items-center gap-2.5">
              {activeProject.category.split(" · ").map((tag, i) => (
                <span
                  key={i}
                  className="border border-white/20 rounded-full px-5 py-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/90 bg-white/[0.03] backdrop-blur-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--lime)] rounded-full px-5 py-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-black font-bold bg-[var(--lime)] hover:bg-white transition-all shadow-[0_0_20px_rgba(201,226,101,0.4)] flex items-center gap-1.5 active:scale-95"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: EPIC TABLET MOCKUP IN ROCKY TERRAIN & YEAR ── */}
        <div className="col-span-1 lg:col-span-7 relative flex items-center justify-center py-10 sm:py-16">
          
          <div ref={tabletRef} className="relative w-full max-w-[760px] flex items-center justify-center">
            
            {/* Ambient Behind-Tablet Glows */}
            <div className="absolute w-[85%] h-[75%] bg-[var(--lime)]/15 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute w-[65%] h-[55%] bg-pink-500/10 rounded-full blur-[90px] pointer-events-none translate-y-12" />

            {/* Tablet Mockup Frame */}
            <div className="relative w-full aspect-[16/10] bg-[#141417] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-3 sm:p-4 md:p-5 border border-white/20 shadow-[0_35px_100px_rgba(0,0,0,0.95),_0_0_60px_rgba(201,226,101,0.08)] transform -rotate-1 hover:rotate-0 transition-all duration-700 ease-out z-20 group">
              
              {/* Tablet Top Camera Dot & Sensors */}
              <div className="absolute top-1.5 sm:top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20 shadow-inner" />
                <div className="w-1 h-1 rounded-full bg-white/10" />
              </div>

              {/* Tablet Screen Viewport */}
              <div className="relative w-full h-full rounded-[16px] sm:rounded-[22px] md:rounded-[28px] overflow-hidden bg-[#08080a] border border-white/10">
                
                {/* Render All Project Images with Crossfade */}
                {projects.map((proj, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <div
                      key={proj.slug}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isCurrent
                          ? "opacity-100 scale-100 z-10 pointer-events-auto"
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={proj.image}
                        alt={proj.imageAlt || proj.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 850px"
                        className="object-cover object-top transition-transform duration-[5s] ease-out group-hover:scale-105 group-hover:object-bottom"
                        priority={idx === 0}
                      />

                      {/* Dark Gradient Overlay at screen bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-70 pointer-events-none" />

                      {/* Quick Tech Stack Pills inside screen */}
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pointer-events-none text-white font-mono text-[10px] sm:text-xs z-20">
                        <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[var(--lime)] font-semibold shadow-lg">
                          {proj.category.split(" · ")[0]}
                        </span>
                        <div className="hidden sm:flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                          {proj.techStack.slice(0, 3).map((tech, tIdx) => (
                            <span key={tIdx} className="text-white/80">
                              {tech}{tIdx < 2 ? " · " : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Realistic Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none z-30" />
              </div>
            </div>

            {/* ── REALISTIC DARK VOLCANIC ROCKS / TERRAIN SILHOUETTE ── */}
            {/* Recreates the Davies theme terrain framing around the tablet */}
            <div className="absolute -bottom-20 -left-16 -right-16 sm:-bottom-24 sm:-left-24 sm:-right-24 h-56 sm:h-72 md:h-96 pointer-events-none z-30 overflow-hidden">
              <svg
                className="w-full h-full object-cover text-[#0d0d0f]"
                viewBox="0 0 1200 400"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <defs>
                  <linearGradient id="rockGradBack" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1c1c22" />
                    <stop offset="35%" stopColor="#121216" />
                    <stop offset="100%" stopColor="#0d0d0f" />
                  </linearGradient>
                  <linearGradient id="rockGradFront" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25252d" />
                    <stop offset="50%" stopColor="#15151a" />
                    <stop offset="100%" stopColor="#0d0d0f" />
                  </linearGradient>
                </defs>
                {/* Back Peaks */}
                <path
                  d="M0 400 L0 230 L110 160 L240 260 L370 120 L510 210 L670 80 L840 230 L990 120 L1110 190 L1200 140 L1200 400 Z"
                  fill="url(#rockGradBack)"
                  opacity="0.95"
                />
                {/* Front Jagged Rocks with Highlight Rim */}
                <path
                  d="M0 400 L0 300 L90 240 L180 320 L310 190 L440 280 L590 150 L770 300 L910 190 L1050 270 L1200 210 L1200 400 Z"
                  fill="url(#rockGradFront)"
                />
                {/* Foreground Volcanic Shadow */}
                <path
                  d="M0 400 L0 350 L140 310 L270 360 L470 260 L640 340 L830 250 L1010 330 L1200 290 L1200 400 Z"
                  fill="#0d0d0f"
                />
              </svg>
              {/* Subtle top rim light on rocks */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-85" />
            </div>

            {/* ── HUGE YEAR TYPOGRAPHY (Davies Pink Accent Style) ── */}
            <div className="absolute -bottom-8 -right-2 sm:-right-6 md:-right-10 z-40 select-none pointer-events-none">
              <div className="font-outfit font-black text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] leading-none tracking-tighter flex items-baseline drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
                <span className="text-white">{yearFirstPart}</span>
                <span className="text-[#ff2a85]">{yearSecondPart}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── BOTTOM CONTROLS: ← PREV   /   NEXT → ── */}
      <div className="relative z-40 max-w-[1600px] mx-auto px-6 flex items-center justify-center gap-8 sm:gap-16 mt-16 sm:mt-24 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70">
        
        <button
          onClick={prevProject}
          aria-label="Previous project"
          className="flex items-center gap-3 hover:text-[var(--lime)] active:scale-95 transition-all group py-2 px-4 cursor-pointer"
        >
          <span className="group-hover:-translate-x-1.5 transition-transform duration-300 font-bold">←</span>
          <span>PREV</span>
        </button>

        <div className="flex items-center gap-2 text-white/40 font-mono text-xs bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/10">
          <span className="text-[var(--lime)] font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>

        <button
          onClick={nextProject}
          aria-label="Next project"
          className="flex items-center gap-3 hover:text-[var(--lime)] active:scale-95 transition-all group py-2 px-4 cursor-pointer"
        >
          <span>NEXT</span>
          <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold">→</span>
        </button>

      </div>
    </section>
  );
}
