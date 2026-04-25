'use client';
import { motion } from 'framer-motion';

export default function PairsCreationVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0020] via-[#050010] to-black" />
      {/* Matter/Antimatter pairs SVG */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 280 200" className="w-64 h-44" fill="none">
          {/* Electron pair */}
          <g>
            <circle cx="70" cy="60" r="18" fill="rgba(80,120,255,0.2)" stroke="rgba(100,150,255,0.4)" strokeWidth="1" />
            <text x="70" y="64" textAnchor="middle" fill="rgba(100,180,255,0.8)" fontSize="12">e⁻</text>
            <circle cx="140" cy="60" r="18" fill="rgba(255,80,150,0.2)" stroke="rgba(255,100,170,0.4)" strokeWidth="1" />
            <text x="140" y="64" textAnchor="middle" fill="rgba(255,120,180,0.8)" fontSize="12">e⁺</text>
            <line x1="88" y1="60" x2="122" y2="60" stroke="rgba(200,150,255,0.3)" strokeWidth="1" strokeDasharray="3,3" />
          </g>
          {/* Proton pair */}
          <g>
            <circle cx="70" cy="120" r="18" fill="rgba(80,200,120,0.2)" stroke="rgba(100,220,140,0.4)" strokeWidth="1" />
            <text x="70" y="124" textAnchor="middle" fill="rgba(100,230,150,0.8)" fontSize="11">p⁺</text>
            <circle cx="140" cy="120" r="18" fill="rgba(255,120,80,0.2)" stroke="rgba(255,140,100,0.4)" strokeWidth="1" />
            <text x="140" y="124" textAnchor="middle" fill="rgba(255,160,120,0.8)" fontSize="10">p̄</text>
            <line x1="88" y1="120" x2="122" y2="120" stroke="rgba(200,150,255,0.3)" strokeWidth="1" strokeDasharray="3,3" />
          </g>
          {/* Spin pair */}
          <g>
            <circle cx="70" cy="170" r="14" fill="rgba(255,200,50,0.15)" stroke="rgba(255,200,80,0.3)" strokeWidth="1" />
            <text x="70" y="174" textAnchor="middle" fill="rgba(255,220,100,0.8)" fontSize="12">↑</text>
            <circle cx="140" cy="170" r="14" fill="rgba(255,200,50,0.15)" stroke="rgba(255,200,80,0.3)" strokeWidth="1" />
            <text x="140" y="174" textAnchor="middle" fill="rgba(255,220,100,0.8)" fontSize="12">↓</text>
            <line x1="84" y1="170" x2="126" y2="170" stroke="rgba(200,150,255,0.3)" strokeWidth="1" strokeDasharray="3,3" />
          </g>
          {/* Labels */}
          <text x="210" y="64" fill="rgba(150,150,255,0.5)" fontSize="8">Matter | Antimatter</text>
          <text x="210" y="124" fill="rgba(150,200,150,0.5)" fontSize="8">Proton | Antiproton</text>
          <text x="210" y="174" fill="rgba(255,220,100,0.5)" fontSize="8">Spin Up | Spin Down</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-purple-100">وَمِن كُلِّ شَيْءٍ خَلَقْنَا <span className="text-pink-300 font-bold">زَوْجَيْنِ</span></p>
        <p className="text-purple-500/60 text-xs mt-0.5">الذاريات 51:49 — From everything We created pairs</p>
      </motion.div>
      {/* Physics — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-xl px-3 py-2 max-w-[120px]">
          <p className="text-purple-300 font-bold text-xs">Pairs in Physics</p>
          <p className="text-stone-400 text-[10px]">Matter + antimatter</p>
          <p className="text-stone-400 text-[10px]">Charge + / −</p>
          <p className="text-stone-400 text-[10px]">Spin ↑ / ↓</p>
          <p className="text-cyan-400 text-[10px]">كُلِّ شَيْءٍ = everything</p>
        </div>
      </motion.div>
      {/* Nobels — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-pink-950/80 backdrop-blur-sm border border-pink-700/30 rounded-xl px-3 py-2 max-w-[120px]">
          <p className="text-pink-300 font-bold text-xs">Discovery</p>
          <p className="text-stone-400 text-[10px]">Dirac 1928 (theory)</p>
          <p className="text-stone-400 text-[10px]">Nobel 1933</p>
          <p className="text-stone-400 text-[10px]">Anderson 1932 (e⁺)</p>
          <p className="text-stone-400 text-[10px]">Nobel 1936</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Everything in the universe exists in pairs — matter/antimatter, positive/negative, spin up/down</p>
      </motion.div>
    </div>
  );
}
