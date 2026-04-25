'use client';
import { motion } from 'framer-motion';

export default function CamelAdaptationVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Deep desert sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-[#1a0e00] to-black" />
      {/* Sun glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-amber-600/20 blur-3xl" />
      {/* Sandy ground base */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-900/40 to-transparent" />
      {/* Dune curves */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-32" viewBox="0 0 900 130" preserveAspectRatio="none">
        <path d="M0 130 Q150 40 350 80 Q550 120 750 50 Q850 20 900 60 L900 130Z" fill="rgba(120,70,20,0.25)" />
        <path d="M0 130 Q200 70 450 90 Q650 110 900 70 L900 130Z" fill="rgba(100,55,15,0.2)" />
      </svg>

      {/* CAMEL SILHOUETTE — large central figure */}
      <motion.div
        className="absolute left-1/2 bottom-16 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 320 200" className="w-72 h-48 drop-shadow-2xl" fill="none">
          {/* Camel body — stylized silhouette */}
          <path d="M60 160 Q50 130 55 100 Q60 80 80 75 Q90 55 105 50 Q120 45 125 55 Q130 45 145 48 Q165 52 168 68 Q175 72 188 78 Q210 88 215 110 Q220 130 215 160Z" fill="rgba(180,120,50,0.9)" />
          {/* Hump */}
          <path d="M125 55 Q140 20 155 50" stroke="rgba(200,140,60,0.9)" strokeWidth="18" strokeLinecap="round" fill="none" />
          {/* Neck */}
          <path d="M80 75 Q75 60 78 45 Q80 32 90 28" stroke="rgba(180,120,50,0.9)" strokeWidth="16" strokeLinecap="round" fill="none" />
          {/* Head */}
          <ellipse cx="96" cy="22" rx="16" ry="12" fill="rgba(180,120,50,0.9)" />
          {/* Eye */}
          <circle cx="104" cy="18" r="3" fill="rgba(20,10,5,0.9)" />
          <circle cx="105" cy="17" r="1" fill="white" opacity="0.7" />
          {/* Legs */}
          <path d="M90 158 L88 180" stroke="rgba(160,100,40,0.9)" strokeWidth="10" strokeLinecap="round" />
          <path d="M110 160 L112 182" stroke="rgba(160,100,40,0.9)" strokeWidth="10" strokeLinecap="round" />
          <path d="M165 158 L162 180" stroke="rgba(160,100,40,0.9)" strokeWidth="10" strokeLinecap="round" />
          <path d="M185 160 L188 182" stroke="rgba(160,100,40,0.9)" strokeWidth="10" strokeLinecap="round" />
          {/* Tail */}
          <path d="M215 120 Q228 115 225 130" stroke="rgba(160,100,40,0.7)" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>

      {/* Verse — top floating overlay */}
      <motion.div
        className="absolute top-6 inset-x-0 px-6 text-center"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-amber-100 drop-shadow-lg">
          أَفَلَا يَنظُرُونَ إِلَى{' '}
          <span className="text-amber-400 font-bold text-2xl">الْإِبِلِ</span>{' '}
          <span className="text-yellow-300 font-bold">كَيْفَ خُلِقَتْ</span>
        </p>
        <p className="text-amber-400/60 text-xs mt-0.5">الغاشية 88:17 — Do they not look at the camels — HOW THEY ARE CREATED?</p>
      </motion.div>

      {/* Anatomical labels — floating around camel */}
      {/* Hump label — top left of camel */}
      <motion.div
        className="absolute top-[32%] left-[18%]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-amber-900/70 backdrop-blur-sm border border-amber-600/40 rounded-xl px-3 py-2 max-w-[130px]">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-amber-300 font-bold text-xs">THE HUMP</p>
          </div>
          <p className="text-green-400 text-xs font-semibold">36 kg FAT ✓</p>
          <p className="text-red-400 text-xs line-through opacity-70">Water ✗</p>
          <p className="text-stone-400 text-[10px]">Metabolised → water</p>
        </div>
        <div className="absolute top-3 right-0 w-8 h-px bg-amber-500/50" />
      </motion.div>

      {/* RBC label — right side */}
      <motion.div
        className="absolute top-[28%] right-[8%]"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
      >
        <div className="bg-red-950/70 backdrop-blur-sm border border-red-700/40 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-red-300 font-bold text-xs mb-1">OVAL RBCs 🔴</p>
          <p className="text-white text-[10px]">ONLY mammal with elliptical red blood cells</p>
          <p className="text-red-400 text-[10px] mt-1">Survives 25% water loss</p>
        </div>
      </motion.div>

      {/* Nose label — top centre-left */}
      <motion.div
        className="absolute top-[42%] left-[5%]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-blue-950/70 backdrop-blur-sm border border-blue-700/40 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-blue-300 font-bold text-xs mb-1">NOSE RECOVERY 💧</p>
          <p className="text-white text-[10px]">Turbinate bones recapture</p>
          <p className="text-blue-400 font-bold text-sm">70%</p>
          <p className="text-stone-400 text-[10px]">of exhaled moisture</p>
        </div>
      </motion.div>

      {/* Temperature label — bottom right */}
      <motion.div
        className="absolute top-[55%] right-[6%]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.6 }}
      >
        <div className="bg-orange-950/70 backdrop-blur-sm border border-orange-700/40 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-orange-300 font-bold text-xs mb-1">TEMP CONTROL 🌡️</p>
          <p className="text-white text-[10px]">Body temp rises</p>
          <p className="text-orange-400 font-bold text-sm">34°C → 40°C</p>
          <p className="text-stone-400 text-[10px]">before sweating — saves litres</p>
        </div>
      </motion.div>

      {/* Triple eyelid — centre left lower */}
      <motion.div
        className="absolute top-[56%] left-[4%]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div className="bg-amber-950/70 backdrop-blur-sm border border-amber-800/40 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-amber-300 font-bold text-xs mb-1">3 EYELIDS 👁️</p>
          <p className="text-stone-300 text-[10px]">Transparent nictitating membrane — sees in sandstorms</p>
        </div>
      </motion.div>

      {/* Schmidt-Nielsen credit — subtle bottom bar */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <p className="text-stone-600 text-[10px]">Dr. Knut Schmidt-Nielsen (Duke Univ.) — camel physiology pioneer • 1964</p>
      </motion.div>
    </div>
  );
}
