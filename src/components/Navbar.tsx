"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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

  const navItems = [
    { label: "Solutions", target: "solutions" },
    { label: "Work", target: "work" },
    { label: "Estimate", target: "estimate" },
    { label: "Domains", target: "domains" },
    { label: "Product", target: "product" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050706]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Custom SVG Geometric Wavnix Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Wavnix Home"
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-bg-elevated border border-white/10 rounded-lg group-hover:border-accent/40 transition-colors">
              <svg
                viewBox="0 0 100 100"
                className="w-5 h-5 fill-none stroke-[10] stroke-accent group-hover:scale-110 transition-transform"
              >
                <path d="M10 20 L40 80 L60 40 L75 70 L90 20" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute inset-0 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-text-main group-hover:text-accent transition-colors">
              WAV<span className="text-accent">NIX</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="px-3.5 py-1.5 text-sm font-medium text-text-muted hover:text-text-main hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Consultation Primary CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection("estimate")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent/90 rounded-md shadow-neon hover:shadow-neon-strong transition-all duration-300 transform active:scale-95"
            >
              Free Consultation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-text-muted hover:text-accent hover:bg-white/5 rounded-md transition-colors focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-lg md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 pt-24">
          <nav className="flex flex-col gap-4 text-center">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="py-2.5 text-lg font-display font-medium text-text-muted hover:text-accent hover:bg-white/5 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-12">
            <button
              onClick={() => scrollToSection("estimate")}
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent/90 rounded-lg shadow-neon text-center"
            >
              Free Consultation
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-text-muted">
              Ready to construct premium digital systems?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
