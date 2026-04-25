'use client';
import { motion } from 'framer-motion';

export default function NightCoveringVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020318] via-[#010210] to-black" />
      {/* Stars */}
      {[...Array(20)].map((_,i) => (
        <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{ left: `${5+i*4.5}%`, top: `${10+Math.sin(i)*20+15}%` }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2+i*0.3, repeat: Infinity }} />
      ))}
      {/* Night blanket — draped fabric SVG */}
      <motion.div className="absolute inset-0"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <defs><linearGradient id="ng" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(30,20,80,0.3)" /><stop offset="100%" stopColor="rgba(10,5,30,0.1)" /></linearGradient></defs>
          <path d="M0 80 Q100 60 200 90 Q300 120 400 70 L400 400 L0 400Z" fill="url(#ng)" />
          <path d="M0 80 Q100 60 200 90 Q300 120 400 70" stroke="rgba(100,80,200,0.2)" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>
      {/* Sleeping figure silhouette */}
      <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 80" className="w-52 h-20" fill="none">
          <path d="M30 60 Q40 30 70 25 Q100 20 130 25 Q150 30 160 40 Q170 50 170 60" fill="rgba(60,50,120,0.2)" stroke="rgba(100,80,200,0.3)" strokeWidth="1" />
          <circle cx="55" cy="40" r="12" fill="rgba(80,60,140,0.15)" stroke="rgba(120,100,200,0.2)" strokeWidth="0.5" />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-indigo-100">وَجَعَلْنَا <span className="text-violet-300 font-bold">اللَّيْلَ لِبَاسًا</span></p>
        <p className="text-indigo-500/60 text-xs mt-0.5">النبأ 78:10 — Night as a garment/covering</p>
      </motion.div>
      {/* Melatonin — left */}
      <motion.div className="absolute z-10" style={{ top: '30%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-indigo-300 font-bold text-xs">Melatonin</p>
          <p className="text-stone-400 text-[10px]">Only in darkness</p>
          <p className="text-stone-400 text-[10px]">Regulates circadian</p>
          <p className="text-stone-400 text-[10px]">DNA repair in sleep</p>
          <p className="text-amber-400 text-[10px]">لِبَاسًا = covering</p>
        </div>
      </motion.div>
      {/* Brain cleaning — right */}
      <motion.div className="absolute z-10" style={{ top: '30%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-violet-950/80 backdrop-blur-sm border border-violet-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-violet-300 font-bold text-xs">Brain Cleaning</p>
          <p className="text-stone-400 text-[10px]">Glymphatic system</p>
          <p className="text-stone-400 text-[10px]">Flushes toxins</p>
          <p className="text-stone-400 text-[10px]">Only during sleep</p>
          <p className="text-stone-500 text-[9px]">Nobel Prize 2017</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">WHO: nighttime light exposure is a &quot;probable carcinogen&quot; — the night covering is essential for life</p>
      </motion.div>
    </div>
  );
}
