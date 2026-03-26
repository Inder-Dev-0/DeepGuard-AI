'use client';

import React from 'react';
import { motion } from 'motion/react';
import { THREAT_POINTS } from '@/lib/constants';

export const GlobalThreatMap = () => {
  return (
    <div className="relative w-full h-64 md:h-96 bg-accent/50 glass rounded-3xl overflow-hidden group border border-white/10">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 400" className="w-full h-full opacity-20">
          <path 
            d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150" 
            fill="none" 
            stroke="white" 
            strokeWidth="1" 
            className="text-white/20"
          />
          <path 
            d="M100,120 L120,110 L140,120 L160,140 L150,160 L130,170 L110,160 Z M300,100 L350,80 L400,100 L420,150 L380,200 L320,180 Z M600,150 L650,130 L700,150 L720,200 L680,250 L620,230 Z" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            className="text-white/10"
          />
        </svg>
      </div>
      
      {/* Pulsing points */}
      {THREAT_POINTS.map((p, i) => (
        <motion.div 
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="absolute"
          style={{ top: p.t, left: p.l }}
        >
          <span className={`relative flex h-4 w-4`}>
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-4 w-4 bg-neon shadow-[0_0_10px_rgba(0,255,255,0.8)]`}></span>
          </span>
        </motion.div>
      ))}

      <div className="absolute bottom-6 left-6 flex flex-col gap-1">
        <div className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Global Activity Monitor</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
          <div className="text-[10px] font-bold text-white uppercase tracking-tighter">Live Feed Active</div>
        </div>
      </div>
    </div>
  );
};
