'use client';
import { motion } from 'framer-motion';

export default function WhaleJonahVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Ocean depth gradient — becomes absolutely dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001530] via-[#000c20] to-black" />
      {/* Surface shimmer */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-900/30 to-transparent" />
      {/* Subtle wave pattern at top */}
      <svg className="absolute top-0 left-0 right-0 w-full h-20 opacity-20" viewBox="0 0 900 80" preserveAspectRatio="none">
        <path d="M0 40 Q100 10 200 40 Q300 70 400 40 Q500 10 600 40 Q700 70 800 40 Q850 25 900 40 L900 0 L0 0Z" fill="#1e40af" />
      </svg>

      {/* WHALE SILHOUETTE — deep in the darkness */}
      <motion.div
        className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 400 160" className="w-[320px] h-auto" fill="none">
          {/* Glow around whale */}
          <ellipse cx="200" cy="80" rx="180" ry="60" fill="rgba(30,60,120,0.15)" />
          {/* Whale body */}
          <path d="M30 80 Q60 45 130 60 Q180 68 240 65 Q300 62 340 80 Q300 98 240 95 Q180 92 130 100 Q60 115 30 80Z" fill="rgba(15,30,60,0.95)" stroke="rgba(50,100,200,0.3)" strokeWidth="1" />
          {/* Whale head */}
          <path d="M30 80 Q15 75 10 80 Q15 85 30 80Z" fill="rgba(15,30,60,0.9)" />
          {/* Flukes / tail */}
          <path d="M340 80 Q365 55 380 50 Q370 68 380 80 Q370 92 380 110 Q365 105 340 80Z" fill="rgba(15,30,60,0.9)" />
          {/* Belly highlight */}
          <path d="M80 85 Q180 95 280 88" stroke="rgba(80,130,200,0.15)" strokeWidth="8" strokeLinecap="round" fill="none" />
          {/* Eye */}
          <circle cx="60" cy="74" r="4" fill="rgba(80,140,220,0.7)" />
          <circle cx="61" cy="73" r="1.5" fill="white" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Verse — top overlay */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-blue-100">
          <span className="text-cyan-400 font-bold text-2xl">فَالْتَقَمَهُ الْحُوتُ</span>{' '}
          وَهُوَ مُلِيمٌ
        </p>
        <p className="text-blue-400/60 text-xs mt-0.5">And the fish swallowed him — Al-Saffat 37:142</p>
      </motion.div>

      {/* Three darkness layers — LEFT column */}
      <div className="absolute left-4 top-[42%] flex flex-col gap-1.5">
        {[
          { n: '①', label: 'Night', sub: 'Dark of night', icon: '🌙', clr: 'text-indigo-300', b: 'border-indigo-700/40' },
          { n: '②', label: 'Ocean Depth', sub: '2,000+ m — zero light', icon: '🌊', clr: 'text-blue-300', b: 'border-blue-700/40' },
          { n: '③', label: 'Stomach', sub: '800L forestomach — no acid', icon: '🐋', clr: 'text-teal-300', b: 'border-teal-700/40' },
        ].map((d, i) => (
          <motion.div
            key={d.n}
            className={`flex items-center gap-2 bg-slate-950/80 backdrop-blur-sm border ${d.b} rounded-lg px-3 py-1.5`}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
          >
            <span className={`font-bold text-base ${d.clr}`}>{d.n}</span>
            <span className="text-base">{d.icon}</span>
            <div>
              <p className={`font-bold text-xs ${d.clr}`}>{d.label}</p>
              <p className="text-slate-400 text-[10px]">{d.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* الظُّلُمَات banner — centre overlay on whale */}
      <motion.div
        className="absolute left-1/2 top-[44%] -translate-x-1/2 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <p className="font-amiri text-3xl font-bold text-cyan-300 drop-shadow-lg [text-shadow:0_0_30px_rgba(34,211,238,0.5)]">
          الظُّلُمَاتِ
        </p>
        <p className="text-cyan-500/70 text-[10px] tracking-widest uppercase">PLURAL — 3 simultaneous darknesses</p>
      </motion.div>

      {/* Sperm whale stats — right column */}
      <motion.div
        className="absolute right-4 top-[42%]"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="bg-teal-950/80 backdrop-blur-sm border border-teal-700/30 rounded-xl px-3 py-3 text-center">
          <p className="text-teal-300 font-bold text-xs mb-2">Sperm Whale</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { v: '800L', l: 'Stomach' },
              { v: '0', l: 'Stomach acid' },
              { v: '45cm', l: 'Throat' },
              { v: '2km+', l: 'Dive depth' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <p className="text-white font-bold text-sm">{s.v}</p>
                <p className="text-slate-400 text-[9px]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
