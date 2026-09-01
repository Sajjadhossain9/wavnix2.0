"use client";

import { useState } from "react";
import { Check, CheckCircle2, ChevronLeft, ChevronRight, HelpCircle, Landmark, ShieldCheck, Sparkles } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
}

export default function ProjectEstimator() {
  const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
  const steps: Step[] = [
    { id: 1, title: "System Segment", description: "Choose the core technology solution" },
    { id: 2, title: "Scale & Volume", description: "Select the size of your platform" },
    { id: 3, title: "Add-on Features", description: "Incorporate specialized modules" },
    { id: 4, title: "Consultation Form", description: "Secure your calculation & book" },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  // Selections state
  const [selectedSegment, setSelectedSegment] = useState<string>("software");
  const [selectedScale, setSelectedScale] = useState<string>("professional");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Client details
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [timeline, setTimeline] = useState("3_6_months");
  const [notes, setNotes] = useState("");

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Pricing Logic Data
  const segments = [
    { id: "software", label: "Custom Software Development", basePrice: 15000, desc: "Bespoke internal ERPs, administrative software, API databases, and integrations." },
    { id: "ai", label: "AI & Cognitive Automation", basePrice: 20000, desc: "Custom LLM integrations, document parser networks, and predictive pipelines." },
    { id: "web", label: "High-Performance Web/Mobile App", basePrice: 10000, desc: "Elegant, lightning-fast client interfaces and hybrid mobile apps." },
    { id: "edtech", label: "Enterprise EdTech Platform", basePrice: 18000, desc: "Wavnix Campus-powered academic control suite and dual portals." },
    { id: "cloud", label: "Cloud & Microservices Core", basePrice: 12000, desc: "Resilient server cluster orchestration, Docker setup, and Postgres clustering." },
  ];

  const scales = [
    { id: "startup", label: "Startup MVP & Launch", multiplier: 1.0, desc: "Perfect for proving concepts with absolute speed and lightweight focus." },
    { id: "professional", label: "Professional Expansion", multiplier: 1.4, desc: "Engineered for high growth, with complete testing and moderate scaling." },
    { id: "enterprise", label: "Large-Scale Enterprise", multiplier: 2.0, desc: "Military-grade compliance, high concurrent loads, and 24/7 telemetry support." },
  ];

  const addons = [
    { id: "db_failover", label: "Multi-Region DB Failover", price: 3500, desc: "Ensures redundant hot standby nodes with automated cluster sync." },
    { id: "ai_finetuning", label: "Dedicated Model Fine-Tuning", price: 5000, desc: "Optimized weights custom-trained on private enterprise datasets." },
    { id: "sec_penetration", label: "Penetration Testing & Security Audit", price: 4000, desc: "Third-party validation, code coverage analysis, and OAuth protection." },
    { id: "marketing_seo", label: "SEO Telemetry & Funnel Engine", price: 2000, desc: "Configured tracking systems to monitor acquisition loops instantly." },
  ];

  // Helper calculation
  const getSegmentPriceObj = () => segments.find(s => s.id === selectedSegment) || segments[0];
  const getScalePriceObj = () => scales.find(sc => sc.id === selectedScale) || scales[0];

  const calculateEstimate = () => {
    const segmentBase = getSegmentPriceObj().basePrice;
    const scaleMult = getScalePriceObj().multiplier;
    const addonsSum = selectedAddons.reduce((sum, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const midCost = (segmentBase * scaleMult) + addonsSum;
    const lowCost = Math.round(midCost * 0.9);
    const highCost = Math.round(midCost * 1.15);

    return {
      range: `$${lowCost.toLocaleString()} - $${highCost.toLocaleString()}`,
      lowCost,
      highCost
    };
  };

  const handleAddonToggle = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!clientName.trim() || !clientEmail.trim()) {
      setSubmitError("Please fill out both name and email fields.");
      return;
    }

    setIsSubmitting(true);
    const calculation = calculateEstimate();

    try {
      if (isStaticExport) {
        const selectedFeatures = [
          `Scale: ${getScalePriceObj().label}`,
          ...selectedAddons.map((id) => addons.find((addon) => addon.id === id)?.label || id),
        ];
        const subject = encodeURIComponent(`Wavnix project estimate: ${getSegmentPriceObj().label}`);
        const body = encodeURIComponent(
          `Name: ${clientName}\nEmail: ${clientEmail}\nProject: ${getSegmentPriceObj().label}\nEstimate: ${calculation.range}\nFeatures: ${selectedFeatures.join(", ")}\nTimeline: ${timeline}\nNotes: ${notes || "None"}`
        );
        window.location.assign(`mailto:hello@wavnix.com?subject=${subject}&body=${body}`);
        setSubmitSuccess("Your email app has been opened with the estimate details.");
        return;
      }

      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: clientName,
          email: clientEmail,
          projectType: getSegmentPriceObj().label,
          estimatedCostRange: calculation.range,
          selectedFeatures: [
            `Scale: ${getScalePriceObj().label}`,
            ...selectedAddons.map(id => addons.find(a => a.id === id)?.label || id)
          ],
          timeline,
          notes,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(data.message || "Your project estimate has been submitted successfully!");
        // Reset state
        setClientName("");
        setClientEmail("");
        setNotes("");
        setSelectedAddons([]);
      } else {
        setSubmitError(data.error || "A submission error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Estimator error:", err);
      setSubmitError("Failed to submit. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeCost = calculateEstimate();

  return (
    <section id="estimate" className="py-24 relative overflow-hidden bg-bg-primary border-t border-white/5">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-left mb-16 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// ARCHITECT COSTING</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight">
            Interactive Project Estimator
          </h2>
          <p className="mt-4 text-text-muted text-base">
            Configure your technical needs, scale volume, and enterprise integrations below. Our pricing logic generates realistic planning ranges immediately.
          </p>
        </div>

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Costing form */}
          <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 bg-bg-elevated border border-white/5 rounded-3xl relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-6 mb-8 overflow-x-auto">
              {steps.map((st) => (
                <div key={st.id} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border transition-all duration-300 ${
                      currentStep === st.id
                        ? "bg-accent text-bg-primary border-accent shadow-neon"
                        : currentStep > st.id
                        ? "bg-transparent text-accent border-accent/40"
                        : "bg-transparent text-text-muted border-white/10"
                    }`}
                  >
                    {currentStep > st.id ? <Check className="w-4 h-4" /> : st.id}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className={`text-xs font-bold leading-none ${currentStep === st.id ? "text-text-main" : "text-text-muted"}`}>
                      {st.title}
                    </p>
                    <p className="text-[9px] text-text-muted/60 mt-0.5">{st.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Steps Panels */}
            <div className="flex-grow">
              
              {/* STEP 1: SEGMENT */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <h3 className="text-lg font-display font-semibold text-text-main">
                    Select Your Project Core Solution
                  </h3>
                  <p className="text-sm text-text-muted mb-4 font-light">
                    Every project is allocated dedicated senior software architects to oversee structural design.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {segments.map((seg) => (
                      <button
                        key={seg.id}
                        type="button"
                        onClick={() => setSelectedSegment(seg.id)}
                        className={`text-left p-5 rounded-xl border transition-all duration-200 focus:outline-none ${
                          selectedSegment === seg.id
                            ? "bg-[#151D17]/40 border-accent text-text-main shadow-inner"
                            : "bg-[#050706]/40 border-white/5 text-text-muted hover:border-white/15"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-display font-bold text-sm tracking-tight text-text-main">
                            {seg.label}
                          </p>
                          <span className="text-xs font-mono text-accent">
                            Base: ${seg.basePrice.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-text-muted font-light leading-relaxed">
                          {seg.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: SCALE */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <h3 className="text-lg font-display font-semibold text-text-main">
                    Define the Scope & Scale
                  </h3>
                  <p className="text-sm text-text-muted mb-4 font-light">
                    Scaling modifies depth of deployment pipelines, load benchmarks, compliance checks, and redundancies.
                  </p>
                  <div className="flex flex-col gap-3">
                    {scales.map((sc) => (
                      <button
                        key={sc.id}
                        type="button"
                        onClick={() => setSelectedScale(sc.id)}
                        className={`text-left p-5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-6 focus:outline-none ${
                          selectedScale === sc.id
                            ? "bg-[#151D17]/40 border-accent text-text-main shadow-inner"
                            : "bg-[#050706]/40 border-white/5 text-text-muted hover:border-white/15"
                        }`}
                      >
                        <div className="max-w-md">
                          <p className="font-display font-bold text-sm tracking-tight text-text-main">
                            {sc.label}
                          </p>
                          <p className="text-xs text-text-muted mt-1 font-light leading-relaxed">
                            {sc.desc}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <span className="text-xs font-mono text-accent">
                            x{sc.multiplier.toFixed(1)} Cost Factor
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: ADD-ONS */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <h3 className="text-lg font-display font-semibold text-text-main">
                    Optional Specialized Modules
                  </h3>
                  <p className="text-sm text-text-muted mb-4 font-light">
                    Upgrade your base platform with industry-standard failovers, advanced model parameters, or verified security tests.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {addons.map((add) => {
                      const isSelected = selectedAddons.includes(add.id);
                      return (
                        <button
                          key={add.id}
                          type="button"
                          onClick={() => handleAddonToggle(add.id)}
                          className={`text-left p-5 rounded-xl border transition-all duration-200 focus:outline-none relative flex flex-col justify-between ${
                            isSelected
                              ? "bg-[#151D17]/40 border-accent text-text-main shadow-inner"
                              : "bg-[#050706]/40 border-white/5 text-text-muted hover:border-white/15"
                          }`}
                        >
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <p className="font-display font-bold text-sm tracking-tight text-text-main">
                              {add.label}
                            </p>
                            <span className="text-xs font-mono text-accent flex-shrink-0">
                              +${add.price.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-xs text-text-muted font-light leading-relaxed">
                            {add.desc}
                          </p>
                          {isSelected && (
                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-bg-primary">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SUBMIT */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fadeIn">
                  <h3 className="text-lg font-display font-semibold text-text-main">
                    Complete Your Estimate & Book Consultation
                  </h3>
                  <p className="text-sm text-text-muted mb-4 font-light">
                    Submit your estimation configuration directly to our cloud database. An architectural technician will analyze your results and reach out within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="client-name" className="text-xs font-mono text-text-muted uppercase">Your Full Name *</label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        placeholder="e.g. Sajjad Hossain"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="client-email" className="text-xs font-mono text-text-muted uppercase">Work Email Address *</label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        placeholder="e.g. partner@company.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="project-timeline" className="text-xs font-mono text-text-muted uppercase">Target Timeline</label>
                      <select
                        id="project-timeline"
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none appearance-none"
                      >
                        <option value="rapid_mvp">Rapid MVP (1-2 months)</option>
                        <option value="3_6_months">Standard Delivery (3-6 months)</option>
                        <option value="continuous_scale">Enterprise Continuous (6+ months)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="notes" className="text-xs font-mono text-text-muted uppercase">Project Details / Specific Blockers</label>
                      <input
                        id="notes"
                        type="text"
                        placeholder="Tell us about existing tech bottlenecks..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none"
                      />
                    </div>
                  </div>

                  {/* Feedback elements */}
                  {submitSuccess && (
                    <div className="p-4 bg-accent/10 border border-accent/40 rounded-xl flex items-center gap-3 text-accent text-sm">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>{submitSuccess}</span>
                    </div>
                  )}

                  {submitError && (
                    <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-xl flex items-center gap-3 text-red-200 text-sm">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>{submitError}</span>
                    </div>
                  )}
                </form>
              )}

            </div>

            {/* Back & Next Controls Footer */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                  currentStep === 1
                    ? "text-text-muted/30 pointer-events-none"
                    : "text-text-muted hover:text-text-main hover:bg-white/5"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent/90 rounded-lg shadow-neon"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-bg-primary bg-accent hover:bg-accent/90 rounded-lg shadow-neon-strong disabled:opacity-50"
                >
                  {isSubmitting ? "Preparing Inquiry..." : isStaticExport ? "Open Email Inquiry" : "Submit Inquiry"}
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Live Range & Spec Board */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 bg-[#0B0F0C] border border-white/5 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Soft accent background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <p className="text-[10px] font-mono uppercase tracking-widest text-accent/80">// ACTIVE SPEC SHEET</p>
              
              {/* Calculated Range Display */}
              <div className="mt-6">
                <p className="text-xs text-text-muted uppercase tracking-wider font-mono">PLANNING PRICE ESTIMATE</p>
                <p className="text-3xl sm:text-4xl font-display font-bold text-accent mt-2 tracking-tight">
                  {activeCost.range}
                </p>
                <p className="text-[10px] text-text-muted mt-1 font-mono">
                  Calculated based on live modifier values.
                </p>
              </div>

              {/* Items Breakdown list */}
              <div className="mt-8 border-t border-white/5 pt-6 flex flex-col gap-4">
                <div>
                  <p className="text-[9px] font-mono text-text-muted uppercase">SYSTEM CORE SEGMENT</p>
                  <p className="text-sm font-semibold text-text-main mt-0.5">{getSegmentPriceObj().label}</p>
                </div>

                <div>
                  <p className="text-[9px] font-mono text-text-muted uppercase">CONCURRENCY & COMPLIANCE</p>
                  <p className="text-sm font-semibold text-text-main mt-0.5">{getScalePriceObj().label}</p>
                </div>

                <div>
                  <p className="text-[9px] font-mono text-text-muted uppercase">SELECTED PLUGINS ({selectedAddons.length})</p>
                  {selectedAddons.length === 0 ? (
                    <p className="text-xs text-text-muted mt-0.5 font-light">None selected (using default core package)</p>
                  ) : (
                    <div className="flex flex-col gap-1 mt-1">
                      {selectedAddons.map(id => {
                        const ad = addons.find(a => a.id === id);
                        return ad ? (
                          <div key={id} className="flex justify-between items-center text-xs text-text-main">
                            <span className="font-light">✓ {ad.label}</span>
                            <span className="font-mono text-accent text-[10px]">+${ad.price}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Note that this is an estimate */}
            <div className="mt-8 pt-6 border-t border-white/5 relative z-10 flex items-start gap-2 text-[10px] text-text-muted leading-relaxed font-mono">
              <ShieldCheck className="w-4 h-4 text-accent/80 flex-shrink-0" />
              <span>Calculations represent project launch costs. Exact technical terms, custom SLA requirements, and billing schedules will be established in the initial discovery chat.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
