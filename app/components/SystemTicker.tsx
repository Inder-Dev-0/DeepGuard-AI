'use client';

import React from 'react';
import { motion } from 'motion/react';

export const SystemTicker = () => {
  const alerts = [
    "THREAT DETECTED: SYNTHETIC VOICE CLONE ATTEMPT",
    "SYSTEM STATUS: NEURAL ENGINE OPTIMIZED",
    "NEW SCAN: VIDEO VERIFICATION COMPLETE",
    "SECURITY ALERT: CROSS-DOMAIN SPOOFING BLOCKED",
    "DATABASE UPDATE: 1.2M NEW DEEPFAKE PATTERNS INDEXED",
    "GLOBAL ACTIVITY: 4,521 SCANS PROCESSED"
  ];

  return (
    <div className="bg-accent/95 backdrop-blur-md border-b border-white/10 py-3 overflow-hidden whitespace-nowrap fixed top-0 left-0 right-0 z-[60] h-[50px]">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="inline-flex gap-12 items-center h-full"
      >
        {[...alerts, ...alerts].map((alert, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-neon rounded-full shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
            <span className="text-[10px] font-mono font-bold text-white/70 tracking-widest uppercase">{alert}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
