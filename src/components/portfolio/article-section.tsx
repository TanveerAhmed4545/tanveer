"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Heart, MessageSquare } from "lucide-react";
import { article } from "@/lib/portfolio-data";

/**
 * Article / Writing section.
 * - Featured LinkedIn article
 * - Cover image + preview text
 * - Engagement metrics (reactions, comments)
 */
export function Article() {
  return (
    <section
      id="writing"
      className="section-ink section-pad relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl">
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
            <span className="eyebrow">Writing · Thoughts on React</span>
          </div>
          <h2 className="display-lg text-[#f0efeb]">
            I write about the tools I use —{" "}
            <span className="text-[#FF5500]">mostly React.</span>
          </h2>
        </motion.div>

        {/* Featured article */}
        <motion.a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="group grid grid-cols-1 gap-8 border-t border-[#f0efeb]/10 pt-10 lg:grid-cols-12 lg:gap-12"
        >
          {/* Cover image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a] lg:col-span-7">
            <Image
              src={article.coverFallback}
              alt={`Cover image for article: ${article.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "grayscale(10%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            {/* Date overlay */}
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="bg-[#FF5500] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-white">
                Featured
              </span>
              <span className="mono-tag bg-black/40 px-2 py-1 text-white backdrop-blur-sm">
                {article.publishedDate}
              </span>
            </div>
          </div>

          {/* Article content */}
          <div className="flex flex-col lg:col-span-5">
            <p className="eyebrow-muted mb-3">LinkedIn Article</p>
            <h3 className="display-md mb-5 text-[#f0efeb] transition-colors group-hover:text-[#FF5500]">
              {article.title}
            </h3>
            <p className="body-lg mb-6 flex-1">
              {article.preview}
            </p>

            {/* Engagement */}
            <div className="flex items-center gap-6 border-t border-[#f0efeb]/10 pt-5">
              <div className="flex items-center gap-2 text-[#f0efeb]/60">
                <Heart className="h-3.5 w-3.5 text-[#FF5500]" />
                <span className="font-mono text-xs">
                  {article.engagement.reactions} reactions
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#f0efeb]/60">
                <MessageSquare className="h-3.5 w-3.5" />
                <span className="font-mono text-xs">
                  {article.engagement.comments} comment
                </span>
              </div>
            </div>

            {/* Read link */}
            <div className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#FF5500] transition-all group-hover:gap-3">
              Read on LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
