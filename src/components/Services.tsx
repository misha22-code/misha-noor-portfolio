import React from 'react';
import {
  Cpu,
  Code2,
  Zap,
  Sparkles,
  Terminal,
  Layers
} from 'lucide-react';

import { SERVICES } from '../data';

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Cpu: Cpu,
  Code2: Code2,
  Zap: Zap,
  Sparkles: Sparkles,
  Terminal: Terminal,
  Layers: Layers
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[#070A11] border-t border-slate-900/60 relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">

          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            Services I Offer
          </span>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            Solutions for Startups & Businesses
          </h2>

          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed mt-1">
            Helping businesses build modern websites, AI-powered tools,
            automation systems, scalable backend APIs, and custom digital
            platforms tailored to real business needs.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {SERVICES.map((service) => {

            const IconComponent =
              service.iconName && iconMap[service.iconName]
                ? iconMap[service.iconName]
                : Code2;

            return (

              <div
                key={service.id}
                className="bg-[#0C111C]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between gap-6 hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-1"
              >

                <div className="flex flex-col gap-4 text-left">

                  {/* Top */}
                  <div className="flex items-center justify-between">

                    <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-emerald-400">

                      <IconComponent size={18} />

                    </div>

                    <span className="font-mono text-[10px] text-emerald-400/70 uppercase tracking-widest font-semibold">
                      Professional Service
                    </span>

                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-2">

                    <h3 className="font-display font-semibold text-base text-slate-100">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>

                  </div>

                  {/* Service Points */}
                  <div className="flex flex-col gap-2 mt-2 border-t border-slate-900 pt-4">

                    {service.detailedPoints
                      .slice(0, 3)
                      .map((point, idx) => (

                        <div
                          key={idx}
                          className="flex gap-2 items-start text-[12px] text-slate-400"
                        >

                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 mt-1.5 shrink-0" />

                          <span className="leading-relaxed">
                            {point}
                          </span>

                        </div>

                      ))}

                  </div>

                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-2 border-t border-slate-900 pt-4">

                  {service.techStack.map((tech) => (

                    <span
                      key={tech}
                      className="font-mono text-[10px] text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800"
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
