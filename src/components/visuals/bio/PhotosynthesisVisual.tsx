'use client';
import { motion } from 'framer-motion';

export default function PhotosynthesisVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Night sky — dark green */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010e04] via-[#020c06] to-black" />
      {/* Faint starfield */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-px h-px rounded-full bg-white/30"
          style={{ top: Math.random() * 35 + '%', left: Math.random() * 100 + '%' }} />
      ))}

      {/* SUN — top centre glow */}
      <motion.div
        className="absolute top-[-20px] left-1/2 -translate-x-1/2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-32 h-32 rounded-full bg-yellow-400/20 blur-2xl" />
        <div className="absolute inset-8 rounded-full bg-yellow-300/30 blur-lg" />
      </motion.div>

      {/* TREE — central large SVG */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scaleY: 0.8, originY: 1 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 300 260" className="w-64 h-56" fill="none">
          {/* Trunk */}
          <rect x="135" y="200" width="30" height="60" rx="4" fill="rgba(80,50,20,0.9)" />
          {/* Large canopy layers */}
          <ellipse cx="150" cy="170" rx="80" ry="55" fill="rgba(10,80,20,0.8)" />
          <ellipse cx="150" cy="140" rx="65" ry="45" fill="rgba(15,100,25,0.85)" />
          <ellipse cx="150" cy="115" rx="50" ry="38" fill="rgba(20,120,30,0.9)" />
          <ellipse cx="150" cy="95" rx="38" ry="30" fill="rgba(30,140,40,0.92)" />
          {/* Highlights (chlorophyll glow) */}
          <ellipse cx="135" cy="100" rx="15" ry="12" fill="rgba(80,200,50,0.2)" />
          <ellipse cx="162" cy="120" rx="12" ry="10" fill="rgba(80,200,50,0.15)" />
        </svg>
      </motion.div>

      {/* Sunlight rays — animated */}
      {['-20deg', '0deg', '20deg'].map((rot, i) => (
        <motion.div
          key={i}
          className="absolute top-8 left-1/2 origin-top h-40 w-px"
          style={{ transform: `translateX(-50%) rotate(${rot})`, background: 'linear-gradient(to bottom, rgba(255,220,50,0.5), transparent)' }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* Verse — top left */}
      <motion.div
        className="absolute top-5 left-4 z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-green-950/80 backdrop-blur-sm border border-green-700/30 rounded-xl px-3 py-2 max-w-[220px]">
          <p className="font-amiri text-sm text-green-100 leading-relaxed">
            الَّذِي جَعَلَ لَكُم مِّنَ{' '}
            <span className="text-green-400 font-bold">الشَّجَرِ الْأَخْضَرِ</span>{' '}
            <span className="text-orange-400 font-bold">نَارًا</span>
          </p>
          <p className="text-green-600 text-[10px] mt-0.5">يس 36:80 — From the GREEN tree, FIRE</p>
        </div>
      </motion.div>

      {/* Photosynthesis equation — right side */}
      <motion.div
        className="absolute top-[22%] right-4 z-10"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="bg-emerald-950/80 backdrop-blur-sm border border-emerald-700/30 rounded-xl px-3 py-2">
          <p className="text-emerald-300 text-[9px] font-bold uppercase tracking-wider mb-1">Photosynthesis (1779)</p>
          <p className="text-white font-mono text-[9px]">6CO₂ + 6H₂O + ☀️</p>
          <p className="text-green-400 font-bold text-[9px] text-center">↓ C₆H₁₂O₆ stored</p>
          <div className="h-px bg-emerald-800/50 my-1" />
          <p className="text-white font-mono text-[9px]">C₆H₁₂O₆ + O₂</p>
          <p className="text-orange-400 font-bold text-[9px] text-center">↓ 🔥 2,800 kJ released</p>
        </div>
      </motion.div>

      {/* Why GREEN? — left lower */}
      <motion.div
        className="absolute top-[48%] left-4 z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
      >
        <div className="bg-black/70 backdrop-blur-sm border border-green-800/30 rounded-xl px-3 py-2 max-w-[160px]">
          <p className="text-green-300 font-bold text-[10px] mb-0.5">Why “GREEN” specifically?</p>
          <p className="text-stone-300 text-[9px]">Green = chlorophyll ACTIVELY storing solar energy</p>
          <p className="text-stone-500 text-[9px]">Dry wood just releases old stored energy</p>
        </div>
      </motion.div>

      {/* Fossil fuels from green — bottom right */}
      <motion.div
        className="absolute bottom-[22%] right-4 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
      >
        <div className="bg-stone-950/80 backdrop-blur-sm border border-stone-600/30 rounded-xl px-3 py-2">
          <p className="text-stone-300 font-bold text-[10px] mb-1">All fire = ancient GREEN trees</p>
          <div className="space-y-0.5">
            <p className="text-green-400 text-[9px]">🪵 Wood → direct photosynthesis</p>
            <p className="text-stone-400 text-[9px]">⚫ Coal → 300M yr old forests</p>
            <p className="text-amber-500 text-[9px]">🛢️ Oil → ancient marine algae</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
