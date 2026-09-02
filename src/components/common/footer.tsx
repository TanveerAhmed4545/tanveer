"use client";

import { profile, skillMarquee } from "@/data/portfolio.data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border px-6 py-16 text-foreground/80 md:px-12 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.8fr_1.2fr] md:gap-8 max-w-[1600px] mx-auto">
        {/* Column 1 — What I do */}
        <div>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            {"{THE WORK I DO}"}
          </p>
          <ul className="space-y-3 font-mono text-sm tracking-widest text-muted-foreground">
            <li>{"{SHOPIFY STORES}"}</li>
            <li>{"{SQUARESPACE EXPERT}"}</li>
            <li>{"{MERN FULL-STACK}"}</li>
            <li>{"{HEADLESS COMMERCE}"}</li>
            <li>{"{UI/UX ANIMATIONS}"}</li>
            <li>{"{CRO STRATEGY}"}</li>
          </ul>
        </div>

        {/* Column 2 — Tech grid */}
        <div>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            {"{TECH STACK}"}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-3 font-mono text-sm text-muted-foreground">
            {skillMarquee.map((tag) => (
              <span key={tag} className="transition-colors hover:text-primary cursor-default">
                {tag}
              </span>
            ))}
          </div>

          {/* Coordinates */}
          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              {"{LOCATION}"}
            </p>
            <p className="font-mono text-sm text-foreground/80 mb-1">
              {profile.coordinates.lat}
            </p>
            <p className="font-mono text-sm text-foreground/80">
              {profile.coordinates.lng}
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground tracking-widest uppercase">
              {profile.location}
            </p>
          </div>
        </div>

        {/* Column 3 — Socials */}
        <div>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            {"{SOCIALS}"}
          </p>
          <ul className="space-y-4 font-mono text-sm tracking-widest">
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1 -mx-1"
              >
                <span className="h-1.5 w-1.5 bg-primary" />
                LINKEDIN ↗
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1 -mx-1"
              >
                <span className="h-1.5 w-1.5 bg-primary" />
                GITHUB ↗
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1 -mx-1"
                suppressHydrationWarning
              >
                <span className="h-1.5 w-1.5 bg-primary" />
                EMAIL ↗
              </a>
            </li>

          </ul>

          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              {"{STATUS}"}
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-foreground/80">
                {profile.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1600px] mx-auto mt-24 flex flex-col gap-4 border-t border-border pt-8 font-mono text-[10px] tracking-widest uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {year} Tanveer Ahmed. All rights reserved.
        </p>

        <p className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          System online
        </p>
      </div>
    </footer>
  );
}
