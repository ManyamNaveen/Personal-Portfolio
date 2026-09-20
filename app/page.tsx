'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Architecture from '@/components/Architecture';
import Education from '@/components/Education';
import ResumeBanner from '@/components/ResumeBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CaseStudyModal from '@/components/CaseStudyModal';

export default function Home() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="mesh-gradient pt-16 sm:pt-20">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects onOpenModal={(id) => setActiveModalId(id)} />
        <Skills />
        <Architecture />
        <Education />
        <ResumeBanner />
        <Contact />
      </main>

      <Footer />

      <CaseStudyModal
        modalId={activeModalId}
        onClose={() => setActiveModalId(null)}
      />
    </>
  );
}
