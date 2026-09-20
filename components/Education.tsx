'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useScrollReveal } from '@/components/useScrollReveal';
import TypewriterText from '@/components/TypewriterText';

export default function Education() {
  const sectionRef = useScrollReveal();
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string; pdfUrl?: string } | null>(null);

  return (
    <section
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-7 border-t border-slate-200 dark:border-white/5"
      id="education"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Left: Formal Education */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5 stagger-item stagger-1">
          <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 radar-beacon-cyan"></span>
            Academic Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span>🎓</span>
            <TypewriterText text="Education" />
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Rigorous engineering foundation bridging systems logic, algorithmic thinking, and core software design.
          </p>

          <div className="space-y-3.5 pt-1">
            {PORTFOLIO_DATA.education.map((item, idx) => (
              <div
                key={idx}
                className="glass-card interactive-card gradient-beam-top p-5 sm:p-6 rounded-2xl border border-slate-300 dark:border-white/10 relative overflow-hidden shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 flex items-center justify-center font-bold text-base shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      {idx === 0 ? '🎓' : '📜'}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.degree}</h3>
                      <div className="text-sm text-cyan-700 dark:text-cyan-400 font-semibold mt-0.5 flex items-center gap-1.5">
                        <span>🏛️</span>
                        <span>{item.institution}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-2 flex items-center gap-3 font-medium">
                        <span>🗓️ {item.period}</span>
                        <span>📍 {item.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold shrink-0 shadow-sm flex items-center gap-1">
                    <span>★</span>
                    <span>{item.score}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Professional Certifications with Real Certificate Previews */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 stagger-item stagger-2">
          <div className="inline-flex items-center gap-2 text-violet-800 dark:text-violet-400 font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/40 border border-violet-300 dark:border-violet-500/30 font-bold">
            <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400 radar-beacon-cyan"></span>
            Industry Accreditations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span>🏆</span>
            <TypewriterText text="Certifications & Credentials" />
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Verified masteries in enterprise Java concurrency, high-performance multithreading, and AI-accelerated SQL.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-1">
            {PORTFOLIO_DATA.certifications.map((cert: any, idx: number) => (
              <div
                key={idx}
                className={`glass-card interactive-card gradient-beam-top p-5 rounded-2xl border border-slate-300 dark:border-white/10 flex flex-col justify-between group shadow-sm ${
                  !cert.image ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Certificate Image Preview */}
                  {cert.image ? (
                    <div
                      className="relative rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-white/15 bg-slate-950/80 cursor-pointer aspect-[16/10] group/img shadow-md"
                      onClick={() => setSelectedCert({ name: cert.name, image: cert.image })}
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-3">
                        <span className="text-xs font-mono text-cyan-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-cyan-500/40 flex items-center gap-1.5 shadow-lg">
                          <span>🔍</span> Click to Expand
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {/* Header & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 font-bold flex items-center gap-1">
                      <span>✓</span> {cert.badge || 'Verified Credential'}
                    </span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <span>🏛️</span> {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 font-mono leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-400 font-medium">Skills:</strong> {cert.skills}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_6px_#10b981]"></span>
                    Verified &amp; Authenticated
                  </span>

                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold flex items-center gap-1">
                    <span>🏛️</span> {cert.issuer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* High-Resolution Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-cyan-500/40 rounded-3xl p-4 sm:p-6 shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <h3 className="text-lg font-bold text-white">{selectedCert.name}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold transition-colors"
                type="button"
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center max-h-[75vh]">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
