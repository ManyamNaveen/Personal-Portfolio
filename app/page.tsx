'use client';

import React, { useCallback, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import ResumeBanner from '@/components/ResumeBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CaseStudyModal from '@/components/CaseStudyModal';
import { ScrollProgress } from '@/components/Reveal';

export default function Home() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const closeModal = useCallback(() => setActiveModalId(null), []);

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Projects onOpenModal={setActiveModalId} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <ResumeBanner />
        <Contact />
      </main>

      <Footer />

      <CaseStudyModal modalId={activeModalId} onClose={closeModal} />
    </>
  );
}
