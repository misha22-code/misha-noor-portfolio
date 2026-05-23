import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Github, Linkedin, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please populate all required fields (*).');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable form dispatcher timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Optional backup storage of messages
      const prevMessages = JSON.parse(localStorage.getItem('misha_portfolio_contacts') || '[]');
      prevMessages.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('misha_portfolio_contacts', JSON.stringify(prevMessages));

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F17] relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient corner patch */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            Start a Collaboration
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-2"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Card left: Info / Copy and Link tools */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-100">
                  Let&apos;s build together.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-sans">
                  Founders, recruiters, and clients are always welcome to connect. Send a message through the form, secure a direct chat over WhatsApp, or follow my professional profiles below.
                </p>
              </div>

              {/* Direct email display with COPY toggle */}
              <div className="flex flex-col gap-2.5 mt-2">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider font-semibold">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-xs overflow-hidden">
                    <Mail size={14} className="text-emerald-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 bg-slate-800 hover:bg-[#1A2538] border border-slate-700/80 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  </button>
                </div>
                {copied && (
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-1 rounded-md self-start">
                    Email address copied to clipboard!
                  </span>
                )}
              </div>

              {/* WhatsApp Contact Channel */}
              <div className="flex flex-col gap-2.5 mt-2 border-t border-slate-800/60 pt-5">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider font-semibold">
                  Instant Messaging Support
                </span>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 font-sans font-bold text-xs rounded-xl transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(16,185,129,0.02)] hover:shadow-[0_4px_15px_rgba(16,185,129,0.12)] hover:-translate-y-0.5"
                >
                  <MessageSquare size={13} className="fill-emerald-400/20" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="flex flex-col gap-3 mt-2 border-t border-slate-800/60 pt-5">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider font-semibold">
                  Professional Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/25 rounded-xl font-sans text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-all duration-300"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/25 rounded-xl font-sans text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-all duration-300"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form container */}
          <div className="lg:col-span-7 bg-[#0F1420] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-sans">
                  Thank you for reaching out! I appreciate your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-850 hover:border-emerald-500/50 text-xs font-sans font-semibold text-slate-350 hover:text-emerald-400 rounded-xl transition-all cursor-pointer"
                >
                  Message Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {errorMsg && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs font-mono text-red-400">
                    {errorMsg}
                  </div>
                )}

                {/* Sender name & email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                      Full Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#090D14] border border-slate-800 hover:border-slate-700 focus:border-emerald-500 p-3.5 rounded-xl font-sans text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                      Email Address <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#090D14] border border-slate-800 hover:border-slate-700 focus:border-emerald-500 p-3.5 rounded-xl font-sans text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Connection subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-subject" className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    Subject Line
                  </label>
                  <input
                    id="form-subject"
                    name="subject"
                    type="text"
                    placeholder="Startup Project Scaffolding"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#090D14] border border-slate-800 hover:border-slate-700 focus:border-emerald-500 p-3.5 rounded-xl font-sans text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Text Area message details */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                    Message Details <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Outline your project timeline or core business bottleneck mechanics here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#090D14] border border-slate-800 hover:border-slate-700 focus:border-emerald-500 p-3.5 rounded-xl font-sans text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submission CTA */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 text-slate-950 disabled:text-slate-500 font-sans font-bold text-sm rounded-xl cursor-pointer disabled:cursor-not-allowed shadow-[0_4px_15px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_22px_rgba(16,185,129,0.45)] transition-all duration-300 mt-2"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
