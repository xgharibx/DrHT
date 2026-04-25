'use client';
import { motion } from 'framer-motion';

export default function BlackHolesVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0008] via-[#050004] to-black" />
      {/* Black hole SVG */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
        <svg viewBox="0 0 240 240" className="w-56 h-56" fill="none">
          {/* Accretion disk */}
          <motion.ellipse cx="120" cy="120" rx="100" ry="30" stroke="rgba(255,100,50,0.3)" strokeWidth="1.5" fill="none"
            animate={{ ry: [30, 35, 30] }} transition={{ duration: 4, repeat: Infinity }} />
          <ellipse cx="120" cy="120" rx="80" ry="22" stroke="rgba(255,150,80,0.2)" strokeWidth="1" fill="none" />
          {/* Event horizon */}
          <circle cx="120" cy="120" r="35" fill="rgba(0,0,0,0.9)" stroke="rgba(80,0,40,0.4)" strokeWidth="1" />
          {/* Photon ring glow */}
          <circle cx="120" cy="120" r="38" stroke="rgba(255,80,30,0.25)" strokeWidth="3" fill="none" />
          <circle cx="120" cy="120" r="42" stroke="rgba(255,120,50,0.15)" strokeWidth="2" fill="none" />
          {/* Gravitational lensing */}
          {[0,1,2,3,4,5].map(i => {
            const a = (i * Math.PI * 2) / 6;
            return <line key={i} x1={120+Math.cos(a)*50} y1={120+Math.sin(a)*50} x2={120+Math.cos(a)*95} y2={120+Math.sin(a)*95} stroke="rgba(255,100,50,0.1)" strokeWidth="0.5" />;
          })}
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-red-100">فَلَا أُقْسِمُ <span className="text-red-300 font-bold">بِالْخُنَّسِ الْجَوَارِ الْكُنَّسِ</span></p>
        <p className="text-red-600/60 text-xs mt-0.5">التكوير 81:15-16 — The retreating, running, hiding</p>
      </motion.div>
      {/* 3 Traits — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-red-950/80 backdrop-blur-sm border border-red-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-red-300 font-bold text-xs">3 Traits</p>
          <p className="text-stone-400 text-[10px]">خُنَّسِ = collapse inward</p>
          <p className="text-stone-400 text-[10px]">جَوَارِ = immense pull</p>
          <p className="text-stone-400 text-[10px]">كُنَّسِ = invisible/hiding</p>
          <p className="text-red-400 text-[9px]">Traps even light</p>
        </div>
      </motion.div>
      {/* Timeline — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-violet-950/80 backdrop-blur-sm border border-violet-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-violet-300 font-bold text-xs">Timeline</p>
          <p className="text-stone-400 text-[10px]">609 CE: Quran</p>
          <p className="text-stone-400 text-[10px]">1916: Schwarzschild</p>
          <p className="text-stone-400 text-[10px]">2019: M87* imaged</p>
          <p className="text-stone-500 text-[9px]">First visual proof</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Three Arabic words perfectly describe black holes — retreating, running with immense gravity, and invisible</p>
      </motion.div>
    </div>
  );
}
