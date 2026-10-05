'use client';

import React, { useEffect, useState } from 'react';
import { BadgeCheck, GraduationCap, Maximize2, X } from 'lucide-react';
import { PORTFOLIO_DATA, type CertificationItem } from '@/data/portfolioData';
import SectionHeading from '@/components/SectionHeading';
import { RevealGroup, RevealItem } from '@/components/Reveal';

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedCert(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedCert]);

  return (
    <section className="border-t border-slate-200" id="education">
      <div className="page-container py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Education */}
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Studies" title="Education" />

          <RevealGroup className="mt-10 space-y-4">
            {PORTFOLIO_DATA.education.map((item) => (
              <RevealItem key={item.degree}>
                <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <GraduationCap className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-slate-900">{item.degree}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                    <p className="mt-2 text-xs text-slate-500">
                      {item.period} · {item.location}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                      {item.score}
                    </span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Courses" title="Certifications" />

          <RevealGroup className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <RevealItem key={cert.name} className={cert.image ? '' : 'md:col-span-2'}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-[0_20px_45px_-24px_rgba(15,23,42,0.3)]">
                  {cert.image && (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="relative mb-5 block w-full aspect-[16/10] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
                      aria-label={`Expand ${cert.name} certificate`}
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow transition-opacity group-hover:opacity-100">
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </button>
                  )}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 font-semibold text-cyan-700">
                      <BadgeCheck className="h-4 w-4" strokeWidth={2} />
                      {cert.badge}
                    </span>
                    <span className="text-slate-500">{cert.issuer}</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-bold text-slate-900">{cert.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{cert.skills}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* Certificate lightbox */}
      {selectedCert?.image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.name}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative w-full max-w-4xl rounded-3xl bg-white p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="font-display text-lg font-bold text-slate-900">{selectedCert.name}</h3>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <img src={selectedCert.image} alt={selectedCert.name} className="max-h-[75vh] w-full rounded-xl object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
