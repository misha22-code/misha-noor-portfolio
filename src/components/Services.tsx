import React from 'react';
import { Cpu, Code2, Zap, Sparkles, Terminal, Layers } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cpu: Cpu,
  Code2: Code2,
  Zap: Zap,
  Sparkles: Sparkles,
  Terminal: Terminal,
  Layers: Layers
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#070A11] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">
          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
            Offerings &amp; Specialties
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            Services &amp; Capabilities
          </h2>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed mt-1">
            Proven execution and delivery of customized software modules, language learning architectures, and API frameworks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = service.iconName && iconMap[service.iconName] ? iconMap[service.iconName] : Code2;
            
            return (
              <div
                key={service.id}
                className="bg-[#0C111C]/60 border border-slate-800/80 rounded-2xl p-6.5 flex flex-col justify-between gap-6 hover:border-emerald-500/10 transition-colors duration-300"
              >
                <div className="flex flex-col gap-4 text-left">
                  {/* Top line mapping */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-emerald-400">
                      <IconComponent size={16} />
                    </div>
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
                      Verified Area
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-medium text-base text-slate-150">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Clean point outline list summary simplified */}
                  <div className="flex flex-col gap-1.5 mt-2 border-t border-slate-900 pt-3">
                    {service.detailedPoints.slice(0, 3).map((point, idx) => (
                      <div key={idx} className="flex gap-2 items-center text-[11px] text-slate-350 font-sans">
                        <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                        <span className="leading-normal">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech specifications footer */}
                <div className="flex flex-wrap items-center gap-1 border-t border-slate-900 pt-3">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[9px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-950 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
