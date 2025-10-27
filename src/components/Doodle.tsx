"use client"

import React from 'react'

interface DoodleProps {
  className?: string
}

// Polished grid-pattern doodle inspired by shadcn examples.
// Renders a subtle SVG grid with a radial fade mask. Respects currentColor.
const Doodle: React.FC<DoodleProps> = ({ className }) => {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          {/* Grid pattern */}
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
          </pattern>

          {/* Radial fade mask */}
          <radialGradient id="fadeGradient" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <mask id="fadeMask">
            <rect width="100%" height="100%" fill="url(#fadeGradient)" />
          </mask>

          {/* Accent gradient for strokes */}
          <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Grid background with fade */}
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" />

        {/* Accent diagonal lines */}
        <g stroke="url(#accent)" strokeWidth="2" strokeLinecap="round" opacity="0.6" mask="url(#fadeMask)">
          <path d="M-50 520 L 250 260" />
          <path d="M100 600 L 500 240" />
          <path d="M260 620 L 700 220" />
        </g>

        {/* Sparse dots */}
        <g fill="currentColor" opacity="0.35" mask="url(#fadeMask)">
          <circle cx="160" cy="160" r="2" />
          <circle cx="260" cy="120" r="1.8" />
          <circle cx="360" cy="180" r="2" />
          <circle cx="520" cy="150" r="1.6" />
          <circle cx="620" cy="220" r="2.2" />
          <circle cx="200" cy="420" r="1.8" />
          <circle cx="340" cy="380" r="2.2" />
          <circle cx="480" cy="420" r="1.8" />
        </g>
      </svg>
    </div>
  )
}

export default Doodle
