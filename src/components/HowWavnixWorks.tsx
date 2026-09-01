"use client";

import { CheckCircle2, ChevronRight, FileCode, Landmark, ListChecks, PlayCircle, Rocket } from "lucide-react";

export default function HowWavnixWorks() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      subtitle: "Constraint Mining & Tech Audits",
      desc: "We dive deep into your workflow requirements, existing database setups, legacy codebase systems, and potential latency limitations.",
      outputs: ["Technical Requirements Specification", "Infrastructure Bottleneck Assessment Report", "Initial System Wireframe Maps"],
      icon: ListChecks,
    },
    {
      num: "02",
      name: "Design",
      subtitle: "High-Fidelity Architecture & Schemas",
      desc: "We construct precise UI wireframes, relational database entity maps (ERD), secure load balancer topologies, and microservice parameters.",
      outputs: ["High-Fidelity Figma Prototypes", "Relational PostgreSQL Schema Map", "API Protocol Definition Documents"],
      icon: FileCode,
    },
    {
      num: "03",
      name: "Build",
      subtitle: "Modern Code & Comprehensive Testing",
      desc: "Our senior developers craft performance-tuned Next.js components, robust database transactions, clean background jobs, and robust APIs.",
      outputs: ["Staging Host Deployment Access", "Unit & Integration Test Suite Logs", "Automated Continuous Integration Pipelines"],
      icon: PlayCircle,
    },
    {
      num: "04",
      name: "Launch & Grow",
      subtitle: "Continuous Monitoring & SEO Scaling",
      desc: "We coordinate a zero-downtime production cutover, implement system health monitoring telemetry, and optimize Core Web Vitals to boost SEO.",
      outputs: ["Live Web Server Production Host", "24/7 Error Tracking & Recovery Loops", "Search Authority & Index Performance Reports"],
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-bg-primary border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// DELIVERY PIPELINE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight">
            How Wavnix Works
          </h2>
          <p className="mt-4 text-text-muted text-base sm:text-lg">
            Engineering premium software demands a rigorous, repeatable protocol. Here is how we guarantee zero-risk delivery from exploration to launch.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Loop over steps */}
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between p-6 bg-[#0B0F0C]/60 border border-white/5 hover:border-accent/20 rounded-2xl transition-all duration-300 group shadow-lg"
              >
                
                {/* Flow indicator arrow for larger displays */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 text-accent/30 pointer-events-none">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}

                {/* Step header */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-black text-accent/20 group-hover:text-accent/80 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2 bg-bg-primary border border-white/10 text-accent rounded-lg">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-display font-bold text-text-main group-hover:text-accent transition-colors">
                    {step.name}
                  </h3>
                  
                  <p className="text-xs font-mono text-text-muted uppercase tracking-wider mt-1">
                    {step.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-text-muted leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Tangible outputs section */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-text-main/70 mb-2">
                    TANGIBLE OUTPUTS:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {step.outputs.map((out, outIdx) => (
                      <li key={outIdx} className="text-xs text-text-muted flex items-start gap-1.5 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent/60 flex-shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom micro quote */}
        <div className="mt-16 text-center text-xs font-mono text-text-muted border border-white/5 rounded-full px-6 py-3 w-fit mx-auto bg-[#0B0F0C]/30">
          <span>We strictly adhere to strict ISO/IEC standards, security audits, and clean database normalization guidelines.</span>
        </div>

      </div>
    </section>
  );
}
