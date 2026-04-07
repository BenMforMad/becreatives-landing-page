import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function L1Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FAF7F0' }}>
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Warm ambient glow */}
      <div
        className="absolute top-[-20%] right-[-15%] w-[50%] h-[100%] rounded-full blur-[120px]"
        style={{ background: '#C05746', opacity: 0.04 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 pt-24 pb-16 lg:pt-36 lg:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-10"
          style={{ borderColor: '#C0574630', background: '#C0574608' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C05746' }} />
          <span
            className="text-xs font-medium tracking-[0.15em] uppercase"
            style={{ color: '#C05746', fontFamily: "'Inter', sans-serif" }}
          >
            For Digital Agencies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="leading-[1.05] mb-7"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            color: '#1a1815',
            letterSpacing: '-0.02em',
          }}
        >
          Make Video Your Agency's{' '}
          <em style={{ color: '#C05746', fontStyle: 'italic' }}>Strength</em>,
          <br className="hidden sm:block" />
          {' '}Not a Stressor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: '#6B6560', fontFamily: "'Inter', sans-serif" }}
        >
          Plug a dedicated video editing team into your agency so you can say
          "yes" to more scopes, more formats, and more clients — without adding
          full-time headcount.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-col items-center"
        >
          <button
            className="group inline-flex items-center gap-2.5 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg cursor-pointer"
            style={{
              background: '#C05746',
              color: '#fff',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 8px 24px rgba(192, 87, 70, 0.25)',
            }}
          >
            Talk to Our Agency Team
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p
            className="text-sm mt-4 max-w-xs"
            style={{ color: '#A09890', fontFamily: "'Inter', sans-serif" }}
          >
            Share your client list and video volume — we'll show you what we can
            take off your plate.
          </p>
        </motion.div>
      </div>

      {/* Bottom border accent */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #C0574620, transparent)' }} />
    </section>
  );
}
