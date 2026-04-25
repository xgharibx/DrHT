'use client';
import { motion } from 'framer-motion';

export default function MountainColorsVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c14] via-[#08080f] to-black" />
      {/* Starfield */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 40 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}

      {/* THREE MOUNTAIN PEAKS — large SVG scene */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 900 340" className="w-full h-auto" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wm-white" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e8ec" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#a0a0b0" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wm-red" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b94040" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#8b2020" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5a1010" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wm-black" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          {/* Ground */}
          <rect x="0" y="300" width="900" height="40" fill="rgba(20,15,10,0.8)" />
          {/* BLACK mountain — far right, tallest */}
          <path d="M620 300 L760 80 L900 300Z" fill="url(#wm-black)" />
          {/* RED mountain — centre, medium */}
          <path d="M260 300 L450 60 L640 300Z" fill="url(#wm-red)" />
          {/* RED rock strata lines */}
          <path d="M350 200 Q450 195 550 200" stroke="rgba(180,60,60,0.4)" strokeWidth="2" fill="none" />
          <path d="M310 230 Q450 225 590 230" stroke="rgba(160,50,50,0.3)" strokeWidth="2" fill="none" />
          {/* WHITE mountain — left */}
          <path d="M0 300 L200 55 L380 300Z" fill="url(#wm-white)" />
          {/* Snow cap on white */}
          <path d="M160 110 L200 55 L240 110 Q220 105 200 108 Q180 105 160 110Z" fill="white" opacity="0.9" />
        </svg>
      </div>

      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-stone-100">
          <span className="text-slate-300 font-bold">جُدَدٌ بِيضٌ</span>{' '}وَ{' '}
          <span className="text-red-400 font-bold">حُمْرٌ مُّختَلِفٌ أَلْوَانُهَا</span>{' '}وَ{' '}
          <span className="text-zinc-300 font-bold">غَرَابِيبُ سُودٌ</span>
        </p>
        <p className="text-stone-500/70 text-xs mt-0.5">فاطر 35:27 — White tracts · Red of varying shades · Intensely black</p>
      </motion.div>

      {/* White mountain label */}
      <motion.div
        className="absolute z-10"
        style={{ top: '38%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-400/30 rounded-xl px-3 py-2">
          <p className="text-slate-200 font-bold text-xs">بِيضٌ WHITE</p>
          <p className="text-slate-400 text-[10px]">Chalk · CaCO₃</p>
          <p className="text-slate-400 text-[10px]">Quartz · SiO₂</p>
          <p className="text-slate-400 text-[10px]">Marble · Calcium</p>
        </div>
      </motion.div>

      {/* Red mountain label */}
      <motion.div
        className="absolute z-10"
        style={{ top: '35%', left: '38%' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
      >
        <div className="bg-red-950/80 backdrop-blur-sm border border-red-600/30 rounded-xl px-3 py-2">
          <p className="text-red-300 font-bold text-xs">حُمْرٌ RED (varying shades)</p>
          <p className="text-stone-400 text-[10px]">Hematite · Fe₂O₃</p>
          <p className="text-stone-400 text-[10px]">Red sandstone</p>
          <p className="text-stone-400 text-[10px]">Iron oxide staining</p>
        </div>
      </motion.div>

      {/* Black mountain label */}
      <motion.div
        className="absolute z-10"
        style={{ top: '32%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="bg-zinc-950/90 backdrop-blur-sm border border-zinc-500/30 rounded-xl px-3 py-2">
          <p className="text-zinc-200 font-bold text-xs">غَرَابِيبُ سُودٌ RAVEN BLACK</p>
          <p className="text-stone-400 text-[10px]">Basalt · Volcanic</p>
          <p className="text-stone-400 text-[10px]">Fe + Mg silicates</p>
          <p className="text-stone-400 text-[10px]">Obsidian · Magnetite</p>
        </div>
      </motion.div>

      {/* Parallel insight — bottom */}
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <p className="text-amber-400/80 text-xs">
          <span className="text-amber-300 font-bold">إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاء</span>{' '}— Same verse 35:28 — Only those with KNOWLEDGE truly fear God
        </p>
      </motion.div>
    </div>
  );
}
