import { motion } from 'motion/react';
import { CheckCircle2, Clock, CreditCard } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide uppercase text-white/90">Try Us Risk-Free — From $89</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          The Cheapest Way to Experience<br className="hidden md:block" />
          <span className="text-brand-accent">Professional Video Editing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          One video. One editor. 48 hours. — And if you love it, your $89 goes toward your first month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-brand-accent/30 flex items-center gap-2 mb-8 w-full md:w-auto justify-center">
            Get My First Video Edited — $89
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-accent" />
              <span>14-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-accent" />
              <span>48h Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-accent" />
              <span>$89 Applies to Month 1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
