'use client';
import { motion } from 'framer-motion';

export default function DeepOceanDarknessVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a33] via-[#000a15] to-black" />
      {/* Ocean depth zones SVG */}
      <motion.div className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 220 220" className="w-52 h-52" fill="none">
          {/* Surface waves */}
          <motion.path d="M10 20 Q30 15 55 20 Q80 25 110 20 Q140 15 165 20 Q190 25 210 20" stroke="rgba(100,200,255,0.4)" strokeWidth="1" fill="none"
            animate={{ y: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          {/* Sunlit 0-200m */}
          <rect x="10" y="25" width="200" height="40" fill="rgba(50,150,255,0.15)" />
          <text x="110" y="48" textAnchor="middle" fill="rgba(100,200,255,0.6)" fontSize="8">Sunlit 0–200m</text>
          {/* Light rays in sunlit */}
          {[40,80,120,160].map((x,i) => (
            <motion.line key={i} x1={x} y1="25" x2={x+5} y2="55" stroke="rgba(255,255,200,0.15)" strokeWidth="1"
              animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 2, delay: i*0.3, repeat: Infinity }} />
          ))}
          {/* Twilight 200-1000m */}
          <rect x="10" y="65" width="200" height="45" fill="rgba(30,60,120,0.15)" />
          <text x="110" y="92" textAnchor="middle" fill="rgba(80,120,200,0.5)" fontSize="8">Twilight 200–1000m</text>
          <text x="180" y="82" fill="rgba(80,120,200,0.3)" fontSize="6">&lt;1% light</text>
          {/* Midnight 1000-4000m */}
          <rect x="10" y="110" width="200" height="50" fill="rgba(10,20,60,0.2)" />
          <text x="110" y="138" textAnchor="middle" fill="rgba(60,80,150,0.4)" fontSize="8">Midnight 1–4km</text>
          <text x="180" y="128" fill="rgba(60,80,150,0.3)" fontSize="6">0% light</text>
          {/* Abyss 4000m+ */}
          <rect x="10" y="160" width="200" height="50" fill="rgba(5,5,20,0.3)" />
          <text x="110" y="190" textAnchor="middle" fill="rgba(40,50,100,0.3)" fontSize="8">Abyss 4000m+</text>
          {/* Internal wave line */}
          <motion.path d="M10 110 Q50 105 110 112 Q170 118 210 110" stroke="rgba(100,150,255,0.2)" strokeWidth="1" strokeDasharray="4,4" fill="none"
            animate={{ y: [0, 4, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-4 inset-x-0 px-4 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-sm text-blue-100"><span className="text-indigo-300 font-bold">ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ</span></p>
        <p className="text-blue-500/60 text-xs mt-0.5">النور 24:40 — Layers of darkness, one above another</p>
      </motion.div>
      {/* Layers — left */}
      <motion.div className="absolute z-10" style={{ top: '24%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[110px]">
          <p className="text-blue-300 font-bold text-xs">بَحْرٍ لُّجِّيٍّ</p>
          <p className="text-stone-400 text-[10px]">Deep ocean = لُجِّي</p>
          <p className="text-stone-400 text-[10px]">Stacked darkness</p>
          <p className="text-indigo-400 text-[10px]">Internal waves</p>
        </div>
      </motion.div>
      {/* Science — right */}
      <motion.div className="absolute z-10" style={{ top: '24%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[110px]">
          <p className="text-indigo-300 font-bold text-xs">Discovery</p>
          <p className="text-stone-400 text-[10px]">20th C sonar</p>
          <p className="text-stone-400 text-[10px]">Internal waves found</p>
          <p className="text-stone-500 text-[9px]">No submarines 7th C</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-2 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The Quran described stacked ocean darkness layers and internal waves — discovered only with modern sonar</p>
      </motion.div>
    </div>
  );
}
