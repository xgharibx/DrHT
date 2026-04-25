'use client';
import { motion } from 'framer-motion';

export default function HydrologicalCycleQuranVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a20] via-[#000a10] to-black" />
      {/* Water cycle SVG */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 260 200" className="w-60 h-44" fill="none">
          {/* Ocean */}
          <rect x="10" y="160" width="80" height="35" rx="4" fill="rgba(30,100,200,0.15)" stroke="rgba(50,140,255,0.2)" strokeWidth="0.5" />
          <text x="50" y="180" textAnchor="middle" fill="rgba(50,140,255,0.4)" fontSize="7">بحر Ocean</text>
          {/* Evaporation arrows */}
          <motion.path d="M50 155 Q55 130 70 110" stroke="rgba(100,200,255,0.3)" strokeWidth="1" fill="none" strokeDasharray="3,3"
            animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
          <text x="40" y="135" fill="rgba(100,200,255,0.4)" fontSize="6">تبخر</text>
          {/* Cloud */}
          <circle cx="130" cy="55" r="20" fill="rgba(180,200,255,0.1)" stroke="rgba(180,200,255,0.2)" strokeWidth="0.5" />
          <circle cx="148" cy="52" r="16" fill="rgba(180,200,255,0.08)" stroke="rgba(180,200,255,0.15)" strokeWidth="0.5" />
          <circle cx="115" cy="58" r="14" fill="rgba(180,200,255,0.08)" stroke="rgba(180,200,255,0.15)" strokeWidth="0.5" />
          <text x="130" y="42" textAnchor="middle" fill="rgba(180,200,255,0.4)" fontSize="6">سَحَاب</text>
          {/* Rain */}
          {[120,130,140].map((x,i) => (
            <motion.line key={i} x1={x} y1="72" x2={x-3} y2="95" stroke="rgba(80,160,255,0.3)" strokeWidth="0.5"
              animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 1.2, delay: i*0.3, repeat: Infinity }} />
          ))}
          <text x="145" y="88" fill="rgba(80,160,255,0.4)" fontSize="6">مَاء</text>
          {/* Ground / mountain */}
          <path d="M100 160 L140 100 L180 160 Z" fill="rgba(100,80,60,0.15)" stroke="rgba(140,120,80,0.2)" strokeWidth="0.5" />
          <text x="145" y="140" fill="rgba(140,120,80,0.3)" fontSize="6">جبال</text>
          {/* Underground flow to springs */}
          <motion.path d="M150 160 Q170 175 200 155 Q220 140 230 120" stroke="rgba(50,200,150,0.3)" strokeWidth="1" fill="none" strokeDasharray="3,3"
            animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
          {/* Spring */}
          <circle cx="230" cy="115" r="10" fill="rgba(50,200,150,0.1)" stroke="rgba(50,200,150,0.2)" strokeWidth="0.5" />
          <text x="230" y="118" textAnchor="middle" fill="rgba(50,200,150,0.4)" fontSize="6">يَنَابِيع</text>
          <text x="230" y="128" textAnchor="middle" fill="rgba(50,200,150,0.3)" fontSize="5">Springs</text>
          {/* Flow arrow back */}
          <motion.path d="M235 125 Q240 150 210 170 Q170 185 90 170" stroke="rgba(50,200,150,0.2)" strokeWidth="0.5" fill="none"
            animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity }} />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-4 inset-x-0 px-4 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-sm text-teal-100">أَنزَلَ مِنَ السَّمَاءِ مَاءً <span className="text-cyan-300 font-bold">فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ</span></p>
        <p className="text-teal-500/60 text-xs mt-0.5">الزمر 39:21 — Sent water, channeled it into springs in the earth</p>
      </motion.div>
      {/* Cycle — left */}
      <motion.div className="absolute z-10" style={{ top: '24%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-teal-950/80 backdrop-blur-sm border border-teal-700/30 rounded-xl px-3 py-2 max-w-[115px]">
          <p className="text-teal-300 font-bold text-xs">5-Step Cycle</p>
          <p className="text-stone-400 text-[10px]">① Evaporation</p>
          <p className="text-stone-400 text-[10px]">② Clouds سحاب</p>
          <p className="text-stone-400 text-[10px]">③ Rain ماء</p>
          <p className="text-stone-400 text-[10px]">④ Groundwater</p>
          <p className="text-cyan-400 text-[10px]">⑤ Springs ينابيع</p>
        </div>
      </motion.div>
      {/* History — right */}
      <motion.div className="absolute z-10" style={{ top: '24%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-green-950/80 backdrop-blur-sm border border-green-700/30 rounded-xl px-3 py-2 max-w-[115px]">
          <p className="text-green-300 font-bold text-xs">History</p>
          <p className="text-stone-400 text-[10px]">Quran: 7th C CE</p>
          <p className="text-stone-400 text-[10px]">Perrault: 1674 CE</p>
          <p className="text-stone-500 text-[9px]">1000+ yrs before science</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-2 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Rain → groundwater → springs: the complete hydrological cycle described 1000+ years before Perrault</p>
      </motion.div>
    </div>
  );
}
