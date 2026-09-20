'use client';

import React, { useEffect } from 'react';
import { CASE_STUDIES } from '@/data/caseStudies';

interface CaseStudyModalProps {
  modalId: string | null;
  onClose: () => void;
}

export default function CaseStudyModal({ modalId, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!modalId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalId, onClose]);

  if (!modalId) return null;
  const data = CASE_STUDIES[modalId];
  if (!data) return null;

  return (
    <div
      aria-modal="true"
      className="case-study-modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className={`text-xs font-mono font-semibold text-${data.badgeColor}-400`}>
              CASE STUDY • {data.badge}
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">{data.title}</h3>
          </div>
          <button
            aria-label="Close modal"
            className="close-modal text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-none"
            type="button"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>

        <div className="space-y-4 py-4 text-xs sm:text-sm text-slate-300">
          <div>
            <h4 className="font-bold text-cyan-400 uppercase font-mono text-xs mb-1">The Problem</h4>
            <p className="leading-relaxed">{data.problem}</p>
          </div>

          <div>
            <h4 className="font-bold text-cyan-400 uppercase font-mono text-xs mb-1">Architecture &amp; Solutions</h4>
            <p className="leading-relaxed">{data.solution}</p>
          </div>

          <div>
            <h4 className="font-bold text-cyan-400 uppercase font-mono text-xs mb-1">Measurable Impact</h4>
            <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
              {data.impact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            className="close-modal px-5 py-2.5 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
            type="button"
            onClick={onClose}
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
