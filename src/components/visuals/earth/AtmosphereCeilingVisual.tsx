'use client';
import { motion } from 'framer-motion';

export default function AtmosphereCeilingVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#001833] via-[#000a1a] to-black" />
      {/* Atmosphere layers SVG */}
      <motion.div className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 260 200" className="w-60 h-48" fill="none">
          {/* Earth surface */}
          <rect x="20" y="170" width="220" height="30" rx="4" fill="rgba(40,100,40,0.3)" stroke="rgba(60,140,60,0.3)" strokeWidth="0.5" />
          <text x="130" y="188" textAnchor="middle" fill="rgba(60,140,60,0.4)" fontSize="7">Surface</text>
          {/* Troposphere */}
          <rect x="20" y="140" width="220" height="30" rx="2" fill="rgba(100,180,255,0.08)" stroke="rgba(100,180,255,0.2)" strokeWidth="0.5" />
          <text x="130" y="158" textAnchor="middle" fill="rgba(100,180,255,0.5)" fontSize="7">Troposphere — weather</text>
          {/* Ozone */}
          <rect x="20" y="105" width="220" height="35" rx="2" fill="rgba(150,100,255,0.08)" stroke="rgba(150,100,255,0.2)" strokeWidth="0.5" />
          <text x="130" y="126" textAnchor="middle" fill="rgba(150,100,255,0.5)" fontSize="7">Ozone — blocks 97% UV</text>
          {/* Ionosphere */}
          <rect x="20" y="65" width="220" height="40" rx="2" fill="rgba(100,200,200,0.06)" stroke="rgba(100,200,200,0.2)" strokeWidth="0.5" />
          <text x="130" y="88" textAnchor="middle" fill="rgba(100,200,200,0.5)" fontSize="7">Ionosphere — absorbs X-rays</text>
          {/* Magnetosphere */}
          <rect x="20" y="20" width="220" height="45" rx="2" fill="rgba(255,100,100,0.05)" stroke="rgba(255,100,100,0.15)" strokeWidth="0.5" />
          <text x="130" y="46" textAnchor="middle" fill="rgba(255,100,100,0.4)" fontSize="7">Magnetosphere — deflects solar wind</text>
          {/* Incoming threats */}
          {[40,100,180].map((x,i) => (
            <motion.line key={i} x1={x} y1="5" x2={x+10} y2="20" stroke="rgba(255,200,50,0.3)" strokeWidth="1"
              animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 2, delay: i*0.5, repeat: Infinity }} />
          ))}
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-5 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-blue-100">وَجَعَلْنَا السَّمَاءَ <span className="text-cyan-300 font-bold">سَقْفًا مَّحْفُوظًا</span></p>
        <p className="text-blue-500/60 text-xs mt-0.5">الأنبياء 21:32 — A protected ceiling</p>
      </motion.div>
      {/* Shield — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[115px]">
          <p className="text-blue-300 font-bold text-xs">سَقْفًا = Ceiling</p>
          <p className="text-stone-400 text-[10px]">4 protective layers</p>
          <p className="text-stone-400 text-[10px]">100t debris/day burned</p>
          <p className="text-cyan-400 text-[10px]">مَّحْفُوظًا = guarded</p>
        </div>
      </motion.div>
      {/* Facts — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-cyan-950/80 backdrop-blur-sm border border-cyan-700/30 rounded-xl px-3 py-2 max-w-[115px]">
          <p className="text-cyan-300 font-bold text-xs">Without it</p>
          <p className="text-stone-400 text-[10px]">No ozone → lethal UV</p>
          <p className="text-stone-400 text-[10px]">No magneto → no air</p>
          <p className="text-stone-500 text-[9px]">Mars lost its shield</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-2 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The atmosphere is a multi-layered shield — exactly a &quot;protected ceiling&quot;</p>
      </motion.div>
    </div>
  );
}
