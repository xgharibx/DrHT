'use client';
import { motion } from 'framer-motion';

const manuscripts = [
  { name: 'Birmingham Quran', date: '568–645 CE', note: 'Carbon-dated within revelation period', left: '5%', top: '28%' },
  { name: 'Topkapi Manuscript', date: '8th century', note: 'Istanbul · Identical to today', left: '5%', top: '46%' },
  { name: "Sana'a Manuscript", date: '7th century', note: 'Yemen 1972 · Identical to today', left: '5%', top: '62%' },
];

export default function QuranPreservationVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Deep teal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001410] via-[#000e08] to-black" />

      {/* Central manuscript / Quran book SVG */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 280 260" className="w-60 h-56" fill="none">
          {/* Book glow */}
          <ellipse cx="140" cy="220" rx="80" ry="15" fill="rgba(16,185,129,0.15)" />
          {/* Book pages */}
          <rect x="60" y="60" width="160" height="200" rx="6" fill="rgba(20,50,35,0.9)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
          <rect x="68" y="68" width="144" height="184" rx="4" fill="rgba(10,30,20,0.8)" />
          {/* Arabic text lines */}
          {[0,1,2,3,4,5,6,7,8,9].map(i => (
            <line key={i} x1="85" y1={85 + i * 16} x2={i % 2 === 0 ? "195" : "185"} y2={85 + i * 16} stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
          ))}
          {/* Gold binding spine */}
          <rect x="56" y="60" width="12" height="200" rx="3" fill="rgba(180,140,20,0.6)" />
          <line x1="62" y1="80" x2="62" y2="240" stroke="rgba(220,180,40,0.4)" strokeWidth="1" />
          {/* Title area */}
          <rect x="80" y="68" width="120" height="24" rx="3" fill="rgba(16,185,129,0.15)" />
          <text x="140" y="84" textAnchor="middle" fill="rgba(16,185,129,0.8)" fontSize="10" fontFamily="serif">القرآن الكريم</text>
        </svg>
      </motion.div>

      {/* Light shaft from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-48 bg-gradient-to-b from-emerald-400/10 to-transparent pointer-events-none" />

      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-emerald-100">
          إِنَّا{' '}
          <span className="text-emerald-300 font-bold">نَحْنُ نَزَّلْنَا الذِّكْرَ</span>{' '}
          وَإِنَّا لَهُ{' '}
          <span className="text-yellow-300 font-bold">لَحَافِظُونَ</span>
        </p>
        <p className="text-emerald-600/60 text-xs mt-0.5">الحجر 15:9 — We sent down the Reminder and WE GUARD IT</p>
      </motion.div>

      {/* Manuscript cards — left side */}
      {manuscripts.map((m, i) => (
        <motion.div
          key={m.name}
          className="absolute z-10"
          style={{ top: m.top, left: m.left }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.2 }}
        >
          <div className="bg-emerald-950/80 backdrop-blur-sm border border-emerald-700/30 rounded-xl px-3 py-1.5 max-w-[160px]">
            <p className="text-emerald-300 font-bold text-[10px]">{m.name}</p>
            <p className="text-yellow-400 text-[9px]">{m.date}</p>
            <p className="text-stone-400 text-[9px]">{m.note}</p>
          </div>
        </motion.div>
      ))}

      {/* Stats — right side */}
      <motion.div
        className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-slate-950/80 backdrop-blur-sm border border-slate-600/30 rounded-xl px-3 py-2 max-w-[150px]">
          <p className="text-yellow-300 font-bold text-xs">10M+ Huffaz</p>
          <p className="text-stone-400 text-[10px]">memorized every word</p>
          <div className="h-px bg-slate-700/50 my-1.5" />
          <p className="text-red-400 font-bold text-xs">Bible NT: 400K variants</p>
          <p className="text-stone-400 text-[10px]">across manuscripts</p>
          <div className="h-px bg-slate-700/50 my-1.5" />
          <p className="text-blue-300 font-bold text-xs">Quran: 0 variants</p>
          <p className="text-stone-400 text-[10px]">substantive differences</p>
        </div>
      </motion.div>

      {/* Bottom footnote */}
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-stone-500 text-[10px]">Only scripture preserved by both memory AND manuscript simultaneously across 1,400 years</p>
      </motion.div>
    </div>
  );
}
