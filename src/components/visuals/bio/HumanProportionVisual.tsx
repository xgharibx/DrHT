'use client';
import { motion } from 'framer-motion';

export default function HumanProportionVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#06030a] via-[#040208] to-black" />
      {/* Human figure — large SVG */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 200 320" className="w-40 h-72" fill="none">
          {/* Proportional circles (golden ratio guides) */}
          <circle cx="100" cy="40" r="35" stroke="rgba(180,130,50,0.2)" strokeWidth="0.5" strokeDasharray="3 2" />
          <circle cx="100" cy="160" r="80" stroke="rgba(180,130,50,0.15)" strokeWidth="0.5" strokeDasharray="3 2" />
          {/* Head */}
          <ellipse cx="100" cy="40" rx="18" ry="22" fill="rgba(210,180,150,0.7)" />
          {/* Neck */}
          <rect x="93" y="58" width="14" height="12" fill="rgba(210,180,150,0.6)" />
          {/* Torso */}
          <path d="M75 70 Q70 80 68 130 Q70 160 80 170 L120 170 Q130 160 132 130 Q130 80 125 70Z" fill="rgba(100,80,150,0.5)" stroke="rgba(140,110,180,0.3)" strokeWidth="0.5" />
          {/* Arms */}
          <path d="M68 75 Q50 100 40 140 Q38 150 42 155" stroke="rgba(210,180,150,0.6)" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M132 75 Q150 100 160 140 Q162 150 158 155" stroke="rgba(210,180,150,0.6)" strokeWidth="8" strokeLinecap="round" fill="none" />
          {/* Legs */}
          <path d="M88 170 L82 240 L78 300" stroke="rgba(210,180,150,0.6)" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M112 170 L118 240 L122 300" stroke="rgba(210,180,150,0.6)" strokeWidth="10" strokeLinecap="round" fill="none" />
          {/* Navel marker — golden ratio point */}
          <circle cx="100" cy="148" r="4" fill="rgba(220,180,50,0.8)" />
          {/* Golden ratio line */}
          <line x1="40" y1="148" x2="160" y2="148" stroke="rgba(220,180,50,0.5)" strokeWidth="1" strokeDasharray="4 3" />
          {/* Height markers */}
          <line x1="30" y1="18" x2="30" y2="300" stroke="rgba(150,150,150,0.2)" strokeWidth="0.5" />
          <line x1="170" y1="18" x2="170" y2="300" stroke="rgba(150,150,150,0.2)" strokeWidth="0.5" />
        </svg>
      </motion.div>
      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-amber-100">لَقَدْ خَلَقْنَا الْإِنسَانَ فِي{' '}<span className="text-yellow-300 font-bold">أَحْسَنِ تَقْوِيمٍ</span></p>
        <p className="text-amber-500/60 text-xs mt-0.5">التين 95:4 — We created man in the BEST of proportions</p>
      </motion.div>
      {/* Golden ratio label — left */}
      <motion.div className="absolute z-10" style={{ top: '35%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
      >
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[145px]">
          <p className="text-yellow-300 font-bold text-xs">φ Golden Ratio</p>
          <p className="text-stone-400 text-[10px]">Navel ÷ total height = 1.618</p>
          <p className="text-stone-400 text-[10px]">Finger ratios follow φ</p>
          <p className="text-stone-400 text-[10px]">Cochlea spiral = φ</p>
        </div>
      </motion.div>
      {/* Symmetry label — right */}
      <motion.div className="absolute z-10" style={{ top: '35%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
      >
        <div className="bg-violet-950/80 backdrop-blur-sm border border-violet-700/30 rounded-xl px-3 py-2 max-w-[145px]">
          <p className="text-violet-300 font-bold text-xs">أحسن تقويم</p>
          <p className="text-stone-400 text-[10px]">Bilateral symmetry</p>
          <p className="text-stone-400 text-[10px]">206 bones engineered</p>
          <p className="text-stone-400 text-[10px]">640 muscles · 78 organs</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      >
        <p className="text-stone-500 text-[10px]">Dr. Adolph Zeising (1854) first documented the golden ratio in human anatomy — confirming "best proportions"</p>
      </motion.div>
    </div>
  );
}
