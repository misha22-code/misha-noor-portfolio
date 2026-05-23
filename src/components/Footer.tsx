import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, ShieldAlert, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#090C12] border-t border-slate-900/60 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        
        {/* Top footer row: brand narrative and quick scroll to top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/60 pb-10 text-left">
          
          <div className="flex flex-col gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono text-emerald-400 font-bold text-sm">
                M
              </div>
              <span className="font-display font-bold text-slate-200 tracking-tight text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm font-sans leading-relaxed">
              AI & Full Stack Developer specialized in Python, Flask, Generative AI models, and clean client experience interfaces.
            </p>
          </div>

          {/* Quick interactive links & clock */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 shrink-0">
            {/* Live running clock */}
            <div className="bg-[#0F1420]/60 border border-slate-800 px-3.5 py-1.5 rounded-xl flex items-center gap-2.5 font-mono text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>UTC Clock:</span>
              <span className="text-emerald-400 font-semibold">{time || '2026-05-20 10:12:39 UTC'}</span>
            </div>

            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/30 text-xs font-mono text-slate-400 hover:text-emerald-400 rounded-xl transition-all cursor-pointer shadow-md"
            >
              <ArrowUp size={13} />
              <span>Scroll to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom footer row: credits and legal notices */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[11px] text-slate-500 text-left">
          <div>
            &copy; {new Date().getFullYear()} Misha Noor. All rights and codebases reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-800">|</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Available Worldwide
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
