"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/lib/portfolio-data";

/**
 * Experience timeline — Shehata style numbered list.
 * - Alternating paper background
 * - Large numbered markers (01, 02, 03)
 * - Stack tags per role
 */
export function Experience() {
  return (
    <section
      id="experience"
      className="section-paper section-pad relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
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
              <span className="eyebrow">Career · The path so far</span>
            </div>
            <h2 className="display-lg text-[#111111]">
              Three roles, one focus —{" "}
              <span className="text-[#FF5500]">shipping MERN apps</span> that ship value.
            </h2>
          </div>
          <a
            href={undefined}
            className="mono-tag inline-flex items-center gap-1 text-[#111111]/60 transition-colors hover:text-[#FF5500]"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/tanveerahmed45/",
                "_blank",
                "noopener"
              );
            }}
          >
            Full résumé on LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-px">
          {experience.map((exp, i) => (
            <motion.article
              key={exp.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
              className="group relative grid grid-cols-1 gap-6 border-t border-[#111111]/10 py-10 transition-colors hover:bg-[#111111]/[0.02] md:grid-cols-12 md:gap-8"
            >
              {/* Number + period */}
              <div className="md:col-span-3">
                <span className="numbered-marker">{exp.number}</span>
                <div className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-[#111111]/60">
                  {exp.period}
                </div>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[#FF5500]">
                  {exp.type}
                </div>
              </div>

              {/* Role + company */}
              <div className="md:col-span-5">
                <h3 className="display-md text-[#111111] transition-colors group-hover:text-[#FF5500]">
                  {exp.role}
                </h3>
                <p className="mt-2 font-mono text-sm text-[#111111]/80">
                  {exp.company}
                </p>
                <p className="mt-1 font-mono text-[0.7rem] text-[#111111]/50">
                  {exp.location}
                </p>
              </div>

              {/* Description + stack */}
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-[#111111]/70">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="mono-tag border border-[#111111]/15 bg-white/50 px-2 py-1 text-[#111111]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
