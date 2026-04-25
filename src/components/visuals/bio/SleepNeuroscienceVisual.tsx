'use client';
import { motion } from 'framer-motion';

export default function SleepNeuroscienceVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0818] via-[#050410] to-black" />
      {/* Brain silhouette SVG */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 180" className="w-48 h-44" fill="none">
          {/* Brain outline */}
          <path d="M60 140 Q20 120 25 80 Q30 50 60 35 Q80 25 100 25 Q120 25 140 35 Q170 50 175 80 Q180 120 140 140Z" fill="rgba(60,50,120,0.2)" stroke="rgba(100,80,200,0.3)" strokeWidth="1" />
          {/* Brain folds */}
          <path d="M70 60 Q90 50 110 60 Q130 70 100 80" stroke="rgba(120,100,200,0.2)" strokeWidth="0.5" fill="none" />
          <path d="M65 90 Q85 80 105 90 Q125 100 145 85" stroke="rgba(120,100,200,0.2)" strokeWidth="0.5" fill="none" />
          {/* Sleep waves — slow oscillations */}
          <motion.path d="M40 110 Q60 95 80 110 Q100 125 120 110 Q140 95 160 110"
            stroke="rgba(100,150,255,0.4)" strokeWidth="2" fill="none"
            animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
          {/* Zzz */}
          <motion.g animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <text x="155" y="45" fill="rgba(150,180,255,0.5)" fontSize="14" fontWeight="bold">z</text>
            <text x="165" y="32" fill="rgba(150,180,255,0.4)" fontSize="11">z</text>
            <text x="172" y="22" fill="rgba(150,180,255,0.3)" fontSize="9">z</text>
          </motion.g>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-5 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-sm text-blue-100">اللَّهُ <span className="text-amber-300 font-bold">يَتَوَفَّى الْأَنفُسَ</span> حِينَ مَوْتِهَا وَالَّتِي لَمْ تَمُتْ <span className="text-blue-300 font-bold">فِي مَنَامِهَا</span></p>
        <p className="text-blue-500/60 text-xs mt-0.5">الزمر 39:42 — Sleep as minor death</p>
      </motion.div>
      {/* Phases — left */}
      <motion.div className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-blue-300 font-bold text-xs">Sleep = وَفَاة</p>
          <p className="text-stone-400 text-[10px]">يقظة → awake</p>
          <p className="text-stone-400 text-[10px]">نوم خفيف → light</p>
          <p className="text-amber-400 text-[10px]">نوم عميق → deep</p>
          <p className="text-stone-400 text-[10px]">إيقاظ → return</p>
        </div>
      </motion.div>
      {/* Science — right */}
      <motion.div className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-indigo-300 font-bold text-xs">Neuroscience</p>
          <p className="text-stone-400 text-[10px]">Glymphatic flush</p>
          <p className="text-stone-400 text-[10px]">Memory consolidation</p>
          <p className="text-stone-400 text-[10px]">DNA repair peaks</p>
          <p className="text-green-400 text-[10px]">Consciousness off</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Deep sleep suspends consciousness — the Quran called it يَتَوَفَّى (takes the soul) 1400 years before neuroscience</p>
      </motion.div>
    </div>
  );
}
