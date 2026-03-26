'use client';

import React from 'react';
import { Shield } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-accent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-neon flex items-center justify-center rounded-xl">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold text-white uppercase tracking-tighter">
                Deep<span className="text-neon">Guard</span>
              </span>
            </div>
            <p className="text-slate-400 font-medium text-sm max-w-sm leading-relaxed">
              AI-powered deepfake detection to protect the integrity of digital media and safeguard against manipulation.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase mb-6">Product</h4>
            <ul className="space-y-4 text-xs font-medium uppercase text-slate-400">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-neon transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-xs font-medium uppercase text-slate-400">
              <li><a href="#about" className="hover:text-neon transition-colors">About</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-neon transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">© 2026 DeepGuard AI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
