'use client';
import { motion } from 'framer-motion';

const pairs = [
  { a: 'الحياة Life', b: 'الموت Death', count: 145 },
  { a: 'الدنيا World', b: 'الآخرة Hereafter', count: 115 },
  { a: 'الملائكة Angels', b: 'الشياطين Devils', count: 88 },
  { a: 'الرجل Man', b: 'المرأة Woman', count: 24 },
];

export default function QuranWordBalanceVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a20] via-[#050510] to-black" />
      {/* Balance scale SVG */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 140" className="w-48 h-36" fill="none">
          {/* Pillar */}
          <line x1="100" y1="20" x2="100" y2="130" stroke="rgba(200,180,100,0.3)" strokeWidth="2" />
          {/* Beam */}
          <line x1="30" y1="50" x2="170" y2="50" stroke="rgba(200,180,100,0.4)" strokeWidth="1.5" />
          {/* Fulcrum */}
          <polygon points="95,20 105,20 100,10" fill="rgba(200,180,100,0.4)" />
          {/* Left pan */}
          <path d="M30 50 L20 80 L80 80 L70 50" fill="rgba(100,200,255,0.08)" stroke="rgba(100,200,255,0.2)" strokeWidth="0.5" />
          <text x="50" y="72" textAnchor="middle" fill="rgba(100,200,255,0.5)" fontSize="7">Word A</text>
          {/* Right pan */}
          <path d="M130 50 L120 80 L180 80 L170 50" fill="rgba(255,180,100,0.08)" stroke="rgba(255,180,100,0.2)" strokeWidth="0.5" />
          <text x="150" y="72" textAnchor="middle" fill="rgba(255,180,100,0.5)" fontSize="7">Word B</text>
          {/* Equal sign */}
          <text x="100" y="100" textAnchor="middle" fill="rgba(200,180,100,0.5)" fontSize="14">=</text>
          {/* Base */}
          <rect x="80" y="125" width="40" height="8" rx="2" fill="rgba(200,180,100,0.15)" />
        </svg>
      </motion.div>
      {/* Title / concept */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-amber-100">التوازن <span className="text-yellow-300 font-bold">العددي في القرآن</span></p>
        <p className="text-amber-500/60 text-xs mt-0.5">Numerical word balance — opposite words appear equally</p>
      </motion.div>
      {/* Pairs — left */}
      <motion.div className="absolute z-10" style={{ top: '24%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-indigo-300 font-bold text-xs mb-1">Paired Words</p>
          {pairs.map((p, i) => (
            <p key={i} className="text-stone-400 text-[9px]">{p.a} = {p.b} <span className="text-yellow-400">({p.count}×)</span></p>
          ))}
        </div>
      </motion.div>
      {/* Special — right */}
      <motion.div className="absolute z-10" style={{ top: '24%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-amber-950/80 backdrop-blur-sm border border-amber-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-amber-300 font-bold text-xs">Special Counts</p>
          <p className="text-stone-400 text-[10px]">الشَّهْر month = <span className="text-yellow-400">12×</span></p>
          <p className="text-stone-400 text-[10px]">الْيَوْم day = <span className="text-yellow-400">365×</span></p>
          <p className="text-stone-400 text-[10px]">الصَّلَاة prayer = <span className="text-yellow-400">5×</span></p>
          <p className="text-stone-500 text-[9px]">Exact calendar match</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-2 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">Opposite words appear the same number of times — a mathematical precision beyond human authorship</p>
      </motion.div>
    </div>
  );
}
