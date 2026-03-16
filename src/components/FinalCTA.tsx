import { motion } from 'motion/react';
import { Lock, RotateCcw, Zap, CreditCard } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-brand-accent opacity-10 blur-[120px] rounded-full transform rotate-12"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-teal-500 opacity-10 blur-[120px] rounded-full transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            See What We Can Do With Your Footage.
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
            One edit. 48 hours. $89 — and it counts toward more if you want it to.
          </p>

          <button className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xl px-12 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-brand-accent/40 flex items-center justify-center gap-3 mx-auto mb-10 w-full md:w-auto">
            Get My $89 Edit Now
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-white/70 mb-12">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-accent" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-brand-accent" />
              <span>14-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-brand-accent" />
              <span>$89 Applies to Month 1</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-accent" />
              <span>48h Delivery</span>
            </div>
          </div>

          <p className="text-white/50 text-sm italic">
            Not sure yet? <a href="#" className="text-brand-accent hover:text-white transition-colors underline underline-offset-4 font-medium">Chat with us first →</a> — no pitch, no pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
