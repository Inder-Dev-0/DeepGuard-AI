'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileAudio, FileImage, File, Cpu } from 'lucide-react';
import { GlitchText } from './GlitchText';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-60 pb-20 overflow-hidden bg-accent bg-grid">
      {/* Scanning background overlay */}
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent h-1/2 pointer-events-none z-0"
      />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/10 blur-[120px] rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-neon mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
            </span>
            v2.4.0 Neural Engine Active
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Detect <GlitchText text="Deepfakes" /><br />
            Protect Truth
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10">
            Our advanced AI analyzes voice, images, and files to identify manipulated media with high accuracy. Stay protected against digital deception.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-neon text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all glow-blue"
            >
              Upload Now <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <FileAudio className="text-neon" />, title: 'Voice Analysis', desc: 'Detect synthetic or cloned voices with spectral analysis.' },
            { icon: <FileImage className="text-white" />, title: 'Image Detection', desc: 'Identify AI-generated or manipulated images.' },
            { icon: <File className="text-cyan-400" />, title: 'File Verification', desc: 'Analyze face swaps and deepfake files.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
              className="glass p-8 rounded-2xl text-left hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu size={80} />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
