import React from "react";

interface MarqueeProps {
  items: string[];
  duration?: string;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ items, duration = "40s", reverse = false, className = "" }: MarqueeProps) {
  return (
    <div className={`flex w-full overflow-hidden bg-card border-y border-border py-4 ${className}`}>
      {/* Track 1 */}
      <div 
        className="flex w-max min-w-full shrink-0 animate-marquee items-center justify-around px-3"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {items.map((tag, i) => (
          <span
            key={`a-${i}`}
            className="flex items-center whitespace-nowrap font-mono text-2xl font-bold tracking-tight text-muted-foreground transition-colors hover:text-primary sm:text-3xl md:text-4xl"
          >
            {tag}
            <span className="mx-6 text-primary">✕</span>
          </span>
        ))}
      </div>
      {/* Track 2 (Duplicate for seamless loop) */}
      <div 
        aria-hidden="true"
        className="flex w-max min-w-full shrink-0 animate-marquee items-center justify-around px-3"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {items.map((tag, i) => (
          <span
            key={`b-${i}`}
            className="flex items-center whitespace-nowrap font-mono text-2xl font-bold tracking-tight text-muted-foreground transition-colors hover:text-primary sm:text-3xl md:text-4xl"
          >
            {tag}
            <span className="mx-6 text-primary">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}
