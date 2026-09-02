"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const chapters = [
  { id: "hero", num: "00", label: "START" },
  { id: "stats", num: "01", label: "NUMBERS" },
  { id: "about", num: "02", label: "ABOUT" },
  { id: "experience", num: "03", label: "JOURNEY" },
  { id: "projects", num: "04", label: "WORK" },
  { id: "skills", num: "05", label: "SKILLS" },
  { id: "contact", num: "06", label: "CONTACT" },
];

export function RightNav() {
  const [activeId, setActiveId] = useState("hero");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update indicator position
  useEffect(() => {
    const activeIndex = chapters.findIndex(c => c.id === activeId);
    const activeElement = itemsRef.current[activeIndex];
    if (activeElement && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        y: activeElement.offsetTop,
        duration: 0.5,
        ease: "power3.out"
      });
    }
  }, [activeId]);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block mix-blend-difference text-white">
      <ul className="flex flex-col gap-6 relative">
        {/* Track Line */}
        <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-white/10 -z-10" />

        {/* Global Floating Indicator */}
        <div 
          ref={indicatorRef}
          className="absolute left-0 w-4 h-4 rounded-full border border-primary pointer-events-none"
          style={{ top: 0 }}
        />

        {chapters.map((ch, index) => {
          const isActive = activeId === ch.id;
          return (
            <li 
              key={ch.id} 
              className="relative group"
              ref={el => { itemsRef.current[index] = el }}
            >
              <a 
                href={`#${ch.id}`}
                className={`flex items-center gap-4 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(ch.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Number Point */}
                <div className="relative flex items-center justify-center w-4 h-4">
                  <div className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-primary scale-150" : "bg-foreground"}`} />
                </div>

                {/* Text Label */}
                <div className="flex flex-col">
                  <span className={`text-[10px] font-mono font-bold transition-all duration-300 ${isActive ? "text-primary" : "text-foreground/60"}`}>
                    {ch.num}
                  </span>
                  <span className={`text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? "text-foreground translate-x-1" : "text-foreground/0 -translate-x-4 opacity-0 group-hover:text-foreground/60 group-hover:translate-x-0 group-hover:opacity-100"}`}>
                    {ch.label}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
