'use client';
import { motion } from 'framer-motion';

export default function LightningThunderVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0812] via-[#050408] to-black" />
      {/* Storm clouds — top */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-slate-900/40 to-transparent" />
        {[0,1,2].map(i => (
          <div key={i} className="absolute rounded-full bg-slate-700/30"
            style={{ width: 120 + i * 40, height: 40 + i * 10, top: 10 + i * 5, left: 20 + i * 80 - i * 20 }} />
        ))}
      </div>
      {/* Lightning bolt — central SVG */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[15%]"
        animate={{ opacity: [0.6, 1, 0.6, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg viewBox="0 0 120 300" className="w-28 h-64" fill="none">
          <path d="M65 0 L30 130 L55 130 L25 300 L90 150 L60 150 L95 0Z" fill="rgba(255,220,50,0.6)" stroke="rgba(255,240,100,0.8)" strokeWidth="1" />
          {/* Inner glow */}
          <path d="M68 20 L42 130 L58 130 L38 270 L82 155 L63 155 L88 20Z" fill="rgba(255,255,200,0.3)" />
        </svg>
      </motion.div>
      {/* Flash effect */}
      <motion.div
        className="absolute inset-0 bg-white/5 pointer-events-none"
        animate={{ opacity: [0, 0, 0.15, 0, 0, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-base text-yellow-100">يُرِيكُمُ{' '}<span className="text-yellow-300 font-bold">الْبَرْقَ خَوْفًا وَطَمَعًا</span>{' '}وَيُنَزِّلُ مِنَ السَّمَاءِ مَاءً</p>
        <p className="text-yellow-500/60 text-xs mt-0.5">الرعد 13:12 — He shows you lightning with fear and hope</p>
      </motion.div>
      {/* Left — Lightning & Nitrogen */}
      <motion.div className="absolute z-10" style={{ top: '30%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
      >
        <div className="bg-yellow-950/80 backdrop-blur-sm border border-yellow-700/30 rounded-xl px-3 py-2 max-w-[145px]">
          <p className="text-yellow-300 font-bold text-xs">N₂ Fixation</p>
          <p className="text-stone-400 text-[10px]">Lightning breaks N₂ triple bond</p>
          <p className="text-stone-400 text-[10px]">N₂ + O₂ → NO → NO₃⁻</p>
          <p className="text-green-400 text-[10px]">Nitrate fertilizes soil</p>
          <p className="text-stone-500 text-[9px]">= "sends down water" + growth</p>
        </div>
      </motion.div>
      {/* Right — Physics */}
      <motion.div className="absolute z-10" style={{ top: '30%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
      >
        <div className="bg-slate-950/80 backdrop-blur-sm border border-slate-600/30 rounded-xl px-3 py-2 max-w-[145px]">
          <p className="text-slate-200 font-bold text-xs">Lightning Physics</p>
          <p className="text-stone-400 text-[10px]">30,000°C (5× sun surface)</p>
          <p className="text-stone-400 text-[10px]">300M volts per bolt</p>
          <p className="text-stone-400 text-[10px]">Light → then sound</p>
          <p className="text-amber-400 text-[9px]">Quran: البرق before الرعد</p>
        </div>
      </motion.div>
      {/* Ground — enriched soil */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-950/30 to-transparent" />
      <motion.div className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      >
        <p className="text-stone-500 text-[10px]">100 lightning bolts strike Earth every second — each one fertilizes the soil with nitrogen, enabling plant life</p>
      </motion.div>
    </div>
  );
}
