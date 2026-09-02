"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio.data";
import { Magnetic } from "@/components/base/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const offset = window.innerHeight * 0.35;
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border" : "py-8"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6">
          {/* Logo */}
          <Magnetic strength={20}>
            <a
              href="#hero"
              className="font-sans text-xl font-bold tracking-tighter text-white uppercase focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm"
              aria-label="Tanveer Ahmed — home"
            >
              <span className="flex items-baseline gap-1">
                <span>Tanveer</span>
                <span className="text-primary">.</span>
              </span>
            </a>
          </Magnetic>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Magnetic key={link.href} strength={20}>
                  <a
                    href={link.href}
                    className={`font-mono text-[10px] uppercase tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-2 py-1 -ml-2 ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </Magnetic>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Magnetic strength={40}>
              <a
                href="#contact"
                className="hidden items-center gap-3 bg-primary px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground font-bold transition-all active:scale-95 hover:bg-white md:inline-flex focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                Let's Talk
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center text-white md:hidden hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm active:scale-95"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background text-foreground md:hidden">
          <div className="flex flex-1 flex-col justify-center px-8">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-5xl font-bold tracking-tighter text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-2 -mx-2"
                  style={{
                    animation: `heroWordIn 0.5s cubic-bezier(0.76,0,0.24,1) ${i * 0.06}s both`,
                  }}
                >
                  <span className="font-mono text-sm text-primary mr-4 font-normal tracking-widest">0{i + 1}</span>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-16 border-t border-border pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Get in touch</p>
              <a
                href={profile.email ? `mailto:${profile.email}` : "#contact"}
                className="font-serif italic text-2xl text-foreground/80 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm"
              >
                {profile.email}
              </a>
              <div className="mt-8 flex gap-6">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1 -mx-1"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1 -mx-1"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
