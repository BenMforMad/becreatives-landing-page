import { motion } from 'motion/react';
import { ArrowRight, Users, Clock, Shield } from 'lucide-react';

export function L2FinalCTA() {
  return (
    <section className="py-28 bg-brand-navy text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-brand-accent opacity-[0.08] blur-[120px] rounded-full transform rotate-12" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-teal-500 opacity-[0.06] blur-[120px] rounded-full transform -rotate-12" />

      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Ready to Scale Your Agency's Video Output?
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Give your team a dedicated editing partner so you can sell, plan, and create with confidence — knowing production won't hold you back.
          </p>

          <div className="flex justify-center mb-4">
            <button className="group bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all hover:scale-[1.03] shadow-2xl shadow-brand-accent/30 flex items-center gap-3 cursor-pointer">
              Talk to Our Agency Team
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-white/40 text-sm mb-14">
            Share your client list and video volume — we'll show you what we can take off your plate.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-white/50">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-accent" />
              <span>Dedicated Editors</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-accent" />
              <span>48h Avg. Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-accent" />
              <span>Predictable Monthly Cost</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
