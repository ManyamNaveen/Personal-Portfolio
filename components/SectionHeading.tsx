import React from 'react';
import { Reveal } from '@/components/Reveal';
import TypewriterText from '@/components/TypewriterText';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  gradientWord?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  gradientWord,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal className={`${centered ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-cyan-600" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
        <TypewriterText text={title} gradientWord={gradientWord} />
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">{description}</p>
      )}
    </Reveal>
  );
}
