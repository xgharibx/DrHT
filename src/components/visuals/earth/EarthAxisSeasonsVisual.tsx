'use client';
import { motion } from 'framer-motion';

export default function EarthAxisSeasonsVisual({ className = '' }: { className?: string }) {
  const seasons = [
    { name: 'Spring', arabic: 'الربيع', pos: 'top-[24%] left-[4%]', clr: 'text-green-300', bg: 'bg-green-950/80 border-green-700/30' },
    { name: 'Summer', arabic: 'الصيف', pos: 'top-[24%] right-[4%]', clr: 'text-yellow-300', bg: 'bg-yellow-950/80 border-yellow-700/30' },
    { name: 'Autumn', arabic: 'الخريف', pos: 'bottom-[22%] left-[4%]', clr: 'text-amber-300', bg: 'bg-amber-950/80 border-amber-700/30' },
    { name: 'Winter', arabic: 'الشتاء', pos: 'bottom-[22%] right-[4%]', clr: 'text-blue-300', bg: 'bg-blue-950/80 border-blue-700/30' },
  ];
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#00050a] via-[#000408] to-black" />
      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div key={i} className="absolute w-px h-px rounded-full bg-white/40"
          style={{ top: Math.random()*60+'%', left: Math.random()*100+'%' }} />
      ))}
      {/* Earth — large tilted SVG */}
      <motion.div
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg viewBox="0 0 200 200" className="w-44 h-44" fill="none">
          {/* Tilt axis line */}
          <line x1="115" y1="5" x2="85" y2="195" stroke="rgba(100,140,200,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Earth globe */}
          <circle cx="100" cy="100" r="75" fill="rgba(20,50,120,0.7)" stroke="rgba(60,120,200,0.3)" strokeWidth="1" />
          {/* Ocean gradient */}
          <circle cx="100" cy="100" r="75" fill="url(#earthGrad)" />
          <defs>
            <radialGradient id="earthGrad" cx="40%" cy="35%">
              <stop offset="0%" stopColor="rgba(40,120,200,0.6)" />
              <stop offset="100%" stopColor="rgba(10,40,100,0.4)" />
            </radialGradient>
          </defs>
          {/* Continent blobs */}
          <path d="M75 50 Q90 40 110 55 Q125 75 115 90 Q100 100 85 88 Q70 72 75 50Z" fill="rgba(40,120,40,0.7)" />
          <path d="M50 100 Q65 90 75 105 Q70 125 55 120 Q45 112 50 100Z" fill="rgba(40,120,40,0.6)" />
          <path d="M110 110 Q130 100 145 120 Q140 145 120 140 Q105 130 110 110Z" fill="rgba(40,120,40,0.65)" />
          {/* Ice caps */}
          <ellipse cx="100" cy="32" rx="28" ry="12" fill="rgba(220,235,255,0.6)" />
          <ellipse cx="100" cy="168" rx="22" ry="10" fill="rgba(220,235,255,0.5)" />
          {/* Equator */}
          <line x1="26" y1="100" x2="174" y2="100" stroke="rgba(200,200,200,0.2)" strokeWidth="1" strokeDasharray="3 3" />
          {/* Tilt angle label */}
          <text x="118" y="20" fill="rgba(150,180,255,0.8)" fontSize="9">23.5°</text>
        </svg>
      </motion.div>
      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-sky-100">وَاخْتِلَافِ{' '}<span className="text-sky-300 font-bold">اللَّيْلِ وَالنَّهَارِ</span>{' '}لَآيَاتٍ</p>
        <p className="text-sky-500/60 text-xs mt-0.5">البقرة 2:164 — In the alternation of night and day are signs</p>
      </motion.div>
      {/* Season cards */}
      {seasons.map((s, i) => (
        <motion.div key={s.name} className={`absolute z-10 ${s.pos}`}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.15 }}
        >
          <div className={`${s.bg} backdrop-blur-sm border rounded-xl px-3 py-1.5`}>
            <p className={`font-amiri text-sm font-bold ${s.clr}`}>{s.arabic}</p>
            <p className="text-stone-400 text-[10px]">{s.name}</p>
          </div>
        </motion.div>
      ))}
      <motion.div className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      >
        <p className="text-stone-500 text-[10px]">Earth axis tilt 23.5° creates seasons — without it, no seasons, no temperature regulation, no complex life</p>
      </motion.div>
    </div>
  );
}
