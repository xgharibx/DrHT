'use client';
import { motion } from 'framer-motion';

export default function BlackHolesQuranVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020005] via-[#010003] to-black" />
      {/* Accretion disk glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-64 h-16 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(255,150,30,0.3) 0%, rgba(200,80,20,0.2) 40%, transparent 70%)' }} />
      </motion.div>
      {/* Outer glow rings */}
      {[1,2,3].map(i => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ width: i * 80, height: i * 80, borderColor: `rgba(200,100,20,${0.3 - i*0.07})` }}
          animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3 + i, repeat: Infinity }}
        />
      ))}
      {/* Black hole — central void */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black border-2 border-orange-900/50" style={{ boxShadow: '0 0 40px rgba(200,100,20,0.4), inset 0 0 20px black' }} />
      {/* Verse */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-orange-100">فَلَا أُقْسِمُ بِ{' '}<span className="text-orange-300 font-bold">الْخُنَّسِ ● الْجَوَارِ الْكُنَّسِ</span></p>
        <p className="text-orange-600/60 text-xs mt-0.5">التكوير 81:15-16 — The receding sweepers (that hide)</p>
      </motion.div>
      {/* Left info */}
      <motion.div className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
      >
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-700/30 rounded-xl px-3 py-2 max-w-[148px]">
          <p className="text-orange-300 font-bold text-xs">الْخُنَّسِ = Recedes</p>
          <p className="text-stone-400 text-[10px]">Black holes "hide" — absorb all light</p>
          <p className="text-stone-400 text-[10px]">No light escapes event horizon</p>
        </div>
      </motion.div>
      {/* Right info */}
      <motion.div className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }}
      >
        <div className="bg-slate-950/80 backdrop-blur-sm border border-slate-600/30 rounded-xl px-3 py-2 max-w-[148px]">
          <p className="text-slate-200 font-bold text-xs">الْكُنَّسِ = Sweeper</p>
          <p className="text-stone-400 text-[10px]">Enormous gravity sweeps surrounding matter</p>
          <p className="text-stone-400 text-[10px]">Singularity: infinite density</p>
        </div>
      </motion.div>
      {/* Event horizon info */}
      <motion.div className="absolute z-10 bottom-[22%] left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
      >
        <div className="bg-black/70 backdrop-blur-sm border border-orange-800/30 rounded-xl px-3 py-1.5 text-center">
          <p className="text-orange-400 text-xs font-bold">Schwarzschild radius</p>
          <p className="text-stone-400 text-[10px]">r_s = 2GM/c² — event horizon</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      >
        <p className="text-stone-500 text-[10px]">Karl Schwarzschild predicted black holes (1916) — Einstein confirmed (1939) — Quran described 1,400 years earlier</p>
      </motion.div>
    </div>
  );
}
