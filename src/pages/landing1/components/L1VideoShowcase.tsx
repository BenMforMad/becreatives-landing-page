import { motion } from 'motion/react';
import { Film, Sparkles, Clock } from 'lucide-react';

export function L1VideoShowcase() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#1a1815' }}>
      {/* Ambient glow */}
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[100%] rounded-full blur-[100px]"
        style={{ background: '#C05746', opacity: 0.06 }}
      />

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium uppercase tracking-[0.18em] mb-10"
          style={{ color: '#8A8480', fontFamily: "'Inter', sans-serif" }}
        >
          See the Difference
        </motion.p>

        {/* TODO: Replace placeholder panels with real before/after video or images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Before — Raw Footage */}
          <div className="relative aspect-video" style={{ background: 'linear-gradient(135deg, #2a2520, #1a1815, #151210)' }}>
            {/* Subtle scan lines */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
              }}
            />

            {/* Timecode */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-wider" style={{ color: 'rgba(255,255,255,0.25)' }}>
                01:23:15:07
              </span>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C0574680' }} />
              <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                REC
              </span>
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Film className="w-9 h-9 mb-3" style={{ color: 'rgba(255,255,255,0.15)' }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Inter', sans-serif" }}
              >
                Raw Footage
              </span>
              <span className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.15)' }}>
                Ungraded · Uncut · Rough
              </span>
            </div>

            {/* Divider */}
            <div className="absolute top-0 right-0 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* After — Delivered Edit */}
          <div
            className="relative aspect-video"
            style={{ background: 'linear-gradient(135deg, #2a2520, #1e1a16, #1a1815)' }}
          >
            {/* Warm glow */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(192,87,70,0.08) 0%, transparent 60%)',
              }}
            />

            {/* Status badges */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: '#C0574625', color: '#C05746' }}
              >
                1080p
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: '#C0574625', color: '#C05746' }}
              >
                Ready
              </span>
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Sparkles className="w-9 h-9 mb-3" style={{ color: '#C0574660' }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif" }}
              >
                Delivered Edit
              </span>
              <span className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Color-graded · Cut · Captioned
              </span>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-6 text-sm"
          style={{ color: '#6B6560' }}
        >
          <Clock className="w-3.5 h-3.5" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
            Average turnaround: 48 hours
          </span>
        </motion.div>
      </div>
    </section>
  );
}
