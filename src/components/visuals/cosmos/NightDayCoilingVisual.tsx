'use client';
import { motion } from 'framer-motion';

export default function NightDayCoilingVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020830] via-[#010418] to-black" />
      {/* Globe with day/night split */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
        <svg viewBox="0 0 240 240" className="w-56 h-56" fill="none">
          {/* Night side */}
          <circle cx="120" cy="120" r="80" fill="rgba(10,15,50,0.8)" />
          {/* Day side — crescent wrapping */}
          <motion.path d="M120 40 Q200 60 200 120 Q200 180 120 200 Q150 170 150 120 Q150 70 120 40Z"
            fill="rgba(255,200,80,0.2)" stroke="rgba(255,200,80,0.3)" strokeWidth="0.5"
            animate={{ d: ["M120 40 Q200 60 200 120 Q200 180 120 200 Q150 170 150 120 Q150 70 120 40Z", "M120 40 Q200 60 200 120 Q200 180 120 200 Q160 175 160 120 Q160 65 120 40Z", "M120 40 Q200 60 200 120 Q200 180 120 200 Q150 170 150 120 Q150 70 120 40Z"] }}
            transition={{ duration: 6, repeat: Infinity }} />
          {/* Globe outline */}
          <circle cx="120" cy="120" r="80" stroke="rgba(100,150,255,0.3)" strokeWidth="1" fill="none" />
          {/* Latitude lines */}
          {[-40,-20,0,20,40].map((lat,i) => (
            <ellipse key={i} cx="120" cy={120+lat} rx={Math.cos(lat*Math.PI/180)*80} ry="5" stroke="rgba(100,150,255,0.1)" strokeWidth="0.5" fill="none" />
          ))}
          {/* Terminator line — the coiling boundary */}
          <motion.ellipse cx="135" cy="120" rx="5" ry="80" stroke="rgba(255,200,100,0.4)" strokeWidth="1.5" fill="none"
            animate={{ cx: [130, 140, 130] }} transition={{ duration: 6, repeat: Infinity }} />
          {/* Stars on night side */}
          {[{x:70,y:80},{x:60,y:130},{x:85,y:170},{x:75,y:100}].map((s,i) => (
            <circle key={`s${i}`} cx={s.x} cy={s.y} r="1.5" fill="rgba(255,255,255,0.4)" />
          ))}
          {/* Sun indicator */}
          <circle cx="215" cy="120" r="6" fill="rgba(255,200,50,0.6)" />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-indigo-100"><span className="text-amber-300 font-bold">يُكَوِّرُ</span> اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ النَّهَارَ عَلَى اللَّيْلِ</p>
        <p className="text-indigo-500/60 text-xs mt-0.5">الزمر 39:5 — Coils night upon day (spherical wrapping)</p>
      </motion.div>
      {/* يُكَوِّرُ — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-amber-300 font-bold text-xs font-amiri">يُكَوِّرُ</p>
          <p className="text-stone-400 text-[10px]">= wrap spherically</p>
          <p className="text-stone-400 text-[10px]">Like turban wrapping</p>
          <p className="text-stone-400 text-[10px]">Implies round Earth</p>
          <p className="text-indigo-400 text-[9px]">Not flat — impossible</p>
        </div>
      </motion.div>
      {/* Science — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-blue-300 font-bold text-xs">Terminator Line</p>
          <p className="text-stone-400 text-[10px]">Day/night boundary</p>
          <p className="text-stone-400 text-[10px]">Gradual transition</p>
          <p className="text-stone-400 text-[10px]">Wraps around sphere</p>
          <p className="text-stone-500 text-[9px]">= exactly يُكَوِّرُ</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">يُكَوِّرُ means to wrap spherically — coiling of day and night only works on a sphere, not a flat surface</p>
      </motion.div>
    </div>
  );
}
