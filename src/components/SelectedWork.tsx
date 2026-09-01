"use client";

import { useState } from "react";
import { ArrowUpRight, Code, Cpu, ExternalLink, GraduationCap, Layout, ShieldAlert } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  type: string;
  challenge: string;
  solution: string;
  features: string[];
  tags: string[];
  icon: any;
  mockUrl: string;
  mockStatus: string;
}

export default function SelectedWork() {
  const cases: CaseStudy[] = [
    {
      id: "darul-huda",
      title: "Institution Control Center (Madrasah ERP)",
      client: "Madrasah Darul Huda",
      type: "Education Technology Platforms",
      challenge: "Traditional administration struggled to unify academic gradebooks, physical attendance registries, student accounting records, and guardian communication into a single secure platform.",
      solution: "Engineered Wavnix Campus, a robust multi-role Web App with an offline-resilient grade processing core, real-time fee tracking, and SMS-triggered notification protocols for immediate guardian status reports.",
      features: ["Multi-role admin/teacher/student portal", "Grade processing and automation engine", "Interactive fee invoice & payment ledger", "Secure automatic guardian SMS dispatch"],
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM", "Twilio API"],
      icon: GraduationCap,
      mockUrl: "https://mtsdarulhuda.com",
      mockStatus: "Production Active",
    },
    {
      id: "aim-construction",
      title: "Enterprise Project Estimator & Supply Chain Tracker",
      client: "AIM Construction & Design",
      type: "Civil Engineering & Workflow ERP",
      challenge: "On-site engineers and surveyors were unable to calculate real-time civil estimation changes or track high-volume cement and steel requisitions, resulting in costly milestone delays.",
      solution: "Developed a responsive workflow workspace featuring live supply ledger synchronization, automatic cost variance calculations, and mobile-optimized blue-print rendering engine.",
      features: ["Dynamic material pricing calculator", "Live supply ledger synchronization", "Interactive milestone scheduling", "Offline-ready client portal"],
      tags: ["React", "Node.js", "Express", "PostgreSQL", "PWA Caching"],
      icon: Layout,
      mockUrl: "https://aimconstruction.org",
      mockStatus: "Enterprise Active",
    },
    {
      id: "blood-connect",
      title: "Real-time Geofenced Donor Discovery Platform",
      client: "AAUB Blood Connect",
      type: "Social Impact & Low-Latency Directory",
      challenge: "High communication delay in routing critical, urgent blood donor requests to eligible members during life-threatening hospital operations.",
      solution: "Created AAUB Blood Connect, a high-speed geolocation donor directory. Implemented low-latency search indexes and an automatic geofenced SMS notification trigger.",
      features: ["Low-latency geo-radius search index", "Automatic emergency broadcast protocol", "Secure direct verified-donor calling", "Live request tracking center"],
      tags: ["React Native", "Next.js", "PostgreSQL", "Redis Cache", "GeoSMS"],
      icon: ShieldAlert,
      mockUrl: "https://aaub-bloodconnect.org",
      mockStatus: "Community Launch",
    }
  ];

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollToEstimate = () => {
    const element = document.getElementById("estimate");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-bg-elevated/40 border-t border-white/5">
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// PROVEN PRODUCTION ENGINE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight">
            Selected Case Studies
          </h2>
          <p className="mt-4 text-text-muted text-base">
            No fake testimonials, no simulated metrics. Explore real technology built by Wavnix for partners who value precision, uptime, and growth.
          </p>
        </div>

        {/* Case Studies Loop */}
        <div className="flex flex-col gap-24">
          {cases.map((cs, idx) => {
            const CaseIcon = cs.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={cs.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                onMouseEnter={() => setHoveredId(cs.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Preview Card (Columns 1 to 6 / 7 to 12 depending on alignment) */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-bg-primary/90 p-1 transition-all duration-300 hover:border-accent/20">
                    
                    {/* Simulated Web Browser Chrome */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F0C] border-b border-white/5 rounded-t-xl select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#EA4335]/60" />
                        <span className="w-3 h-3 rounded-full bg-[#FBBC05]/60" />
                        <span className="w-3 h-3 rounded-full bg-[#34A853]/60" />
                      </div>
                      <span className="text-[10px] font-mono text-text-muted/60">{cs.mockUrl}</span>
                      <span className="text-[9px] font-mono bg-accent/10 text-accent px-2 py-0.5 rounded uppercase">
                        {cs.mockStatus}
                      </span>
                    </div>

                    {/* Content Frame */}
                    <div className="bg-[#050706] p-6 sm:p-8 rounded-b-xl relative min-h-[220px] flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[50px] pointer-events-none" />
                      
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-bg-elevated border border-white/10 text-accent">
                          <CaseIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[11px] font-mono uppercase tracking-widest text-accent">
                            {cs.client}
                          </p>
                          <h4 className="text-xl sm:text-2xl font-display font-bold text-text-main mt-1 tracking-tight">
                            {cs.title}
                          </h4>
                        </div>
                      </div>

                      {/* Display Core Features inside Device Frame */}
                      <div className="mt-6 relative z-10">
                        <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2">SYSTEM PROTOCOLS:</p>
                        <ul className="flex flex-col gap-1.5">
                          {cs.features.map((feat, fIdx) => (
                            <li key={fIdx} className="text-xs text-text-muted flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] font-mono">
                        <span className="text-text-muted">HOSTED ARCHITECTURE: SECURE</span>
                        <span className="text-accent flex items-center gap-1">
                          Wavnix Verified <Code className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Case Details Card (Columns 7 to 12 / 1 to 6) */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
                    // CASE STUDY {idx + 1}
                  </p>
                  <p className="text-sm font-semibold text-text-muted uppercase tracking-wider font-mono">
                    {cs.type}
                  </p>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-text-main tracking-tight">
                    Powering {cs.client}
                  </h3>

                  {/* Challenge Container */}
                  <div className="mt-6 p-4 bg-bg-elevated border border-white/5 rounded-xl">
                    <p className="text-xs font-mono uppercase text-accent/80 mb-1.5 tracking-wider">
                      The Critical Challenge:
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed font-light">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Solution Container */}
                  <div className="mt-4 p-4 bg-bg-elevated border border-accent/10 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                    <p className="text-xs font-mono uppercase text-accent mb-1.5 tracking-wider">
                      The Wavnix Solution:
                    </p>
                    <p className="text-sm text-text-main leading-relaxed font-light">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Technology badging */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono bg-bg-primary text-text-muted border border-white/5 rounded-md hover:border-accent/20 hover:text-text-main transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-8 flex items-center gap-4">
                    <button
                      onClick={scrollToEstimate}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-white transition-colors duration-200"
                    >
                      Request Case Architecture Detail
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
