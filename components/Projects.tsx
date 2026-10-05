'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import SectionHeading from '@/components/SectionHeading';
import { RevealGroup, RevealItem } from '@/components/Reveal';

const MAX_TAGS = 5;

interface ProjectsProps {
  onOpenModal: (modalId: string) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  return (
    <section className="page-container py-16 sm:py-24" id="projects">
      <SectionHeading
        eyebrow="Featured work"
        title="Projects"
        description="Real products I built that businesses use every day."
      />

      <RevealGroup className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {PORTFOLIO_DATA.projects.map((project) => {
          const extraTags = project.techStack.length - MAX_TAGS;

          return (
            <RevealItem key={project.id} className="h-full">
              <article className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.12)] hover:shadow-[0_24px_60px_-16px_rgba(15,23,42,0.22)] hover:-translate-y-1 transition-all duration-500">
                {/* Media */}
                <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                  {project.videoUrl && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={project.videoUrl}
                    />
                  )}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-sm text-slate-500">
                    {project.role} <span className="mx-1.5 text-slate-300">/</span> {project.duration}
                  </p>

                  <h3 className="mt-2 font-display text-2xl sm:text-[1.7rem] font-bold leading-tight tracking-tight text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{project.tagline}</p>

                  <dl className="mt-6 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl bg-slate-50 py-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col-reverse justify-end px-3 sm:px-4 first:pl-4 sm:first:pl-5">
                        <dt className="mt-0.5 text-[11px] sm:text-xs leading-snug text-slate-500">{metric.label}</dt>
                        <dd className="font-display text-[15px] sm:text-xl font-bold leading-tight text-slate-900 break-words">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, MAX_TAGS).map((tech) => (
                      <li key={tech} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                        {tech}
                      </li>
                    ))}
                    {extraTags > 0 && (
                      <li className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">+{extraTags}</li>
                    )}
                  </ul>

                  {project.hasCaseStudy && project.modalId && (
                    <div className="mt-auto pt-8">
                      <button
                        type="button"
                        onClick={() => onOpenModal(project.modalId!)}
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-700 hover:gap-3"
                      >
                        View case study
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
                      </button>
                    </div>
                  )}
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
