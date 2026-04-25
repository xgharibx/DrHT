'use client';
import { motion } from 'framer-motion';

export default function AntCommunicationVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a05] via-[#080f02] to-black" />
      {/* Large ant SVG */}
      <motion.div className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 300 200" className="w-72 h-48" fill="none">
          {/* Body segments */}
          <ellipse cx="220" cy="120" rx="40" ry="30" fill="rgba(60,40,10,0.8)" />
          <ellipse cx="160" cy="110" rx="25" ry="20" fill="rgba(70,45,15,0.85)" />
          <ellipse cx="120" cy="105" rx="18" ry="15" fill="rgba(80,50,15,0.9)" />
          {/* Head */}
          <ellipse cx="95" cy="100" rx="16" ry="14" fill="rgba(85,55,15,0.9)" />
          {/* Antennae */}
          <path d="M82 92 Q65 70 55 55" stroke="rgba(100,70,20,0.7)" strokeWidth="2" fill="none" />
          <path d="M88 88 Q78 65 72 50" stroke="rgba(100,70,20,0.7)" strokeWidth="2" fill="none" />
          {/* Legs */}
          {[0,1,2].map(i => (
            <g key={i}>
              <path d={`M${140+i*30} ${125+i*3} Q${130+i*30} ${155} ${120+i*30} ${170}`} stroke="rgba(80,50,15,0.7)" strokeWidth="2" fill="none" />
              <path d={`M${140+i*30} ${105-i*2} Q${130+i*30} ${80} ${125+i*30} ${65}`} stroke="rgba(80,50,15,0.7)" strokeWidth="2" fill="none" />
            </g>
          ))}
          {/* Pheromone waves */}
          {[1,2,3].map(i => (
            <circle key={i} cx="55" cy="55" r={i*12} stroke="rgba(160,255,50,0.2)" strokeWidth="1" fill="none" />
          ))}
          {/* Gender symbol */}
          <text x="95" y="145" textAnchor="middle" fill="rgba(255,200,50,0.8)" fontSize="14">♀</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-green-100"><span className="text-yellow-300 font-bold">قَالَتْ</span> نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ</p>
        <p className="text-green-600/60 text-xs mt-0.5">النمل 27:18 — SHE said (قَالَتْ = feminine verb)</p>
      </motion.div>
      {/* Grammar card — left */}
      <motion.div className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-green-950/80 backdrop-blur-sm border border-green-700/30 rounded-xl px-3 py-2 max-w-[140px]">
          <p className="text-yellow-300 font-bold text-xs font-amiri">قَالَتْ ♀</p>
          <p className="text-stone-400 text-[10px]">Feminine past tense</p>
          <p className="text-stone-400 text-[10px]">Not قَالَ (masculine)</p>
          <p className="text-green-400 text-[10px] mt-0.5">ALL worker ants = female</p>
        </div>
      </motion.div>
      {/* Science card — right */}
      <motion.div className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-lime-950/80 backdrop-blur-sm border border-lime-700/30 rounded-xl px-3 py-2 max-w-[140px]">
          <p className="text-lime-300 font-bold text-xs">Ant Colony</p>
          <p className="text-stone-400 text-[10px]">Workers: Female (XX)</p>
          <p className="text-stone-400 text-[10px]">Drones: Male (X only)</p>
          <p className="text-stone-400 text-[10px]">Males do NOT work</p>
          <p className="text-stone-400 text-[10px]">Pheromone alarm system</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Wilson & Hölldobler confirmed (1990) — 1,380 yrs after the Quran used the feminine form</p>
      </motion.div>
    </div>
  );
}
