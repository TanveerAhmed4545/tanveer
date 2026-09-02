"use client";

import { useRef } from "react";
import Image from "next/image";
import { useCustomCursor } from "@/hooks/use-custom-cursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { profile } from "@/data/portfolio.data";
import { Linkedin, Mail, Github } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useCustomCursor();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Image reveal using clip-path
    tl.fromTo(".hero-image-inner", 
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "power4.inOut" }
    )
    .fromTo(".hero-img", 
      { scale: 1.5 },
      { scale: 1, duration: 1.5, ease: "power4.inOut" },
      "<"
    );

    // Text stagger reveal
    tl.fromTo(".hero-reveal-text", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
      "-=0.8"
    );
    
    // Reveal socials stagger
    if (socialsRef.current) {
      const links = socialsRef.current.querySelectorAll('a');
      tl.fromTo(links, 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.5"
      );
    }

    // Scroll Down Indicator bounce
    if (scrollIndicatorRef.current) {
      gsap.fromTo(scrollIndicatorRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, delay: 0.5 }
      );
      gsap.to(scrollIndicatorRef.current.querySelector('.bounce-line'), {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
      });
    }

    // Parallax hover effect on image
    const imageWrapper = imageRef.current;
    if (imageWrapper) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = imageWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(".hero-image-inner", {
          x: x * 0.05,
          y: y * 0.05,
          rotationY: x * 0.02,
          rotationX: -y * 0.02,
          duration: 1,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(".hero-image-inner", {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 1,
          ease: "power2.out"
        });
      };

      imageWrapper.addEventListener('mousemove', handleMouseMove);
      imageWrapper.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        imageWrapper.removeEventListener('mousemove', handleMouseMove);
        imageWrapper.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="hero" className="relative flex min-h-[100dvh] w-full flex-col lg:flex-row items-center justify-center px-6 md:px-16 overflow-hidden bg-background cursor-none z-10 pt-20 lg:pt-0">
      
      {/* Custom Circle Cursor */}
      <div 
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full z-50 mix-blend-difference hidden md:block"
      />

      {/* Left Social Links */}
      <div ref={socialsRef} className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex-col gap-6 hidden xl:flex">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="flex items-center gap-3 text-foreground/50 hover:text-foreground active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md transition-all group cursor-pointer"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-mono text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">LinkedIn</span>
        </a>

        <a
          href={`mailto:${profile.email}`}
          aria-label="Send an email"
          className="flex items-center gap-3 text-foreground/50 hover:text-foreground active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md transition-all group cursor-pointer"
        >
          <Mail className="w-5 h-5" />
          <span className="font-mono text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Email</span>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="flex items-center gap-3 text-foreground/50 hover:text-foreground active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md transition-all group cursor-pointer"
        >
          <Github className="w-5 h-5" />
          <span className="font-mono text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Github</span>
        </a>
      </div>

      {/* Text Content */}
      <div className="z-20 w-full lg:w-1/2 flex flex-col justify-center xl:pl-32 order-2 lg:order-1 mt-10 lg:mt-0">
        <div className="overflow-hidden mb-2">
          <p className="hero-reveal-text text-primary font-mono text-sm md:text-base tracking-widest uppercase">
            Hi, my name is
          </p>
        </div>
        
        <div className="overflow-hidden mb-4">
          <h1 className="hero-reveal-text text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-foreground leading-[1.1]">
            {profile.firstName} <br />
            <span className="text-foreground/80">{profile.lastName}.</span>
          </h1>
        </div>

        <div className="overflow-hidden mb-6">
          <h2 className="hero-reveal-text text-2xl md:text-4xl text-foreground/80 font-outfit font-light">
            {profile.title}
          </h2>
        </div>

        <div className="overflow-hidden">
          <p className="hero-reveal-text max-w-lg text-sm md:text-base text-foreground/60 font-geist leading-relaxed">
            {profile.tagline}
          </p>
        </div>
      </div>

      {/* Image Content */}
      <div 
        ref={imageRef} 
        className="relative w-full lg:w-1/2 h-[50vh] lg:h-[80vh] flex justify-center items-center order-1 lg:order-2 perspective-1000 mt-10 lg:mt-0"
        style={{ perspective: "1000px" }}
      >
        <div className="hero-image-inner relative w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/Pic1.jpeg" 
            fill 
            className="object-cover hero-img pointer-events-none" 
            alt={profile.name} 
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-0 hidden md:flex">
        <span className="text-[10px] uppercase font-mono tracking-widest text-foreground/50 rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
           <div className="bounce-line absolute top-0 left-0 w-full h-1/2 bg-primary"></div>
        </div>
      </div>

    </section>
  );
}
