import React from 'react';
import { Code2, ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#070A11] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">
          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
            Technical Arsenal
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed mt-1">
            Engineered with modern frameworks, reliable data storage, and efficient, secure server endpoints.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-[#0C111C]/60 border border-slate-800/80 rounded-2xl p-6.5 flex flex-col gap-5 hover:border-emerald-500/10 transition-colors duration-300"
            >
              <div className="flex flex-col gap-1.5 pb-2.5 border-b border-slate-800/80">
                <span className="font-mono text-[9px] text-emerald-400/80 font-bold uppercase tracking-widest">
                  Category 0{catIdx + 1}
                </span>
                <h3 className="font-display font-semibold text-sm text-slate-250">
                  {category.category}
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-2">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center justify-between py-1.5 px-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                      <span className="text-sm text-slate-300 font-sans font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-450 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-900">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Focus Area note */}
        <div className="mt-8 py-5 px-6 bg-[#090D15]/40 border border-slate-800/50 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <p className="text-[11px] text-slate-400 leading-normal max-w-2xl font-sans">
            <strong className="text-slate-200">System Methodologies:</strong> Dual focus on API latency optimization, prompt calibration to guard against model hallucination, and standard software quality benchmarks.
          </p>
          <a
            href="https://github.com/misha22-code"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-400 font-mono font-medium transition-colors"
          >
            <span>Inspect Repositories</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
