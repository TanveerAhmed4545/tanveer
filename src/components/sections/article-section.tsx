"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Heart, MessageSquare } from "lucide-react";
import { article } from "@/data/portfolio.data";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-registry";

export function Article() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate Header
    gsap.fromTo(".article-header", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".article-header",
          start: "top 85%",
        }
      }
    );

    // Animate Article
    gsap.fromTo(".article-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".article-card",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="writing"
      className="relative flex flex-col items-center justify-center bg-background overflow-hidden py-20 md:py-32"
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col px-6 md:px-12">
        
        {/* Chapter Header */}
        <div className="article-header flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 mb-20 opacity-0">
          <div>
            <span className="font-mono text-primary text-sm tracking-[0.2em] uppercase block mb-4">05 · WRITING</span>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-foreground tracking-tighter">
              Thoughts on <span className="text-muted-foreground font-serif italic">React</span>.
            </h2>
          </div>
        </div>

        {/* Featured article */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-card opacity-0 group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center"
        >
          {/* Cover image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-card lg:col-span-7 -mx-6 md:mx-0 rounded-none md:rounded-xl border-y md:border-x border-border group-hover:border-primary transition-colors">
            <Image
              src={article.coverFallback}
              alt={`Cover image for article: ${article.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
            
            {/* Date overlay */}
            <div className="absolute left-6 top-6 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-widest text-primary-foreground font-bold uppercase px-3 py-1.5 bg-primary rounded-full">
                Featured
              </span>
              <span className="font-mono text-[10px] tracking-widest text-foreground px-3 py-1.5 border border-foreground/20 bg-background/40 backdrop-blur-md rounded-full uppercase">
                {article.publishedDate}
              </span>
            </div>
            
            {/* Hover CTA */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out z-20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-[0_0_30px_rgba(255,87,34,0.3)]">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="flex flex-col lg:col-span-5">
            <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-4">LinkedIn Article</p>
            <h3 className="text-3xl font-sans font-bold text-foreground mb-6 tracking-tight group-hover:text-primary transition-colors leading-snug">
              {article.title}
            </h3>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 flex-1">
              {article.preview}
            </p>

            {/* Engagement */}
            <div className="flex items-center gap-8 border-t border-border pt-6 mb-6">
              <div className="flex items-center gap-3 text-foreground/80 group-hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                <span className="font-mono text-xs tracking-widest">
                  {article.engagement.reactions} reactions
                </span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 group-hover:text-foreground transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span className="font-mono text-xs tracking-widest">
                  {article.engagement.comments} comment
                </span>
              </div>
            </div>

            {/* Read link */}
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-all group-hover:gap-4">
              Read on LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
