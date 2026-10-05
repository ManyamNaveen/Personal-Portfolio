'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  gradientWord?: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterText({
  text,
  gradientWord,
  className = '',
  speed = 34,
  delay = 180,
}: TypewriterTextProps) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setHasTriggered(true);
      setDisplayedLength(text.length);
      setShowCursor(false);
      return;
    }

    let startTimeout: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasTriggered(true);
          observer.disconnect();
          // Start typing once after landing on section
          startTimeout = setTimeout(() => setIsTyping(true), delay);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (startTimeout) clearTimeout(startTimeout);
    };
  }, [delay, text.length]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedLength < text.length) {
      const timer = setTimeout(() => {
        setDisplayedLength((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      // Fade out cursor 1.8s after typing completes
      const timer = setTimeout(() => {
        setShowCursor(false);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isTyping, displayedLength, text.length, speed]);

  // If not triggered yet, render invisible placeholder to prevent layout shifts
  const currentText = hasTriggered ? text.substring(0, displayedLength) : '';

  if (!gradientWord) {
    return (
      <span ref={containerRef} className={className}>
        <span>{currentText || (hasTriggered ? '' : '')}</span>
        {showCursor && hasTriggered && (
          <span aria-hidden="true" className="type-cursor" />
        )}
      </span>
    );
  }

  const gradIndex = text.indexOf(gradientWord);
  if (gradIndex === -1) {
    return (
      <span ref={containerRef} className={className}>
        <span>{currentText}</span>
        {showCursor && hasTriggered && (
          <span aria-hidden="true" className="type-cursor" />
        )}
      </span>
    );
  }

  const normalPart = currentText.substring(0, Math.min(displayedLength, gradIndex));
  const gradientPart =
    displayedLength > gradIndex
      ? currentText.substring(gradIndex, Math.min(displayedLength, gradIndex + gradientWord.length))
      : '';
  const afterPart =
    displayedLength > gradIndex + gradientWord.length
      ? currentText.substring(gradIndex + gradientWord.length)
      : '';

  return (
    <span ref={containerRef} className={className}>
      {normalPart && <span>{normalPart}</span>}
      {gradientPart && <span className="gradient-text">{gradientPart}</span>}
      {afterPart && <span>{afterPart}</span>}
      {showCursor && hasTriggered && (
        <span aria-hidden="true" className="type-cursor" />
      )}
    </span>
  );
}
