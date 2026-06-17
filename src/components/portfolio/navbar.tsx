"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

/**
 * Glassmorphic centered nav pill — Shehata style.
 * - Fixed at top center with backdrop blur
 * - Logo on left, links in middle, CTA on right
 * - Sliding orange indicator on active section
 * - Mobile: hamburger toggles full-screen overlay menu
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ["hero", "about", "experience", "work", "skills", "writing", "contact"];
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
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-tight text-foreground"
            aria-label="Tanveer Ahmed — home"
          >
            <span className="flex items-baseline gap-1">
              <span>Tanveer</span>
              <span className="text-[#FF5500]">.</span>
            </span>
          </a>

          {/* Desktop nav pill */}
          <nav className="nav-pill hidden items-center gap-1 px-2 py-1.5 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 bg-[#FF5500] px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-white transition-all hover:bg-[#111111] hover:text-[#FF5500] md:inline-flex"
            >
              <span className="live-dot" />
              Let's Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center bg-[#111111] text-white md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#111111] text-[#f0efeb] md:hidden">
          <div className="flex flex-1 flex-col justify-center px-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl font-bold tracking-tight text-[#f0efeb] transition-colors hover:text-[#FF5500]"
                  style={{
                    animation: `heroWordIn 0.5s cubic-bezier(0.76,0,0.24,1) ${i * 0.06}s both`,
                  }}
                >
                  <span className="font-mono text-xs text-[#FF5500]">0{i + 1}</span>
                  <span className="ml-3">{link.label}</span>
                </a>
              ))}
            </nav>
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="eyebrow-muted mb-2">Get in touch</p>
              <a
                href={profile.email ? `mailto:${profile.email}` : "#contact"}
                className="font-display text-xl text-[#f0efeb]"
              >
                {profile.email}
              </a>
              <div className="mt-4 flex gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-tag text-[#f0efeb]/70 hover:text-[#FF5500]"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-tag text-[#f0efeb]/70 hover:text-[#FF5500]"
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
