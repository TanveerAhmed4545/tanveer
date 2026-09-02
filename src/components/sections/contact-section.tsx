"use client";

import { useRef } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio.data";
import { Magnetic } from "@/components/base/magnetic";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-registry";

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  const contactLinks = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
      icon: ArrowUpRight,
      external: true,
    },
    {
      label: "GitHub",
      value: profile.githubHandle,
      href: profile.github,
      icon: ArrowUpRight,
      external: true,
    },
  ];

  useGSAP(() => {
    // Shared scroll trigger settings
    const stConfig = {
      start: "top 85%",
    };

    gsap.fromTo(".contact-header", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".contact-header", ...stConfig } }
    );

    gsap.fromTo(".contact-title", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".contact-title", ...stConfig } }
    );

    gsap.fromTo(".contact-status", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".contact-status", ...stConfig } }
    );

    const items = gsap.utils.toArray('.contact-link');
    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-links-grid",
            ...stConfig
          }
        }
      );
    });

    gsap.fromTo(".contact-cta", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power3.out", scrollTrigger: { trigger: ".contact-cta", ...stConfig } }
    );

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-[90vh] bg-background overflow-hidden py-20 md:py-32"
    >
      {/* Background — large faded name */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
        aria-hidden
      >
        <span
          className="select-none font-sans font-bold leading-none text-foreground/[0.02]"
          style={{ fontSize: "clamp(8rem, 30vw, 28rem)" }}
        >
          {profile.lastName?.toUpperCase()}
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col px-6 md:px-12">
        
        {/* Chapter Header */}
        <div className="contact-header flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 mb-12 md:mb-20 opacity-0">
          <span className="font-mono text-primary text-sm tracking-[0.2em] uppercase block mb-2 md:mb-0">06 · CONTACT</span>
          <span className="font-mono text-muted-foreground text-[10px] tracking-widest mt-2 md:mt-0 uppercase">Ready for the next build?</span>
        </div>

        {/* Big CTA */}
        <div className="contact-title mb-12 md:mb-16 max-w-4xl opacity-0">
          <h2 className="text-4xl md:text-8xl font-sans font-bold text-foreground tracking-tighter mb-6 md:mb-8">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground/50">something great.</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-xl">
            Currently open to full-time roles, freelance Shopify/Squarespace projects, and technical collaborations. Drop a message—I usually reply within hours.
          </p>
        </div>

        {/* Status + location */}
        <div className="contact-status mb-16 flex flex-wrap items-center gap-8 opacity-0">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/80">
              {profile.status}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/80">
              {profile.location}
            </span>
          </div>
        </div>

        {/* Contact links grid */}
        <div className="contact-links-grid grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-3 rounded-xl overflow-hidden mb-16">
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="contact-link opacity-0 group flex flex-col gap-4 bg-card p-8 md:p-10 transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              suppressHydrationWarning
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <link.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <span className="font-sans text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                {link.value}
              </span>
            </a>
          ))}
        </div>

        {/* Primary CTA button */}
        <div className="contact-cta opacity-0">
          <Magnetic strength={30}>
            <a
              href={`mailto:${profile.email}`}
              className="group relative inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground font-bold overflow-hidden transition-all hover:pr-10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm active:scale-95"
              suppressHydrationWarning
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
