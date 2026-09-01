"use client";

import { Sparkles, Terminal, Code, Cpu, Database, Network, Globe } from "lucide-react";

export default function CapabilitiesStrip() {
  const capabilities = [
    { name: "Software Engineering", icon: Code },
    { name: "AI & Automation", icon: Cpu },
    { name: "Web Platforms", icon: Globe },
    { name: "Cloud Infrastructure", icon: Network },
    { name: "Domain & Hosting", icon: Database },
    { name: "Digital Growth", icon: Sparkles },
  ];

  // Repeat items to ensure smooth wrap-around looping
  const items = [...capabilities, ...capabilities, ...capabilities, ...capabilities];

  return (
    <section className="relative py-8 bg-[#0B0F0C] border-y border-white/5 overflow-hidden z-20">
      {/* Absolute overlay for fade-out edge effects */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <div className="flex select-none overflow-hidden">
        <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-1">
          {items.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={`${cap.name}-${idx}`}
                className="flex items-center gap-3 text-text-main hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-bg-primary border border-white/5 text-accent/80">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-sm font-display font-medium tracking-wide uppercase">
                  {cap.name}
                </span>
                <span className="text-white/10 font-mono text-xs select-none ml-2">//</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
