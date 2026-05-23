import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Maximize2
} from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';

// ==========================================
// IMAGE IMPORTS
// ==========================================

// @ts-ignore
import eduAiHubImg from '../assets/images/edu_ai_hub_1779273046204.png';

import chatbotifyImg from '../assets/images/chatbotifyai.png';

// ==========================================
// VIDEO IMPORTS
// ==========================================

import eduAiVideo from '../assets/videos/eduai-demo.mp4';
import chatbotifyVideo from '../assets/videos/chatbotify-demo.mp4';

// ==========================================
// PROJECT IMAGE MAP
// ==========================================

const projectImageMap: Record<string, string> = {
  'edu-ai-hub': eduAiHubImg,
  'chatbitify-ai': chatbotifyImg
};

// ==========================================
// PROJECT VIDEO MAP
// ==========================================

const projectVideoMap: Record<string, string> = {
  'edu-ai-hub': eduAiVideo,
  'chatbitify-ai': chatbotifyVideo
};

export default function Projects() {

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (

    <section
      id="projects"
      className="py-28 bg-[#070B13] relative border-t border-slate-900/60 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">

        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-20 max-w-3xl">

          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">

            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />

            Featured Projects

          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Real Client & Startup Projects
          </h2>

          <p className="text-slate-400 text-base leading-relaxed mt-1">
            A collection of AI platforms, chatbot systems, automation tools,
            and modern web applications built for startups and businesses.
          </p>

          <div className="h-[2px] w-12 bg-emerald-500/40 mt-2" />

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

          {PROJECTS.map((project) => {

            const displayImage =
              projectImageMap[project.id] || project.imageUrl;

            const displayVideo =
              projectVideoMap[project.id];

            return (

              <article
                key={project.id}
                className="group flex flex-col bg-[#0C111C]/90 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/25 hover:-translate-y-1"
              >

                {/* IMAGE SECTION */}
                <div className="relative w-full aspect-video bg-slate-950/80 border-b border-slate-800/80 overflow-hidden">

                  {displayImage && !imageErrors[project.id] ? (

                    <img
                      src={displayImage}
                      alt={`${project.title} Screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      onError={() => {
                        setImageErrors(prev => ({
                          ...prev,
                          [project.id]: true
                        }));
                      }}
                    />

                  ) : (

                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                      No Image Available
                    </div>

                  )}

                  {/* Zoom Button */}
                  <div className="absolute top-4 right-4">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (displayImage) {
                          setLightboxImage(displayImage);
                        }
                      }}
                      className="p-2 bg-slate-900/90 border border-slate-700 rounded-lg text-slate-300 hover:text-emerald-400 transition-all"
                    >
                      <Maximize2 size={14} />
                    </button>

                  </div>

                </div>

                {/* VIDEO SECTION */}
                {displayVideo && (

                  <div className="p-4 border-b border-slate-800 bg-[#0A0F18]">

                    <video
                      className="w-full rounded-xl border border-slate-800"
                      controls
                      muted
                      playsInline
                    >

                      <source
                        src={displayVideo}
                        type="video/mp4"
                      />

                    </video>

                  </div>

                )}

                {/* CONTENT */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col gap-6">

                  {/* TITLE */}
                  <div className="flex flex-col gap-2">

                    <h3 className="font-bold text-xl text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 mt-auto border-t border-slate-800">

                    {project.liveUrl && (

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold transition-all"
                      >

                        <span>Live Demo</span>

                        <ExternalLink size={13} />

                      </a>

                    )}

                    {project.githubUrl && (

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono transition-all"
                      >

                        <Github size={13} />

                        <span>Source Code</span>

                      </a>

                    )}

                  </div>

                </div>

              </article>

            );

          })}

        </div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>

        {lightboxImage && (

          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative z-10 max-w-5xl w-full"
            >

              <img
                src={lightboxImage}
                alt="Project Screenshot"
                className="w-full max-h-[85vh] object-contain rounded-xl border border-slate-800"
              />

            </motion.div>

          </div>

        )}

      </AnimatePresence>

    </section>

  );
}