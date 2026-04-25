'use client';

import { motion } from 'framer-motion';

export default function MountainsStabilityVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex flex-col justify-start pt-10 gap-4 px-6 pb-6 w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e04] via-[#050800] to-black" />

      {/* Verse */}
      <motion.div
        className="relative bg-black/60 border border-lime-800/40 rounded-xl px-4 py-3 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lime-200 text-sm leading-relaxed">
          وَالْجِبَالَ <span className="text-lime-300 font-bold">أَوْتَادًا</span>
        </p>
        <p className="font-amiri text-lime-100/70 text-xs mt-1">
          وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ <span className="text-yellow-300 font-bold">أَن تَمِيدَ بِهِمْ</span>
        </p>
        <p className="text-[10px] text-white/50 mt-1">النبأ 78:7 + الأنبياء 21:31 — Mountains as pegs preventing shifting</p>
      </motion.div>

      {/* Iceberg / Peg diagram */}
      <motion.div
        className="relative flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Mountain cross-section */}
        <div className="flex-1 bg-stone-950/40 border border-stone-700/30 rounded-xl p-3">
          <div className="text-stone-300 font-bold text-xs mb-2 text-center">Mountain Cross-Section</div>
          <div className="flex flex-col items-center gap-0">
            {/* Above ground */}
            <div className="w-16 h-8 bg-gradient-to-b from-stone-500 to-stone-700 rounded-t-lg flex items-center justify-center">
              <span className="text-white/80 text-[8px] font-bold">Peak</span>
            </div>
            {/* Dividing line */}
            <div className="w-full h-px bg-green-700/60" />
            {/* Root */}
            <div className="w-24 h-12 bg-gradient-to-b from-stone-800 to-stone-900 rounded-b-lg flex items-center justify-center border-2 border-lime-700/30">
              <span className="text-lime-300 text-[8px] font-bold">Root ~70 km</span>
            </div>
          </div>
          <p className="text-white/40 text-[8px] text-center mt-1">Himalayas: root extends 70 km into mantle</p>
        </div>

        {/* Peg comparison */}
        <div className="flex-1 bg-amber-950/30 border border-amber-700/20 rounded-xl p-3">
          <div className="text-amber-300 font-bold text-xs mb-2 text-center">وتد (Peg/Stake)</div>
          <div className="flex flex-col items-center gap-0">
            <div className="w-6 h-6 bg-amber-700 rounded-t" />
            <div className="w-full h-px bg-amber-700/60" />
            <div className="w-3 h-14 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b" />
          </div>
          <p className="text-white/40 text-[8px] text-center mt-1">Both extend deep below the surface</p>
        </div>
      </motion.div>

      {/* Isostasy note */}
      <motion.div
        className="relative bg-green-950/30 border border-green-700/30 rounded-lg px-3 py-2"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <div className="text-green-300 font-bold text-xs mb-1">Isostatic Stabilization</div>
        <div className="flex gap-2">
          {['Crustal root anchors plate', 'Prevents lateral sliding', 'Confirmed by seismic data'].map((s, i) => (
            <div key={i} className="flex-1 bg-green-950/40 rounded p-1.5 text-center">
              <div className="text-green-300 text-[8px]">{s}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
