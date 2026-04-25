'use client';
import { motion } from 'framer-motion';

export default function WaterOriginLifeVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a2e] via-[#000f1a] to-black" />
      {/* Water drop with life inside SVG */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 260" className="w-44 h-56" fill="none">
          <defs><radialGradient id="wg" cx="50%" cy="40%"><stop offset="0%" stopColor="rgba(50,150,255,0.3)" /><stop offset="100%" stopColor="rgba(20,80,180,0.1)" /></radialGradient></defs>
          {/* Water drop */}
          <path d="M100 20 Q130 70 145 120 Q155 170 130 210 Q115 240 100 240 Q85 240 70 210 Q45 170 55 120 Q70 70 100 20Z" fill="url(#wg)" stroke="rgba(80,160,255,0.4)" strokeWidth="1" />
          {/* DNA helix inside */}
          {[0,1,2,3,4,5,6].map(i => (
            <g key={i}>
              <circle cx={100 + Math.sin(i * 0.9) * 15} cy={80 + i * 22} r="3" fill="rgba(100,255,150,0.4)" />
              <circle cx={100 - Math.sin(i * 0.9) * 15} cy={80 + i * 22} r="3" fill="rgba(100,200,255,0.4)" />
              <line x1={100 + Math.sin(i * 0.9) * 15} y1={80 + i * 22} x2={100 - Math.sin(i * 0.9) * 15} y2={80 + i * 22} stroke="rgba(150,220,255,0.2)" strokeWidth="0.5" />
            </g>
          ))}
          {/* Cell-like circles */}
          <circle cx="80" cy="180" r="8" fill="rgba(80,200,120,0.15)" stroke="rgba(80,200,120,0.3)" strokeWidth="0.5" />
          <circle cx="120" cy="190" r="6" fill="rgba(80,180,200,0.15)" stroke="rgba(80,180,200,0.3)" strokeWidth="0.5" />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-cyan-100">وَجَعَلْنَا <span className="text-cyan-300 font-bold">مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ</span></p>
        <p className="text-cyan-600/60 text-xs mt-0.5">الأنبياء 21:30 — From water every living thing</p>
      </motion.div>
      {/* Roles — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-cyan-950/80 backdrop-blur-sm border border-cyan-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-cyan-300 font-bold text-xs">Water = Life</p>
          <p className="text-stone-400 text-[10px]">Universal solvent</p>
          <p className="text-stone-400 text-[10px]">70-90% of every cell</p>
          <p className="text-stone-400 text-[10px]">H₂O → O₂ (plants)</p>
          <p className="text-stone-400 text-[10px]">DNA needs water</p>
        </div>
      </motion.div>
      {/* NASA — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-blue-300 font-bold text-xs">NASA Confirms</p>
          <p className="text-stone-400 text-[10px]">&quot;Follow the Water&quot;</p>
          <p className="text-stone-400 text-[10px]">Mars, Europa search</p>
          <p className="text-stone-400 text-[10px]">Water = life marker</p>
          <p className="text-violet-400 text-[9px]">Said in 7th C. desert</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">NASA&apos;s primary directive for finding extraterrestrial life: &quot;Follow the Water&quot; — the Quran stated this in a desert 1400 years ago</p>
      </motion.div>
    </div>
  );
}
