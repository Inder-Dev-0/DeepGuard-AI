'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Zap, Lock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Get in <span className="text-neon">Touch</span></h2>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Have questions about our deepfake detection technology? We&apos;d love to hear from you.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[2.5rem] border border-white/10 relative"
        >
          <div className="absolute top-6 right-10 flex items-center gap-2">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest leading-none">Connection</span>
              <span className="text-[10px] font-mono font-bold text-white uppercase">Encrypted</span>
            </div>
            <Lock size={16} className="text-neon shadow-[0_0_8px_rgba(0,255,255,0.5)]" />
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest mb-4">
              <Mail size={14} className="text-neon" /> Send us a message
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon/50 font-medium placeholder:text-white/10 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon/50 font-medium placeholder:text-white/10 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can we help you?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon/50 font-medium placeholder:text-white/10 transition-colors resize-none"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-neon text-primary font-bold uppercase py-4 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.3)] flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            >
              <Zap size={18} /> Send Message
            </motion.button>
          </form>

          <div className="mt-10 pt-10 border-t border-white/10 text-center">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-4">Or reach us directly</p>
            <a href="mailto:contact@deepguard.ai" className="text-white font-bold uppercase hover:text-neon flex items-center justify-center gap-2 transition-colors tracking-tighter">
              <Mail size={16} className="text-neon" /> contact@deepguard.ai
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
