'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import SectionHeading from '@/components/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';

export default function Experience() {
  return (
    <section className="border-t border-slate-200" id="experience">
      <div className="page-container py-16 sm:py-24">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          description="Where I've worked and what I built there."
        />

        <div className="mt-14 space-y-16 sm:space-y-20">
          {PORTFOLIO_DATA.experiences.map((job, jobIndex) => (
            <div key={job.company} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Company column */}
              <Reveal className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                    <span className={`h-2 w-2 rounded-full ${jobIndex === 0 ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    {job.period}
                  </span>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-base font-medium text-cyan-700">{job.role}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                  {job.note && <p className="mt-3 text-xs text-slate-400">{job.note}</p>}


                  <ul className="mt-6 space-y-2.5">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Projects column */}
              <RevealGroup className="lg:col-span-8 space-y-5">
                {job.projects?.map((project) => (
                  <RevealItem key={project.name}>
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.3)]">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="font-display text-xl font-bold text-slate-900">{project.name}</h4>
                        <span className="text-sm text-slate-500">{project.period}</span>
                      </div>

                      {project.highlight && (
                        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                          {project.highlight}
                        </p>
                      )}

                      <ul className="mt-5 space-y-3">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                            <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                        {project.tech.split(',').map((tech) => (
                          <li key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                            {tech.trim()}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
