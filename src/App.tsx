/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'contact'];
    
    const handleScrollObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollObserver, {
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the center zone
      threshold: 0.1
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-350 antialiased overflow-x-hidden">
      {/* Dynamic Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections Stack */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Interactive Footer */}
      <Footer />
    </div>
  );
}
