"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-registry";
import { stats } from "@/data/portfolio.data";

/**
 * Animated metric counter
 */
function MetricCounter({ value, suffix }: { value: number; suffix: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      },
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = String(Math.round(obj.val));
        }
      }
    });
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className="text-6xl md:text-8xl font-playfair font-bold text-foreground tabular-nums">
      <span ref={numRef}>0</span>
      <span className="text-primary text-4xl md:text-6xl">{suffix}</span>
    </span>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate Header
    gsap.fromTo(".stats-header", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-header",
          start: "top 85%",
        }
      }
    );

    // Animate stat cards
    const items = gsap.utils.toArray('.stat-card');
    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="stats"
      className="relative flex flex-col items-center justify-center min-h-[60vh] bg-background overflow-hidden py-20 md:py-32 px-6 md:px-12"
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col">
        
        {/* Chapter Header */}
        <div className="stats-header flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-6 mb-16 opacity-0">
          <span className="font-mono text-primary text-sm tracking-[0.2em] uppercase">02 · NUMBERS</span>
          <span className="font-mono text-muted-foreground text-[10px] tracking-widest mt-2 md:mt-0">METRICS THAT MATTER</span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card opacity-0 group bg-card p-8 md:p-10 flex flex-col justify-between hover:bg-muted transition-colors"
            >
              <MetricCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-8 font-mono text-xs tracking-[0.2em] uppercase text-primary">
                {stat.label}
              </div>
              <div className="mt-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
