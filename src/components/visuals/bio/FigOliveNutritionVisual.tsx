'use client';
import { motion } from 'framer-motion';

export default function FigOliveNutritionVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Warm earth background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0800] via-[#080600] to-black" />
      {/* Atmospheric warm glow */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-900/15 to-transparent" />

      {/* FIG TREE + OLIVE TREE — large SVG scene */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 340 280" className="w-80 h-64" fill="none">
          {/* Ground */}
          <rect x="0" y="260" width="340" height="20" fill="rgba(60,35,10,0.5)" />
          {/* FIG TREE — left */}
          <rect x="80" y="210" width="18" height="55" rx="5" fill="rgba(80,50,20,0.9)" />
          <ellipse cx="89" cy="185" rx="48" ry="38" fill="rgba(30,90,20,0.8)" />
          <ellipse cx="89" cy="168" rx="38" ry="30" fill="rgba(40,110,25,0.85)" />
          <ellipse cx="89" cy="155" rx="28" ry="22" fill="rgba(50,130,30,0.9)" />
          {/* Fig fruits */}
          <ellipse cx="65" cy="185" rx="7" ry="9" fill="rgba(130,50,130,0.8)" />
          <ellipse cx="105" cy="178" rx="6" ry="8" fill="rgba(140,55,140,0.8)" />
          <ellipse cx="75" cy="195" rx="5" ry="7" fill="rgba(120,45,120,0.7)" />
          {/* OLIVE TREE — right */}
          <rect x="242" y="215" width="14" height="50" rx="4" fill="rgba(70,55,20,0.9)" />
          {/* Olive tree characteristic narrow-wide canopy */}
          <ellipse cx="249" cy="195" rx="40" ry="28" fill="rgba(70,90,30,0.75)" />
          <ellipse cx="249" cy="180" rx="32" ry="22" fill="rgba(85,110,35,0.8)" />
          <ellipse cx="249" cy="168" rx="24" ry="17" fill="rgba(100,125,40,0.85)" />
          {/* Olive fruits */}
          <ellipse cx="232" cy="188" rx="4" ry="6" fill="rgba(50,80,20,0.9)" />
          <ellipse cx="260" cy="182" rx="4" ry="6" fill="rgba(50,80,20,0.9)" />
          <ellipse cx="245" cy="194" rx="4" ry="6" fill="rgba(50,80,20,0.8)" />
          {/* Labels under trees */}
          <text x="89" y="252" textAnchor="middle" fill="rgba(200,150,200,0.9)" fontSize="11" fontFamily="serif">التين</text>
          <text x="249" y="252" textAnchor="middle" fill="rgba(180,200,100,0.9)" fontSize="11" fontFamily="serif">الزيتون</text>
        </svg>
      </motion.div>

      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-xl text-amber-100">
          <span className="text-purple-300 font-bold">وَالتِّينِ</span>{' '}
          وَ{' '}
          <span className="text-green-300 font-bold">الزَّيْتُونِ</span>
        </p>
        <p className="text-amber-600/60 text-xs mt-0.5">التين 95:1 — By the Fig and the Olive</p>
      </motion.div>

      {/* Fig stats — left */}
      <motion.div
        className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-xl px-3 py-2 max-w-[145px]">
          <p className="text-purple-300 font-bold text-xs mb-1">Fig (التين)</p>
          <p className="text-stone-300 text-[10px]">Calcium 162mg/100g</p>
          <p className="text-stone-300 text-[10px]">Highest of any fruit</p>
          <p className="text-stone-400 text-[9px]">Domesticated 11,400 BCE</p>
          <p className="text-stone-400 text-[9px]">1,000 yrs before wheat</p>
          <p className="text-emerald-400 text-[9px] mt-0.5">Ficin: antimicrobial</p>
        </div>
      </motion.div>

      {/* Olive stats — right */}
      <motion.div
        className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-green-950/80 backdrop-blur-sm border border-green-700/30 rounded-xl px-3 py-2 max-w-[145px]">
          <p className="text-green-300 font-bold text-xs mb-1">Olive (الزيتون)</p>
          <p className="text-stone-300 text-[10px]">Oleic acid 55–83%</p>
          <p className="text-stone-300 text-[10px]">Lowers LDL · Raises HDL</p>
          <p className="text-stone-400 text-[9px]">Hydroxytyrosol</p>
          <p className="text-stone-400 text-[9px]">Strongest natural antioxidant</p>
          <p className="text-emerald-400 text-[9px] mt-0.5">−30% CV risk (PREDIMED 2013)</p>
        </div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-stone-500 text-[10px]">These two trees carry the highest documented nutritional & medicinal value among all fruits — 7,000+ peer-reviewed studies on olive alone</p>
      </motion.div>
    </div>
  );
}
