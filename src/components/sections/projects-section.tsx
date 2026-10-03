"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio.data";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-registry";

const DURATION = 7000; // 7s per slide

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const tabletFrameRef = useRef<HTMLDivElement>(null);

  // GSAP quickTo functions for 60-120 FPS hardware-accelerated mouse tilt
  const quickRotateX = useRef<((value: number) => void) | null>(null);
  const quickRotateY = useRef<((value: number) => void) | null>(null);
  const tabletRect = useRef<DOMRect | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(true);
  const [isTabletHovered, setIsTabletHovered] = useState(false);
  const [filter, setFilter] = useState<"Shopify" | "Squarespace" | "Custom">("Squarespace");

  const filteredProjects = projects.filter((project) => {
    const categoryLower = project.category.toLowerCase();
    if (filter === "Shopify") return categoryLower.includes("shopify");
    if (filter === "Squarespace") return categoryLower.includes("squarespace");
    if (filter === "Custom") return !categoryLower.includes("shopify") && !categoryLower.includes("squarespace");
    return true; // Fallback
  });

  const handleFilterChange = (newFilter: "Shopify" | "Squarespace" | "Custom") => {
    setFilter(newFilter);
    setActiveIndex(0); // Reset to first project in new filtered list
  };

  // Track section visibility to pause when out of view and save battery/CPU
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Touch coordinates for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Navigation callbacks
  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  const changeProject = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Auto-advance timer: ticks smoothly every 7s when in view and not paused on tablet screen
  useEffect(() => {
    if (!isInView || isTabletHovered || filteredProjects.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [isInView, isTabletHovered, activeIndex, filter, filteredProjects.length]);

  // Keyboard navigation support (ArrowLeft / ArrowRight)
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

  // Touch Swipe Handlers for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextProject(); // Swipe Left
    } else if (distance < -50) {
      prevProject(); // Swipe Right
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // GSAP quickTo setup for 3D mouse parallax with ZERO React re-renders
  useGSAP(() => {
    if (!containerRef.current) return;

    if (tabletFrameRef.current) {
      quickRotateX.current = gsap.quickTo(tabletFrameRef.current, "rotationX", {
        duration: 0.35,
        ease: "power2.out",
      });
      quickRotateY.current = gsap.quickTo(tabletFrameRef.current, "rotationY", {
        duration: 0.35,
        ease: "power2.out",
      });
    }

    // Eyebrow and Titles entrance animation
    const headerElements = containerRef.current.querySelectorAll(".animate-header");
    gsap.fromTo(
      headerElements,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    // Tablet entrance animation
    if (tabletRef.current) {
      gsap.fromTo(
        tabletRef.current,
        { opacity: 0, scale: 0.9, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: tabletRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tabletFrameRef.current || !quickRotateX.current || !quickRotateY.current) return;
    if (!tabletRect.current) {
      tabletRect.current = tabletFrameRef.current.getBoundingClientRect();
    }
    const rect = tabletRect.current;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    quickRotateX.current(-(y * 10));
    quickRotateY.current(x * 12);
  };

  const safeActiveIndex = activeIndex < filteredProjects.length ? activeIndex : 0;
  const activeProject = filteredProjects[safeActiveIndex] || projects[0];
  const yearString = activeProject.date.split(" ").pop() || "2026";
  const yearFirstPart = yearString.slice(0, 2);
  const yearSecondPart = yearString.slice(2);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full bg-[#0d0d0f] text-foreground py-20 sm:py-28 md:py-36 overflow-hidden select-none font-sans"
    >
      {/* Subtle Ambient Radial Glow (Hardware-accelerated radial gradients without expensive CSS blur) */}
      <div
        className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201, 226, 101, 0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255, 42, 133, 0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[700px]">
        
        {/* ── LEFT COLUMN: PROJECT SELECTOR & BRANDING (Davies Style) ── */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full py-4 z-20">
          
          {/* Top Eyebrow & Filter Tabs */}
          <div className="animate-header flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-10">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white/50" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M6 26 Q 14 14, 26 6" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                SELECTED WORKS
              </span>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md w-fit z-30">
              {(["Squarespace", "Shopify", "Custom"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilterChange(f)}
                  className={`px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all ${
                    filter === f 
                      ? "bg-[var(--lime)] text-black font-bold shadow-[0_0_15px_rgba(201,226,101,0.3)]" 
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Vertical Interactive Titles List (Zero Layout Shift) */}
          <div
            role="tablist"
            aria-label="Project list"
            className="flex flex-col gap-1 sm:gap-2 my-auto py-4"
          >
            {filteredProjects.map((project, idx) => {
              const isActive = idx === safeActiveIndex;
              return (
                <div
                  key={project.slug}
                  role="tab"
                  id={`project-tab-${idx}`}
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => changeProject(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      changeProject(idx);
                    }
                  }}
                  className="animate-header group cursor-pointer flex items-center gap-3 sm:gap-4 w-fit py-1.5 sm:py-2 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lime)] rounded-lg transition-transform active:scale-[0.98]"
                >
                  {/* Neon Lime Accent Indicator Bar */}
                  <div
                    className={`w-1 sm:w-1.5 rounded-full bg-[var(--lime)] shadow-[0_0_15px_rgba(201,226,101,0.9)] transition-all duration-300 ease-out origin-center ${
                      isActive
                        ? "h-8 sm:h-12 md:h-14 opacity-100 scale-y-100"
                        : "h-0 opacity-0 scale-y-0"
                    }`}
                  />

                  {/* Project Title with stable row & smooth glow */}
                  <h3
                    className={`font-bold tracking-tight transition-all duration-300 ease-out ${
                      isActive
                        ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-[0_4px_25px_rgba(255,255,255,0.2)] pl-1"
                        : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/30 hover:text-white/75 pl-0"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom Left: Tagline, Award Badge & Action Buttons */}
          <div className="animate-header flex flex-col gap-6 mt-8 sm:mt-12 pt-6 border-t border-white/10">
            {/* Project Tagline */}
            <p className="text-white/70 text-xs sm:text-sm font-sans max-w-lg leading-relaxed transition-opacity duration-300 line-clamp-2">
              {activeProject.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              {/* Rotating Circular Award Badge */}
              <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center flex-shrink-0 group/badge">
                <svg
                  className="w-full h-full animate-spin group-hover/badge:[animation-play-state:paused]"
                  style={{ animationDuration: "20s" }}
                  viewBox="0 0 100 100"
                >
                  <path
                    id="awardPath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-mono uppercase tracking-[0.16em] fill-white/70 font-semibold">
                    <textPath href="#awardPath">
                      • WEBSITE OF THE DAY • AWARDED •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-[10px] sm:text-[11px] font-mono text-[var(--lime)] tracking-tighter">
                    {activeProject.category.toLowerCase().includes("shopify") 
                      ? "SHOPIFY" 
                      : activeProject.category.toLowerCase().includes("squarespace") 
                        ? "SQSPACE" 
                        : "MERN"}
                  </span>
                </div>
              </div>

              {/* Category Pills & Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                {activeProject.category.split(" · ").map((tag, i) => (
                  <span
                    key={i}
                    className="border border-white/20 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/90 bg-white/[0.03] backdrop-blur-sm shadow-sm transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}

                {/* Live Site Button */}
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--lime)] rounded-full px-5 py-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-black font-bold bg-[var(--lime)] hover:bg-white hover:border-white transition-all shadow-[0_0_25px_rgba(201,226,101,0.45)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] flex items-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  <span>Live Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* GitHub Code Button (if repo exists) */}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 rounded-full px-4 py-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/90 hover:text-white font-semibold bg-white/5 hover:bg-white/15 hover:border-white/40 transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                    title="View Source Code on GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: EPIC TABLET MOCKUP IN ROCKY TERRAIN & YEAR ── */}
        <div
          className="col-span-1 lg:col-span-7 relative flex items-center justify-center py-8 sm:py-14"
          onMouseEnter={() => {
            if (tabletFrameRef.current) {
              tabletRect.current = tabletFrameRef.current.getBoundingClientRect();
            }
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            quickRotateX.current?.(0);
            quickRotateY.current?.(0);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          <div ref={tabletRef} className="relative w-full max-w-[760px] flex items-center justify-center [perspective:1200px]">
            
            {/* Ambient Behind-Tablet Glows (Zero-blur radial gradients) */}
            <div
              className="absolute w-[85%] h-[75%] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(201, 226, 101, 0.12) 0%, transparent 65%)" }}
            />
            <div
              className="absolute w-[65%] h-[55%] rounded-full pointer-events-none translate-y-12"
              style={{ background: "radial-gradient(circle, rgba(255, 42, 133, 0.08) 0%, transparent 65%)" }}
            />

            {/* Tablet Mockup Frame with GSAP quickTo 3D Tilt */}
            <div
              ref={tabletFrameRef}
              style={{
                transform: "rotate(-1deg)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              className="relative w-full aspect-[16/10] bg-[#141417] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-3 sm:p-4 md:p-5 border border-white/20 shadow-[0_35px_100px_rgba(0,0,0,0.95),_0_0_60px_rgba(201,226,101,0.08)] z-20 group/tablet"
            >
              
              {/* Tablet Top Camera Dot & Sensors */}
              <div className="absolute top-1.5 sm:top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30 pointer-events-none">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/25 shadow-inner" />
                <div className="w-1 h-1 rounded-full bg-white/10" />
              </div>

              {/* Tablet Screen Viewport as Clickable Link */}
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${activeProject.name} Live Site`}
                onMouseEnter={() => setIsTabletHovered(true)}
                onMouseLeave={() => setIsTabletHovered(false)}
                className="relative block w-full h-full rounded-[16px] sm:rounded-[22px] md:rounded-[28px] overflow-hidden bg-[#08080a] border border-white/10 cursor-pointer group/screen"
              >
                
                {/* Render All Project Images with Crossfade and Auto Image Scroll */}
                {filteredProjects.map((proj, idx) => {
                  const isCurrent = idx === safeActiveIndex;
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
                        key={`${proj.slug}-${isCurrent ? "active" : "inactive"}`}
                        src={proj.image}
                        alt={proj.imageAlt || proj.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 850px"
                        className={`object-cover ${isCurrent ? "animate-project-scroll" : "object-top"}`}
                        priority={idx === 0}
                      />

                      {/* Dark Gradient Overlay at screen bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-70 pointer-events-none" />

                      {/* Quick Tech Stack Pills inside screen */}
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pointer-events-none text-white font-mono text-[10px] sm:text-xs z-20">
                        <span className="bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[var(--lime)] font-semibold shadow-lg">
                          {proj.category.split(" · ")[0]}
                        </span>
                        <div className="hidden sm:flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
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

                {/* Floating "View Live Site" Overlay on Screen Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 z-30 pointer-events-none bg-black/30 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[var(--lime)] text-[var(--lime)] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(201,226,101,0.5)] transform translate-y-2 group-hover/screen:translate-y-0 transition-transform duration-300">
                    <span>VISIT LIVE SITE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Realistic Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none z-25" />
              </a>
            </div>

            {/* ── REALISTIC DARK VOLCANIC ROCKS / TERRAIN SILHOUETTE ── */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-85" />
            </div>

            {/* ── HUGE YEAR TYPOGRAPHY (Davies Pink Accent Style) WITH SMOOTH SLIDE ── */}
            <div className="absolute -bottom-8 -right-2 sm:-right-6 md:-right-10 z-40 select-none pointer-events-none">
              <div
                key={yearString}
                className="animate-year-slide font-outfit font-black text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] leading-none tracking-tighter flex items-baseline drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
              >
                <span className="text-white">{yearFirstPart}</span>
                <span className="text-[#ff2a85] ml-0.5">{yearSecondPart}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── BOTTOM CONTROLS: ← PREV / INTERACTIVE DOTS / AUTO-PLAY PROGRESS / NEXT → ── */}
      <div className="relative z-40 max-w-[1600px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 mt-14 sm:mt-20 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70">
        
        {/* Left: Previous Button */}
        <button
          onClick={prevProject}
          aria-label="Previous project"
          className="flex items-center gap-3 hover:text-[var(--lime)] active:scale-95 transition-all group py-2 px-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lime)] rounded-full"
        >
          <span className="group-hover:-translate-x-1.5 transition-transform duration-300 font-bold text-base">←</span>
          <span>PREV</span>
        </button>

        {/* Center: Interactive Pills & Auto-Play Progress Bar */}
        <div className="flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2.5 bg-white/[0.04] px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            {filteredProjects.map((proj, idx) => {
              const isActive = idx === safeActiveIndex;
              return (
                <button
                  key={proj.slug}
                  onClick={() => changeProject(idx)}
                  aria-label={`Jump to ${proj.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 bg-[var(--lime)] shadow-[0_0_12px_rgba(201,226,101,0.8)]"
                      : "w-2.5 bg-white/20 hover:bg-white/50"
                  }`}
                />
              );
            })}
            <div className="ml-2 pl-2 border-l border-white/20 flex items-center gap-1 text-[11px] text-white/50">
              <span className="text-[var(--lime)] font-bold">{String(safeActiveIndex + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(filteredProjects.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Micro Progress Bar (GPU Keyframe animation, zero React re-renders) */}
          <div className="w-36 sm:w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              key={`${filter}-${safeActiveIndex}`}
              className="h-full w-full bg-[var(--lime)] shadow-[0_0_8px_rgba(201,226,101,0.8)] animate-progress-fill"
              style={{
                animationPlayState: isTabletHovered || !isInView ? "paused" : "running",
              }}
            />
          </div>
        </div>

        {/* Right: Next Button */}
        <button
          onClick={nextProject}
          aria-label="Next project"
          className="flex items-center gap-3 hover:text-[var(--lime)] active:scale-95 transition-all group py-2 px-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lime)] rounded-full"
        >
          <span>NEXT</span>
          <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold text-base">→</span>
        </button>

      </div>
    </section>
  );
}
