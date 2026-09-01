"use client";

import { Award, Terminal, Heart, Code, GitCommit, Coffee } from "lucide-react";

export default function StoryAndTeam() {
  const earlyLogs = [
    { commit: "a4f89d1", desc: "init wavnix: build customizable schema, deploy pg client" },
    { commit: "f2c311a", desc: "optimize query index: lower query latency from 80ms to 4ms" },
    { commit: "b88c341", desc: "deploy first custom edtech school portal pilot test" },
    { commit: "e5519ab", desc: "integrate high-throughput vector storage for neural pipelines" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-elevated/20 border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Nostalgic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// HUMAN ORIGINS</p>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-main tracking-tight leading-tight">
              Curiosity, Late Nights, <br />and Clean Code.
            </h2>

            <div className="mt-8 flex flex-col gap-6 text-text-muted text-base leading-relaxed font-light max-w-xl">
              <p>
                Wavnix didn't start in a corporate boardroom or a sleek glass skyscraper. It began in a quiet, dark room under the soft hum of cooling fans, fueled by nothing but cold coffee, curiosity, and an absolute obsession with making systems run faster.
              </p>
              <p>
                We spent years experimenting with low-level compilers, analyzing Postgres index queries, and designing user interfaces that felt alive. We saw a software landscape saturated with lazy templates, slow WordPress engines, and unverifiable statistics. We knew businesses deserved a technical partner who treats code as a premium digital asset.
              </p>
              <p>
                Today, Wavnix operates as an elite team of senior engineers and product strategists. We build high-availability software platforms that support clients from early blueprints to scale, ensuring that every deployment remains secure, fast, and remarkably robust.
              </p>
            </div>

            {/* Core Values indicator */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-xs font-mono text-text-main">
                <Code className="w-4 h-4 text-accent" />
                <span>Zero Technical Debt</span>
              </div>
              <span className="text-white/10 font-mono select-none">//</span>
              <div className="flex items-center gap-2 text-xs font-mono text-text-main">
                <Coffee className="w-4 h-4 text-accent" />
                <span>Senior Engineers Only</span>
              </div>
              <span className="text-white/10 font-mono select-none">//</span>
              <div className="flex items-center gap-2 text-xs font-mono text-text-main">
                <Heart className="w-4 h-4 text-accent" />
                <span>Bangladesh-Rooted, Global-Caliber</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal / Core Team illustration */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Mock Git Terminal */}
            <div className="bg-[#050706] border border-white/5 rounded-2xl p-5 shadow-2xl relative select-none">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-mono text-text-muted">bash - git log --oneline -n 4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/5" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/5" />
                </div>
              </div>

              <div className="flex flex-col gap-3 font-mono text-xs">
                {earlyLogs.map((log) => (
                  <div key={log.commit} className="flex gap-3 leading-relaxed">
                    <span className="text-accent hover:text-white font-semibold flex items-center gap-1">
                      <GitCommit className="w-3.5 h-3.5 flex-shrink-0" />
                      {log.commit}
                    </span>
                    <span className="text-text-muted font-light">{log.desc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-text-muted">
                <span>REPOS: main_branch // secure_production</span>
                <span>Active 2026</span>
              </div>
            </div>

            {/* Core Team card */}
            <div className="p-5 bg-[#0B0F0C] border border-white/5 rounded-2xl shadow-xl flex flex-col gap-4">
              <span className="text-[9px] font-mono text-accent uppercase tracking-widest">// SYSTEM ARCHITECTURE LEADERSHIP</span>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bg-primary via-accent/20 to-bg-primary border border-white/10 flex items-center justify-center font-display font-black text-accent text-lg">
                  SH
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-text-main">Sajjad Hossain</h4>
                  <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider mt-0.5">
                    Lead Systems Engineer & CAO
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-muted leading-relaxed font-light">
                Oversees relational database topology design, Next.js system parameters, and high-performance server integrations across all custom client projects.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
