'use client';
import { motion } from 'framer-motion';

export default function NumberNineteenVisual({ className = '' }: { className?: string }) {
  const patterns = [
    { text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', note: '19 letters', clr: 'text-yellow-300' },
    { text: 'اللَّه', note: '× 19 = 2698 times', clr: 'text-amber-300' },
    { text: 'الرَّحْمَٰن', note: '× 19 = 57 times', clr: 'text-green-300' },
    { text: 'الرَّحِيم', note: '× 19 = 114 times (÷2)', clr: 'text-sky-300' },
    { text: 'Total chapters', note: '114 = 19 × 6', clr: 'text-purple-300' },
  ];
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080014] via-[#050010] to-black" />
      {/* Glowing 19 — central large display */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="text-[160px] font-bold text-center leading-none select-none pointer-events-none"
          style={{ color: 'transparent', WebkitTextStroke: '1px rgba(168,85,247,0.3)', textShadow: '0 0 60px rgba(168,85,247,0.15)' }}>
          19
        </div>
      </motion.div>
      {/* Radiating lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left h-px"
          style={{ width: 120, transform: `translate(-50%, -50%) rotate(${i * 30}deg)`, background: 'linear-gradient(to right, rgba(168,85,247,0.3), transparent)' }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-purple-100">عَلَيْهَا{' '}<span className="text-yellow-300 font-bold text-2xl">تِسْعَةَ عَشَرَ</span></p>
        <p className="text-purple-500/60 text-xs mt-0.5">المدثر 74:30 — Over it are NINETEEN</p>
      </motion.div>
      {/* Pattern cards — arranged around the 19 */}
      <div className="absolute z-10 left-3 top-[22%] space-y-2">
        {patterns.slice(0,3).map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.18 }}
          >
            <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-lg px-2.5 py-1.5">
              <p className={`font-amiri text-sm font-bold ${p.clr}`}>{p.text}</p>
              <p className="text-stone-400 text-[10px]">{p.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute z-10 right-3 top-[22%] space-y-2">
        {patterns.slice(3).map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.18 }}
          >
            <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-lg px-2.5 py-1.5">
              <p className={`font-amiri text-sm font-bold ${p.clr}`}>{p.text}</p>
              <p className="text-stone-400 text-[10px]">{p.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-stone-500 text-[10px]">Rashad Khalifa 1974 used IBM computers to discover the 19-based mathematical structure embedded throughout the Quran</p>
      </motion.div>
    </div>
  );
}
