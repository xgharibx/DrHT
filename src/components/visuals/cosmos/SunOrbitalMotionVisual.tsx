'use client';
import { motion } from 'framer-motion';

export default function SunOrbitalMotionVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a00] via-[#0a0500] to-black" />
      {/* Sun orbit path SVG */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 280 200" className="w-68 h-48" fill="none">
          {/* Galactic plane */}
          <ellipse cx="140" cy="110" rx="125" ry="40" stroke="rgba(200,150,50,0.12)" strokeWidth="30" fill="none" />
          {/* Orbit path */}
          <ellipse cx="140" cy="110" rx="125" ry="40" stroke="rgba(255,200,80,0.2)" strokeWidth="1" strokeDasharray="5,5" fill="none" />
          {/* Sun on orbit */}
          <motion.g animate={{ rotate: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity }}
            style={{ transformOrigin: '140px 110px' }}>
            <circle cx="20" cy="105" r="14" fill="rgba(255,200,50,0.5)" />
            <circle cx="20" cy="105" r="8" fill="rgba(255,230,100,0.6)" />
            <circle cx="20" cy="105" r="20" fill="rgba(255,180,30,0.08)" />
          </motion.g>
          {/* Galactic center */}
          <circle cx="140" cy="110" r="8" fill="rgba(255,200,100,0.2)" stroke="rgba(255,200,100,0.3)" strokeWidth="0.5" />
          <text x="140" y="150" textAnchor="middle" fill="rgba(255,200,100,0.3)" fontSize="7">المركز المجري</text>
          {/* Speed arrow */}
          <motion.path d="M35 100 L60 93" stroke="rgba(255,200,50,0.5)" strokeWidth="1.5" fill="none"
            animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
          {/* 220 km/s label */}
          <text x="55" y="85" fill="rgba(255,200,80,0.5)" fontSize="8">220 km/s</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-amber-100">وَالشَّمْسُ <span className="text-yellow-300 font-bold">تَجْرِي</span> لِمُسْتَقَرٍّ لَّهَا</p>
        <p className="text-amber-600/60 text-xs mt-0.5">يس 36:38 — The sun RUNS (active verb)</p>
      </motion.div>
      {/* Orbit — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-amber-300 font-bold text-xs">تَجْرِي = Runs</p>
          <p className="text-stone-400 text-[10px]">220 km/s orbital speed</p>
          <p className="text-stone-400 text-[10px]">225M yrs per revolution</p>
          <p className="text-stone-400 text-[10px]">26,000 ly from center</p>
          <p className="text-yellow-400 text-[10px]">NOT stationary</p>
        </div>
      </motion.div>
      {/* History — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-red-950/80 backdrop-blur-sm border border-red-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-red-300 font-bold text-xs">Historical</p>
          <p className="text-stone-400 text-[10px]">Ancient: sun orbits Earth</p>
          <p className="text-stone-400 text-[10px]">Quran: sun RUNS</p>
          <p className="text-stone-400 text-[10px]">Herschel 1783 CE</p>
          <p className="text-stone-500 text-[9px]">Confirmed galactic orbit</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The Quran used the active verb تَجْرِي (runs) — the sun orbits the galactic center at 220 km/s</p>
      </motion.div>
    </div>
  );
}
