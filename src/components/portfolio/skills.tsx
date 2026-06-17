"use client";

import { motion } from "framer-motion";
import { skillMarquee, skills } from "@/lib/portfolio-data";

/**
 * Skills section — KVS style.
 * - Brace-wrapped marquee of tech tags
 * - Categorized skill grid (frontend / backend / tools / practices)
 * - Alternating paper background
 */
export function Skills() {
  // Duplicate marquee for seamless loop
  const marqueeItems = [...skillMarquee, ...skillMarquee];

  const categories = [
    {
      title: "Frontend",
      items: skills.frontend,
      number: "01",
    },
    {
      title: "Backend",
      items: skills.backend,
      number: "02",
    },
    {
      title: "Tools & Services",
      items: skills.tools,
      number: "03",
    },
    {
      title: "Practices",
      items: skills.practices,
      number: "04",
    },
  ];

  return (
    <section
      id="skills"
      className="section-paper relative overflow-hidden"
    >
      {/* Marquee at top */}
      <div className="border-y border-[#111111]/10 bg-[#f0efeb] py-6">
        <div className="flex overflow-hidden">
          <div className="marquee-track gap-4">
            {marqueeItems.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-2xl font-medium tracking-tight text-[#111111]/30 transition-colors hover:text-[#FF5500] sm:text-3xl md:text-4xl"
              >
                {tag}
                <span className="mx-4 text-[#FF5500]">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-pad">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="mb-16 max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#FF5500]" />
              <span className="eyebrow">Skills · The toolkit</span>
            </div>
            <h2 className="display-lg text-[#111111]">
              A full MERN stack —{" "}
              <span className="text-[#FF5500]">from React components</span> to MongoDB indexes.
            </h2>
          </motion.div>

          {/* Categorized skills grid */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#111111]/10 bg-[#111111]/10 sm:grid-cols-2">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#f0efeb] p-8"
              >
                <div className="mb-6 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-bold text-[#111111]">
                    {cat.title}
                  </h3>
                  <span className="numbered-marker">{cat.number}</span>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-baseline gap-3 border-b border-[#111111]/5 pb-2 font-display text-base text-[#111111]/80 transition-colors hover:text-[#FF5500]"
                    >
                      <span className="font-mono text-[0.6rem] text-[#FF5500]">
                        ▸
                      </span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
