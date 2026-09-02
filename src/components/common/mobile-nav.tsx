"use client";

import { useEffect, useState } from "react";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import gsap from "gsap";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: FolderGit2, label: "Work" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function MobileNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    // Simple intersection observer for the major sections
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

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Pop-in animation on mount
  useEffect(() => {
    gsap.fromTo(".mobile-nav-container", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 1 }
    );
  }, []);

  return (
    <nav className="mobile-nav-container fixed bottom-6 left-1/2 -translate-x-1/2 z-30 lg:hidden w-[90%] max-w-sm">
      <div className="flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border border-border rounded-full shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative group flex flex-col items-center justify-center gap-1 tap-highlight-transparent"
              aria-label={item.label}
            >
              <div 
                className={`flex items-center justify-center transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "-translate-y-1" : ""}`} />
              </div>
              
              {/* Active Dot Indicator */}
              <div 
                className={`absolute -bottom-2 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
