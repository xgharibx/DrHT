'use client';
import { motion } from 'framer-motion';

export default function IronFromStarsVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0800] via-[#0a0400] to-black" />
      {/* Supernova/star SVG */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
        <svg viewBox="0 0 240 240" className="w-56 h-56" fill="none">
          {/* Star glow */}
          <circle cx="120" cy="120" r="80" fill="rgba(255,150,30,0.06)" />
          <circle cx="120" cy="120" r="50" fill="rgba(255,180,50,0.1)" />
          {/* Star core */}
          <circle cx="120" cy="120" r="30" fill="rgba(255,200,80,0.3)" stroke="rgba(255,180,50,0.4)" strokeWidth="1" />
          {/* Iron core inside */}
          <circle cx="120" cy="120" r="12" fill="rgba(180,100,30,0.6)" stroke="rgba(200,120,40,0.5)" strokeWidth="1" />
          <text x="120" y="124" textAnchor="middle" fill="rgba(255,200,100,0.8)" fontSize="9" fontWeight="bold">Fe</text>
          {/* Supernova rays */}
          {[0,1,2,3,4,5,6,7].map(i => {
            const a = (i * Math.PI * 2) / 8;
            return <motion.line key={i} x1={120+Math.cos(a)*35} y1={120+Math.sin(a)*35} x2={120+Math.cos(a)*95} y2={120+Math.sin(a)*95}
              stroke="rgba(255,150,50,0.25)" strokeWidth="1.5"
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 2, delay: i*0.2, repeat: Infinity }} />;
          })}
          {/* Iron atoms ejected */}
          {[45,135,225,315].map((deg,i) => {
            const rad = deg * Math.PI / 180;
            return <circle key={`fe${i}`} cx={120+Math.cos(rad)*75} cy={120+Math.sin(rad)*75} r="4" fill="rgba(200,120,40,0.5)" stroke="rgba(220,140,50,0.4)" strokeWidth="0.5" />;
          })}
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-orange-100">وَ<span className="text-orange-300 font-bold">أَنزَلْنَا الْحَدِيدَ</span> فِيهِ بَأْسٌ شَدِيدٌ</p>
        <p className="text-orange-600/60 text-xs mt-0.5">الحديد 57:25 — We sent DOWN iron</p>
      </motion.div>
      {/* Process — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-orange-300 font-bold text-xs">أَنزَلْنَا = Sent Down</p>
          <p className="text-stone-400 text-[10px]">Stars 8+ M☉ fuse iron</p>
          <p className="text-stone-400 text-[10px]">100 billion °C needed</p>
          <p className="text-stone-400 text-[10px]">Supernova ejects Fe</p>
          <p className="text-amber-400 text-[10px]">Iron is NOT from Earth</p>
        </div>
      </motion.div>
      {/* Discovery — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-amber-300 font-bold text-xs">Fe-56 Nucleus</p>
          <p className="text-stone-400 text-[10px]">B²FH Paper 1957</p>
          <p className="text-stone-400 text-[10px]">Nobel Prize awarded</p>
          <p className="text-stone-400 text-[10px]">Stellar nucleosynthesis</p>
          <p className="text-stone-500 text-[9px]">Ch. 57 = Al-Hadid (Iron)</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Iron cannot form on Earth — it was literally &quot;sent down&quot; from dying stars via supernovae</p>
      </motion.div>
    </div>
  );
}
