'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

interface CaseStudyModalProps {
  modalId: string | null;
  onClose: () => void;
}

export default function CaseStudyModal({ modalId, onClose }: CaseStudyModalProps) {
  const data = modalId ? CASE_STUDIES[modalId] : undefined;

  useEffect(() => {
    if (!data) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, onClose]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          key={data.id}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-9 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Case study · {data.badge}
                </p>
                <h3 id="case-study-title" className="mt-2 font-display text-2xl font-bold text-slate-900">
                  {data.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close case study"
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 space-y-6 text-[15px] leading-relaxed text-slate-600">
              <div>
                <h4 className="font-semibold text-slate-900">The problem</h4>
                <p className="mt-1.5">{data.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">What I built</h4>
                <p className="mt-1.5">{data.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Impact</h4>
                <ul className="mt-2 space-y-2">
                  {data.impact.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
