"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

/**
 * Hero section — full-viewport.
 * - Word-by-word headline reveal (Lesse style)
 * - Dhaka coordinates in mono (KVS signature)
 * - Glassmographic social rail on left
 * - Scroll hint at bottom
 * - Background: layered gradient + abstract image with grain
 */
export function Hero() {
  // Split headline into words for staggered reveal
  const headlineWords = ["MERN", "Stack", "Developer", "from", "Dhaka"];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#f0efeb]"
    >
      {/* Background — abstract gradient + image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.18] img-grain"
          style={{
            backgroundImage:
              "url('https://sfile.chatglm.cn/images-ppt/be28c1b886b5.jpg')",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,85,0,0.08) 0%, transparent 70%), linear-gradient(180deg, #f0efeb 0%, rgba(240,239,235,0.92) 100%)",
          }}
          aria-hidden
        />
        {/* Vertical lines grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #111111 0px, #111111 1px, transparent 1px, transparent 96px)",
          }}
          aria-hidden
        />
      </div>

      {/* Left social rail — Shehata style */}
      <div className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:flex lg:left-8">
        <div className="rotate-180 [writing-mode:vertical-rl]">
          <span className="eyebrow-muted">{profile.linkedinHandle}</span>
        </div>
        <div className="h-12 w-px bg-[#111111]/20" />
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mono-tag text-[#111111]/60 transition-colors hover:text-[#FF5500]"
          style={{ writingMode: "vertical-rl" }}
        >
          LINKEDIN ↗
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mono-tag text-[#111111]/60 transition-colors hover:text-[#FF5500]"
          style={{ writingMode: "vertical-rl" }}
        >
          GITHUB ↗
        </a>
      </div>

      {/* Right coordinates — KVS signature */}
      <div className="absolute right-4 top-28 z-20 hidden text-right lg:right-8 lg:block">
        <p className="eyebrow-muted mb-1">Coordinates</p>
        <p className="font-mono text-xs text-[#111111]/80">
          {profile.coordinates.lat}
        </p>
        <p className="font-mono text-xs text-[#111111]/80">
          {profile.coordinates.lng}
        </p>
        <div className="mt-3 flex items-center justify-end gap-2">
          <span className="live-dot" />
          <span className="eyebrow-muted">{profile.status}</span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-24 pb-32 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-[#FF5500]" />
          <span className="eyebrow">Portfolio · 2024</span>
        </motion.div>

        {/* Name — large display */}
        <motion.h1
          className="font-display font-bold tracking-tighter text-[#111111]"
          style={{ fontSize: "clamp(3rem, 11vw, 11rem)", lineHeight: 0.9 }}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          >
            {profile.firstName}
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
          >
            {profile.lastName}
            <span className="text-[#FF5500]">.</span>
          </motion.span>
        </motion.h1>

        {/* Tagline — word-by-word reveal */}
        <div className="mt-8 max-w-3xl overflow-hidden">
          <h2 className="font-display font-medium tracking-tight text-[#111111]/80 flex flex-wrap gap-x-3 gap-y-1" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}>
            {headlineWords.map((word, i) => (
              <span key={i} className="hero-word">
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6 + i * 0.12,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        {/* Description + CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="body-lg max-w-xl">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-[#111111] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white transition-all hover:bg-[#FF5500]"
            >
              View Work
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#111111] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#111111] transition-all hover:bg-[#111111] hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow-muted">Scroll</span>
        <div className="scroll-bob">
          <ArrowDown className="h-4 w-4 text-[#FF5500]" />
        </div>
      </motion.div>

      {/* Bottom location bar */}
      <div className="absolute bottom-8 right-4 z-20 hidden items-center gap-2 sm:flex lg:right-8">
        <MapPin className="h-3.5 w-3.5 text-[#111111]/60" />
        <span className="mono-tag text-[#111111]/60">
          {profile.location}
        </span>
      </div>
    </section>
  );
}
