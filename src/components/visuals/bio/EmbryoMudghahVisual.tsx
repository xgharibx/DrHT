'use client';
import { motion } from 'framer-motion';

export default function EmbryoMudghahVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0514] via-[#060010] to-black" />
      {/* Mudghah (chewed lump) SVG */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 220 200" className="w-52 h-48" fill="none">
          {/* Chewed lump shape */}
          <path d="M60 80 Q70 50 110 45 Q150 40 170 65 Q185 85 180 110 Q175 140 150 155 Q120 170 90 160 Q60 150 50 120 Q45 100 60 80Z" fill="rgba(200,120,80,0.3)" stroke="rgba(220,140,90,0.4)" strokeWidth="1" />
          {/* Somite indentations — the "bite marks" */}
          {[0,1,2,3,4,5,6].map(i => (
            <circle key={i} cx={75 + i * 18 + Math.sin(i) * 5} cy={90 + Math.cos(i * 1.2) * 15} r={5 + Math.sin(i) * 2} fill="rgba(150,70,40,0.4)" stroke="rgba(180,90,50,0.3)" strokeWidth="0.5" />
          ))}
          {/* Teeth marks comparison — dashed overlay */}
          <path d="M65 75 Q70 55 100 48" stroke="rgba(255,200,100,0.3)" strokeWidth="1" strokeDasharray="3,3" fill="none" />
          <text x="110" y="185" textAnchor="middle" fill="rgba(255,180,100,0.6)" fontSize="11" fontWeight="bold">مُضْغَة</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-purple-100">فَخَلَقْنَا الْعَلَقَةَ <span className="text-amber-300 font-bold">مُضْغَةً</span> فَخَلَقْنَا الْمُضْغَةَ عِظَامًا</p>
        <p className="text-purple-500/60 text-xs mt-0.5">المؤمنون 23:14 — Chewed lump stage</p>
      </motion.div>
      {/* Stages — left */}
      <motion.div className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-purple-300 font-bold text-xs">Development</p>
          <p className="text-stone-400 text-[10px]">Day 0: نطفة (sperm+egg)</p>
          <p className="text-stone-400 text-[10px]">Day 14: عَلَقَة (clot)</p>
          <p className="text-amber-400 text-[10px]">Day 28: مُضْغَة ←</p>
          <p className="text-stone-400 text-[10px]">Day 42: عِظَام (bones)</p>
        </div>
      </motion.div>
      {/* Meaning — right */}
      <motion.div className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[135px]">
          <p className="text-amber-300 font-bold text-xs">مُضْغَة = Chewed</p>
          <p className="text-stone-400 text-[10px]">Somites create visible</p>
          <p className="text-stone-400 text-[10px]">"bite mark" pattern</p>
          <p className="text-stone-400 text-[10px]">Looks exactly chewed</p>
          <p className="text-stone-500 text-[9px]">Prof. Keith Moore</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The 4th-week embryo has somite indentations indistinguishable from teeth marks — described as "chewed lump" 1400 years ago</p>
      </motion.div>
    </div>
  );
}
