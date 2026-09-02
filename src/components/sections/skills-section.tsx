"use client";

import { useRef } from "react";
import { services } from "@/data/portfolio.data";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-registry";
import { ArrowRight, LayoutTemplate, Code2, Database, Search, SplitSquareHorizontal, Sparkles, PenTool, Palette, Layers, BookOpen, CodeXml, MonitorSmartphone, Server, Cloud, Settings2, Smartphone, Cpu, Rocket, LineChart, ShoppingCart, Layout } from "lucide-react";

const iconMap: Record<string, any> = {
  LayoutTemplate, Code2, Database, Search, SplitSquareHorizontal,
  Sparkles, PenTool, Palette, Layers, BookOpen,
  CodeXml, MonitorSmartphone, Server, Cloud, Settings2,
  Smartphone, Cpu, Rocket, LineChart, ShoppingCart, Layout
};

export function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Animate Header
    gsap.fromTo(".services-header", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        }
      }
    );

    // Headline word-by-word reveal
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".headline-word-inner");
      if (words.length > 0) {
        gsap.fromTo(words, 
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 1.0,
            ease: "power4.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
            }
          }
        );
      }
    }

    // Animate grid items
    const cards = gsap.utils.toArray('.service-card');
    cards.forEach((card: any, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });

  }, { scope: containerRef });

  const headlineContent = [
    { text: "Full-stack", highlight: false },
    { text: "expertise", highlight: true },
    { text: ".", highlight: true, nospace: true },
    { text: "One", highlight: false },
    { text: "developer.", highlight: false }
  ];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative flex flex-col items-center justify-center bg-background overflow-hidden py-24 md:py-32"
    >
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--lime)]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Content Starts Here */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col px-6 md:px-12">
        
        {/* Section Eyebrow */}
        <div className="services-header mb-8 md:mb-12">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-muted-foreground/40 block" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [03] SERVICES / WHAT WE DO
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <h2
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground tracking-tighter leading-[1.05] flex flex-wrap mb-16 md:mb-24"
        >
          {headlineContent.map((item, i) => (
            <span
              key={i}
              className={`inline-block overflow-hidden ${item.nospace ? "" : "mr-[0.25em]"} ${item.highlight ? "font-serif italic text-[var(--lime)]" : ""}`}
            >
              <span className="headline-word-inner inline-block will-change-transform">
                {item.text}
              </span>
            </span>
          ))}
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, idx) => {
            const MainIcon = iconMap[service.icon] || LayoutTemplate;
            
            return (
              <div 
                key={idx} 
                className="service-card group relative flex flex-col justify-between p-8 md:p-12 rounded-sm border border-white/5 bg-[#111111]/80 hover:bg-[#151515] transition-all duration-500 overflow-hidden"
              >
                {/* Subtle gradient glow inside card on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--lime)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Animated 0-to-100 Border Trace */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 rounded-sm" xmlns="http://www.w3.org/2000/svg">
                  <rect 
                    x="0" y="0" 
                    width="100%" height="100%" 
                    rx="2" ry="2" 
                    fill="none" 
                    stroke="var(--lime)" 
                    strokeWidth="2" 
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[stroke-dashoffset:0]" 
                  />
                </svg>

                {/* Top Section: Icon & Number */}
                <div className="flex justify-between items-start mb-16 md:mb-24 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-sm border border-white/10 flex items-center justify-center bg-black/50 text-[var(--lime)] group-hover:scale-110 group-hover:bg-[var(--lime)]/10 transition-all duration-500">
                    <MainIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-mono text-6xl md:text-8xl font-bold text-transparent tracking-tighter select-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                    {service.number}
                  </span>
                </div>

                {/* Middle Section: Title & Description */}
                <div className="mb-12 md:mb-16 relative z-10">
                  <h3 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4 group-hover:text-[var(--lime)] transition-colors duration-500 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Tags & Arrow */}
                <div className="flex items-end justify-between mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2 max-w-[85%]">
                    {service.tags.map((tag, tagIndex) => {
                      const TagIcon = iconMap[tag.icon] || Code2;
                      return (
                        <div key={tagIndex} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-white/10 bg-black/40 text-[9px] md:text-[10px] font-mono tracking-widest text-muted-foreground uppercase group-hover:border-white/20 transition-colors duration-300">
                          <TagIcon className="w-3 h-3 text-[var(--lime)]" />
                          {tag.label}
                        </div>
                      );
                    })}
                  </div>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-[var(--lime)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
