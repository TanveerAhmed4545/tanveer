"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about, profile } from "@/data/portfolio.data";
import { MapPin, Sparkles, Code2, Globe } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Reveal Bento Cards
    const cards = gsap.utils.toArray('.bento-card');
    
    gsap.fromTo(cards, 
      { 
        y: 60, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

    // Hover effect setup for cards (subtle scale)
    cards.forEach((card: any) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full bg-[#050505] overflow-hidden py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[var(--lime)] text-sm tracking-[0.2em] uppercase block mb-4">01 · About</span>
          <h2 className="text-4xl md:text-6xl font-outfit font-black text-white tracking-tighter uppercase">
            The <span className="text-white/40">Architect.</span>
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* CARD 1: Portrait (Spans 2 rows on Desktop) */}
          <div className="bento-card group relative col-span-1 md:row-span-2 flex flex-col justify-end min-h-[400px] md:min-h-full rounded-[32px] overflow-hidden bg-white/5 border border-white/10 p-8 shadow-2xl">
            <Image 
              src="/pic2.jpeg" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" 
              alt="Tanveer Ahmed - About" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-white mb-4 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-[var(--lime)]" />
                Senior Web Developer
              </span>
              <h3 className="text-3xl font-outfit font-bold text-white tracking-tight leading-none">
                {profile.firstName} {profile.lastName}
              </h3>
            </div>
          </div>

          {/* CARD 2: The Manifesto (Spans 2 columns on Desktop) */}
          <div className="bento-card col-span-1 md:col-span-2 flex flex-col justify-center rounded-[32px] bg-white/[0.03] border border-white/10 p-10 lg:p-14 shadow-xl">
            <h3 className="text-2xl md:text-4xl font-playfair font-bold text-white mb-6">
              {about.opening}
            </h3>
            <div className="flex flex-col gap-5">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg text-white/70 font-geist leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* CARD 3: Tech Stack */}
          <div className="bento-card col-span-1 flex flex-col justify-between rounded-[32px] bg-white/[0.03] border border-white/10 p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Code2 className="w-48 h-48 text-[var(--lime)]" />
            </div>
            <h4 className="text-lg font-mono text-white/60 tracking-widest uppercase mb-8">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 relative z-10">
              {['React', 'Node.js', 'MongoDB', 'Shopify', 'Squarespace', 'Wix'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-[var(--lime)]/10 text-[var(--lime)] font-mono text-xs uppercase tracking-wider border border-[var(--lime)]/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 4: Location & Status */}
          <div className="bento-card col-span-1 flex flex-col justify-between rounded-[32px] bg-white/[0.03] border border-white/10 p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Globe className="w-48 h-48 text-[var(--lime)]" />
            </div>
            <h4 className="text-lg font-mono text-white/60 tracking-widest uppercase mb-8">
              Base
            </h4>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold font-outfit text-lg">{profile.location}</span>
                  <span className="text-white/50 text-xs font-mono">{profile.coordinates.lat}, {profile.coordinates.lng}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/20 w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
                </span>
                <span className="text-[#22c55e] text-xs font-mono font-bold tracking-wider uppercase">
                  {profile.status}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
