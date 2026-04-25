'use client';
import { motion } from 'framer-motion';

export default function BackboneRibsSpermVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Dark slate background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05080d] via-[#030608] to-black" />

      {/* SPINE SVG — large central illustration */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 320 290" className="w-72 h-64" fill="none">
          {/* Pelvis base */}
          <path d="M90 268 Q160 280 230 268 Q220 245 160 248 Q100 245 90 268Z" fill="rgba(100,80,60,0.5)" />
          {/* Vertebral column */}
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
            <g key={i} transform={`translate(${148 + (i % 2 === 0 ? 0 : 2)}, ${60 + i * 16})`}>
              <rect x="-14" y="-6" width="28" height="14" rx="4" fill={i >= 9 ? 'rgba(80,110,170,0.7)' : 'rgba(180,160,130,0.7)'} stroke={i >= 9 ? 'rgba(100,140,220,0.5)' : 'rgba(210,190,160,0.4)'} strokeWidth="0.5" />
              <line x1="-22" y1="0" x2="-14" y2="0" stroke={i >= 9 ? 'rgba(100,140,220,0.4)' : 'rgba(210,190,160,0.3)'} strokeWidth="3" strokeLinecap="round" />
              <line x1="14" y1="0" x2="22" y2="0" stroke={i >= 9 ? 'rgba(100,140,220,0.4)' : 'rgba(210,190,160,0.3)'} strokeWidth="3" strokeLinecap="round" />
            </g>
          ))}
          {/* L2-L3 highlight — testicular artery origin */}
          <rect x="128" y="212" width="44" height="30" rx="5" fill="rgba(220,100,50,0.15)" stroke="rgba(220,100,50,0.5)" strokeWidth="1.5" />
          <text x="160" y="202" textAnchor="middle" fill="rgba(220,120,60,0.9)" fontSize="8">L2–L3</text>
          {/* Arrow to testes */}
          <path d="M200 228 Q230 245 228 265" stroke="rgba(220,100,50,0.6)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
          <circle cx="228" cy="268" r="8" fill="rgba(220,100,50,0.2)" stroke="rgba(220,100,50,0.5)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-stone-100">
          خُلِقَ مِن{' '}
          <span className="text-orange-300 font-bold">مَّاءٍ دَافِقٍ</span>{' '}
          يَخْرُجُ مِن بَيْنِ{' '}
          <span className="text-blue-300 font-bold">الصُّلْبِ وَالتَّرَائِبِ</span>
        </p>
        <p className="text-stone-500/60 text-xs mt-0.5">الطارق 86:6-7 — from fluid emitted between the backbone and ribs</p>
      </motion.div>

      {/* Lumbar origin card — left */}
      <motion.div
        className="absolute z-10" style={{ top: '30%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-700/30 rounded-xl px-3 py-2 max-w-[148px]">
          <p className="text-orange-300 font-bold text-xs">الصُّلْبِ Backbone</p>
          <p className="text-stone-400 text-[10px]">Gonadal ridge forms at T12–L3</p>
          <p className="text-stone-400 text-[10px]">Testicular artery from aorta at L2–L3</p>
          <p className="text-stone-400 text-[10px]">Testes descend wk 7–28 from L2</p>
        </div>
      </motion.div>

      {/* Ribs card — right */}
      <motion.div
        className="absolute z-10" style={{ top: '30%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-xl px-3 py-2 max-w-[148px]">
          <p className="text-blue-300 font-bold text-xs">التَّرَائِبِ Ribs/Sternum</p>
          <p className="text-stone-400 text-[10px]">Vas deferens passes through inguinal canal</p>
          <p className="text-stone-400 text-[10px]">Between lumbar spine & pelvic floor</p>
          <p className="text-stone-400 text-[10px]">= "between backbone and ribs"</p>
        </div>
      </motion.div>

      {/* Bottom footnote */}
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-stone-500 text-[10px]">Embryology of testicular origin confirmed by Dr. Keith Moore (anatomist) — 1,400 yrs before modern reproductive anatomy</p>
      </motion.div>
    </div>
  );
}
