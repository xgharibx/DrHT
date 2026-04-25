'use client';
import { motion } from 'framer-motion';

export default function CloudFormationVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1530] via-[#050a1a] to-black" />
      {/* Cloud formation stages SVG */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 280 200" className="w-64 h-44" fill="none">
          {/* Stage 1: Wind drives */}
          <g>
            <motion.path d="M20 150 Q40 145 60 150 Q80 155 100 150" stroke="rgba(100,180,255,0.3)" strokeWidth="1" fill="none"
              animate={{ x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
            <text x="60" y="168" textAnchor="middle" fill="rgba(100,180,255,0.5)" fontSize="7">① يُزْجِي — drives</text>
          </g>
          {/* Stage 2: Gathers */}
          <g>
            <circle cx="140" cy="120" r="15" fill="rgba(180,200,255,0.1)" stroke="rgba(180,200,255,0.2)" strokeWidth="0.5" />
            <circle cx="155" cy="118" r="12" fill="rgba(180,200,255,0.08)" stroke="rgba(180,200,255,0.15)" strokeWidth="0.5" />
            <circle cx="125" cy="122" r="10" fill="rgba(180,200,255,0.08)" stroke="rgba(180,200,255,0.15)" strokeWidth="0.5" />
            <text x="140" y="145" textAnchor="middle" fill="rgba(180,200,255,0.5)" fontSize="7">② يُؤَلِّفُ — gathers</text>
          </g>
          {/* Stage 3: Stacks (cumulonimbus) */}
          <g>
            <rect x="200" y="40" width="60" height="100" rx="20" fill="rgba(150,160,200,0.1)" stroke="rgba(150,160,200,0.2)" strokeWidth="0.5" />
            <circle cx="230" cy="42" r="22" fill="rgba(200,200,255,0.08)" stroke="rgba(200,200,255,0.15)" strokeWidth="0.5" />
            <text x="230" y="155" textAnchor="middle" fill="rgba(150,160,200,0.5)" fontSize="7">③ رُكَامًا — stacks</text>
            <text x="230" y="95" textAnchor="middle" fill="rgba(150,160,200,0.3)" fontSize="6">15 km</text>
            {/* Hail inside */}
            {[{x:220,y:60},{x:235,y:70},{x:225,y:85}].map((h,i) => (
              <motion.circle key={i} cx={h.x} cy={h.y} r="3" fill="rgba(200,220,255,0.3)"
                animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, delay: i*0.4, repeat: Infinity }} />
            ))}
          </g>
          {/* Rain from stack */}
          {[215,225,235,245].map((x,i) => (
            <motion.line key={i} x1={x} y1="140" x2={x-2} y2="155" stroke="rgba(100,180,255,0.25)" strokeWidth="0.5"
              animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 1, delay: i*0.2, repeat: Infinity }} />
          ))}
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-4 inset-x-0 px-4 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-sm text-blue-100"><span className="text-sky-300 font-bold">يُزْجِي سَحَابًا ثُمَّ يُؤَلِّفُ بَيْنَهُ ثُمَّ يَجْعَلُهُ رُكَامًا</span></p>
        <p className="text-blue-500/60 text-xs mt-0.5">النور 24:43 — Drives, gathers, then stacks clouds</p>
      </motion.div>
      {/* Process — left */}
      <motion.div className="absolute z-10" style={{ top: '24%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[115px]">
          <p className="text-blue-300 font-bold text-xs">3 Stages</p>
          <p className="text-stone-400 text-[10px]">① Wind drives vapor</p>
          <p className="text-stone-400 text-[10px]">② Coalescence</p>
          <p className="text-stone-400 text-[10px]">③ Cumulonimbus 15km</p>
          <p className="text-sky-400 text-[10px]">Exact modern sequence</p>
        </div>
      </motion.div>
      {/* Hail — right */}
      <motion.div className="absolute z-10" style={{ top: '24%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[115px]">
          <p className="text-indigo-300 font-bold text-xs">Hail بَرَدٍ</p>
          <p className="text-stone-400 text-[10px]">Forms inside cloud</p>
          <p className="text-stone-400 text-[10px]">Glaciated zone −40°C</p>
          <p className="text-stone-500 text-[9px]">Quran: from mountains</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-2 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The Quran describes the exact 3-stage process of cumulonimbus cloud formation</p>
      </motion.div>
    </div>
  );
}
