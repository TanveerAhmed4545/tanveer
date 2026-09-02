"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio.data";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-registry";

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate Header
    gsap.fromTo(".experience-header", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 85%",
        }
      }
    );

    // Animate timeline items individually
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden py-20 md:py-32"
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col px-6 md:px-12">
        
        {/* Chapter Header */}
        <div className="experience-header flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 mb-20 opacity-0">
          <div>
            <span className="font-mono text-primary text-sm tracking-[0.2em] uppercase block mb-4">03 · JOURNEY</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground tracking-tighter">
              The Path <span className="text-muted-foreground italic">So Far</span>.
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/tanveerahmed45/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 font-mono text-xs tracking-widest text-foreground/80 uppercase flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-2 py-1 -mr-2"
          >
            FULL RÉSUMÉ ON LINKEDIN
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border ml-4 md:ml-8 space-y-24 pb-12">
          {experience.map((exp, i) => (
            <article
              key={exp.number}
              className="timeline-item relative pl-10 md:pl-20 group opacity-0"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] bg-background border-2 border-border rounded-full group-hover:border-primary group-hover:bg-primary transition-all shadow-[0_0_15px_rgba(255,87,34,0)] group-hover:shadow-[0_0_15px_rgba(255,87,34,0.5)]" />
              
              {/* Timeline Connector Glow */}
              <div className="absolute top-[9px] -left-[1px] w-[2px] h-0 bg-gradient-to-b from-primary to-transparent group-hover:h-32 transition-all duration-700 ease-out" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Meta */}
                <div className="md:col-span-4 flex flex-col pt-1">
                  <span className="font-mono text-primary text-[10px] tracking-[0.2em] uppercase mb-2">
                    {exp.period}
                  </span>
                  <h4 className="font-sans text-xl text-foreground font-semibold">
                    {exp.company}
                  </h4>
                  <span className="font-mono text-muted-foreground text-xs mt-1">
                    {exp.location}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-8 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-foreground tracking-tight mb-4 group-hover:text-foreground/80 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-widest text-foreground/80 border border-border px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
