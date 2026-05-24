import React from 'react';
import {
  ArrowDownRight,
  Github,
  Linkedin,
  MessageSquare,
  Download
} from 'lucide-react';

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
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0B0F17]"
    >

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-pulse-slow"></div>

      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-emerald-600/5 blur-[160px] pointer-events-none animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">

          {/* SMALL LABEL */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-emerald-400 font-semibold text-sm tracking-wider uppercase"
          >
            Misha Noor &mdash; Full Stack & AI Developer
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[58px] text-slate-100 tracking-tight leading-[1.05] max-w-3xl"
          >
           Building Modern Web Experiences
            <br />
            &amp; Intelligent AI Solutions
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            I create scalable websites, AI-powered tools, chatbot systems,
            and automation solutions for startups, brands, and businesses.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >

            {/* PROJECTS BUTTON */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_22px_rgba(16,185,129,0.35)]"
            >

              View Projects

              <ArrowDownRight size={16} />

            </button>

            {/* CONTACT BUTTON */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#131B2A] hover:bg-[#1A2538] border border-slate-800 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-400 font-semibold text-sm rounded-xl transition-all duration-300"
            >

              Contact Me

              <MessageSquare size={16} />

            </button>

            {/* RESUME BUTTON */}
            <a
              href="/resume/Misha-Noor-Resume.pdf"
              download="Misha-Noor-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-950 hover:bg-[#0E1524] border border-slate-800 hover:border-emerald-500/25 text-slate-300 hover:text-emerald-400 text-xs rounded-xl transition-all duration-300"
            >

              Download Resume

              <Download size={13} />

            </a>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3 sm:pl-5 sm:ml-3 sm:border-l border-slate-800">

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 transition-all duration-300"
              >

                <Github size={18} />

              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 transition-all duration-300"
              >

                <Linkedin size={18} />

              </a>

            </div>

          </motion.div>

        </div>

        {/* RIGHT PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center"
        >

          <div className="relative w-full max-w-[360px]">

            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 rounded-2xl blur-xl opacity-70"></div>

            {/* Card */}
            <div className="relative bg-[#0E1524] rounded-2xl border border-slate-800 p-6 shadow-2xl">

              {/* IMAGE */}
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-2 border-emerald-500/20 p-1">

                <img
                  src={profileImg}
                  alt="Misha Noor"
                  className="w-full h-full object-cover rounded-full"
                />

              </div>

              {/* INFO */}
              <div className="text-center mt-5">

                <h3 className="text-slate-100 font-bold text-xl">
                  {PERSONAL_INFO.name}
                </h3>

                <p className="text-emerald-400 text-sm font-mono mt-1">
                  AI & Full Stack Developer
                </p>

                <p className="text-slate-500 text-sm mt-2">
                  Bhakkar, Pakistan
                </p>

              </div>

              {/* ONLY ONE BOX */}
              <div className="mt-6 border-t border-slate-800 pt-5">

                <div className="bg-[#0B0F19]/70 p-4 rounded-xl border border-slate-800 text-center">

                  <div className="text-2xl font-bold text-emerald-400">
                    10+
                  </div>

                  <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                    Projects Delivered
                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}