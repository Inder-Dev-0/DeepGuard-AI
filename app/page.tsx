'use client';

import React from 'react';
import { SystemTicker } from './components/SystemTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnalysisTool } from './components/AnalysisTool';
import { Dashboard } from './components/Dashboard';
import { AboutSection } from './components/AboutSection';
import { UseCases } from './components/UseCases';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function DeepGuardApp() {
  return (
    <main className="min-h-screen selection:bg-neon/30">
      <SystemTicker />
      <Navbar />
      <Hero />
      <AnalysisTool />
      <Dashboard />
      <AboutSection />
      <UseCases />
      <Contact />
      <Footer />
    </main>
  );
}
