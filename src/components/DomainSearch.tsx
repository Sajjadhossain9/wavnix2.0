"use client";

import { useState } from "react";
import { Search, Loader2, CheckCircle2, XCircle, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Database, Server, Cpu } from "lucide-react";

interface DomainResult {
  domain: string;
  tld: string;
  available: boolean;
  price: string | null;
  renewPrice: string | null;
  isPremium: boolean;
  status: "available" | "unavailable";
}

export default function DomainSearch() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [searchedLabel, setSearchedLabel] = useState("");
  const [errorMsg, setErrorErrorMsg] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setErrorErrorMsg(null);
    setResults([]);

    try {
      const response = await fetch(`/api/domain?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (response.ok) {
        setResults(data.results || []);
        setSearchedLabel(data.resolvedLabel || query);
      } else {
        setErrorErrorMsg(data.error || "Failed to search domain. Check domain format.");
      }
    } catch (err) {
      console.error("Domain search error:", err);
      setErrorErrorMsg("Network interruption. Please check your system link.");
    } finally {
      setIsLoading(false);
    }
  };

  const hostingPlans = [
    {
      name: "Standard Cloud Core",
      price: "$12",
      period: "month",
      renewal: "Renews at $14.99/mo",
      desc: "Perfect for lightweight client portfolios, simple web portals, and static landing sites.",
      icon: Server,
      features: ["10 GB NVMe Storage", "1 TB Premium Bandwidth", "Free Let's Encrypt SSL", "1 x PostgreSQL DB Node", "Daily Automatic Backup"],
      badge: "STARTUP"
    },
    {
      name: "Enterprise Managed Suite",
      price: "$49",
      period: "month",
      renewal: "Renews at $59.99/mo",
      desc: "Designed for high-traffic custom ERPs, transactional portals, and secure active APIs.",
      icon: Database,
      features: ["50 GB NVMe Storage", "10 TB Premium Bandwidth", "Wildcard SLA Security SSL", "Clustered Postgres Support", "Hourly Snapshots + Cloud Relay"],
      badge: "POPULAR",
      popular: true
    },
    {
      name: "AI Infrastructure Engine",
      price: "$199",
      period: "month",
      renewal: "Renews at $229.99/mo",
      desc: "Optimized server containers for high-performance machine learning inference pipelines.",
      icon: Cpu,
      features: ["250 GB NVMe Storage", "Unmetered Bandwidth", "Custom TLS Gateway", "Dedicated Redis & Vector Cache", "24/7 Priority Architect Support"],
      badge: "ELITE"
    }
  ];

  return (
    <section id="domains" className="py-24 relative overflow-hidden bg-bg-primary border-t border-white/5">
      {/* Background visual accents */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// INTEGRATED REGISTRATION</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight">
            Domains & Resilient Hosting
          </h2>
          <p className="mt-4 text-text-muted text-base">
            Secure your global namespace instantly, then deploy your production modules directly onto Wavnix's secure enterprise cloud environment.
          </p>
        </div>

        {/* Domain Search Console */}
        <div className="max-w-3xl mx-auto bg-bg-elevated border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl mb-20 relative">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-lg font-display font-bold text-text-main mb-2">
            Secure Your Brand Name
          </h3>
          <p className="text-xs text-text-muted mb-6 font-mono">
            SEARCH MULTIPLE EXTENSIONS AT ONCE (.COM, .NET, .IO, .AI, .TECH)
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <input
                type="text"
                required
                placeholder="e.g. companyname"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-5 pr-12 py-3.5 bg-bg-primary border border-white/10 rounded-xl text-sm text-text-main placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/40">
                <span className="text-xs font-mono select-none">Enter</span>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-bg-primary bg-accent hover:bg-accent/90 disabled:opacity-50 rounded-xl transition-all shadow-neon flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Resolving...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Check Namespace
                </>
              )}
            </button>
          </form>

          {/* Error Message */}
          {errorMsg && (
            <div className="mt-4 p-3 bg-red-950/20 border border-red-500/20 text-red-200 text-xs rounded-xl flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Live Search Results */}
          {results.length > 0 && (
            <div className="mt-8 border-t border-white/5 pt-6 animate-fadeIn">
              <p className="text-[10px] font-mono text-text-muted uppercase mb-4 tracking-wider">
                LIVE REGISTRATION STATUS FOR label: <span className="text-accent">"{searchedLabel}"</span>
              </p>
              
              <div className="flex flex-col gap-2.5">
                {results.map((res) => (
                  <div
                    key={res.domain}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-bg-primary/60 border border-white/5 hover:border-white/10 rounded-xl transition-all gap-4"
                  >
                    <div className="flex items-center gap-3">
                      {res.available ? (
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-text-muted/40 flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-display font-bold text-sm text-text-main">{res.domain}</span>
                        {res.isPremium && (
                          <span className="ml-2 text-[9px] font-mono bg-accent/10 text-accent px-1.5 py-0.5 rounded uppercase">
                            PREMIUM
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6">
                      <div className="text-left sm:text-right">
                        {res.available ? (
                          <>
                            <span className="text-sm font-mono text-accent font-semibold">{res.price}</span>
                            <span className="text-[9px] text-text-muted block">First Year (then {res.renewPrice}/yr)</span>
                          </>
                        ) : (
                          <span className="text-xs text-text-muted font-mono">Unavailable (Registered)</span>
                        )}
                      </div>

                      {res.available ? (
                        <a
                          href="#estimate"
                          className="px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent hover:text-bg-primary transition-all duration-300"
                        >
                          Enquire Now
                        </a>
                      ) : (
                        <button
                          disabled
                          className="px-3.5 py-2 text-[10px] font-mono text-text-muted/30 border border-white/5 rounded-lg select-none"
                        >
                          Taken
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skeleton state during load */}
          {isLoading && (
            <div className="mt-8 border-t border-white/5 pt-6 flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 bg-bg-primary/50 animate-pulse rounded-xl border border-white/5" />
              ))}
            </div>
          )}

        </div>

        {/* Hosting plans Comparison */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">// HIGH-PERFORMANCE CLOUD DEPLOYMENTS</p>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-main tracking-tight">
              Production Hosting Architecture
            </h3>
            <p className="text-text-muted text-sm max-w-xl mx-auto mt-2">
              Our servers run under custom virtualizations optimizing static caches, distributed API runtimes, and fast PostgreSQL response indices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {hostingPlans.map((plan) => {
              const PlanIcon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative shadow-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-bg-elevated border-accent shadow-neon-strong"
                      : "bg-[#0B0F0C]/40 border-white/5 hover:border-white/15"
                  }`}
                >
                  
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-bg-primary text-[9px] font-bold uppercase tracking-widest rounded-full shadow-neon">
                      RECOMMENDED FOR ENTERPRISE
                    </div>
                  )}

                  {/* Plan Top Header */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="p-3 bg-bg-primary border border-white/10 text-accent rounded-xl">
                        <PlanIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono bg-white/5 text-text-muted px-2.5 py-1 rounded">
                        {plan.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-text-main mb-1">
                      {plan.name}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed mb-6 font-light">
                      {plan.desc}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 border-y border-white/5 py-4 mb-6">
                      <span className="text-3xl sm:text-4xl font-display font-bold text-text-main">{plan.price}</span>
                      <span className="text-xs text-text-muted">/ {plan.period}</span>
                      <span className="ml-auto text-[10px] font-mono text-accent/80">{plan.renewal}</span>
                    </div>

                    {/* Features list */}
                    <p className="text-[10px] font-mono uppercase tracking-wider text-text-main/70 mb-4">INCLUDED SPECIFICATIONS:</p>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feat) => (
                        <li key={feat} className="text-xs text-text-muted flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent/80 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deploy CTA */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <a
                      href="#estimate"
                      className={`w-full justify-center inline-flex items-center gap-2 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                        plan.popular
                          ? "bg-accent text-bg-primary hover:bg-accent/90 shadow-neon"
                          : "bg-bg-primary text-text-main border border-white/10 hover:border-accent/40"
                      }`}
                    >
                      Provision Infrastructure
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* SLA Assurance footer */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#0B0F0C]/30 border border-white/5 rounded-2xl max-w-4xl mx-auto text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>SLA GUARANTEE: 99.99% Network Availability and Redundant Daily Backup Nodes</span>
            </div>
            <span className="font-mono text-[10px] text-accent/80">Support ticket latency response &lt; 30 minutes</span>
          </div>

        </div>

      </div>
    </section>
  );
}
