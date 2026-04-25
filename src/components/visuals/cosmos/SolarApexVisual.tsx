'use client';
import { motion } from 'framer-motion';

export default function SolarApexVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#0a0600] to-black" />
      {/* Sun moving toward apex SVG */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 300 200" className="w-72 h-48" fill="none">
          {/* Galactic orbit path */}
          <ellipse cx="150" cy="120" rx="130" ry="50" stroke="rgba(200,160,50,0.15)" strokeWidth="1" strokeDasharray="5,5" fill="none" />
          {/* Sun */}
          <motion.g animate={{ cx: [80, 90, 80] }} transition={{ duration: 4, repeat: Infinity }}>
            <circle cx="80" cy="95" r="18" fill="rgba(255,200,50,0.4)" />
            <circle cx="80" cy="95" r="12" fill="rgba(255,220,80,0.5)" />
            <circle cx="80" cy="95" r="25" fill="rgba(255,180,30,0.08)" />
          </motion.g>
          {/* Motion arrow */}
          <motion.path d="M100 90 L160 75" stroke="rgba(255,200,50,0.5)" strokeWidth="2" markerEnd="url(#arw)" fill="none"
            animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
          <defs><marker id="arw" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0 0 L8 3 L0 6Z" fill="rgba(255,200,50,0.5)" /></marker></defs>
          {/* Apex target */}
          <circle cx="200" cy="68" r="5" fill="rgba(255,150,50,0.3)" stroke="rgba(255,180,80,0.5)" strokeWidth="1" />
          <text x="200" y="58" textAnchor="middle" fill="rgba(255,180,80,0.5)" fontSize="8">Apex</text>
          {/* Galactic center */}
          <circle cx="150" cy="120" r="6" fill="rgba(255,200,100,0.15)" stroke="rgba(255,200,100,0.3)" strokeWidth="0.5" />
          <text x="150" y="145" textAnchor="middle" fill="rgba(255,200,100,0.3)" fontSize="7">Galactic Center</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-amber-100">وَالشَّمْسُ <span className="text-yellow-300 font-bold">تَجْرِي لِمُسْتَقَرٍّ</span> لَّهَا</p>
        <p className="text-amber-600/60 text-xs mt-0.5">يس 36:38 — The sun runs to its resting place</p>
      </motion.div>
      {/* Motion — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-amber-300 font-bold text-xs">Solar Apex</p>
          <p className="text-stone-400 text-[10px]">19.7 km/s toward Hercules</p>
          <p className="text-stone-400 text-[10px]">220 km/s galactic orbit</p>
          <p className="text-stone-400 text-[10px]">225M yr per revolution</p>
          <p className="text-yellow-400 text-[10px]">تَجْرِي = runs actively</p>
        </div>
      </motion.div>
      {/* Discovery — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-orange-300 font-bold text-xs">مُسْتَقَرٍّ = Destination</p>
          <p className="text-stone-400 text-[10px]">Herschel 1783 CE</p>
          <p className="text-stone-400 text-[10px]">Sun is NOT stationary</p>
          <p className="text-stone-400 text-[10px]">Heading somewhere</p>
          <p className="text-stone-500 text-[9px]">1174 yrs after Quran</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The sun is not stationary — it actively runs (تَجْرِي) toward the Solar Apex at 19.7 km/s</p>
      </motion.div>
    </div>
  );
}
