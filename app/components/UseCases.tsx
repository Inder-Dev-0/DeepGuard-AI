'use client';

import React from 'react';
import { motion } from 'motion/react';
import { USE_CASES } from '@/lib/constants';

export const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Use <span className="text-neon">Cases</span></h2>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Empowering security across various industries</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USE_CASES.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 flex items-start gap-6 hover:border-neon/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-neon border border-white/5 group-hover:bg-neon/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
