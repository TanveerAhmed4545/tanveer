"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { profile, projects } from "@/data/portfolio.data";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-registry";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Code2, Rocket, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export function HeroBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance project card every 4.5 seconds when not hovered
  useEffect(() => {
    if (isHovered || projects.length <= 1) return;
    const timer = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextProject = useCallback(() => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial State Setup
    gsap.set(".hero-reveal", { y: 30, opacity: 0 });
    gsap.set(".hero-heading", { x: -30, opacity: 0 });
    gsap.set(".hero-image", { y: 50, scale: 0.95, opacity: 0 });

    // Reveal Sequence
    tl.to(".hero-heading", {
      x: 0,
      opacity: 1,
      duration: 1.2,
    })
      .to(".hero-image", {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
      }, "-=0.8")
      .to(".hero-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
      }, "-=1.0");

  }, { scope: containerRef });

  const currentProject = projects[activeProjectIndex] || projects[0];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-[100dvh] w-full bg-background overflow-hidden z-10"
    >
      {/* Split Backgrounds (Full Width) */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
        <div className="bg-primary/5 lg:bg-primary/10 border-r border-border/10 w-full h-full"></div>
        <div className="bg-background w-full h-full hidden lg:block"></div>
      </div>

      {/* Global Noise */}
      <div className="global-noise opacity-20 pointer-events-none absolute inset-0 z-50 mix-blend-overlay" />

      {/* Max-Width Container */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative flex flex-col justify-center px-6 pt-24 sm:pt-32 pb-[52vh] sm:pb-[45vh] lg:pb-0 lg:py-0">
          <div className="space-y-8 lg:space-y-16">
            {/* Main Heading */}
            <h1 className="hero-heading text-[12vw] min-[400px]:text-[3.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem] font-display font-extrabold leading-[0.85] tracking-tighter drop-shadow-md text-foreground inline-block">
              SOFTWARE<br />ENGINEER
            </h1>

            {/* Content Block */}
            <div className="hero-reveal space-y-8 max-w-[320px] sm:max-w-sm relative z-40">
              <p className="font-sans text-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                I am a Senior Web Developer specializing in React, Next.js, and modern full-stack architectures.
              </p>

              <Button asChild size="lg" className="rounded-full font-medium h-12 lg:h-14 px-8 bg-foreground text-background hover:bg-foreground/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <Link href="#projects">
                  View Work <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <div className="flex items-center gap-4 pt-2 lg:pt-4">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center shadow-sm">
                    <Star className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center shadow-sm">
                    <Code2 className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center shadow-sm">
                    <Rocket className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                  </div>
                </div>
                <p className="text-[10px] lg:text-xs text-muted-foreground max-w-[130px] leading-tight font-medium">
                  Trusted by forward thinking brands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative hidden lg:flex flex-col px-16 lg:pt-12 lg:pb-24 lg:py-0 lg:justify-center h-full">

          <div className="hero-reveal lg:absolute lg:top-50 lg:left-40 xl:left-50 max-w-sm space-y-4 lg:space-y-6 z-40">
            <div className="inline-flex items-center gap-3">
              <span className="font-mono text-xs lg:text-sm tracking-widest text-primary font-bold uppercase">Available For</span>
              <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.25rem] font-display font-medium text-foreground leading-snug max-w-sm">
              Building robust, scalable applications that solve real problems.
            </h2>
          </div>

          {/* Small Feature Card - Functional Interactive Project Showcase */}
          <div
            className="hero-reveal hidden sm:block lg:absolute lg:right-0 lg:bottom-16 mt-8 lg:mt-0 w-full max-w-[250px] lg:max-w-[290px] bg-secondary/30 hover:bg-secondary/40 backdrop-blur-xl border border-border/60 rounded-[1.75rem] p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-40 transition-all duration-300 group/card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Thumbnail Image Container with Quick Navigation */}
            <div className="relative aspect-[16/10] rounded-[1.2rem] overflow-hidden mb-3.5 bg-background/80 border border-border/40 group">
              <Link
                href={currentProject.liveUrl || "#projects"}
                target={currentProject.liveUrl ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block relative w-full h-full cursor-pointer"
              >
                <Image
                  key={currentProject.slug}
                  src={currentProject.image}
                  alt={currentProject.name}
                  fill
                  className="object-cover transition-all duration-700 ease-out hover:scale-105"
                  sizes="290px"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Category badge */}
                <div className="absolute top-2.5 left-2.5 z-20">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono uppercase tracking-wider text-primary font-semibold">
                    {currentProject.category.split(" · ")[0]}
                  </span>
                </div>

                {/* External Link Icon on Hover */}
                <div className="absolute top-2.5 right-2.5 z-20 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
              </Link>

              {/* Prev / Next navigation buttons on card image */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevProject();
                }}
                aria-label="Previous project"
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:scale-110 active:scale-95 transition-all z-30 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextProject();
                }}
                aria-label="Next project"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:scale-110 active:scale-95 transition-all z-30 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Project Title & Counter */}
            <div className="flex items-center justify-between px-1.5 mb-3">
              <Link
                href={currentProject.liveUrl || "#projects"}
                target={currentProject.liveUrl ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="font-medium text-xs lg:text-sm text-foreground hover:text-primary transition-colors truncate max-w-[190px]"
                title={currentProject.name}
              >
                {currentProject.name}
              </Link>
              <span className="text-[10px] font-mono text-muted-foreground font-semibold">
                {String(activeProjectIndex + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* Functional Indicator Dots */}
            <div className="flex gap-1.5 justify-center items-center pb-1">
              {projects.map((proj, idx) => {
                const isActive = idx === activeProjectIndex;
                return (
                  <button
                    key={proj.slug}
                    onClick={() => setActiveProjectIndex(idx)}
                    aria-label={`View ${proj.name}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${isActive
                      ? "w-6 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.6)]"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Center Absolute Image */}
      <div className="hero-image absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] sm:w-[90%] md:w-[70%] lg:w-[45%] xl:w-[40%] h-[50vh] sm:h-[60vh] lg:h-[85vh] z-30 pointer-events-none flex items-end justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/pic5.png"
            alt={profile.name || "Portrait"}
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] contrast-110 saturate-[1.1]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

    </section>
  );
}
