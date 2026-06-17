"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

/**
 * Contact section.
 * - Big CTA headline
 * - Email, LinkedIn, GitHub links
 * - Location and status
 */
export function Contact() {
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

  return (
    <section
      id="contact"
      className="section-paper section-pad relative overflow-hidden"
    >
      {/* Background — large faded name */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
        aria-hidden
      >
        <span
          className="select-none font-display font-bold leading-none text-[#111111]/[0.04]"
          style={{ fontSize: "clamp(8rem, 30vw, 28rem)" }}
        >
          TANVEER
        </span>
      </div>

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
          <span className="eyebrow">Contact · Let's build together</span>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-16 max-w-5xl"
        >
          <h2 className="display-xl mb-8 text-[#111111]">
            Have a MERN project in mind?{" "}
            <span className="text-[#FF5500]">Let's talk.</span>
          </h2>
          <p className="body-lg max-w-2xl">
            I'm currently open to full-time MERN roles, freelance projects, and technical collaborations. Whether you need a hotel booking platform, an art marketplace, or a custom dashboard — drop a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        {/* Status + location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="live-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#111111]/80">
              {profile.status}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#FF5500]" />
            <span className="mono-tag text-[#111111]/60">
              {profile.location}
            </span>
          </div>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#111111]/10 bg-[#111111]/10 sm:grid-cols-3">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col gap-2 bg-[#f0efeb] p-8 transition-colors hover:bg-[#111111] hover:text-[#f0efeb]"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow-muted group-hover:text-[#FF5500]">
                  {link.label}
                </span>
                <link.icon className="h-4 w-4 text-[#111111]/40 transition-colors group-hover:text-[#FF5500]" />
              </div>
              <span className="font-display text-xl font-semibold text-[#111111] transition-colors group-hover:text-[#f0efeb]">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Primary CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 bg-[#111111] px-8 py-5 font-mono text-sm uppercase tracking-[0.1em] text-white transition-all hover:bg-[#FF5500]"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
