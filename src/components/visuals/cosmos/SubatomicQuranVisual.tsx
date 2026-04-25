'use client';
import { motion } from 'framer-motion';

export default function SubatomicQuranVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a1a] via-[#000f0f] to-black" />
      {/* Atom to quark zoom SVG */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
        <svg viewBox="0 0 300 200" className="w-72 h-48" fill="none">
          {/* Molecule */}
          <circle cx="40" cy="100" r="20" fill="rgba(100,200,255,0.15)" stroke="rgba(100,200,255,0.3)" strokeWidth="0.5" />
          <text x="40" y="104" textAnchor="middle" fill="rgba(100,200,255,0.6)" fontSize="7">10⁻⁹m</text>
          {/* Arrow */}
          <line x1="62" y1="100" x2="85" y2="100" stroke="rgba(200,200,200,0.3)" strokeWidth="1" />
          {/* Atom */}
          <circle cx="110" cy="100" r="22" fill="rgba(150,200,100,0.15)" stroke="rgba(150,200,100,0.3)" strokeWidth="0.5" />
          <circle cx="110" cy="100" r="6" fill="rgba(200,200,100,0.3)" />
          <ellipse cx="110" cy="100" rx="20" ry="8" stroke="rgba(150,200,100,0.2)" strokeWidth="0.5" fill="none" />
          <text x="110" y="130" textAnchor="middle" fill="rgba(150,200,100,0.6)" fontSize="7">10⁻¹⁰m</text>
          {/* Arrow */}
          <line x1="134" y1="100" x2="157" y2="100" stroke="rgba(200,200,200,0.3)" strokeWidth="1" />
          {/* Nucleus */}
          <circle cx="180" cy="100" r="18" fill="rgba(255,180,80,0.15)" stroke="rgba(255,180,80,0.3)" strokeWidth="0.5" />
          {[0,1,2,3].map(i => <circle key={i} cx={175+Math.cos(i*1.6)*7} cy={97+Math.sin(i*1.6)*7} r="4" fill={i%2===0?"rgba(255,100,80,0.4)":"rgba(100,150,255,0.4)"} />)}
          <text x="180" y="130" textAnchor="middle" fill="rgba(255,180,80,0.6)" fontSize="7">10⁻¹⁴m</text>
          {/* Arrow */}
          <line x1="200" y1="100" x2="223" y2="100" stroke="rgba(200,200,200,0.3)" strokeWidth="1" />
          {/* Quark */}
          <circle cx="245" cy="100" r="15" fill="rgba(255,100,100,0.15)" stroke="rgba(255,100,100,0.3)" strokeWidth="0.5" />
          <circle cx="240" cy="96" r="4" fill="rgba(255,80,80,0.5)" />
          <circle cx="250" cy="96" r="4" fill="rgba(80,150,255,0.5)" />
          <circle cx="245" cy="106" r="4" fill="rgba(80,255,150,0.5)" />
          <text x="245" y="130" textAnchor="middle" fill="rgba(255,100,100,0.6)" fontSize="7">10⁻¹⁸m</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-cyan-100">وَلَا <span className="text-amber-300 font-bold">أَصْغَرَ مِن ذَٰلِكَ</span> وَلَا أَكْبَرَ</p>
        <p className="text-cyan-600/60 text-xs mt-0.5">سبأ 34:3 — Nor smaller than that nor greater</p>
      </motion.div>
      {/* Scale — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-cyan-950/80 backdrop-blur-sm border border-cyan-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-cyan-300 font-bold text-xs">أَصْغَرَ = Smaller</p>
          <p className="text-stone-400 text-[10px]">Molecule → Atom</p>
          <p className="text-stone-400 text-[10px]">Atom → Nucleus</p>
          <p className="text-stone-400 text-[10px]">Nucleus → Quark</p>
          <p className="text-amber-400 text-[10px]">Always smaller ∞</p>
        </div>
      </motion.div>
      {/* Timeline — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-orange-300 font-bold text-xs">Discovery</p>
          <p className="text-stone-400 text-[10px]">609 CE: Quran</p>
          <p className="text-stone-400 text-[10px]">1897: electron</p>
          <p className="text-stone-400 text-[10px]">1964: quarks proposed</p>
          <p className="text-stone-500 text-[9px]">Still going deeper...</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The Quran stated there is always something smaller — science keeps discovering deeper levels</p>
      </motion.div>
    </div>
  );
}
