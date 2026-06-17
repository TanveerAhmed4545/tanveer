"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

/**
 * Projects / Work section — Lesse-style case-study cards.
 * - Alternating dark background
 * - Each project is a full case-study with image, metadata, features
 * - Numbered, hover-zoom images
 */
export function Projects() {
  return (
    <section
      id="work"
      className="section-ink section-pad relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#FF5500]" />
              <span className="eyebrow">Work · Selected projects</span>
            </div>
            <h2 className="display-lg text-[#f0efeb]">
              Three full-stack MERN projects, shipped across{" "}
              <span className="text-[#FF5500]">travel, hospitality & art.</span>
            </h2>
          </div>
          <p className="body-lg max-w-md">
            Each project includes role-based auth, JWT-protected private routes, and a feature set tuned for the use case. Click through to the live deployments.
          </p>
        </motion.div>

        {/* Project case studies */}
        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
            >
              {/* Image — alternates left/right per project */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="project-image object-cover"
                />
                <div className="project-overlay" />

                {/* Top label overlay */}
                <div className="absolute left-5 top-5 z-10 flex items-center gap-3">
                  <span className="bg-[#FF5500] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-white">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="mono-tag bg-black/40 px-2 py-1 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Bottom CTA */}
                <div className="absolute bottom-5 right-5 z-10 flex h-12 w-12 items-center justify-center bg-[#FF5500] text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </a>

              {/* Content */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="mb-3 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#f0efeb]/50">
                  <Calendar className="h-3 w-3" />
                  <span>{project.date}</span>
                </div>
                <h3 className="display-md mb-3 text-[#f0efeb] transition-colors group-hover:text-[#FF5500]">
                  {project.name}
                </h3>
                <p className="body-lg mb-5 font-medium text-[#f0efeb]">
                  {project.tagline}
                </p>
                <p className="text-sm leading-relaxed text-[#f0efeb]/70">
                  {project.description}
                </p>

                {/* Key features */}
                <div className="mt-6">
                  <p className="eyebrow-muted mb-3">Key Features</p>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, fi) => (
                      <li
                        key={fi}
                        className="flex gap-3 text-sm text-[#f0efeb]/75"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-[#FF5500]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mt-6">
                  <p className="eyebrow-muted mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="brace-tag !border-white/15 !bg-white/5 !text-[#f0efeb]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live link */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-b border-[#FF5500] pb-1 font-mono text-xs uppercase tracking-[0.1em] text-[#FF5500] transition-all hover:gap-3"
                >
                  Visit Live Site
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
