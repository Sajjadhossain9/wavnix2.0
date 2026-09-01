"use client";

import { useState } from "react";
import { Activity, ShieldCheck, ArrowRight, BookOpen, Circle, GraduationCap, LayoutGrid, Users, DollarSign } from "lucide-react";

interface ProductModule {
  id: string;
  name: string;
  status: "Live" | "Beta" | "Development" | "Concept";
  statusColor: string;
  tagline: string;
  description: string;
  features: string[];
  useCase: string;
  stats: { label: string; value: string }[];
}

export default function ProductShowcase() {
  const modules: ProductModule[] = [
    {
      id: "admin",
      name: "Administrative Console",
      status: "Beta",
      statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      tagline: "Total control over fiscal pipelines, staff rosters, and compliance metrics.",
      description: "Our Central Administrative Workspace streamlines back-office operational bottlenecks. It automates financial ledger balance sheets, coordinates student registrations, and processes end-of-term results securely.",
      features: ["Automated Financial Invoice Engine", "Dynamic Staff Roster Schedulers", "GDPR-Compliant Student Records", "Custom Data Query Exports"],
      useCase: "Currently deployed at Madrasah Darul Huda for core registrar functions.",
      stats: [
        { label: "Admin Overhead Reduction", value: "-45%" },
        { label: "Query Speed Index", value: "0.2s" },
      ]
    },
    {
      id: "teacher",
      name: "Teacher Gradebook Hub",
      status: "Live",
      statusColor: "text-accent bg-accent/10 border-accent/20",
      tagline: "Optimized grading workflows that give hours back to instructors.",
      description: "A fast, modern portal allowing teachers to input grades, track attendance, and record behavior notes directly from mobile or desktop, even on weak Wi-Fi networks.",
      features: ["Offline-Resilient Grade Syncing", "Multi-Standard Grading Systems", "Rapid Absence Logging", "Direct Parent Chat Integrations"],
      useCase: "Active use by 30+ faculty members tracking weekly student achievements.",
      stats: [
        { label: "Grading Efficiency Boost", value: "+300%" },
        { label: "Attendance Capture Time", value: "2 min" },
      ]
    },
    {
      id: "student",
      name: "Student Portal Core",
      status: "Development",
      statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      tagline: "A unified workspace where students coordinate tasks and view reviews.",
      description: "Empowers learners with a structured learning dashboard. Students can view curriculum benchmarks, submit files, download lesson sheets, and read direct comments from teachers.",
      features: ["Central Task Management Desk", "Digital Resource Locker", "Real-Time Grade Analytics", "Automated Homework Alerts"],
      useCase: "Under active testing with select student cohorts. Full release slated Q3 2026.",
      stats: [
        { label: "Assignment Completion", value: "94%" },
        { label: "Active Engagement Rate", value: "High" },
      ]
    },
    {
      id: "guardian",
      name: "Guardian Security App",
      status: "Beta",
      statusColor: "text-purple-400 bg-guardian-400/10 border-purple-400/20",
      tagline: "Transparency and peace of mind delivered directly to families.",
      description: "An interactive, lightweight dashboard that keeps families securely updated about student arrival check-ins, financial billings, automated exam results cards, and school closures.",
      features: ["Immediate Safety Alert SMS", "Direct Tuition Payment Gateway", "Digital Term Report Cards", "Teacher Message Channels"],
      useCase: "In-beta trial with parent-teacher association groups to verify security triggers.",
      stats: [
        { label: "Parent Safety Assurance", value: "100%" },
        { label: "Billing Payment Speed", value: "Instant" },
      ]
    }
  ];

  const [activeModuleId, setActiveModuleId] = useState("admin");
  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <section id="product" className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// PROPRIETARY EDTECH SUITE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight">
            Wavnix Campus Management Suite
          </h2>
          <p className="mt-4 text-text-muted text-base sm:text-lg">
            One unified campus. Four connected experiences. We are developing the definitive software standard to digitize academic environments, ensuring absolute synchronization between administrators, teachers, students, and parents.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {modules.map((mod) => {
            const isSelected = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`p-4 text-left border rounded-2xl transition-all duration-300 focus:outline-none flex flex-col justify-between h-[120px] ${
                  isSelected
                    ? "bg-[#0B0F0C] border-accent/30 shadow-neon"
                    : "bg-transparent border-white/5 text-text-muted hover:border-white/10 hover:bg-white/5"
                }`}
              >
                <span className={`text-[9px] font-mono border px-2 py-0.5 rounded uppercase w-fit font-bold ${mod.statusColor}`}>
                  {mod.status}
                </span>
                <span className="font-display font-bold text-sm tracking-tight text-text-main mt-4">
                  {mod.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Showcase Inner Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12 bg-bg-elevated border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-44 h-44 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Core Module Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs font-mono tracking-widest text-accent uppercase">
                  WAVNIX CAMPUS // MODULE_{activeModule.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-main">
                {activeModule.name}
              </h3>
              <p className="text-sm text-accent font-mono mt-1 font-semibold">
                {activeModule.tagline}
              </p>

              <p className="mt-4 text-text-muted text-sm leading-relaxed font-light">
                {activeModule.description}
              </p>

              {/* Verified Features */}
              <div className="mt-6">
                <p className="text-[10px] font-mono text-text-main/70 uppercase tracking-wider mb-2">MODULE CAPABILITIES:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModule.features.map((feat) => (
                    <div key={feat} className="text-xs text-text-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use case quote */}
              <div className="mt-6 p-3 bg-bg-primary/50 border border-white/5 rounded-xl text-xs text-text-muted italic leading-relaxed">
                <span className="text-accent font-semibold not-italic font-mono uppercase block text-[9px] mb-0.5">DEPLOYMENT CONTEXT:</span>
                "{activeModule.useCase}"
              </div>
            </div>

            {/* Bottom telemetry stats */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              {activeModule.stats.map((st) => (
                <div key={st.label}>
                  <p className="text-2xl font-display font-bold text-accent">{st.value}</p>
                  <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider mt-0.5">{st.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-End UI Dashboard Mockup */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-[#050706] border border-white/5 rounded-2xl p-4 sm:p-6 shadow-2xl relative select-none">
              
              {/* Fake dashboard head */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-[10px] font-mono text-text-muted">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent animate-pulse" />
                  <span>WAVNIX CAMPUS OS v2.4</span>
                </div>
                <span className="text-accent">SENSORS ONLINE</span>
              </div>

              {/* Dashboard Content depending on Active Module */}
              {activeModuleId === "admin" && (
                <div className="flex flex-col gap-4">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 bg-bg-elevated border border-white/5 rounded-lg text-center">
                      <span className="text-[9px] text-text-muted uppercase block font-mono">Students</span>
                      <span className="text-sm font-bold text-text-main font-display">1,480</span>
                    </div>
                    <div className="p-2.5 bg-bg-elevated border border-white/5 rounded-lg text-center">
                      <span className="text-[9px] text-text-muted uppercase block font-mono">Invoices Paid</span>
                      <span className="text-sm font-bold text-accent font-display">97.4%</span>
                    </div>
                    <div className="p-2.5 bg-bg-elevated border border-white/5 rounded-lg text-center">
                      <span className="text-[9px] text-text-muted uppercase block font-mono">Faculties</span>
                      <span className="text-sm font-bold text-text-main font-display">42</span>
                    </div>
                  </div>
                  {/* Administrative Table log */}
                  <div className="p-3 bg-bg-elevated border border-white/5 rounded-lg text-[10px] font-mono flex flex-col gap-2">
                    <div className="text-text-muted border-b border-white/5 pb-1.5 flex justify-between uppercase">
                      <span>AUDIT TRAIL LOG</span>
                      <span>STATUS</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Invoice #2049 generated for A. Rahman</span>
                      <span className="text-accent font-bold">PROCESSED</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Result cards compiled (Term 2 Exam)</span>
                      <span className="text-accent font-bold">COMPILED</span>
                    </div>
                    <div className="flex justify-between text-white/40">
                      <span>Host backup snapshot complete</span>
                      <span>IDLE</span>
                    </div>
                  </div>
                </div>
              )}

              {activeModuleId === "teacher" && (
                <div className="flex flex-col gap-4">
                  <div className="p-3 bg-bg-elevated border border-white/5 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-text-muted font-mono block uppercase">ACTIVE CLASSROOM</span>
                      <span className="text-sm font-bold text-text-main">Mathematics - Section B (Huda Campus)</span>
                    </div>
                    <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-0.5 rounded font-bold">LIVE</span>
                  </div>
                  {/* Students grading cards */}
                  <div className="flex flex-col gap-2">
                    <div className="p-2 bg-[#121814] border border-accent/20 rounded-lg flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-[10px]">TA</div>
                        <span className="text-text-main font-medium">Tariq Al-Sajjad</span>
                      </div>
                      <span className="font-mono text-accent font-bold">Grade: A (94%)</span>
                    </div>
                    <div className="p-2 bg-bg-elevated border border-white/5 rounded-lg flex justify-between items-center text-xs text-text-muted">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/5 text-text-muted flex items-center justify-center font-bold text-[10px]">YI</div>
                        <span>Yasmin Islam</span>
                      </div>
                      <span className="font-mono text-white/80">Grade: B+ (88%)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeModuleId === "student" && (
                <div className="flex flex-col gap-4">
                  <div className="border border-white/5 rounded-lg p-3 bg-bg-elevated text-xs flex flex-col gap-2">
                    <span className="text-[9px] text-text-muted font-mono uppercase">// SYLLABUS BENCHMARK PROGRESS</span>
                    <div className="flex justify-between text-text-main font-semibold">
                      <span>Unit 4: Advanced Database Normalization</span>
                      <span>85% Done</span>
                    </div>
                    <div className="w-full bg-bg-primary h-2 rounded-full overflow-hidden">
                      <div className="bg-accent h-full w-[85%] rounded-full shadow-neon" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="p-2 bg-bg-elevated border border-white/5 rounded-lg">
                      <span className="text-text-muted block">NEXT DUE:</span>
                      <span className="text-white font-bold">ERD Diagram (Today 11:59PM)</span>
                    </div>
                    <div className="p-2 bg-bg-elevated border border-white/5 rounded-lg">
                      <span className="text-text-muted block">INSTRUCTOR NOTE:</span>
                      <span className="text-accent">"Excellent schema work"</span>
                    </div>
                  </div>
                </div>
              )}

              {activeModuleId === "guardian" && (
                <div className="flex flex-col gap-3">
                  <div className="p-3 bg-[#121814] border border-accent/20 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-text-muted font-mono block">GUARDIAN SECURITY PROTOCOL</span>
                      <span className="text-xs text-text-main font-bold">Student Check-In: Tariq Al-Sajjad</span>
                    </div>
                  </div>
                  <div className="p-3 bg-bg-elevated border border-white/5 rounded-lg text-xs flex flex-col gap-2 font-mono">
                    <div className="flex justify-between text-white/70">
                      <span>Arrival registered:</span>
                      <span className="text-accent font-bold">07:54 AM (ON TIME)</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Departure registered:</span>
                      <span>02:10 PM</span>
                    </div>
                    <div className="flex justify-between text-white/40">
                      <span>Secure tuition installment billing:</span>
                      <span className="text-white/60 font-bold">PAID</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Decorative terminal log output */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-text-muted">
                <span>VERIFIED CRYPTO PROTOCOLS ACTIVE</span>
                <span className="text-accent/60">WAVNIX DATABASE SECURE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Call to Action for Demo */}
        <div className="mt-12 flex justify-center">
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors duration-200"
          >
            Schedule a Private Interactive Demonstration of Wavnix Campus
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
