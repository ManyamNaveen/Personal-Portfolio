'use client';

import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring, type Variants } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.15, margin: '0px 0px -8% 0px' } as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Distance in px the element travels up while landing. */
  y?: number;
}

/** Fades and lifts a block into place the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 48 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={VIEWPORT}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.97, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
};

/**
 * Plain container that numbers its direct RevealItem children so items sharing a row
 * land with a slight stagger. Each item still triggers on its own visibility, so on
 * stacked mobile layouts every card lands as the reader scrolls to it.
 */
export function RevealGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  let index = 0;

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement<RevealItemProps>(child) && child.type === RevealItem
          ? React.cloneElement(child, { index: index++ })
          : child
      )}
    </div>
  );
}

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function RevealItem({ children, className, index = 0 }: RevealItemProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Thin bar pinned to the top of the viewport that fills as the page scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600"
      style={{ scaleX }}
    />
  );
}
