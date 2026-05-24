import React from 'react';
import { Sparkles, Shield, Workflow, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {

  return (
    <section id="about" className="py-24 bg-[#0A0D14] relative">

      {/* Decorative vertical line */}
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

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">

            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-200">
              Building modern digital experiences with AI & web technologies.
            </h3>

            <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
              I am an AI & Full Stack Developer with a strong interest in building modern web applications, AI-powered tools, chatbot systems, and automation platforms.
            </p>

            <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
              Currently, I am working with <strong className="text-emerald-400 font-medium">Umti Tech Solutions</strong>, where I develop responsive web applications and smart business solutions for startups and clients.
            </p>

            <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
              Over time, I have worked on multiple real-world projects focused on web development, automation, and AI-based systems using modern technologies and frameworks.
            </p>

            {/* Primary Focus */}
            <div className="flex flex-col gap-3 mt-2">

              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                Primary Focus:
              </span>

              <div className="flex flex-wrap gap-2">

                {[
                  'Python',
                  'Flask',
                  'Generative AI',
                  'AI Chatbots',
                  'Full Stack Development',
                  'REST APIs'
                ].map((skill) => (

                  <span
                    key={skill}
                    className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/10 px-3 py-1.5 rounded-xl font-medium"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Social Buttons */}
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

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">

            <div className="bg-[#0F1420] border border-slate-800/80 rounded-2xl p-6 text-left relative overflow-hidden shadow-xl">

              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] uppercase tracking-wider mb-4 font-bold">

                <Sparkles size={14} />

                <span>Current Engagement Facts</span>

              </div>

              <div className="flex flex-col gap-5">

                {[
                  {
                    icon: Shield,
                    title: 'Umti Tech Solutions',
                    description: 'Building modern web applications, AI tools, and automation systems for startups and businesses.'
                  },
                  {
                    icon: Target,
                    title: '10+ Delivered Projects',
                    description: 'Worked on AI tools, business websites, chatbot systems, and automation platforms.'
                  },
                  {
                    icon: Workflow,
                    title: 'Computer Science Core',
                    description: 'Focused on clean development practices, scalable systems, and problem solving.'
                  }
                ].map((item, index) => {

                  const IconComponent = item.icon;

                  return (

                    <div key={index} className="flex gap-4 group">

                      <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-500/5 group-hover:bg-emerald-500/10 border border-slate-800 group-hover:border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-all duration-300">

                        <IconComponent size={18} />

                      </div>

                      <div className="flex flex-col gap-1">

                        <h4 className="font-display font-medium text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

            {/* Location + Email */}
            <div className="bg-[#0D121F]/60 border border-slate-800/60 rounded-xl p-4 flex items-center justify-between text-left font-mono text-xs text-slate-400">

              <div className="flex flex-col gap-0.5">

                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  Location
                </span>

                <span className="text-slate-200">
                  {PERSONAL_INFO.location}
                </span>

              </div>

              <div className="flex flex-col gap-0.5 text-right">

                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  Contact Email
                </span>

                <span className="text-emerald-400">
                  {PERSONAL_INFO.email}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}