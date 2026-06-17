"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Languages, GraduationCap, ExternalLink } from "lucide-react";
import { about, certifications, education, languages, profile } from "@/lib/portfolio-data";

/**
 * About section.
 * - Two-column layout: portrait on left, bio + meta on right
 * - Alternates from paper background
 * - Embeds languages, education, and certifications inline
 */
export function About() {
  return (
    <section
      id="about"
      className="section-ink section-pad relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #f0efeb 0px, #f0efeb 1px, transparent 1px, transparent 96px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-[#FF5500]" />
          <span className="eyebrow">About · Who I am</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — Portrait + meta */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a] img-grain">
              <Image
                src={profile.portraitFallback}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ filter: "grayscale(15%) contrast(1.05)" }}
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <div>
                  <p className="eyebrow-muted mb-1">Currently</p>
                  <p className="font-mono text-xs text-[#f0efeb]">
                    {profile.title}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="live-dot" />
                  <span className="eyebrow-muted">Live</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-8 border-t border-[#f0efeb]/10 pt-6">
              <div className="mb-4 flex items-center gap-2">
                <Languages className="h-3.5 w-3.5 text-[#FF5500]" />
                <span className="eyebrow-muted">Languages</span>
              </div>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-baseline justify-between"
                  >
                    <span className="font-display text-lg text-[#f0efeb]">
                      {lang.name}
                    </span>
                    <span className="font-mono text-[0.7rem] text-[#f0efeb]/50">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="mt-8 border-t border-[#f0efeb]/10 pt-6">
              <div className="mb-4 flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 text-[#FF5500]" />
                <span className="eyebrow-muted">Education</span>
              </div>
              {education.map((edu) => (
                <div key={edu.institution}>
                  <h4 className="font-display text-lg text-[#f0efeb]">
                    {edu.institution}
                  </h4>
                  <p className="mt-1 font-mono text-[0.7rem] text-[#f0efeb]/50">
                    {edu.period} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="display-lg mb-8 text-[#f0efeb]">
              {about.opening}{" "}
              <span className="text-[#FF5500]">I'm Tanveer.</span>
            </h2>

            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="body-lg"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12 border-t border-[#f0efeb]/10 pt-8">
              <div className="mb-6 flex items-center gap-2">
                <Award className="h-3.5 w-3.5 text-[#FF5500]" />
                <span className="eyebrow-muted">Certifications</span>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex flex-col gap-2 border-l-2 border-[#FF5500]/30 py-2 pl-5 transition-colors hover:border-[#FF5500] sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="flex-1">
                      <h4 className="font-display text-lg font-semibold text-[#f0efeb]">
                        {cert.title}
                      </h4>
                      <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#FF5500]">
                        {cert.issuer} · {cert.date}
                      </p>
                      <p className="mt-2 text-sm text-[#f0efeb]/60">
                        {cert.description}
                      </p>
                    </div>
                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono-tag inline-flex shrink-0 items-center gap-1 text-[#f0efeb]/60 transition-colors hover:text-[#FF5500]"
                      >
                        Credential
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
