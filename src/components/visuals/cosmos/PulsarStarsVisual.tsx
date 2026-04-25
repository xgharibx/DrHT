'use client';
import { motion } from 'framer-motion';

export default function PulsarStarsVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#08001a] via-[#040010] to-black" />
      {/* Pulsar SVG */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
        <svg viewBox="0 0 240 240" className="w-56 h-56" fill="none">
          {/* Neutron star core */}
          <circle cx="120" cy="120" r="20" fill="rgba(160,120,255,0.4)" stroke="rgba(180,140,255,0.5)" strokeWidth="1" />
          {/* Magnetic field lines */}
          <ellipse cx="120" cy="120" rx="60" ry="80" stroke="rgba(100,80,200,0.15)" strokeWidth="0.5" fill="none" transform="rotate(-15, 120, 120)" />
          <ellipse cx="120" cy="120" rx="45" ry="65" stroke="rgba(100,80,200,0.1)" strokeWidth="0.5" fill="none" transform="rotate(-15, 120, 120)" />
          {/* Radiation beams — piercing */}
          <motion.g animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 0.1, repeat: Infinity }}>
            <path d="M120 100 L105 10 L135 10Z" fill="rgba(180,150,255,0.3)" />
            <path d="M120 140 L105 230 L135 230Z" fill="rgba(180,150,255,0.3)" />
          </motion.g>
          {/* Beam glow */}
          <line x1="120" y1="10" x2="120" y2="100" stroke="rgba(200,180,255,0.5)" strokeWidth="2" />
          <line x1="120" y1="140" x2="120" y2="230" stroke="rgba(200,180,255,0.5)" strokeWidth="2" />
          {/* Rotation indicator */}
          <motion.circle cx="120" cy="120" r="25" stroke="rgba(150,120,255,0.3)" strokeWidth="0.5" fill="none" strokeDasharray="4,4"
            animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-purple-100">وَالسَّمَاءِ وَالطَّارِقِ … النَّجْمُ <span className="text-violet-300 font-bold">الثَّاقِبُ</span></p>
        <p className="text-purple-500/60 text-xs mt-0.5">الطارق 86:1,3 — The piercing star that knocks</p>
      </motion.div>
      {/* Pulsar — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-purple-300 font-bold text-xs">الثَّاقِبُ = Piercing</p>
          <p className="text-stone-400 text-[10px]">Focused radiation beam</p>
          <p className="text-stone-400 text-[10px]">10³⁷ watts output</p>
          <p className="text-stone-400 text-[10px]">الطَّارِقِ = knocking</p>
          <p className="text-violet-400 text-[10px]">Regular pulses</p>
        </div>
      </motion.div>
      {/* Stats — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-indigo-300 font-bold text-xs">Crab Pulsar</p>
          <p className="text-stone-400 text-[10px]">30 pulses/second</p>
          <p className="text-stone-400 text-[10px]">Discovered 1967</p>
          <p className="text-stone-400 text-[10px]">Nobel Prize 1974</p>
          <p className="text-stone-500 text-[9px]">Hewish & Bell</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Pulsars knock with regular pulses and pierce through space — الطَّارِقِ الثَّاقِبُ describes both behaviors</p>
      </motion.div>
    </div>
  );
}
