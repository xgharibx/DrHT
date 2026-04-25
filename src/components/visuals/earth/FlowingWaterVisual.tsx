'use client';
import { motion } from 'framer-motion';

export default function FlowingWaterVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Sky blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001828] via-[#001020] to-black" />

      {/* River scene — left half flowing, right half stagnant */}
      {/* Left: flowing river */}
      <div className="absolute left-0 top-0 bottom-0 w-[48%] overflow-hidden">
        {/* Flowing water visual */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-blue-900/20 to-transparent" />
        {[0,1,2,3,4].map(i => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent left-0 right-0"
            style={{ top: `${25 + i * 12}%` }}
            animate={{ scaleX: [0.3, 1, 0.3], x: ['-30%', '30%', '-30%'], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
          />
        ))}
        {/* Flowing label */}
        <div className="absolute bottom-8 inset-x-0 text-center">
          <p className="text-cyan-400 font-bold text-sm">Flowing Water</p>
          <p className="text-green-400 text-xs">طَهُور ✔ Self-purifying</p>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 left-[48%] w-px bg-slate-700/50" />

      {/* Right: stagnant pool */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
        {/* Stagnant ripple — barely moves */}
        <motion.div
          className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-red-900/30"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-red-800/20"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {/* Disease icons */}
        {[
          { y: '22%', x: '25%', name: 'Cholera', clr: 'text-red-400' },
          { y: '36%', x: '60%', name: 'Malaria', clr: 'text-orange-400' },
          { y: '48%', x: '30%', name: 'Typhoid', clr: 'text-yellow-500' },
          { y: '56%', x: '60%', name: 'Bilharzia', clr: 'text-amber-500' },
        ].map(d => (
          <motion.div
            key={d.name}
            className="absolute"
            style={{ top: d.y, left: d.x }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
          >
            <p className={`text-xs font-semibold ${d.clr}`}>&#x26A0; {d.name}</p>
          </motion.div>
        ))}
        {/* Stagnant label */}
        <div className="absolute bottom-8 inset-x-0 text-center">
          <p className="text-red-400 font-bold text-sm">Stagnant Water</p>
          <p className="text-red-500 text-xs">✗ Breeds 4 killer diseases</p>
        </div>
      </div>

      {/* Verse — top */}
      <motion.div
        className="absolute top-4 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-lg text-cyan-100">
          وَيُنَزِّلُ عَلَيْكُم مِّنَ السَّمَاءِ{' '}
          <span className="text-cyan-300 font-bold text-2xl">مَاءً</span>{' '}
          <span className="text-blue-300 font-bold">لِّيُطَهِّرَكُم</span>{' '}بِهِ
        </p>
        <p className="text-cyan-500/60 text-xs mt-0.5">الأنفال 8:11 — He sends down rain to PURIFY you</p>
      </motion.div>

      {/* TAHOOR analysis — centre band */}
      <motion.div
        className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="bg-slate-950/90 backdrop-blur-sm border border-cyan-700/30 rounded-xl px-4 py-2">
          <p className="font-amiri text-2xl text-cyan-300 font-bold">طَهُور</p>
          <p className="text-cyan-500 text-[10px] tracking-widest uppercase">Self-purifying • Purifies others</p>
          <p className="text-slate-500 text-[9px] mt-0.5">≠ طَاهِر (merely clean)</p>
        </div>
      </motion.div>

      {/* Hadith footnote */}
      <motion.div
        className="absolute bottom-4 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-slate-400 text-[10px] italic">&#x22;لا يبولن أحدكم في الماء الدائم" — صحيح البخاري • 1,400 years before germ theory (Pasteur 1860s)</p>
      </motion.div>
    </div>
  );
}
