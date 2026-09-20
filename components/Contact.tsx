'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useScrollReveal } from '@/components/useScrollReveal';
import TypewriterText from '@/components/TypewriterText';

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Thank you for reaching out! Manyam Naveen will respond promptly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Something went wrong. Please try emailing directly.');
      }
    } catch (err) {
      setStatus('error');
      setFeedbackMessage('Failed to connect to the server. Please email directly at naveenmanyam12@gmail.com.');
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-7 border-t border-slate-200 dark:border-white/5" 
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left: Contact Details */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5 stagger-item stagger-1">
          <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 radar-beacon-cyan"></span>
            Get In Touch
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            <TypewriterText 
              text="Let's build something reliable." 
              gradientWord="reliable." 
            />
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Whether you are looking for a dedicated backend engineer to lead a payments integration, architect high-load loan systems, or optimize existing Spring Boot services, my inbox is open.
          </p>

          <div className="space-y-3 pt-1">
            
            {/* Email */}
            <a
              className="p-4 rounded-xl glass-card flex items-center gap-4 hover:border-cyan-400/50 transition-all group"
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Email Address</div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              className="p-4 rounded-xl glass-card flex items-center gap-4 hover:border-cyan-400/50 transition-all group"
              href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Direct Phone</div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {PORTFOLIO_DATA.personal.phone}
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              className="p-4 rounded-xl glass-card flex items-center gap-4 hover:border-emerald-400/50 transition-all group"
              href="https://wa.me/919398365948?text=Hi%20Manyam%20Naveen,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">WhatsApp (Instant)</div>
                <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  +91 9398365948
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="p-4 rounded-xl glass-card flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                <div className="text-sm font-semibold text-white">{PORTFOLIO_DATA.personal.location}</div>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              className="p-4 rounded-xl glass-card flex items-center gap-4 hover:border-cyan-400/50 transition-all group"
              href={PORTFOLIO_DATA.personal.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61s.72 1.61 1.61 1.61 1.61-.72 1.61-1.61-.72-1.61-1.61-1.61Z"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">LinkedIn</div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  linkedin.com/in/naveenmanyam
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Right: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send an inquiry</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Messages will be routed directly to Manyam Naveen&apos;s personal inbox and WhatsApp.
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-medium space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✓</span>
                  <span>{feedbackMessage}</span>
                </div>
                <div className="pt-2 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-slate-300">Need an immediate response?</span>
                  <a
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs transition-colors"
                    href={`https://wa.me/919398365948?text=${encodeURIComponent(
                      `Hi Manyam Naveen,\n\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not specified'}\nTopic: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message || 'I sent an inquiry via your portfolio.'}`
                    )}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Open in WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm font-medium flex items-center gap-3">
                <span className="text-lg">✕</span>
                <span>{feedbackMessage}</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="sender-name">
                    YOUR NAME
                  </label>
                  <input
                    required
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    id="sender-name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="sender-email">
                    YOUR EMAIL
                  </label>
                  <input
                    required
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    id="sender-email"
                    name="email"
                    placeholder="john@company.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="subject">
                  PROJECT / OPPORTUNITY TYPE
                </label>
                <input
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  id="subject"
                  name="subject"
                  placeholder="Senior Backend Role / Spring Boot Project"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="message">
                  MESSAGE DETAILS
                </label>
                <textarea
                  required
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  id="message"
                  name="message"
                  placeholder="Describe your team, timeline, or engineering challenge..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  disabled={status === 'loading'}
                  type="submit"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <a
                  className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 text-center"
                  href={`https://wa.me/919398365948?text=${encodeURIComponent(
                    `Hi Manyam Naveen,\n\nName: ${formData.name || 'Not specified'}\nEmail: ${formData.email || 'Not specified'}\nTopic: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message || 'I would like to discuss an opportunity.'}`
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
