import React from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MessageSquare, Terminal, User, Code2, Cpu, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

// @ts-ignore
import profileImg from '../assets/images/profile_avatar_1779278401258.png';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern bg-[#0B0F17]"
    >
      {/* Soft Animated Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-emerald-600/5 blur-[160px] pointer-events-none animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] rounded-full bg-teal-500/5 blur-[90px] pointer-events-none animate-pulse-slow delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Status Badge */}
          <motion.div
            id="hero-status-tag"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.05)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Available for Select Client Work
          </motion.div>

          {/* Heading Container */}
          <div className="flex flex-col gap-2">
            <motion.span
              id="hero-greeting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-emerald-400 font-semibold text-sm tracking-wider uppercase"
            >
              Misha Noor &mdash; Developer Portfolio
            </motion.span>
            
            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[52px] text-slate-100 tracking-tight leading-[1.12]"
            >
              Building Smart Web &amp; AI Solutions
            </motion.h1>
          </div>

          {/* Subheading / Description */}
          <motion.p
            id="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-350 text-base sm:text-lg font-sans max-w-xl leading-relaxed"
          >
            I develop modern websites, AI tools, chatbot systems, and automation solutions for startups and businesses.
          </motion.p>

          {/* Buttons & Social Link Group */}
          <motion.div
            id="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <button
              id="hero-cta-projects"
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-semibold text-sm rounded-xl cursor-pointer shadow-[0_4px_22px_rgba(16,185,129,0.35)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
              <ArrowDownRight size={16} />
            </button>
            <button
              id="hero-cta-contact"
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#131B2A] hover:bg-[#1A2538] border border-slate-750 hover:border-emerald-500/40 text-slate-250 hover:text-emerald-400 font-sans font-semibold text-sm rounded-xl transition-all duration-300 cursor-pointer"
            >
              Contact Me
              <MessageSquare size={16} />
            </button>
            <a
              id="hero-cta-resume"
              href="/resume/Misha-Noor-Resume.pdf"
              download="Misha-Noor-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-950 hover:bg-[#0E1524] border border-slate-800/80 hover:border-emerald-500/25 text-slate-300 hover:text-emerald-400 font-sans font-medium text-xs rounded-xl transition-all duration-305 cursor-pointer hover:-translate-y-0.5 shadow-sm group/resume"
            >
              <span>&rarr; Download Resume</span>
              <Download size={13} className="text-slate-500 group-hover/resume:text-emerald-400 transition-colors" />
            </a>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-3 ml-0 sm:ml-4 py-2 border-t sm:border-t-0 sm:border-l border-slate-800 sm:pl-6 w-full sm:w-auto mt-4 sm:mt-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image & Visual representation Column */}
        <motion.div
          id="hero-profile-container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <div className="relative group w-full max-w-[360px] sm:max-w-[380px]">
            {/* Background absolute subtle neon border effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/25 to-teal-500/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative bg-[#0E1524] rounded-2xl border border-slate-800/80 p-6 overflow-hidden shadow-2xl flex flex-col gap-6">
              
              {/* Profile Image Space */}
              <div id="hero-profile-avatar" className="relative w-44 h-44 mx-auto rounded-full bg-[#111827] border-2 border-emerald-500/20 p-1 flex items-center justify-center overflow-hidden group/avatar shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 group-hover:border-emerald-400/50">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={profileImg}
                    alt="Misha Noor Avatar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover/avatar:scale-105"
                  />
                  {/* Subtle dark layout vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/30 via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Mini status indicator light */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/85 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium shadow-[0_2px_8px_rgba(16,185,129,0.15)] backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </div>
              </div>

              {/* Developer Status Meta */}
              <div className="flex flex-col gap-0.5 text-center mt-1">
                <span className="font-display font-bold text-slate-200 text-base">{PERSONAL_INFO.name}</span>
                <span className="font-mono text-emerald-400 text-xs">{PERSONAL_INFO.title}</span>
                <span className="font-sans text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Islamabad, Pakistan
                </span>
              </div>

              {/* Live Mini Stats Rows inside Profile card */}
              <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-slate-800/80">
                <div className="bg-[#0B0F19]/60 p-2.5 rounded-lg border border-slate-800 text-center flex flex-col justify-center">
                  <div className="text-base font-bold text-emerald-400 font-display">10+</div>
                  <div className="text-[9px] uppercase text-slate-500 tracking-wider font-semibold font-mono">Delivered</div>
                </div>
                <div className="bg-[#0B0F19]/60 p-2.5 rounded-lg border border-slate-800 text-center flex flex-col justify-center">
                  <div className="text-base font-bold text-emerald-400 font-display">FastAPI/React</div>
                  <div className="text-[9px] uppercase text-slate-500 tracking-wider font-semibold font-mono">Core Tech</div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive mini facts row for smaller devices */}
      <div className="block lg:hidden max-w-7xl mx-auto px-6 mt-12 w-full">
        <div className="grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 text-left">
          {PERSONAL_INFO.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="bg-[#0E1524] p-4 rounded-xl border border-slate-800">
              <div className="text-2xl font-bold text-emerald-400 font-display">{metric.value}</div>
              <div className="text-xs uppercase text-slate-500 tracking-wider font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

