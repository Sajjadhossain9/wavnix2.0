"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send, Loader2, MessageSquare, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(data.message || "Thank you! Your message has been sent successfully.");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setErrorMsg(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setErrorMsg("Failed to connect to server. Please check your network link.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const currentYear = 2026;

  return (
    <footer id="contact" className="relative pt-24 bg-bg-primary border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Section: CTA & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/5 pb-20">
          
          {/* Left Column: Final Call to Action */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// START THE CONVERSATION</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight leading-tight">
                Have an idea <br />worth building?
              </h2>
              <p className="mt-6 text-text-muted text-base font-light leading-relaxed max-w-sm">
                Let's construct a premium digital asset. Whether you need an intelligent automation system, custom database, or modern web presence, we engineer it to perfection.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="mt-12 flex flex-col gap-5 text-sm font-mono">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-elevated border border-white/5 flex items-center justify-center text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">Secure Email link</span>
                  <a href="mailto:hello@wavnix.com" className="text-text-main hover:text-accent transition-colors font-semibold">
                    hello@wavnix.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-elevated border border-white/5 flex items-center justify-center text-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">Primary Hub</span>
                  <span className="text-text-main font-semibold">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-bg-elevated border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="text-lg font-display font-bold text-text-main mb-2">
                Inquire Directly
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-text-muted uppercase">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Sajjad Hossain"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-text-muted uppercase">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. sajjad@wavnix.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-company" className="text-xs font-mono text-text-muted uppercase">Company / Institution (Optional)</label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="e.g. Madrasah Darul Huda"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-text-muted uppercase">Briefly describe your objectives *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="What systems are you looking to design or accelerate?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-3 bg-bg-primary border border-white/10 rounded-lg text-sm text-text-main focus:border-accent outline-none resize-none"
                />
              </div>

              {/* Status messages */}
              {successMsg && (
                <div className="p-4 bg-accent/10 border border-accent/40 rounded-lg flex items-center gap-3 text-accent text-xs">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-200 text-xs">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full justify-center inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-bg-primary bg-accent hover:bg-accent/90 disabled:opacity-50 rounded-lg transition-all shadow-neon"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    PERSISTING SECURE CONNECTION...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    ESTABLISH SECURE LINK
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-b border-white/5">
          
          {/* Positioning statement */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-[10] stroke-accent">
                <path d="M10 20 L40 80 L60 40 L75 70 L90 20" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-lg font-display font-black tracking-tight text-text-main">
                WAV<span className="text-accent">NIX</span>
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed font-light max-w-xs">
              A premium, global-caliber software and AI service company engineering beautiful, high-availability digital solutions.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://github.com/Sajjadhossain9/wavnix" target="_blank" rel="noopener noreferrer" className="p-2 bg-bg-elevated border border-white/5 rounded-lg text-text-muted hover:text-accent hover:border-accent/40 transition-all" aria-label="Github">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.182-1.304.282-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-bg-elevated border border-white/5 rounded-lg text-text-muted hover:text-accent hover:border-accent/40 transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-bg-elevated border border-white/5 rounded-lg text-text-muted hover:text-accent hover:border-accent/40 transition-all" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-1.002-2.178-1.63-3.591-1.63-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.067 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.909 2.105-6.315 2.105-.411 0-.818-.023-1.22-.072 2.179 1.396 4.768 2.21 7.548 2.21 9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.015-.637.961-.695 1.8-1.562 2.46-2.549z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-bg-elevated border border-white/5 rounded-lg text-text-muted hover:text-accent hover:border-accent/40 transition-all" aria-label="Discord">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <p className="text-xs font-mono font-bold text-text-main uppercase tracking-wider mb-4">SOLUTIONS</p>
            <ul className="flex flex-col gap-2.5 text-xs text-text-muted">
              <li><button onClick={() => scrollToSection("solutions")} className="hover:text-accent transition-colors">Custom Software</button></li>
              <li><button onClick={() => scrollToSection("solutions")} className="hover:text-accent transition-colors">AI & Automation</button></li>
              <li><button onClick={() => scrollToSection("solutions")} className="hover:text-accent transition-colors">Web & Mobile Apps</button></li>
              <li><button onClick={() => scrollToSection("solutions")} className="hover:text-accent transition-colors">Education Tech</button></li>
              <li><button onClick={() => scrollToSection("solutions")} className="hover:text-accent transition-colors">Cloud Microservices</button></li>
            </ul>
          </div>

          {/* Core Projects Column */}
          <div>
            <p className="text-xs font-mono font-bold text-text-main uppercase tracking-wider mb-4">WORK</p>
            <ul className="flex flex-col gap-2.5 text-xs text-text-muted">
              <li><button onClick={() => scrollToSection("work")} className="hover:text-accent transition-colors">Madrasah Darul Huda</button></li>
              <li><button onClick={() => scrollToSection("work")} className="hover:text-accent transition-colors">AIM Construction</button></li>
              <li><button onClick={() => scrollToSection("work")} className="hover:text-accent transition-colors">AAUB Blood Connect</button></li>
              <li><button onClick={() => scrollToSection("domains")} className="hover:text-accent transition-colors">Domain Search Engine</button></li>
              <li><button onClick={() => scrollToSection("product")} className="hover:text-accent transition-colors">Wavnix Campus Suite</button></li>
            </ul>
          </div>

          {/* Company links Column */}
          <div>
            <p className="text-xs font-mono font-bold text-text-main uppercase tracking-wider mb-4">RESOURCES</p>
            <ul className="flex flex-col gap-2.5 text-xs text-text-muted">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors">Our Human Story</button></li>
              <li><button onClick={() => scrollToSection("estimate")} className="hover:text-accent transition-colors">Project Estimator</button></li>
              <li><button onClick={() => scrollToSection("domains")} className="hover:text-accent transition-colors">Hosting Architecture</button></li>
              <li><a href="mailto:hello@wavnix.com" className="hover:text-accent transition-colors">Direct Support</a></li>
              <li><span className="text-[10px] font-mono bg-accent/10 text-accent px-1.5 py-0.5 rounded uppercase">API ONLINE</span></li>
            </ul>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-xs text-text-muted">
          <span>&copy; {currentYear} Wavnix. All rights reserved. Deployed with premium standard guidelines.</span>
          <div className="flex items-center gap-6 font-mono text-[10px]">
            <a href="#" className="hover:text-accent transition-colors">TERMS OF SERVICE</a>
            <span className="text-white/10 select-none">|</span>
            <a href="#" className="hover:text-accent transition-colors">PRIVACY POLICY</a>
            <span className="text-white/10 select-none">|</span>
            <a href="#" className="hover:text-accent transition-colors">SLA STANDARDS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
