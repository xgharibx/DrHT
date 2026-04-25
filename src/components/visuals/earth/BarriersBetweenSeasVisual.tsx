'use client';

import { motion } from 'framer-motion';

export default function BarriersBetweenSeasVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex flex-col justify-start pt-10 gap-3 px-6 pb-6 w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000c14] via-[#000810] to-black" />

      {/* Verse */}
      <motion.div
        className="relative bg-black/60 border border-teal-800/40 rounded-xl px-4 py-3 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-amiri text-teal-200 text-sm leading-relaxed">
          مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ﴿١٩﴾ <span className="text-teal-300 font-bold">بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ</span>
        </p>
        <p className="text-[10px] text-white/50 mt-1">الرحمن 55:19–20 — "Between them is a barrier they do not transgress"</p>
      </motion.div>

      {/* Two seas diagram */}
      <motion.div
        className="relative rounded-xl overflow-hidden border border-white/10"
        style={{ height: 100 }}
        initial={{ opacity: 0, scaleY: 0.8 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Sea 1 - salty */}
        <div className="absolute inset-y-0 left-0 w-[45%] flex flex-col items-center justify-center bg-blue-950/70 border-r border-teal-400/20">
          <div className="text-blue-300 font-bold text-xs">Salt Sea</div>
          <div className="text-white/50 text-[9px]">مِلْحٌ أُجَاجٌ</div>
          <div className="text-white/30 text-[8px] mt-1">High salinity</div>
          <div className="text-white/30 text-[8px]">High density</div>
        </div>
        {/* Barrier */}
        <motion.div
          className="absolute inset-y-0 left-[42%] w-[16%] flex items-center justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-teal-400/60 to-transparent absolute" />
            <div className="text-teal-300 font-bold text-[8px] bg-black/50 px-1 py-0.5 rounded z-10">بَرْزَخٌ</div>
            <div className="text-white/50 text-[7px] z-10 bg-black/50 px-1 rounded">Halocline</div>
          </div>
        </motion.div>
        {/* Sea 2 - fresh */}
        <div className="absolute inset-y-0 right-0 w-[45%] flex flex-col items-center justify-center bg-cyan-950/60 border-l border-teal-400/20">
          <div className="text-cyan-300 font-bold text-xs">Fresh Water</div>
          <div className="text-white/50 text-[9px]">عَذْبٌ فُرَاتٌ</div>
          <div className="text-white/30 text-[8px] mt-1">Low salinity</div>
          <div className="text-white/30 text-[8px]">Low density</div>
        </div>
      </motion.div>

      {/* Evidence row */}
      <motion.div
        className="relative flex gap-2"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        {[
          { place: 'Gibraltar Strait', detail: 'Atlantic ↔ Mediterranean', icon: '🌊' },
          { place: 'Gulf of Alaska', detail: 'Visible color boundary', icon: '🏔' },
          { place: 'River Estuaries', detail: 'Fresh meets salt', icon: '🏞' },
        ].map((e, i) => (
          <div key={i} className="flex-1 bg-black/40 border border-teal-900/30 rounded-lg p-2 text-center">
            <div className="text-xl">{e.icon}</div>
            <div className="text-teal-300 font-bold text-[9px]">{e.place}</div>
            <div className="text-white/40 text-[8px] mt-0.5">{e.detail}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
