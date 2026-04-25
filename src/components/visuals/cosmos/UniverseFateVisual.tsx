'use client';
import { motion } from 'framer-motion';

export default function UniverseFateVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050020] via-[#020010] to-black" />
      {/* Folding scroll SVG */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 240 220" className="w-52 h-48" fill="none">
          {/* Scroll being rolled */}
          <motion.g animate={{ scaleX: [1, 0.85, 1] }} transition={{ duration: 5, repeat: Infinity }}>
            {/* Scroll paper */}
            <rect x="40" y="30" width="160" height="160" rx="4" fill="rgba(100,80,200,0.1)" stroke="rgba(120,100,220,0.25)" strokeWidth="0.5" />
            {/* Stars on the scroll (universe content) */}
            {[{x:70,y:60},{x:130,y:50},{x:100,y:90},{x:160,y:80},{x:80,y:130},{x:140,y:120},{x:110,y:160},{x:170,y:150}].map((s,i) => (
              <motion.circle key={i} cx={s.x} cy={s.y} r="2" fill="rgba(200,180,255,0.4)"
                animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2+i*0.3, repeat: Infinity }} />
            ))}
          </motion.g>
          {/* Rolled edge — left */}
          <ellipse cx="42" cy="110" rx="8" ry="82" fill="rgba(80,60,160,0.2)" stroke="rgba(120,100,220,0.3)" strokeWidth="0.5" />
          {/* Rolled edge — right */}
          <motion.ellipse cx="198" cy="110" rx="8" ry="82" fill="rgba(80,60,160,0.2)" stroke="rgba(120,100,220,0.3)" strokeWidth="0.5"
            animate={{ cx: [198, 180, 198] }} transition={{ duration: 5, repeat: Infinity }} />
          {/* Fold arrows */}
          <motion.path d="M210 110 L220 110" stroke="rgba(200,180,255,0.3)" strokeWidth="1" fill="none"
            animate={{ x: [-5, 0, -5] }} transition={{ duration: 5, repeat: Infinity }} />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-5 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-sm text-indigo-100">يَوْمَ <span className="text-purple-300 font-bold">نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ</span> لِلْكُتُبِ</p>
        <p className="text-indigo-500/60 text-xs mt-0.5">الأنبياء 21:104 — We fold heaven like rolling a scroll</p>
      </motion.div>
      {/* Fates — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-indigo-300 font-bold text-xs">Cosmic End</p>
          <p className="text-stone-400 text-[10px]">Sun wrapped (5B yrs)</p>
          <p className="text-stone-400 text-[10px]">Stars darkened</p>
          <p className="text-stone-400 text-[10px]">Spacetime folded</p>
          <p className="text-purple-400 text-[10px]">نَطْوِي = fold/roll</p>
        </div>
      </motion.div>
      {/* Science — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-purple-300 font-bold text-xs">Physics</p>
          <p className="text-stone-400 text-[10px]">Einstein spacetime</p>
          <p className="text-stone-400 text-[10px]">Penrose CCC model</p>
          <p className="text-stone-400 text-[10px]">Nobel 2020</p>
          <p className="text-cyan-400 text-[9px]">Creation repeated</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Spacetime can fold like a scroll — the Quran described this 1300 years before Einstein&apos;s general relativity</p>
      </motion.div>
    </div>
  );
}
