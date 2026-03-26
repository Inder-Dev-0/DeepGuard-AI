'use client';

import React from 'react';

export const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 text-neon opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 pointer-events-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 text-accent opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 pointer-events-none">
        {text}
      </span>
    </span>
  );
};
