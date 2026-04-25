'use client';
import { motion } from 'framer-motion';

export default function PainReceptorsSkinVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0800] via-[#0f0400] to-black" />
      {/* Skin layers SVG */}
      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 320 220" className="w-80 h-52" fill="none">
          {/* Epidermis */}
          <rect x="10" y="20" width="300" height="40" rx="4" fill="rgba(220,160,100,0.3)" stroke="rgba(220,160,100,0.4)" strokeWidth="0.5" />
          <text x="25" y="44" fill="rgba(255,200,130,0.8)" fontSize="10">البشرة Epidermis</text>
          {/* Pain receptors — dots in epidermis */}
          {[0,1,2,3,4,5,6,7].map(i => (
            <circle key={`e${i}`} cx={40+i*35} cy={35} r="3" fill="rgba(255,80,50,0.6)" />
          ))}
          {/* Dermis */}
          <rect x="10" y="65" width="300" height="60" rx="4" fill="rgba(180,100,80,0.25)" stroke="rgba(180,100,80,0.3)" strokeWidth="0.5" />
          <text x="25" y="100" fill="rgba(220,150,120,0.7)" fontSize="10">الأدمة Dermis</text>
          {/* Nerve fibers in dermis */}
          {[0,1,2,3].map(i => (
            <path key={`d${i}`} d={`M${50+i*70} 70 Q${55+i*70} 90 ${60+i*70} 110`} stroke="rgba(255,100,70,0.3)" strokeWidth="1" fill="none" />
          ))}
          {/* Subcutis */}
          <rect x="10" y="130" width="300" height="50" rx="4" fill="rgba(140,80,60,0.15)" stroke="rgba(140,80,60,0.2)" strokeWidth="0.5" />
          <text x="25" y="160" fill="rgba(180,120,100,0.5)" fontSize="10">تحت الجلد Subcutis</text>
          {/* Burn damage indicator */}
          <motion.rect x="180" y="15" width="80" height="170" rx="4" fill="rgba(255,50,0,0.08)" stroke="rgba(255,80,30,0.3)" strokeWidth="1" strokeDasharray="4,3"
            animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
          <text x="195" y="200" fill="rgba(255,100,50,0.6)" fontSize="9">3rd° burn = NO pain</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-5 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-sm text-orange-100">كُلَّمَا نَضِجَتْ جُلُودُهُمْ <span className="text-red-400 font-bold">بَدَّلْنَاهُمْ جُلُودًا غَيْرَهَا</span> لِيَذُوقُوا الْعَذَابَ</p>
        <p className="text-orange-600/60 text-xs mt-0.5">النساء 4:56 — Skins replaced so they taste punishment</p>
      </motion.div>
      {/* Receptors — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '2%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-orange-300 font-bold text-xs">Nociceptors</p>
          <p className="text-stone-400 text-[10px]">200/cm² in skin</p>
          <p className="text-stone-400 text-[10px]">C-fibers + Aδ-fibers</p>
          <p className="text-red-400 text-[10px]">Destroyed = no pain</p>
          <p className="text-stone-400 text-[10px]">New skin = pain back</p>
        </div>
      </motion.div>
      {/* Logic — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '2%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-red-950/80 backdrop-blur-sm border border-red-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-red-300 font-bold text-xs">Quran Logic</p>
          <p className="text-stone-400 text-[10px]">بَدَّلْنَاهُمْ = replace</p>
          <p className="text-stone-400 text-[10px]">New skin → feel again</p>
          <p className="text-stone-400 text-[10px]">لِيَذُوقُوا = to taste</p>
          <p className="text-stone-500 text-[9px]">Von Frey 1895</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Pain receptors exist only in skin — the Quran linked skin replacement to feeling punishment, confirmed by neuroscience</p>
      </motion.div>
    </div>
  );
}
