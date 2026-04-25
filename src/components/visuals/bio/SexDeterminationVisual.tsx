'use client';
import { motion } from 'framer-motion';

export default function SexDeterminationVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Deep violet background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0318] via-[#060214] to-black" />

      {/* Large chromosome SVG — central scene */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 320 280" className="w-72 h-64" fill="none">
          {/* X chromosome — left */}
          <g transform="translate(80, 50)">
            {/* X arms */}
            <path d="M0 0 L20 40 L0 80" stroke="#a855f7" strokeWidth="12" strokeLinecap="round" />
            <path d="M40 0 L20 40 L40 80" stroke="#a855f7" strokeWidth="12" strokeLinecap="round" />
            <circle cx="20" cy="40" r="8" fill="#c084fc" />
            <text x="20" y="105" textAnchor="middle" fill="#c084fc" fontSize="24" fontWeight="bold" fontFamily="serif">X</text>
          </g>
          {/* SPERM — large central arrow pointing to Y */}
          <motion.g
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ellipse cx="160" cy="130" rx="22" ry="10" fill="rgba(200,180,255,0.8)" />
            <path d="M138 130 Q120 120 110 140" stroke="rgba(200,180,255,0.6)" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Y sperm */}
            <path d="M160 130 L185 130" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
            <text x="160" y="155" textAnchor="middle" fill="rgba(200,180,255,0.9)" fontSize="9">sperm only</text>
            <text x="160" y="165" textAnchor="middle" fill="rgba(200,180,255,0.7)" fontSize="8">carries Y or X</text>
          </motion.g>
          {/* Y chromosome — right */}
          <g transform="translate(200, 50)">
            {/* Y stem */}
            <line x1="20" y1="40" x2="20" y2="80" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" />
            {/* Y arms */}
            <path d="M0 0 L20 40" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" />
            <path d="M40 0 L20 40" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" />
            <circle cx="20" cy="40" r="8" fill="#7dd3fc" />
            <text x="20" y="105" textAnchor="middle" fill="#7dd3fc" fontSize="24" fontWeight="bold" fontFamily="serif">Y</text>
          </g>
          {/* Labels beneath */}
          <text x="100" y="200" textAnchor="middle" fill="#c084fc" fontSize="11">♀ Female</text>
          <text x="220" y="200" textAnchor="middle" fill="#38bdf8" fontSize="11">♂ Male</text>
          <text x="160" y="230" textAnchor="middle" fill="rgba(180,160,220,0.6)" fontSize="9">46,XX or 46,XY</text>
        </svg>
      </motion.div>

      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-violet-100">
          مِن{' '}
          <span className="text-violet-300 font-bold">نُّطْفَةٍ</span>{' '}
          إِذَا{' '}
          <span className="text-sky-300 font-bold">تُمْنَى</span>
        </p>
        <p className="text-slate-500/60 text-xs mt-0.5">النجم 53:46 — from a sperm drop when EMITTED</p>
      </motion.div>

      {/* Left label — egg has no Y */}
      <motion.div
        className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-violet-950/80 backdrop-blur-sm border border-violet-600/30 rounded-xl px-3 py-2 max-w-[140px]">
          <p className="text-violet-300 font-bold text-xs">Egg (Ovum)</p>
          <p className="text-stone-400 text-[10px]">Only carries X</p>
          <p className="text-stone-400 text-[10px]">Never determines sex</p>
        </div>
      </motion.div>

      {/* Right label — sperm decides */}
      <motion.div
        className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55 }}
      >
        <div className="bg-sky-950/80 backdrop-blur-sm border border-sky-600/30 rounded-xl px-3 py-2 max-w-[140px]">
          <p className="text-sky-300 font-bold text-xs">Sperm</p>
          <p className="text-stone-400 text-[10px]">X-sperm → ♀ female</p>
          <p className="text-stone-400 text-[10px]">Y-sperm → ♂ male</p>
          <p className="text-stone-400 text-[10px]">Quran: nutfa = SPERM</p>
        </div>
      </motion.div>

      {/* Bottom footnote */}
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-amber-400/80 text-xs">
          1,400 yrs before Nettie Stevens discovered sex chromosomes (1905) — Quran attributed sex to the SPERM
        </p>
      </motion.div>
    </div>
  );
}
