import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#070A11] border-t border-slate-900/60 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
            Path &amp; Milestones
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            Professional History
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mt-1">
            Over three years of engineering smart APIs, full-stack application logic, and user-centric software tools.
          </p>
        </div>

        {/* Stacked Modern Cards */}
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((xp) => (
            <div
              key={xp.id}
              className="bg-[#0C111C]/60 border border-slate-800/80 hover:border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col gap-5 transition-colors duration-200"
            >
              {/* Header block with meta */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-900">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-semibold text-lg text-slate-100">
                    {xp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-sans">
                    <span className="font-medium text-slate-200 flex items-center gap-1">
                      <Briefcase size={12} className="text-slate-500" />
                      {xp.company}
                    </span>
                    <span className="text-slate-650">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-slate-500" />
                      {xp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-medium text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-0.5 rounded-lg">
                    <Calendar size={11} />
                    {xp.period}
                  </span>
                  {xp.isCurrent && (
                    <span className="self-start sm:self-auto text-[9px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                      Present Native Engagement
                    </span>
                  )}
                </div>
              </div>

              {/* Bullets List */}
              <ul className="flex flex-col gap-3">
                {xp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-2.5 items-start text-xs sm:text-[13px] text-slate-350 leading-relaxed font-sans">
                    <CheckCircle2 size={14} className="text-emerald-500/50 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies footer */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3.5 border-t border-slate-900/40">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-semibold mr-1">
                  Technologies Utilized:
                </span>
                {xp.skillsUtilized.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-900 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
