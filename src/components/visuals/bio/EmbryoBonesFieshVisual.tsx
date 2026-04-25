'use client';
import { motion } from 'framer-motion';

export default function EmbryoBonesFieshVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060003] via-[#040002] to-black" />
      {/* Embryo SVG — central */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 260" className="w-48 h-56" fill="none">
          {/* Amniotic sac */}
          <ellipse cx="100" cy="140" rx="75" ry="95" fill="rgba(180,50,80,0.08)" stroke="rgba(180,50,80,0.2)" strokeWidth="1" />
          {/* Embryo body — C-shape */}
          <path d="M110 60 Q130 80 125 120 Q120 160 100 190 Q85 210 75 200 Q65 185 80 160 Q95 130 90 100 Q85 75 100 60Z" fill="rgba(200,130,130,0.3)" stroke="rgba(220,150,150,0.4)" strokeWidth="1" />
          {/* Spine/bone line — highlighted */}
          <path d="M105 65 Q118 90 115 120 Q110 155 95 180" stroke="rgba(255,220,100,0.7)" strokeWidth="3" strokeDasharray="4,3" fill="none" />
          {/* Bone segments */}
          {[0,1,2,3,4,5].map(i => (
            <rect key={i} x={105 + Math.sin(i*0.4)*8 - 3} y={72 + i * 18} width="8" height="12" rx="2" fill="rgba(255,230,150,0.4)" stroke="rgba(255,220,100,0.5)" strokeWidth="0.5" transform={`rotate(${-10 + i*5}, ${105 + Math.sin(i*0.4)*8}, ${78 + i*18})`} />
          ))}
          {/* Muscle/flesh layer — wrapping */}
          <path d="M125 75 Q140 100 135 130 Q128 165 110 190" stroke="rgba(220,80,80,0.5)" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Arrow from bone → flesh */}
          <path d="M130 110 L138 115" stroke="rgba(255,100,100,0.6)" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
          <defs><marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><path d="M0 0 L6 2 L0 4Z" fill="rgba(255,100,100,0.6)" /></marker></defs>
          {/* Label on bone */}
          <text x="68" y="120" fill="rgba(255,220,100,0.8)" fontSize="9" fontWeight="bold">عِظَام</text>
          {/* Label on flesh */}
          <text x="140" y="130" fill="rgba(220,80,80,0.8)" fontSize="9" fontWeight="bold">لَحْم</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-rose-100">فَخَلَقْنَا الْمُضْغَةَ <span className="text-yellow-300 font-bold">عِظَامًا</span> فَكَسَوْنَا <span className="text-red-400 font-bold">الْعِظَامَ لَحْمًا</span></p>
        <p className="text-rose-600/60 text-xs mt-0.5">المؤمنون 23:14 — Bones THEN flesh wraps them</p>
      </motion.div>
      {/* Timeline — left */}
      <motion.div className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-rose-950/80 backdrop-blur-sm border border-rose-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-rose-300 font-bold text-xs">Embryo Timeline</p>
          <p className="text-stone-400 text-[10px]">Wk 4-6: مُضْغَة somites</p>
          <p className="text-yellow-400 text-[10px]">Wk 6-8: عِظَام bones</p>
          <p className="text-red-400 text-[10px]">Wk 8+: لَحْم muscle</p>
          <p className="text-stone-500 text-[9px]">Order: bones → flesh ✓</p>
        </div>
      </motion.div>
      {/* Science — right */}
      <motion.div className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-amber-300 font-bold text-xs">كَسَوْنَا = Clothed</p>
          <p className="text-stone-400 text-[10px]">Muscles wrap bones</p>
          <p className="text-stone-400 text-[10px]">Cartilage ossifies first</p>
          <p className="text-stone-400 text-[10px]">Then myoblasts attach</p>
          <p className="text-stone-500 text-[9px]">Prof. Keith Moore</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Modern embryology confirms: cartilaginous skeleton forms before muscle tissue wraps around it</p>
      </motion.div>
    </div>
  );
}
