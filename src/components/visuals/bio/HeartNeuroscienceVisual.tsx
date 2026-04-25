'use client';
import { motion } from 'framer-motion';

export default function HeartNeuroscienceVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0510] via-[#0f020a] to-black" />
      {/* Heart SVG */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <svg viewBox="0 0 200 200" className="w-48 h-48" fill="none">
            {/* Glow */}
            <circle cx="100" cy="100" r="70" fill="rgba(220,50,80,0.08)" />
            {/* Heart shape */}
            <path d="M100 170 Q30 120 30 75 Q30 40 65 40 Q85 40 100 60 Q115 40 135 40 Q170 40 170 75 Q170 120 100 170Z" fill="rgba(180,40,60,0.4)" stroke="rgba(220,80,100,0.5)" strokeWidth="1.5" />
            {/* Neural network inside heart */}
            {[{x:80,y:80},{x:120,y:85},{x:95,y:110},{x:110,y:95},{x:90,y:130},{x:115,y:125}].map((n,i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="3" fill="rgba(255,200,220,0.6)" />
                {i < 5 && <line x1={n.x} y1={n.y} x2={[{x:80,y:80},{x:120,y:85},{x:95,y:110},{x:110,y:95},{x:90,y:130},{x:115,y:125}][(i+1)%6].x} y2={[{x:80,y:80},{x:120,y:85},{x:95,y:110},{x:110,y:95},{x:90,y:130},{x:115,y:125}][(i+1)%6].y} stroke="rgba(255,180,200,0.3)" strokeWidth="0.5" />}
              </g>
            ))}
            {/* ECG line */}
            <motion.path d="M30 160 L50 160 L55 145 L60 175 L65 155 L70 160 L140 160 L145 145 L150 175 L155 155 L160 160 L180 160"
              stroke="rgba(255,100,130,0.5)" strokeWidth="1.5" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }} />
          </svg>
        </motion.div>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-rose-100">أَلَا بِذِكْرِ اللَّهِ <span className="text-pink-300 font-bold">تَطْمَئِنُّ الْقُلُوبُ</span></p>
        <p className="text-rose-500/60 text-xs mt-0.5">الرعد 13:28 — Hearts find tranquility</p>
      </motion.div>
      {/* Neurons — left */}
      <motion.div className="absolute z-10" style={{ top: '28%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-rose-950/80 backdrop-blur-sm border border-rose-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-rose-300 font-bold text-xs">Heart Brain</p>
          <p className="text-stone-400 text-[10px]">40,000 neurons</p>
          <p className="text-stone-400 text-[10px]">Own nervous system</p>
          <p className="text-pink-400 text-[10px]">60× stronger EM field</p>
          <p className="text-stone-400 text-[10px]">than the brain</p>
        </div>
      </motion.div>
      {/* HRV — right */}
      <motion.div className="absolute z-10" style={{ top: '28%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-purple-950/80 backdrop-blur-sm border border-purple-700/30 rounded-xl px-3 py-2 max-w-[130px]">
          <p className="text-purple-300 font-bold text-xs">اطمئنان = HRV</p>
          <p className="text-stone-400 text-[10px]">Heart → Brain signals</p>
          <p className="text-stone-400 text-[10px]">Coherent HRV pattern</p>
          <p className="text-stone-400 text-[10px]">= peace & clarity</p>
          <p className="text-stone-500 text-[9px]">HeartMath Institute</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The heart has its own neural network — "tranquility of hearts" has measurable physiological correlates</p>
      </motion.div>
    </div>
  );
}
