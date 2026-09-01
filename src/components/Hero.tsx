"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Cpu, Cloud, Globe, Play, Server, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  const [pulseState, setPulseState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseState((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Tag / Micro Credibility indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B0F0C] border border-white/10 rounded-full w-fit mb-6 animate-float">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-mono tracking-wider text-text-muted uppercase">
                Active Tech Partner // Q1 2026 Ready
              </span>
            </div>

            {/* Editorial Header */}
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-display font-bold leading-[1.05] text-text-main tracking-tight">
              We build <br className="hidden sm:inline" />
              what moves <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main via-accent to-accent">
                business forward.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-text-muted max-w-xl font-light leading-relaxed">
              Wavnix engineers high-performance custom software, secure artificial intelligence systems, elegant web platforms, resilient automation, and modern digital infrastructure. We operate at the intersection of absolute reliability and forward-looking design.
            </p>

            {/* Micro Credibility Text */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-accent/80">
              <ShieldCheck className="w-4 h-4" />
              <span>Full lifecycle support: Architecture → Deployment → Dedicated Scaling</span>
            </div>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollToSection("estimate")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent/95 rounded-lg shadow-neon hover:shadow-neon-strong transition-all duration-300 transform active:scale-98"
              >
                Book a Free Consultation
                <Sparkles className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-text-main bg-[#0B0F0C] border border-white/10 hover:border-accent/40 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                Explore Our Work
              </button>
            </div>

            {/* Credibility Footprint */}
            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-display font-bold text-accent">100%</p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-mono">Production Delivery</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-accent">24/7</p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-mono">System Monitoring</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-accent">Postgres</p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-mono">Core Reliability</p>
              </div>
            </div>

          </div>

          {/* Right System Visualization Column */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full aspect-square max-w-[420px] bg-bg-elevated/40 border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Corner tech accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/20" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/20" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/20" />

              {/* Grid Background Overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              {/* Status Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                    SYSTEM: SECURE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  LATENCY: 14ms
                </span>
              </div>

              {/* Center Animation Field */}
              <div className="relative flex-grow flex items-center justify-center my-6">
                
                {/* Simulated Orbit Lines */}
                <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-spin-slow" />
                <div className="absolute w-44 h-44 border border-dashed border-accent/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-24 h-24 border border-white/10 rounded-full" />

                {/* Satellite Nodes */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-bg-elevated border border-accent/30 flex items-center justify-center shadow-neon">
                    <Cpu className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-[9px] font-mono text-text-muted mt-1">AI CORE</span>
                </div>

                <div className="absolute bottom-6 left-12 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-bg-elevated border border-white/20 flex items-center justify-center">
                    <Cloud className="w-4 h-4 text-text-muted" />
                  </div>
                  <span className="text-[9px] font-mono text-text-muted mt-1">CLOUD</span>
                </div>

                <div className="absolute bottom-6 right-12 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-bg-elevated border border-white/20 flex items-center justify-center">
                    <Server className="w-4 h-4 text-text-muted" />
                  </div>
                  <span className="text-[9px] font-mono text-text-muted mt-1">POSTGRES</span>
                </div>

                {/* Central Core Node */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-bg-primary border-2 border-accent flex items-center justify-center shadow-neon-strong group cursor-pointer transition-transform duration-500 hover:scale-105">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-8 h-8 fill-none stroke-[8] stroke-accent animate-pulse"
                    >
                      <path d="M10 20 L40 80 L60 40 L75 70 L90 20" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-text-main font-semibold mt-2 tracking-wide">
                    WAVNIX CORE
                  </span>
                </div>

                {/* Dynamic Connecting Laser Lines (SVG Layer) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  {/* Central Node is at 200, 200 */}
                  {/* AI Node is at 200, 50 */}
                  {/* Cloud Node is at 100, 310 */}
                  {/* Database Node is at 300, 310 */}
                  <line x1="200" y1="200" x2="200" y2="60" stroke="#B0FF2A" strokeWidth="1" strokeDasharray="5,5" className="opacity-40" />
                  <line x1="200" y1="200" x2="110" y2="295" stroke="#F5F8F2" strokeWidth="1" strokeDasharray="5,5" className="opacity-20" />
                  <line x1="200" y1="200" x2="290" y2="295" stroke="#F5F8F2" strokeWidth="1" strokeDasharray="5,5" className="opacity-20" />
                  
                  {/* Pulsing signal bullet */}
                  <circle r="3" fill="#B0FF2A" className="animate-[bounce_3s_infinite]">
                    <animateMotion
                      path="M 200 200 L 200 60 L 200 200"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill="#B0FF2A">
                    <animateMotion
                      path="M 200 200 L 110 295 L 200 200"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill="#B0FF2A">
                    <animateMotion
                      path="M 200 200 L 290 295 L 200 200"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>

              {/* Status Footer / Telemetry readout */}
              <div className="relative z-10 border-t border-white/5 pt-3">
                <div className="flex items-center justify-between font-mono text-[9px] text-text-muted">
                  <span>ACTIVE_THREADS: 48</span>
                  <span className="text-accent">CONNECTED PLATFORMS: 100% OK</span>
                </div>
                {/* Miniature sparkline graph */}
                <div className="mt-2 h-4 w-full overflow-hidden flex items-end">
                  <svg className="w-full h-full stroke-accent/40 fill-none" viewBox="0 0 300 20">
                    <path
                      d="M0 10 Q 15 2 30 15 T 60 5 T 90 12 T 120 4 T 150 16 T 180 8 T 210 14 T 240 3 T 270 12 L 300 10"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection("solutions")}
            className="flex flex-col items-center gap-2 group text-text-muted hover:text-accent transition-colors focus:outline-none"
            aria-label="Scroll Down"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[10px]">Explore Wavnix Ecosystem</span>
            <div className="w-6 h-10 border border-white/10 group-hover:border-accent/40 rounded-full flex justify-center p-1 transition-colors">
              <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
