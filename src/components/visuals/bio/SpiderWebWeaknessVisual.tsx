'use client';
import { motion } from 'framer-motion';

export default function SpiderWebWeaknessVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] via-[#060504] to-black" />
      {/* Spider web SVG */}
      <motion.div className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
        <svg viewBox="0 0 280 260" className="w-64 h-56" fill="none">
          {/* Radial threads */}
          {[0,1,2,3,4,5,6,7].map(i => {
            const angle = (i * Math.PI * 2) / 8;
            return <line key={`r${i}`} x1="140" y1="130" x2={140 + Math.cos(angle) * 120} y2={130 + Math.sin(angle) * 110} stroke="rgba(200,180,150,0.2)" strokeWidth="0.5" />;
          })}
          {/* Spiral threads */}
          {[30,55,80,105].map((r,ri) => (
            <circle key={`s${ri}`} cx="140" cy="130" r={r} stroke="rgba(200,180,150,0.15)" strokeWidth="0.5" fill="none" />
          ))}
          {/* Spider at center */}
          <ellipse cx="140" cy="130" rx="8" ry="6" fill="rgba(80,60,40,0.6)" />
          <ellipse cx="140" cy="122" rx="5" ry="4" fill="rgba(90,70,50,0.7)" />
          {/* Legs */}
          {[0,1,2,3].map(i => (
            <g key={`l${i}`}>
              <path d={`M${135-i*0} ${128} Q${120-i*8} ${115+i*5} ${110-i*10} ${110+i*8}`} stroke="rgba(80,60,40,0.4)" strokeWidth="0.8" fill="none" />
              <path d={`M${145+i*0} ${128} Q${160+i*8} ${115+i*5} ${170+i*10} ${110+i*8}`} stroke="rgba(80,60,40,0.4)" strokeWidth="0.8" fill="none" />
            </g>
          ))}
          {/* Weakness indicators — no walls, no roof */}
          <text x="20" y="25" fill="rgba(255,100,100,0.4)" fontSize="9">No walls ✗</text>
          <text x="200" y="25" fill="rgba(255,100,100,0.4)" fontSize="9">No roof ✗</text>
          <text x="20" y="245" fill="rgba(255,100,100,0.4)" fontSize="9">No insulation ✗</text>
          <text x="195" y="245" fill="rgba(255,100,100,0.4)" fontSize="9">No protection ✗</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-stone-200">وَإِنَّ <span className="text-amber-300 font-bold">أَوْهَنَ الْبُيُوتِ</span> لَبَيْتُ الْعَنكَبُوتِ</p>
        <p className="text-stone-500/60 text-xs mt-0.5">العنكبوت 29:41 — Weakest of HOUSES (not silk)</p>
      </motion.div>
      {/* Material — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-stone-900/80 backdrop-blur-sm border border-stone-600/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-amber-300 font-bold text-xs">Silk = Strong</p>
          <p className="text-stone-400 text-[10px]">1.3 GPa tensile</p>
          <p className="text-stone-400 text-[10px]">Stronger than steel</p>
          <p className="text-stone-400 text-[10px]">(steel = 0.4 GPa)</p>
          <p className="text-green-400 text-[9px]">Material ≠ House</p>
        </div>
      </motion.div>
      {/* House — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-red-950/80 backdrop-blur-sm border border-red-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-red-300 font-bold text-xs">House = Weak</p>
          <p className="text-stone-400 text-[10px]">بَيْت not حرير</p>
          <p className="text-stone-400 text-[10px]">No walls or roof</p>
          <p className="text-stone-400 text-[10px]">♀ eats ♂ mate</p>
          <p className="text-red-400 text-[9px]">Weakest family too</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Quran says بَيْت (house/function) — the web provides zero protection despite being materially stronger than steel</p>
      </motion.div>
    </div>
  );
}
