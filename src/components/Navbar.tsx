import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
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
    <header
      id="app-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F17]/85 backdrop-blur-md border-b border-emerald-500/10 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand/Logo */}
        <button
          id="nav-logo"
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono text-emerald-400 font-bold text-lg transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            M
          </div>
          <span className="font-display font-medium text-lg text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors duration-200">
            {PERSONAL_INFO.name}
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === link.id
                  ? 'text-emerald-400 bg-emerald-500/5'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="ml-4 inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-400/10 hover:bg-emerald-400/20 border border-emerald-400/30 hover:border-emerald-400/50 rounded-lg text-xs font-mono font-medium text-emerald-400 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.05)] cursor-pointer"
          >
            Connect
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-200 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0D131E] border-b border-emerald-500/10 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-emerald-400 bg-emerald-500/5 border-l-2 border-emerald-400 pl-3'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-800 mt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-3 bg-emerald-500/10 border border-emerald-400/20 hover:border-emerald-400/50 rounded-lg text-sm font-sans font-medium text-emerald-400 transition-colors"
                >
                  Connect on LinkedIn
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
