'use client';
import { motion } from 'framer-motion';

export default function HoneyAntibacterialVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#0f0800] to-black" />
      {/* Honey drop SVG */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 240" className="w-44 h-52" fill="none">
          <defs><radialGradient id="hg" cx="50%" cy="40%"><stop offset="0%" stopColor="rgba(255,200,50,0.4)" /><stop offset="100%" stopColor="rgba(180,120,20,0.15)" /></radialGradient></defs>
          <path d="M100 20 Q130 60 140 100 Q150 150 130 190 Q115 220 100 220 Q85 220 70 190 Q50 150 60 100 Q70 60 100 20Z" fill="url(#hg)" stroke="rgba(220,170,50,0.4)" strokeWidth="1" />
          {/* Inner glow */}
          <ellipse cx="100" cy="130" rx="30" ry="40" fill="rgba(255,220,80,0.1)" />
          {/* Shield cross — antibacterial */}
          <path d="M85 110 L115 110 M100 95 L100 125" stroke="rgba(255,200,50,0.5)" strokeWidth="2" strokeLinecap="round" />
          {/* Bacteria being destroyed */}
          {[{x:55,y:80},{x:145,y:90},{x:50,y:160},{x:150,y:150}].map((b,i) => (
            <g key={i}><circle cx={b.x} cy={b.y} r="5" fill="rgba(255,80,80,0.3)" stroke="rgba(255,60,60,0.4)" strokeWidth="0.5" />
            <line x1={b.x-3} y1={b.y-3} x2={b.x+3} y2={b.y+3} stroke="rgba(255,60,60,0.5)" strokeWidth="1" />
            <line x1={b.x+3} y1={b.y-3} x2={b.x-3} y2={b.y+3} stroke="rgba(255,60,60,0.5)" strokeWidth="1" /></g>
          ))}
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-amber-100">فِيهِ <span className="text-amber-300 font-bold">شِفَاءٌ لِّلنَّاسِ</span></p>
        <p className="text-amber-600/60 text-xs mt-0.5">النحل 16:69 — In it there is healing for people</p>
      </motion.div>
      {/* Mechanisms — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-amber-300 font-bold text-xs">Antibacterial</p>
          <p className="text-stone-400 text-[10px]">H₂O₂ antiseptic</p>
          <p className="text-stone-400 text-[10px]">pH 3.2-4.5 kills</p>
          <p className="text-stone-400 text-[10px]">MGO damages DNA</p>
          <p className="text-stone-400 text-[10px]">Defensin-1 protein</p>
        </div>
      </motion.div>
      {/* Medical — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-orange-300 font-bold text-xs">Medical Proof</p>
          <p className="text-stone-400 text-[10px]">Defeats MRSA</p>
          <p className="text-stone-400 text-[10px]">FDA Approved 2007</p>
          <p className="text-stone-400 text-[10px]">WHO Confirmed</p>
          <p className="text-rose-400 text-[10px]">Manuka = gold std</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Honey has 4 independent antibacterial mechanisms — modern medicine confirmed what the Quran stated 1400 years ago</p>
      </motion.div>
    </div>
  );
}
