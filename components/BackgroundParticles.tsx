'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  colorRgb: string;
  isSquare: boolean;
  wavePhase: number;
  waveFreq: number;
  waveAmp: number;
  lateralDir: number; // -1 or 1 for random side-to-side flutter
  duneType: number;   // 0: Right Wave, 1: Lower Ridge, 2: Ambient
}

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const updateSize = () => {
      const parent = canvas.parentElement;
      width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
      height = canvas.height = parent ? parent.clientHeight : window.innerHeight;
    };
    updateSize();

    let isDark = document.documentElement.classList.contains('dark');

    const updateThemeState = () => {
      isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].colorRgb = darkPalette[Math.floor(Math.random() * darkPalette.length)];
        }
      }
    };

    const themeObserver = new MutationObserver(() => {
      updateThemeState();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const handleResize = () => {
      updateSize();
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];

    // Dense particle count confined to the Hero section
    const getParticleCount = () => {
      if (width < 768) return 1200;
      if (width < 1280) return 2400;
      return 4200;
    };

    // Dark Mode Palette: Luminous white, starlight silver, celestial cyan & violet
    const darkPalette = [
      '255, 255, 255',    // Diamond White
      '241, 245, 249',    // Starlight Silver
      '226, 232, 240',    // Soft Slate
      '186, 230, 253',    // Pale Cyan
      '56, 189, 248',     // Sky Cyan
      '192, 132, 252',    // Celestial Violet
    ];

    const initParticles = () => {
      particles.length = 0;
      const count = getParticleCount();

      for (let i = 0; i < count; i++) {
        let x = 0;
        let y = 0;
        let duneType = 0;

        const rand = Math.random();

        if (rand < 0.55) {
          // Dune 1: Diagonal Right Wave (curving across the right half / behind avatar)
          duneType = 0;
          const normX = 0.32 + Math.pow(Math.random(), 0.72) * 0.72;
          x = normX * width;

          const curveY = height * 0.82 - Math.pow(normX - 0.32, 1.25) * (height * 0.65);
          const dispersion = (Math.random() + Math.random() - 1) * (height * 0.20);
          y = curveY + dispersion;
        } else if (rand < 0.85) {
          // Dune 2: Lower sweeping horizontal stippled ridge
          duneType = 1;
          const normX = Math.random();
          x = normX * width;

          const ridgeY = height * 0.76 + Math.sin(normX * Math.PI * 2.4 + 0.3) * (height * 0.09);
          const dispersion = (Math.random() + Math.random() - 1) * (height * 0.14);
          y = ridgeY + dispersion;
        } else {
          // Ambient scattered stardust
          duneType = 2;
          x = Math.random() * width;
          y = Math.random() * height;
        }

        // Clamp inside bounds
        if (x < -20) x = Math.random() * width;
        if (x > width + 20) x = Math.random() * width;
        if (y < -20) y = Math.random() * height;
        if (y > height + 20) y = Math.random() * height;

        // Micro-stippled dot sizes (0.8px to 1.5px)
        const sizeRand = Math.random();
        const size = sizeRand < 0.75 ? 0.9 + Math.random() * 0.45 : (sizeRand < 0.96 ? 1.4 + Math.random() * 0.35 : 1.9);

        // Alpha values
        const baseAlpha = duneType < 2 
          ? 0.30 + Math.random() * 0.60 
          : 0.15 + Math.random() * 0.35;

        const colorRgb = darkPalette[Math.floor(Math.random() * darkPalette.length)];

        particles.push({
          id: i,
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size,
          baseAlpha,
          alpha: baseAlpha,
          colorRgb,
          isSquare: Math.random() < 0.65,
          wavePhase: Math.random() * Math.PI * 2,
          waveFreq: 0.003 + Math.random() * 0.006,
          waveAmp: duneType === 0 ? 5 + Math.random() * 9 : 3 + Math.random() * 7,
          lateralDir: Math.random() < 0.5 ? -1 : 1,
          duneType,
        });
      }
    };

    initParticles();

    // Mouse tracking relative to canvas bounding box
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      radius: 160,
      radiusSq: 160 * 160,
      active: false,
    };

    let mouseLeaveTimer: NodeJS.Timeout;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      // Only track when cursor is within or near the Hero viewport
      if (relX >= -50 && relX <= width + 50 && relY >= -50 && relY <= height + 50) {
        mouse.targetX = relX;
        mouse.targetY = relY;
        mouse.active = true;

        clearTimeout(mouseLeaveTimer);
        mouseLeaveTimer = setTimeout(() => {
          mouse.active = false;
        }, 2500);
      } else {
        mouse.active = false;
      }
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.015;

      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Completely disabled in Light Mode
      if (!isDark) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        // 1. Natural Organic Harmonic Drift
        p.wavePhase += p.waveFreq;
        const driftX = Math.cos(p.wavePhase + time * 0.5) * p.waveAmp;
        const driftY = Math.sin(p.wavePhase * 0.8 + time * 0.3) * (p.waveAmp * 0.6);
        const targetX = p.baseX + driftX;
        const targetY = p.baseY + driftY;

        // 2. Lateral Random Flutter Hover Effect (NO HOLLOW CIRCLE!)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouse.radiusSq && mouse.active) {
          const dist = Math.sqrt(distSq);
          // Smooth falloff from center of cursor
          const intensity = Math.pow(1 - dist / mouse.radius, 1.4);

          // Particles sway side-to-side ("move randomly that side and this side")
          // Uses alternating lateral direction + sinusoidal wave flutter
          const waveSway = Math.sin(time * 3.5 + p.baseY * 0.08) * 2.2;
          const randomLateral = p.lateralDir * 1.6 + waveSway;
          const verticalFlutter = Math.cos(time * 2.5 + p.baseX * 0.08) * 0.8;

          p.vx += randomLateral * intensity * 0.7;
          p.vy += verticalFlutter * intensity * 0.4;

          // Increase brightness / visibility near cursor without pushing into a ring
          p.alpha = Math.min(1, p.baseAlpha + intensity * 0.4);
        } else {
          // Smooth return to base wave formation
          p.vx += (targetX - p.x) * 0.03;
          p.vy += (targetY - p.y) * 0.03;
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        // Damping
        p.vx *= 0.89;
        p.vy *= 0.89;

        p.x += p.vx;
        p.y += p.vy;

        // Soft viewport wrapping
        if (p.x < -15) p.x = p.baseX = width + 15;
        if (p.x > width + 15) p.x = p.baseX = -15;
        if (p.y < -15) p.y = p.baseY = height + 15;
        if (p.y > height + 15) p.y = p.baseY = -15;

        const finalAlpha = p.alpha;
        if (finalAlpha <= 0.03) continue;

        ctx.fillStyle = `rgba(${p.colorRgb}, ${finalAlpha})`;

        if (p.isSquare) {
          ctx.fillRect(p.x - p.size * 0.5, p.y - p.size * 0.5, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      themeObserver.disconnect();
      clearTimeout(mouseLeaveTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 w-full h-full dark:block hidden"
      style={{ willChange: 'transform' }}
    />
  );
}
