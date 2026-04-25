'use client';
import { motion } from 'framer-motion';

export default function CosmicWebVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080020] via-[#040010] to-black" />
      {/* Cosmic web SVG */}
      <motion.div className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <svg viewBox="0 0 320 320" className="w-72 h-72" fill="none">
          {/* Nodes (galaxy clusters) */}
          {[{x:60,y:80},{x:160,y:50},{x:260,y:90},{x:100,y:160},{x:200,y:140},{x:280,y:180},{x:50,y:240},{x:160,y:230},{x:250,y:260},{x:130,y:100},{x:220,y:200}].map((n,i) => (
            <g key={i}>
              <motion.circle cx={n.x} cy={n.y} r={4+Math.sin(i)*2} fill="rgba(140,100,255,0.5)"
                animate={{ r: [4+Math.sin(i)*2, 5+Math.sin(i)*2, 4+Math.sin(i)*2] }}
                transition={{ duration: 2+i*0.3, repeat: Infinity }} />
              <circle cx={n.x} cy={n.y} r={8+Math.sin(i)*3} fill="rgba(120,80,255,0.08)" />
            </g>
          ))}
          {/* Filaments connecting nodes */}
          {[[0,1],[1,2],[0,3],[1,4],[2,5],[3,6],[3,7],[4,7],[5,8],[7,8],[0,9],[9,4],[4,10],[10,8]].map(([a,b],i) => {
            const nodes = [{x:60,y:80},{x:160,y:50},{x:260,y:90},{x:100,y:160},{x:200,y:140},{x:280,y:180},{x:50,y:240},{x:160,y:230},{x:250,y:260},{x:130,y:100},{x:220,y:200}];
            return <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="rgba(100,60,200,0.2)" strokeWidth="1" />;
          })}
          {/* Voids — dark regions */}
          <text x="130" y="195" fill="rgba(100,80,200,0.15)" fontSize="8">VOID</text>
        </svg>
      </motion.div>
      {/* Verse */}
      <motion.div className="absolute top-5 inset-x-0 px-6 text-center z-10"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-amiri text-base text-violet-100">وَالسَّمَاءِ ذَاتِ <span className="text-violet-300 font-bold">الْحُبُكِ</span></p>
        <p className="text-violet-500/60 text-xs mt-0.5">الذاريات 51:7 — The heaven with its weave/paths</p>
      </motion.div>
      {/* Structure — left */}
      <motion.div className="absolute z-10" style={{ top: '26%', left: '3%' }}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
        <div className="bg-violet-950/80 backdrop-blur-sm border border-violet-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-violet-300 font-bold text-xs">الْحُبُكِ = Weave</p>
          <p className="text-stone-400 text-[10px]">Filaments of galaxies</p>
          <p className="text-stone-400 text-[10px]">100s of Mly long</p>
          <p className="text-stone-400 text-[10px]">Nodes + voids</p>
          <p className="text-stone-400 text-[10px]">Woven structure</p>
        </div>
      </motion.div>
      {/* Discovery — right */}
      <motion.div className="absolute z-10" style={{ top: '26%', right: '3%' }}
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-700/30 rounded-xl px-3 py-2 max-w-[125px]">
          <p className="text-indigo-300 font-bold text-xs">Modern Discovery</p>
          <p className="text-stone-400 text-[10px]">IllustrisTNG sim</p>
          <p className="text-stone-400 text-[10px]">Millennium Simulation</p>
          <p className="text-stone-400 text-[10px]">21st century mapping</p>
          <p className="text-violet-400 text-[9px]">حُبُكِ = perfect fit</p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 inset-x-4 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-stone-500 text-[10px]">The universe has a web-like woven structure — الْحُبُكِ describes it with stunning precision</p>
      </motion.div>
    </div>
  );
}
