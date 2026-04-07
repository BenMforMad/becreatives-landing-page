import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function L2Hero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(119,178,180,0.4)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      {/* Ambient glow */}
      <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[120%] bg-brand-accent opacity-[0.06] blur-[140px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10 max-w-3xl pt-20 pb-12 lg:pt-28 lg:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-sm font-medium tracking-wide uppercase text-white/90">
            For Digital Agencies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
        >
          Make Video Your Agency's{' '}
          <span className="text-brand-accent">Strength</span>, Not a Stressor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Plug a dedicated video editing team into your agency so you can say "yes" to more scopes, more formats, and more clients — without adding full-time headcount.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col items-center"
        >
          <button className="group bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.03] shadow-lg shadow-brand-accent/25 flex items-center gap-2 cursor-pointer">
            Talk to Our Agency Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-white/40 mt-4">
            Share your client list and video volume — we'll show you what we can take off your plate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
