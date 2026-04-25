'use client';

import { motion } from 'framer-motion';

export default function RomanLowestLandVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex flex-col justify-start pt-10 gap-4 px-6 pb-6 w-full h-full overflow-hidden ${className}`}>
      {/* Background — earthy desert/terrain */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#160a00] via-[#0d0500] to-black" />

      {/* Verse */}
      <motion.div
        className="relative bg-black/60 border border-amber-800/40 rounded-xl px-4 py-3 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-amber-200 text-sm leading-relaxed">
          غُلِبَتِ الرُّومُ ﴿٢﴾ فِي <span className="text-amber-300 font-bold">أَدْنَى الْأَرْضِ</span>
        </p>
        <p className="text-[10px] text-white/50 mt-1">الروم 30:2–3</p>
        <div className="flex justify-center gap-2 mt-1">
          <span className="text-[9px] bg-amber-900/40 border border-amber-700/30 rounded px-1.5 py-0.5 text-amber-300">أدنى = nearest</span>
          <span className="text-[9px] bg-orange-900/40 border border-orange-700/30 rounded px-1.5 py-0.5 text-orange-300">أدنى = LOWEST ← both valid</span>
        </div>
      </motion.div>

      {/* Main fact */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex gap-3">
          {/* Elevation card */}
          <div className="flex-1 bg-blue-950/40 border border-blue-700/30 rounded-xl p-3 text-center">
            <div className="text-3xl mb-1">🌊</div>
            <div className="text-blue-300 font-bold text-lg">−430 m</div>
            <div className="text-white/60 text-[9px] mt-1">Dead Sea elevation</div>
            <div className="text-white/50 text-[8px] mt-0.5">Lowest EXPOSED point on Earth</div>
            <div className="mt-1 text-blue-400 font-bold text-[9px]">= أدنى الأرض ✓</div>
          </div>

          {/* Battle context */}
          <div className="flex-1 bg-red-950/30 border border-red-700/20 rounded-xl p-3">
            <div className="text-red-300 font-bold text-[10px] mb-1">614 CE — Roman Defeat</div>
            <div className="text-white/60 text-[9px]">Romans crushed by Persians in the Levant / Dead Sea Jordan Rift Valley region</div>
            <div className="mt-1.5 text-green-300 font-bold text-[10px]">622–628 CE — Roman Victory</div>
            <div className="text-white/60 text-[9px]">Heraclius defeats Persia — exactly as Quran prophesied</div>
          </div>
        </div>
      </motion.div>

      {/* Geography note */}
      <motion.div
        className="relative bg-black/40 border border-orange-900/30 rounded-lg px-3 py-2"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
      >
        <div className="text-orange-300 font-bold text-xs mb-1">Unknown to 7th Century Arabs</div>
        <div className="flex gap-2">
          {[
            { label: 'Jordan Rift Valley', detail: 'Deepest continental depression' },
            { label: 'Modern Geodesy', detail: 'Established in 19th century' },
            { label: 'Dual Meaning', detail: '"nearest" + "lowest" — both true' },
          ].map((f, i) => (
            <div key={i} className="flex-1 bg-orange-950/30 rounded p-1.5 text-center">
              <div className="text-orange-300 font-bold text-[8px]">{f.label}</div>
              <div className="text-white/50 text-[7px] mt-0.5">{f.detail}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Prophecy fulfilled */}
      <motion.div
        className="relative bg-green-950/30 border border-green-700/30 rounded-lg px-3 py-1.5"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <p className="font-amiri text-green-300 text-xs text-right">
          وَهُم مِّن بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ ﴿٣﴾ فِي بِضْعِ سِنِينَ
        </p>
        <p className="text-white/50 text-[9px] mt-0.5 text-right">
          Prophecy fulfilled 622–628 CE — 8 years after Quran&apos;s prediction
        </p>
      </motion.div>
    </div>
  );
}
