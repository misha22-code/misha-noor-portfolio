import React from 'react';
import { Sparkles, Terminal, Shield, Workflow, Target, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const corePrinciples = [
    {
      icon: Shield,
      title: 'Architectural Honesty',
      description: 'I avoid the hyperbole. I deliver fast, robust, and highly secure codebases built explicitly for active deployment, not abstract visual larping.'
    },
    {
      icon: Target,
      title: 'Client-Centric Alignment',
      description: 'I view software through a business lens. Your startup goals shape my technical structure, whether that means prioritizing speed-to-market or ledger integrity.'
    },
    {
      icon: Workflow,
      title: 'Practical AI Integrations',
      description: 'No generic chat embeddings. I engineer practical LLM agents designed to ingest multi-source documents, automate back-office workloads, and guarantee safety.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0D14] relative">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-[#10B981]/5 via-transparent to-[#10B981]/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16 text-left">
          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            My Backstory
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            Meet Misha Noor
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-2"></div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-200">
              Transforming specifications into efficient digital systems.
            </h3>
            
            <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
              I am an AI & Full Stack Developer with a solid background in Computer Science. My focus is on creating modern web experiences, AI-powered platforms, interactive chatbot systems, and scalable automation pipelines.
            </p>
            
            <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
              Currently, I am working with <strong className="text-emerald-400 font-medium">Umti Tech Solutions</strong>, where I actively build and deploy stable web applications, process optimizers, and tailored client solutions. Over my career, I have successfully delivered <strong className="text-slate-200 font-semibold">10+ professional projects</strong> that bridge advanced AI engineering with robust backend infrastructure.
            </p>

            <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
              My approach avoids unnecessary complexity. Instead, I focus on delivering clean, readable code and natural-feeling user interfaces that keep critical transaction queues online without failure.
            </p>

            {/* Quick Skills list requested */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                Primary Core Focus:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'Flask',
                  'Generative AI',
                  'Full Stack Web Development',
                  'AI Chatbots',
                  'REST APIs'
                ].map((sk) => (
                  <span
                    key={sk}
                    className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/10 px-3 py-1.5 rounded-xl font-medium"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* LinkedIn & GitHub CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono font-medium text-slate-300 hover:text-emerald-400 transition-all duration-300"
              >
                LinkedIn Profile
                <span className="text-emerald-500">→</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono font-medium text-slate-300 hover:text-emerald-400 transition-all duration-300"
              >
                GitHub Codebases
                <span className="text-emerald-500">→</span>
              </a>
            </div>
          </div>

          {/* Interactive/Premium Card on the right */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            <div className="bg-[#0F1420] border border-slate-800/80 rounded-2xl p-6 text-left relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] uppercase tracking-wider mb-4 font-bold">
                <Sparkles size={14} />
                <span>Current Engagement Facts</span>
              </div>

              {/* Internal Principles Loop styled with Umti details */}
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Shield,
                    title: 'Umti Tech Solutions',
                    description: 'Deploying AI microservices, automated pipelines, and fast React dashboards.'
                  },
                  {
                    icon: Target,
                    title: '10+ Delivered Projects',
                    description: 'From RAG-based search engines to complete double-entry financial charts.'
                  },
                  {
                    icon: Workflow,
                    title: 'Computer Science Core',
                    description: 'Rigorous engineering standards with focus on algorithms and system design.'
                  }
                ].map((principle, index) => {
                  const IconComponent = principle.icon;
                  return (
                    <div key={index} className="flex gap-4 group">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-500/5 group-hover:bg-emerald-500/10 border border-slate-800 group-hover:border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-all duration-300">
                        <IconComponent size={18} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-display font-medium text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">
                          {principle.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Extra quick location/email facts tag */}
            <div className="bg-[#0D121F]/60 border border-slate-800/60 rounded-xl p-4 flex items-center justify-between text-left font-mono text-xs text-slate-400">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Location</span>
                <span className="text-slate-200">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex flex-col gap-0.5 text-right">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Contact Email</span>
                <span className="text-emerald-400">{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
