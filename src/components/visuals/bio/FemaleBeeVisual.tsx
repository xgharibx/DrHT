'use client';
import { motion } from 'framer-motion';

export default function FemaleBeeVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a00] via-[#0a1500] to-black" />
      {/* Honeycomb background */}
      <div className="absolute inset-0 opacity-10">
        {[0,1,2,3,4].map(row => [0,1,2,3,4,5].map(col => (
          <div key={`${row}-${col}`} className="absolute w-12 h-10"
            style={{ left: col * 50 + (row % 2) * 25, top: row * 42 + 60 }}>
            <svg viewBox="0 0 50 44" className="w-full h-full"><polygon points="25,0 50,12 50,32 25,44 0,32 0,12" stroke="rgba(200,160,50,0.3)" strokeWidth="1" fill="none" /></svg>
          </div>
        )))}
      </div>
      {/* Bee SVG */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 140" className="w-56 h-36" fill="none">
          {/* Wings */}
          <ellipse cx="85" cy="40" rx="30" ry="15" fill="rgba(200,200,255,0.15)" stroke="rgba(200,200,255,0.3)" strokeWidth="0.5" />
          <ellipse cx="115" cy="35" rx="25" ry="12" fill="rgba(200,200,255,0.12)" stroke="rgba(200,200,255,0.25)" strokeWidth="0.5" />
          {/* Body */}
          <ellipse cx="120" cy="75" rx="35" ry="22" fill="rgba(200,160,30,0.6)" />
          {/* Stripes */}
          {[0,1,2].map(i => (
            <rect key={i} x={98 + i * 16} y="58" width="10" height="34" rx="2" fill="rgba(30,20,0,0.5)" />
          ))}
          {/* Head */}
          <circle cx="75" cy="72" r="15" fill="rgba(60,40,10,0.8)" />
          {/* Antennae */}
          <path d="M68 60 Q55 40 50 35" stroke="rgba(80,60,20,0.6)" strokeWidth="1.5" fill="none" />
          <path d="M75 58 Q68 38 65 33" stroke="rgba(80,60,20,0.6)" strokeWidth="1.5" fill="none" />
          {/* Female symbol */}
          <text x="120" y="112" textAnchor="middle" fill="rgba(255,200,50,0.8)" fontSize="16">♀</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-5 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-sm text-green-100">وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ <span className="text-emerald-300 font-bold">اتَّخِذِي</span> … ثُمَّ <span className="text-amber-300 font-bold">كُلِي</span> … فَ<span className="text-violet-300 font-bold">اسْلُكِي</span></p>
        <p className="text-green-600/60 text-xs mt-0.5">النحل 16:68-69 — ALL verbs are feminine (ي)</p>
      </motion.div>
      {/* Verbs — left */}
      <motion.div className="absolute z-10" style={{ top: '27%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-green-950/80 backdrop-blur-sm border border-green-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-green-300 font-bold text-xs">Feminine Verbs</p>
          <p className="text-emerald-400 text-[10px] font-amiri">اتَّخِذِي — Take!</p>
          <p className="text-amber-400 text-[10px] font-amiri">كُلِي — Eat!</p>
          <p className="text-violet-400 text-[10px] font-amiri">اسْلُكِي — Follow!</p>
          <p className="text-stone-500 text-[9px]">2nd person fem. singular</p>
        </div>
      </motion.div>
      {/* Facts — right */}
      <motion.div className="absolute z-10" style={{ top: '27%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-amber-300 font-bold text-xs">Worker Bee ♀</p>
          <p className="text-stone-400 text-[10px]">Builds honeycomb ✓</p>
          <p className="text-stone-400 text-[10px]">Collects nectar ✓</p>
          <p className="text-stone-400 text-[10px]">Produces honey ✓</p>
          <p className="text-stone-400 text-[10px]">Drone ♂ = no work ✗</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Charles Butler discovered worker bees are female in 1609 CE — 1,000 years after the Quran used feminine verbs</p>
      </motion.div>
    </div>
  );
}
