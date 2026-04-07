import { motion } from 'motion/react';
import { Film, Sparkles, Clock } from 'lucide-react';

export function L2VideoShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[120%] bg-brand-accent opacity-[0.05] blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-white/40 mb-10"
        >
          See the Difference
        </motion.p>

        {/* Before / After panels */}
        {/* TODO: Replace placeholder panels with real before/after video or images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Before — Raw Footage */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 group">
            {/* Rough-cut visual treatment */}
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,80,80,0.15)_0%,transparent_70%)]" />

            {/* Timecode overlay */}
            <div className="absolute top-4 left-4 font-mono text-xs text-white/30 tracking-wider">
              01:23:15:07
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="font-mono text-xs text-white/30">REC</span>
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Film className="w-10 h-10 text-white/20 mb-3" />
              <span className="text-sm font-semibold text-white/40 uppercase tracking-wider">Raw Footage</span>
              <span className="text-xs text-white/20 mt-1">Ungraded · Uncut · Rough</span>
            </div>

            {/* Scanline effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
          </div>

          {/* After — Delivered Edit */}
          <div className="relative aspect-video bg-gradient-to-br from-brand-navy-light via-[#1a2d4a] to-brand-navy group">
            {/* Polished visual treatment */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(119,178,180,0.12)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent" />

            {/* Platform badges */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-brand-accent/20 text-[10px] font-bold text-brand-accent uppercase tracking-wider">1080p</span>
              <span className="px-2 py-0.5 rounded-full bg-brand-accent/20 text-[10px] font-bold text-brand-accent uppercase tracking-wider">Ready</span>
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Sparkles className="w-10 h-10 text-brand-accent/50 mb-3" />
              <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">Delivered Edit</span>
              <span className="text-xs text-white/30 mt-1">Color-graded · Cut · Captioned</span>
            </div>

            {/* Subtle border glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-accent/20" />
          </div>
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-6 text-sm text-white/30"
        >
          <Clock className="w-4 h-4" />
          <span>Average turnaround: 48 hours</span>
        </motion.div>
      </div>
    </section>
  );
}
