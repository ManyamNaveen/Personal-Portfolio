import React from 'react';

const PAD = 4;

interface DrawTextProps {
  text: string;
  /** Natural advance width of the text in SVG units (measured once with the real font). */
  width: number;
  /** Top of the text box relative to the baseline, e.g. -158 for 148px Manrope. */
  top: number;
  height: number;
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  letterSpacing?: number;
  strokeColor: string;
  fillColor: string;
  strokeWidth?: number;
  delay?: number;
  drawDuration?: number;
  stagger?: number;
  className?: string;
}

/**
 * Outline-draw then fill-wipe headline, animated purely in CSS so it starts on first
 * paint instead of waiting for JavaScript. The viewBox comes from props (measured once
 * with the real font), so nothing is measured at runtime.
 */
export default function DrawText({
  text,
  width,
  top,
  height,
  fontSize,
  fontWeight,
  fontFamily,
  letterSpacing = 0,
  strokeColor,
  fillColor,
  strokeWidth = 1.4,
  delay = 0,
  drawDuration = 1.1,
  stagger = 0.035,
  className = '',
}: DrawTextProps) {
  const chars = Array.from(text);
  const dash = Math.max(fontSize * 7, 200);
  const fillDelay = delay + drawDuration + stagger * (chars.length - 1) + 0.1;
  const font = { fontFamily, fontSize, fontWeight, letterSpacing };
  const textProps = { x: 0, y: 0 };

  return (
    <span className={`draw-text ${className}`} aria-hidden="true">
      <svg viewBox={`${-PAD} ${top - PAD} ${width + PAD * 2} ${height + PAD * 2}`}>
        <text
          {...textProps}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ ...font, strokeDasharray: dash }}
        >
          {chars.map((char, i) => (
            <tspan
              key={i}
              className="draw-text__stroke"
              style={
                {
                  '--dash': dash,
                  animationDelay: `${delay + i * stagger}s`,
                  animationDuration: `${drawDuration}s`,
                } as React.CSSProperties
              }
            >
              {char}
            </tspan>
          ))}
        </text>
        {/* Per-letter tspans like the outline, so both get identical (unkerned) spacing */}
        <text {...textProps} fill={fillColor} className="draw-text__fill" style={{ ...font, animationDelay: `${fillDelay}s` }}>
          {chars.map((char, i) => (
            <tspan key={i}>{char}</tspan>
          ))}
        </text>
      </svg>
    </span>
  );
}
