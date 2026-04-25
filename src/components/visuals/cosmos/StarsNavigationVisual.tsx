'use client';
import { motion } from 'framer-motion';

export default function StarsNavigationVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000a1a] via-[#00050f] to-black" />
      {/* Star field */}
      {[...Array(25)].map((_,i) => (
        <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-white/40"
          style={{ left: `${3+i*3.8}%`, top: `${15+Math.sin(i*1.3)*25+10}%` }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2+i*0.2, repeat: Infinity }} />
      ))}
      {/* Navigation compass / sextant SVG */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 200 200" className="w-44 h-44" fill="none">
          {/* Compass rose */}
          <circle cx="100" cy="100" r="60" stroke="rgba(100,180,255,0.2)" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="45" stroke="rgba(100,180,255,0.15)" strokeWidth="0.5" fill="none" />
          {/* Cardinal directions */}
          {[0,90,180,270].map((deg,i) => {
            const r = deg * Math.PI / 180;
            const labels = ['N','E','S','W'];
            return <g key={i}>
              <line x1={100+Math.sin(r)*48} y1={100-Math.cos(r)*48} x2={100+Math.sin(r)*58} y2={100-Math.cos(r)*58} stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" />
              <text x={100+Math.sin(r)*70} y={100-Math.cos(r)*70+4} textAnchor="middle" fill="rgba(100,200,255,0.5)" fontSize="10">{labels[i]}</text>
            </g>;
          })}
          {/* North Star indicator */}
          <motion.circle cx="100" cy="35" r="4" fill="rgba(255,220,100,0.6)"
            animate={{ r: [4, 5, 4] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <text x="100" y="25" textAnchor="middle" fill="rgba(255,220,100,0.5)" fontSize="7">Polaris ★</text>
          {/* Needle */}
          <line x1="100" y1="55" x2="100" y2="145" stroke="rgba(255,100,100,0.3)" strokeWidth="1" />
          <polygon points="100,55 95,80 105,80" fill="rgba(255,100,100,0.4)" />
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-blue-100">وَبِ<span className="text-cyan-300 font-bold">النَّجْمِ هُمْ يَهْتَدُونَ</span></p>
        <p className="text-blue-500/60 text-xs mt-0.5">النحل 16:16 — By the stars they are guided</p>
      </motion.div>
      {/* History — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-blue-300 font-bold text-xs">Navigation</p>
          <p className="text-stone-400 text-[10px]">7th C: Stars ★</p>
          <p className="text-stone-400 text-[10px]">18th C: Sextant</p>
          <p className="text-stone-400 text-[10px]">20th C: GPS</p>
          <p className="text-cyan-400 text-[10px]">21st C: XNAV pulsars</p>
        </div>
      </motion.div>
      {/* Modern — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-cyan-950/80 backdrop-blur-sm border border-cyan-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-cyan-300 font-bold text-xs">Deep Space</p>
          <p className="text-stone-400 text-[10px]">Voyager/Pioneer</p>
          <p className="text-stone-400 text-[10px]">Stellar triangulation</p>
          <p className="text-stone-400 text-[10px]">Stars = ultimate ref</p>
          <p className="text-stone-500 text-[9px]">يَهْتَدُونَ = guided</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">From ancient seafarers to deep-space probes — stars remain the ultimate navigation reference</p>
      </motion.div>
    </div>
  );
}
