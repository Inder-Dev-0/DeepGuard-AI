'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  BarChart3, 
  FileAudio, 
  FileImage, 
  FileVideo 
} from 'lucide-react';
import { STATS, RECENT_SCANS } from '@/lib/constants';

export const Dashboard = () => {
  const [chartData] = useState(() => [...Array(30)].map(() => ({
    h1: 20 + Math.random() * 60,
    h2: 10 + Math.random() * 80,
    h3: 20 + Math.random() * 60,
    duration: 2 + Math.random() * 2
  })));

  const statsWithIcons = STATS.map((stat, i) => ({
    ...stat,
    icon: i === 0 ? <Search size={20} className="text-neon" /> :
          i === 1 ? <AlertTriangle size={20} className="text-neon" /> :
          i === 2 ? <CheckCircle2 size={20} className="text-neon" /> :
          <Activity size={20} className="text-neon" />
  }));

  return (
    <section id="dashboard" className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Detection <span className="text-neon">Dashboard</span></h2>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Track your analysis history and view comprehensive detection statistics</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsWithIcons.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-3xl border border-white/10 group hover:border-neon/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-neon/10 transition-colors border border-white/5">
                  {stat.icon}
                </div>
                <span className={`text-xs font-bold uppercase ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/10 overflow-hidden mb-12"
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
            <h3 className="font-bold text-white uppercase flex items-center gap-2 tracking-tight">
              <Cpu size={18} className="text-neon" /> Neural Engine Confidence Distribution
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,157,0.8)]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">High Confidence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Processing</span>
              </div>
            </div>
          </div>
          <div className="p-8 h-64 flex items-end gap-2 bg-grid/20 relative">
            {chartData.map((data, i) => (
              <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ height: [`${data.h1}%`, `${data.h2}%`, `${data.h3}%`] }}
                transition={{ duration: data.duration, repeat: Infinity, ease: "easeInOut" }}
                className={`flex-1 rounded-t-lg ${i % 3 === 0 ? 'bg-white/20' : 'bg-gradient-to-t from-neon/20 to-neon shadow-[0_0_20px_rgba(0,255,157,0.4)]'}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/10 overflow-hidden"
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
            <h3 className="font-bold text-white uppercase flex items-center gap-2 tracking-tight">
              <BarChart3 size={18} className="text-neon" /> Recent Scans
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] text-slate-500 uppercase tracking-widest font-bold border-b border-white/10">
                  <th className="px-6 py-4">File</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Result</th>
                  <th className="px-6 py-4">Confidence</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {RECENT_SCANS.map((scan, i) => (
                  <motion.tr 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-4 text-white font-bold flex items-center gap-3">
                      {scan.type === 'Audio' ? <FileAudio size={16} className="text-slate-500" /> : scan.type === 'Image' ? <FileImage size={16} className="text-slate-500" /> : <FileVideo size={16} className="text-slate-500" />}
                      {scan.file}
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">{scan.type}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${scan.result === 'Authentic' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                        {scan.result === 'Authentic' ? <CheckCircle2 size={10} /> : <AlertTriangle size={10} />}
                        {scan.result}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: scan.confidence }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className={`h-full ${scan.result === 'Authentic' ? 'bg-green-500' : 'bg-red-500'}`} 
                          />
                        </div>
                        <span className="text-[10px] font-bold text-white">{scan.confidence}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">{scan.date}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
