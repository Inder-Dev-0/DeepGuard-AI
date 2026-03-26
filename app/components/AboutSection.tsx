'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Activity } from 'lucide-react';
import { GlobalThreatMap } from './GlobalThreatMap';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">About <span className="text-neon">Deepfake Tech</span></h2>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest max-w-2xl mx-auto">Deepfakes use artificial intelligence to create convincing fake media. Understanding this technology is the first step in protecting yourself.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield size={60} className="text-neon" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">What Are Deepfakes?</h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-4">
                Deepfakes are synthetic media where a person in an existing image or video is replaced with someone else&apos;s likeness using artificial neural networks. The term combines &quot;deep learning&quot; and &quot;fake.&quot;
              </p>
              <p className="text-slate-400 font-medium leading-relaxed">
                These AI-generated fakes can be incredibly convincing, making it difficult for humans to distinguish between authentic and manipulated content. From voice cloning to face swapping, deepfake technology continues to evolve.
              </p>
            </div>
            
            <GlobalThreatMap />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-10" />
              <div className="relative z-10 w-48 h-48 rounded-3xl border border-neon/20 bg-neon/5 flex items-center justify-center animate-pulse shadow-[0_0_50px_rgba(0,255,255,0.1)]">
                <div className="w-32 h-32 rounded-2xl border border-white/10 bg-accent/50 flex items-center justify-center">
                  <Cpu size={64} className="text-neon" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]" 
                />
                <motion.div 
                  animate={{ scale: [1.5, 1, 1.5], opacity: [0.4, 0.2, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                />
                <motion.div 
                  animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/3 right-1/4 w-4 h-4 bg-neon rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]" 
                />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-xl border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Activity size={14} className="text-neon" /> AI-Powered Analysis
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
