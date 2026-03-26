import React from 'react';
import { AlertTriangle, Cpu, Activity, CheckCircle2 } from 'lucide-react';
import { NavLink, Stat, RecentScan, UseCase, ThreatPoint } from './types';

export const ANALYSIS_LOGS = [
  "Initializing neural engine v2.4.0...",
  "Establishing secure handshake...",
  "Extracting metadata & headers...",
  "Performing Fourier Transform analysis...",
  "Scanning for spectral inconsistencies...",
  "Checking GAN artifact signatures...",
  "Running temporal continuity validation...",
  "Cross-referencing global threat database...",
  "Calculating biometric variance...",
  "Finalizing forensic report..."
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Detect', href: '#detect' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { label: 'Total Scans', value: '1,247', trend: '+12%' },
  { label: 'Deepfakes Detected', value: '342', trend: '+8%' },
  { label: 'Verified Authentic', value: '905', trend: '+15%' },
  { label: 'Detection Accuracy', value: '97.8%', trend: '+0.5%' },
];

export const RECENT_SCANS: RecentScan[] = [
  { file: 'interview_audio.mp3', type: 'Audio', result: 'Authentic', confidence: '94.5%', date: '2 hours ago' },
  { file: 'profile_photo.jpg', type: 'Image', result: 'Deepfake', confidence: '87.2%', date: '5 hours ago' },
  { file: 'presentation.mp4', type: 'File', result: 'Authentic', confidence: '91.8%', date: '1 day ago' },
  { file: 'voice_message.wav', type: 'Audio', result: 'Deepfake', confidence: '82.4%', date: '2 days ago' },
  { file: 'social_post.png', type: 'Image', result: 'Authentic', confidence: '96.1%', date: '3 days ago' },
];

export const USE_CASES: UseCase[] = [
  { icon: <AlertTriangle size={20} />, title: 'Fraud Detection', desc: 'Protect your organization from voice phishing and deepfake scams targeting financial transactions.' },
  { icon: <Cpu size={20} />, title: 'Corporate Security', desc: 'Verify the authenticity of video conferences and communications to prevent impersonation attacks.' },
  { icon: <Activity size={20} />, title: 'Legal Verification', desc: 'Authenticate digital evidence and ensure the integrity of media used in legal proceedings.' },
  { icon: <CheckCircle2 size={20} />, title: 'Media Integrity', desc: 'Help journalists and fact-checkers verify the authenticity of images and videos before publication.' },
];

export const THREAT_POINTS: ThreatPoint[] = [
  { t: '20%', l: '30%', c: 'neon', score: 85 },
  { t: '45%', l: '60%', c: 'neon', score: 42 },
  { t: '70%', l: '25%', c: 'neon', score: 91 },
  { t: '35%', l: '80%', c: 'neon', score: 15 },
  { t: '60%', l: '45%', c: 'neon', score: 67 },
];
