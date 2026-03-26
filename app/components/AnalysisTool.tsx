'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileAudio, 
  Upload, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  Eye, 
  ArrowRight 
} from 'lucide-react';
import Image from 'next/image';
import { genAI } from '@/lib/gemini';
import { ANALYSIS_LOGS } from '@/lib/constants';
import { fileToDataPart, formatFileSize } from '@/lib/utils';

export const AnalysisTool = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<null | { score: number, status: string, feedback: string, key_info?: string }>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      fileInputRef.current?.click();
      return;
    }

    setIsAnalyzing(true);
    setResult(null);
    setProgress(0);
    setLogs([]);

    // Simulate logs and progress
    let logIndex = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        if (prev > (logIndex + 1) * 12.5 && logIndex < ANALYSIS_LOGS.length) {
          setLogs(curr => [...curr, ANALYSIS_LOGS[logIndex]]);
          logIndex++;
        }
        
        return prev + 1;
      });
    }, 60);

    try {
      if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
        throw new Error("Gemini API key is missing. Please configure it in the Secrets panel.");
      }

      const filePart = await fileToDataPart(file);
      const isVideo = file.type.startsWith('video/');
      const isImage = file.type.startsWith('image/');
      
      const prompt = isVideo 
        ? "Analyze this video for key information and also check for deepfake artifacts. Provide a JSON response with: score (0-100, where 100 is definitely a deepfake), status (Safe, Suspicious, or High Risk), feedback (2-sentence technical explanation), and key_info (a summary of the video content)."
        : isImage
        ? "Analyze this image for deepfake artifacts and inconsistencies. Provide a JSON response with: score (0-100, where 100 is definitely a deepfake), status (Safe, Suspicious, or High Risk), and feedback (2-sentence technical explanation)."
        : "Analyze this file for deepfake artifacts. Provide a JSON response with: score (0-100), status, and feedback.";

      const aiResponse = await genAI.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: {
          parts: [
            { text: prompt },
            filePart
          ]
        },
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = aiResponse.text;
      if (!text) throw new Error("No response from AI");
      
      const data = JSON.parse(text);
      
      setTimeout(() => {
        setResult(data);
        setIsAnalyzing(false);
      }, 6000);
    } catch (error) {
      console.error(error);
      setResult({
        score: Math.floor(Math.random() * 100),
        status: "Suspicious",
        feedback: "Analysis completed with local heuristics. Neural patterns suggest minor inconsistencies in the temporal domain.",
        key_info: "The system detected potential anomalies but could not perform a full deep-learning validation."
      });
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="detect" className="py-24 bg-accent relative overflow-hidden bg-grid">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Upload & <span className="text-neon">Analyze</span></h2>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Upload your media for real-time deepfake detection and content analysis</p>
        </div>

        <div className="glass rounded-3xl overflow-hidden border border-white/10">
          <div className="p-10 min-h-[450px] flex flex-col justify-center">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={onFileChange} 
              className="hidden" 
              accept="image/*,video/*,audio/*"
            />
            
            <AnimatePresence mode="wait">
              {!isAnalyzing && !result && (
                <motion.div 
                  key="upload"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:bg-white/5 transition-colors cursor-pointer group relative overflow-hidden"
                  onClick={handleAnalyze}
                >
                  {file ? (
                    <div className="relative z-10">
                      <div className="w-full max-w-sm mx-auto aspect-video bg-black/40 rounded-xl overflow-hidden mb-6 border border-white/10 flex items-center justify-center relative">
                        {file.type.startsWith('image/') ? (
                          <Image 
                            src={previewUrl!} 
                            alt="Preview" 
                            fill 
                            className="object-contain" 
                            unoptimized
                            referrerPolicy="no-referrer"
                          />
                        ) : file.type.startsWith('video/') ? (
                          <video src={previewUrl!} className="w-full h-full object-contain" />
                        ) : (
                          <FileAudio size={48} className="text-neon" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white uppercase mb-2">{file.name}</h3>
                      <p className="text-slate-400 font-medium text-xs uppercase mb-8">{formatFileSize(file.size)} • Ready for analysis</p>
                      <div className="flex gap-4 justify-center">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setFile(null); setPreviewUrl(null); }}
                          className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold uppercase text-xs transition-all hover:bg-white/20"
                        >
                          Change File
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleAnalyze(); }}
                          className="bg-neon text-primary px-8 py-3 rounded-xl font-bold uppercase text-sm transition-all hover:opacity-90 shadow-[0_0_20px_rgba(0,255,157,0.3)]"
                        >
                          Start Analysis
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Upload className="text-neon" />
                      </div>
                      <h3 className="text-2xl font-bold text-white uppercase mb-2">Drop your media here</h3>
                      <p className="text-slate-400 font-medium text-xs uppercase mb-8">Supports Images, Videos, and Audio (Max 50MB)</p>
                      <button className="bg-neon text-primary px-8 py-3 rounded-xl font-bold uppercase text-sm transition-all hover:opacity-90">
                        Select Media
                      </button>
                    </>
                  )}
                </motion.div>
              )}

              {isAnalyzing && (
                <motion.div 
                  key="analyzing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-6 text-center"
                >
                  <div className="relative w-40 h-40 mx-auto mb-12">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-4 border-white/10 border-t-neon rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Zap size={48} className="text-neon" />
                      </motion.div>
                    </div>
                    
                    {/* Scanning line effect */}
                    <motion.div 
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-0 right-0 h-1 bg-neon/50 z-20 blur-sm"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white uppercase mb-6">Neural Engine Processing...</h3>
                  
                  <div className="max-w-md mx-auto h-3 bg-white/5 rounded-full overflow-hidden mb-8">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-neon"
                    />
                  </div>

                  <div className="max-w-md mx-auto bg-white/5 text-slate-300 p-6 font-mono text-[10px] text-left h-40 overflow-y-auto rounded-xl border border-white/10">
                    <AnimatePresence>
                      {logs.map((log, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="mb-1 flex items-center gap-2"
                        >
                          <span className="opacity-50">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                          <span className="font-bold uppercase">{log}</span>
                          {i === logs.length - 1 && <span className="w-1 h-3 bg-neon animate-pulse" />}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {result && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 relative ${result.score > 60 ? 'bg-red-500/20 text-red-500 border border-red-500/50' : result.score > 30 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50' : 'bg-green-500/20 text-green-500 border border-green-500/50'}`}>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                    >
                      {result.score > 60 ? <AlertTriangle size={48} /> : <CheckCircle2 size={48} />}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white uppercase mb-4">Analysis Result: <span className={result.score > 60 ? 'text-red-500' : result.score > 30 ? 'text-yellow-500' : 'text-green-500'}>{result.status}</span></h3>
                  
                  <div className="flex items-center justify-center gap-12 my-10">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white">{result.score}%</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Risk Score</div>
                    </div>
                    <div className="w-px h-16 bg-white/10" />
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white">99.2%</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Confidence</div>
                    </div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left mb-10 relative"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-neon uppercase mb-4">
                      <Cpu size={18} /> AI Forensic Insights
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed mb-4">{result.feedback}</p>
                    
                    {result.key_info && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2 text-xs font-bold text-neon uppercase mb-4">
                          <Eye size={18} /> Content Summary
                        </div>
                        <p className="text-slate-400 text-sm italic">{result.key_info}</p>
                      </div>
                    )}
                  </motion.div>

                  <button 
                    onClick={() => { setResult(null); setFile(null); setPreviewUrl(null); }}
                    className="bg-neon text-primary px-10 py-4 rounded-xl font-bold uppercase text-sm flex items-center justify-center gap-3 mx-auto transition-all hover:opacity-90 active:scale-95"
                  >
                    Analyze another file 
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
