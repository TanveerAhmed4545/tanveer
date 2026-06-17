"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/portfolio-data";

/**
 * Animated metric counter — Shehata style.
 * Counts from 0 to target when the element scrolls into view.
 */
function MetricCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="metric-number">
      {count}
      {suffix}
    </span>
  );
}

/**
 * Stats / Intro section.
 * - Animated counters
 * - Alternating dark/light blocks within a paper background
 * - Brief intro statement
 */
export function Stats() {
  return (
    <section
      id="stats"
      className="section-paper section-pad relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="mb-16 max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#FF5500]" />
            <span className="eyebrow">Intro · By the numbers</span>
          </div>
          <h2 className="display-lg text-[#111111]">
            A MERN developer focused on shipping secure, scalable, and human-centered web apps.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#111111]/10 bg-[#111111]/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="group bg-[#f0efeb] p-8 transition-colors hover:bg-[#111111] hover:text-[#f0efeb]"
            >
              <MetricCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-[#FF5500]">
                {stat.label}
              </div>
              <div className="mt-2 text-sm text-[#111111]/70 group-hover:text-[#f0efeb]/70">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
