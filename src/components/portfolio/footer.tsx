"use client";

import { profile, skillMarquee } from "@/lib/portfolio-data";

/**
 * Footer — KVS style asymmetric 3-column grid.
 * - Column 1: work / what I do
 * - Column 2 (wider): tech grid
 * - Column 3: company info / socials
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] px-5 py-16 text-[#c5c4c2] md:px-[5vw] md:py-[10svh]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.8fr_1.2fr] md:gap-8">
        {/* Column 1 — What I do */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#FF5500]">
            {"{THE WORK I DO}"}
          </p>
          <ul className="space-y-2 font-mono text-sm">
            <li>{"{MERN STACK DEV}"}</li>
            <li>{"{REACT APPS}"}</li>
            <li>{"{NODE APIS}"}</li>
            <li>{"{MONGODB SCHEMAS}"}</li>
            <li>{"{FIREBASE AUTH}"}</li>
            <li>{"{STRIPE PAYMENTS}"}</li>
            <li>{"{TAILWIND UI}"}</li>
          </ul>
        </div>

        {/* Column 2 — Tech grid */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#FF5500]">
            {"{TECH STACK}"}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm text-[#c5c4c2]/70">
            {skillMarquee.map((tag) => (
              <span key={tag} className="transition-colors hover:text-[#FF5500]">
                {tag}
              </span>
            ))}
          </div>

          {/* Coordinates */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.12em] text-[#FF5500]">
              {"{LOCATION}"}
            </p>
            <p className="font-mono text-sm text-[#c5c4c2]">
              {profile.coordinates.lat}
            </p>
            <p className="font-mono text-sm text-[#c5c4c2]">
              {profile.coordinates.lng}
            </p>
            <p className="mt-3 font-mono text-xs text-[#c5c4c2]/60">
              {profile.location}
            </p>
          </div>
        </div>

        {/* Column 3 — Socials */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#FF5500]">
            {"{SOCIALS}"}
          </p>
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c5c4c2] transition-colors hover:text-[#FF5500]"
              >
                <span className="h-1 w-1 bg-[#FF5500]" />
                LINKEDIN ↗
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c5c4c2] transition-colors hover:text-[#FF5500]"
              >
                <span className="h-1 w-1 bg-[#FF5500]" />
                GITHUB ↗
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-[#c5c4c2] transition-colors hover:text-[#FF5500]"
              >
                <span className="h-1 w-1 bg-[#FF5500]" />
                EMAIL ↗
              </a>
            </li>
            <li>
              <a
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c5c4c2] transition-colors hover:text-[#FF5500]"
              >
                <span className="h-1 w-1 bg-[#FF5500]" />
                PORTFOLIO ↗
              </a>
            </li>
          </ul>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.12em] text-[#FF5500]">
              {"{STATUS}"}
            </p>
            <div className="flex items-center gap-2">
              <span className="live-dot" />
              <span className="font-mono text-xs text-[#c5c4c2]">
                {profile.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-xs text-[#c5c4c2]/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} Tanveer Ahmed. All rights reserved.
        </p>
        <p>
          Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
        </p>
        <p className="flex items-center gap-2">
          <span className="live-dot" />
          System online
        </p>
      </div>
    </footer>
  );
}
