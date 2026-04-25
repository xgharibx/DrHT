'use client';
import { motion } from 'framer-motion';

export default function SunMoonLightVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Split sky: warm left / cool right */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0d0600 0%, #050510 50%, #000510 100%)' }} />

      {/* SUN — left side */}
      <motion.div
        className="absolute left-[18%] top-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {/* Outer glow */}
        <div className="w-44 h-44 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-8 rounded-full bg-yellow-400/20 blur-xl" />
        {/* Corona rays */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 origin-left h-px bg-gradient-to-r from-yellow-400/60 to-transparent"
            style={{ width: 70, transform: `translate(-50%, -50%) rotate(${i * 45}deg)` }}
            animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        {/* Core */}
        <div className="absolute inset-12 rounded-full" style={{ background: 'radial-gradient(circle, #fff7a0 0%, #ffcc00 50%, #ff8800 100%)' }} />
      </motion.div>

      {/* MOON — right side */}
      <motion.div
        className="absolute right-[18%] top-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {/* Soft glow */}
        <div className="w-36 h-36 rounded-full bg-sky-400/5 blur-2xl" />
        {/* Moon disc */}
        <div className="absolute inset-8 rounded-full" style={{ background: 'radial-gradient(circle at 40% 40%, #e8ecf5 0%, #b8c8d8 60%, #7090a8 100%)' }} />
        {/* Craters */}
        <div className="absolute inset-10 rounded-full overflow-hidden">
          <div className="absolute w-3 h-3 rounded-full bg-slate-500/40" style={{ top: '20%', left: '60%' }} />
          <div className="absolute w-2 h-2 rounded-full bg-slate-500/30" style={{ top: '55%', left: '30%' }} />
          <div className="absolute w-4 h-4 rounded-full bg-slate-600/20" style={{ top: '65%', left: '60%' }} />
        </div>
      </motion.div>

      {/* Centre divider label */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-700/30" />

      {/* SUN label */}
      <motion.div
        className="absolute left-[4%] top-[18%] z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-orange-950/80 backdrop-blur-sm border border-orange-600/30 rounded-xl px-3 py-2">
          <p className="font-amiri text-xl text-orange-300 font-bold">ضِيَاءً</p>
          <p className="text-orange-400 text-[10px] font-bold uppercase">DIYA — Self-luminous</p>
          <p className="text-stone-400 text-[10px]">Nuclear fusion · 1.5×10²² kJ/s</p>
          <p className="text-stone-400 text-[10px]">Surface 5,500°C</p>
        </div>
      </motion.div>

      {/* MOON label */}
      <motion.div
        className="absolute right-[4%] top-[18%] z-10"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45 }}
      >
        <div className="bg-sky-950/80 backdrop-blur-sm border border-sky-600/30 rounded-xl px-3 py-2">
          <p className="font-amiri text-xl text-sky-300 font-bold">نُورًا</p>
          <p className="text-sky-400 text-[10px] font-bold uppercase">NUR — Reflected light</p>
          <p className="text-stone-400 text-[10px]">Reflects 12% sunlight</p>
          <p className="text-stone-400 text-[10px]">No heat · No fusion</p>
        </div>
      </motion.div>

      {/* Verse — top */}
      <motion.div
        className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-yellow-100">
          جَعَلَ الشَّمْسَ{' '}
          <span className="text-orange-300 font-bold">ضِيَاءً</span>{' '}وَالْقَمَرَ{' '}
          <span className="text-sky-300 font-bold">نُورًا</span>
        </p>
        <p className="text-slate-500/60 text-xs mt-0.5">يونس 10:5 — Sun = ضياء (radiance) · Moon = نور (reflected light)</p>
      </motion.div>

      {/* Key insight */}
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-amber-400/80 text-xs">
          Arabic distinguishes self-luminous (ضياء) from reflected (نور) — 1,400 yrs before telescopes confirmed the moon reflects sunlight
        </p>
      </motion.div>
    </div>
  );
}
