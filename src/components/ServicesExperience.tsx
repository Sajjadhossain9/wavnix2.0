"use client";

import { useState } from "react";
import { Terminal, Shield, ArrowRight, CheckCircle2, Cpu, Globe, GraduationCap, Cloud, LineChart } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  icon: any;
  tag: string;
  headline: string;
  description: string;
  deliverables: string[];
  visualType: "code" | "neural" | "web" | "education" | "cloud" | "growth";
}

export default function ServicesExperience() {
  const services: ServiceItem[] = [
    {
      id: "software",
      name: "Custom Software",
      icon: Terminal,
      tag: "CORE ENGINEERING",
      headline: "Scalable enterprise systems engineered for high performance.",
      description: "We design and engineer bespoke software systems that streamline operations, eliminate technical debt, and integrate perfectly with your existing workflow database engines.",
      deliverables: ["Distributed API Architectures", "Custom CRM & ERP Engines", "Legacy System Modernization", "Automated Quality Assurance"],
      visualType: "code",
    },
    {
      id: "ai",
      name: "AI & Automation",
      icon: Cpu,
      tag: "COGNITIVE ARCHITECTURE",
      headline: "Cognitive solutions that automate workflow and process complex data.",
      description: "Harness modern LLMs, predictive intelligence models, and autonomous workflow loops to replace repetitive manual labor with reliable, context-aware AI pipelines.",
      deliverables: ["Custom LLM Integrations", "Intelligent Document Parsing", "Predictive Analytics Systems", "Workflow RPA & Chatbots"],
      visualType: "neural",
    },
    {
      id: "web",
      name: "Web & Mobile",
      icon: Globe,
      tag: "DIGITAL TOUCHPOINTS",
      headline: "High-conversion web platforms and ultra-responsive mobile applications.",
      description: "Engage your customers with industry-grade, highly responsive web and mobile designs. Built using Next.js, React Native, and robust server frameworks to ensure exceptional speed.",
      deliverables: ["Next.js React Web Applications", "React Native iOS & Android Apps", "SEO Optimized Corporate Platforms", "Secure Stripe Payment Gateways"],
      visualType: "web",
    },
    {
      id: "edtech",
      name: "Education Technology",
      icon: GraduationCap,
      tag: "ACADEMIC ECOSYSTEMS",
      headline: "Unified platforms empowering modern campus administration.",
      description: "Our proprietary EdTech product suite brings teachers, students, parents, and administrative staff into a single high-performance workspace to track progress, attendance, and finances.",
      deliverables: ["Institution Control Centers", "Interactive Grading Systems", "Unified Fee Tracking Portals", "Student & Parent Portals"],
      visualType: "education",
    },
    {
      id: "cloud",
      name: "Cloud & Infrastructure",
      icon: Cloud,
      tag: "DEVOPS & PLATFORMS",
      headline: "Resilient server architectures that never drop a connection.",
      description: "Establish robust, auto-scaling microservices on AWS or local servers, backed by solid Postgres setups, structured backup plans, and standard Docker containerization.",
      deliverables: ["Kubernetes & Docker Pipelines", "PostgreSQL Clustering & Optimization", "AWS/GCP Cloud Architecture", "Zero-Downtime Migration Plans"],
      visualType: "cloud",
    },
    {
      id: "growth",
      name: "Digital Growth",
      icon: LineChart,
      tag: "BUSINESS ACCELERATION",
      headline: "Data-driven strategies for product scaling and search dominance.",
      description: "We don't just write code; we optimize it for discovery. Through precision SEO frameworks, user analytics telemetry, and direct conversion rate tuning, we scale your users.",
      deliverables: ["Technical SEO Engineering", "User Telemetry & Analytics", "Core Web Vitals Optimization", "Conversion Funnel Audit"],
      visualType: "growth",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("software");
  const selectedService = services.find((s) => s.id === activeTab) || services[0];

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
    <section id="solutions" className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// WAVNIX CAPABILITIES</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight">
            Comprehensive Engineering for Digital Dominance
          </h2>
          <p className="mt-4 text-text-muted text-base sm:text-lg">
            We operate across the complete tech stack, transforming business requirements into high-performance, maintainable software systems.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Categories Selector */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            {services.map((svc) => {
              const TabIcon = svc.icon;
              const isActive = svc.id === activeTab;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group focus:outline-none ${
                    isActive
                      ? "bg-bg-elevated border-accent/30 shadow-neon text-text-main"
                      : "bg-transparent border-white/5 text-text-muted hover:border-white/10 hover:bg-white/5 hover:text-text-main"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-accent text-bg-primary shadow-inner"
                        : "bg-bg-elevated text-text-muted group-hover:text-accent group-hover:bg-[#151D17]"
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-mono text-accent/80 tracking-wider mb-0.5 uppercase">
                      {svc.tag}
                    </p>
                    <p className="font-display font-semibold text-lg tracking-tight">
                      {svc.name}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-accent translate-x-1" : "text-text-muted/30 group-hover:translate-x-0.5 group-hover:text-text-muted"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Card & Technical Visual */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-bg-elevated border border-white/5 rounded-3xl relative overflow-hidden shadow-xl min-h-[480px]">
            {/* Ambient subtle green radial wash behind content */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                {selectedService.tag}
              </span>

              <h3 className="mt-6 text-2xl sm:text-3xl font-display font-bold leading-tight text-text-main">
                {selectedService.headline}
              </h3>

              <p className="mt-4 text-text-muted text-base leading-relaxed font-light">
                {selectedService.description}
              </p>

              {/* Bulleted deliverables */}
              <div className="mt-8">
                <p className="text-xs font-mono tracking-wider text-text-main/70 uppercase mb-4">
                  CORE DELIVERABLES:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-sm text-text-muted">
                      <CheckCircle2 className="w-4.5 h-4.5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom visualizer + Button Section */}
            <div className="mt-8 pt-8 border-t border-white/5 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              
              {/* Context-aware miniature visualizer to look extremely technical */}
              <div className="flex-grow max-w-[280px] bg-bg-primary/80 border border-white/5 rounded-xl p-3 text-[11px] font-mono text-accent/80 flex flex-col gap-1 shadow-inner select-none">
                {selectedService.visualType === "code" && (
                  <>
                    <span className="text-text-muted text-[9px] uppercase">// TERMINAL VIEW: OK</span>
                    <span className="text-white/40">npm run build:prod</span>
                    <span>▶ Drizzle DB migration... completed</span>
                    <span className="text-text-muted">▶ Server initialized on port 3000</span>
                  </>
                )}
                {selectedService.visualType === "neural" && (
                  <>
                    <span className="text-text-muted text-[9px] uppercase">// AI INFERENCE RUNNING</span>
                    <span className="text-white/40">context_length: 128k_tokens</span>
                    <span>▶ Analyzing unstructured logs...</span>
                    <span className="text-white">✓ Intent classified [99.4% confidence]</span>
                  </>
                )}
                {selectedService.visualType === "web" && (
                  <>
                    <span className="text-text-muted text-[9px] uppercase">// CORE WEB VITALS</span>
                    <span>▶ LCP: 0.8s (Excellent)</span>
                    <span className="text-white/40">▶ CLS: 0.00 // FID: 12ms</span>
                    <span className="text-white">✓ Performance score: 100/100</span>
                  </>
                )}
                {selectedService.visualType === "education" && (
                  <>
                    <span className="text-text-muted text-[9px] uppercase">// CAMPUS ENGINE STATUS</span>
                    <span>▶ 4 Modules connected securely</span>
                    <span className="text-white/40">▶ Student database synchronization</span>
                    <span className="text-white">✓ 0 data conflicts found</span>
                  </>
                )}
                {selectedService.visualType === "cloud" && (
                  <>
                    <span className="text-text-muted text-[9px] uppercase">// CLOUD DOCKER K8S</span>
                    <span>▶ Load balancing active (3 pods)</span>
                    <span className="text-white/40">▶ Auto-scaling threshold: 75% CPU</span>
                    <span className="text-white">✓ All systems operational (uptime 99.99%)</span>
                  </>
                )}
                {selectedService.visualType === "growth" && (
                  <>
                    <span className="text-text-muted text-[9px] uppercase">// MARKETING TELEMETRY</span>
                    <span>▶ Organic search traffic: +240%</span>
                    <span className="text-white/40">▶ Landing page bounce rate: 21%</span>
                    <span className="text-white">✓ Search authority score boosted</span>
                  </>
                )}
              </div>

              {/* Dynamic Action Button */}
              <button
                onClick={scrollToEstimate}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent/95 rounded-lg shadow-neon transition-all duration-300 self-center"
              >
                Build This With Wavnix
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
