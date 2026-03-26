'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-[50px] left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-accent/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-neon flex items-center justify-center rounded-xl transition-transform group-hover:scale-110">
            <Shield className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-white uppercase">
            Deep<span className="text-neon">Guard</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-slate-300 uppercase hover:text-neon transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-neon text-primary px-6 py-2 rounded-lg text-sm font-bold uppercase transition-all hover:opacity-90 active:scale-95">
            Start Detection
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-accent border-t border-white/10 p-6 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-white uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-neon text-primary px-5 py-3 rounded-lg text-sm font-bold uppercase mt-2">
              Start Detection
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
