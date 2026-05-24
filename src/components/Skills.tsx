import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-[#070A11] border-t border-slate-900/60 relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">

          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
            Tech Stack & Expertise
          </span>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            Skills &amp; Technologies
          </h2>

          <p className="text-slate-400 text-sm max-w-xl leading-relaxed mt-1">
            Technologies I use to build modern websites, AI applications,
            automation systems, and scalable digital products.
          </p>

        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {SKILL_CATEGORIES.map((category, catIdx) => (

            <div
              key={catIdx}
              className="bg-[#0C111C]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-5 hover:border-emerald-500/20 transition-all duration-300"
            >

              {/* Category Header */}
              <div className="flex flex-col gap-1.5 pb-2.5 border-b border-slate-800/80">

                <span className="font-mono text-[10px] text-emerald-400/80 font-bold uppercase tracking-widest">

                  {catIdx === 0 && 'AI & Backend'}
                  {catIdx === 1 && 'Web Development'}
                  {catIdx === 2 && 'Machine Learning'}

                </span>

                <h3 className="font-display font-semibold text-sm text-slate-200">
                  {category.category}
                </h3>

              </div>

              {/* Skills */}
              <div className="flex flex-col gap-2">

                {category.items.map((skill, skillIdx) => (

                  <div
                    key={skillIdx}
                    className="flex items-center justify-between py-2 px-1 rounded-lg hover:bg-slate-900/40 transition-all duration-200"
                  >

                    <div className="flex items-center gap-2">

                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />

                      <span className="text-sm text-slate-300 font-medium">
                        {skill.name}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-8 py-5 px-6 bg-[#090D15]/40 border border-slate-800/50 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">

          <p className="text-[12px] text-slate-400 leading-relaxed max-w-2xl font-sans">

            <strong className="text-slate-200">
              Development Approach:
            </strong>{' '}

            Focused on building clean, scalable, and user-friendly digital
            solutions with performance, security, and real-world usability
            in mind.

          </p>

          <a
            href="https://github.com/misha22-code"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-400 font-mono font-medium transition-colors"
          >

            <span>View GitHub</span>

            <ArrowUpRight size={13} />

          </a>

        </div>

      </div>
    </section>
  );
}