import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const leftPoints = [
  "You get a predictable, flat-rate editing subscription that your whole agency can tap into.",
  "We assign one or more dedicated editors who learn your clients, brands, and formats.",
  "You submit briefs and footage through our platform; we handle cutting, motion, captions, versions, and formats.",
  "You keep clients, reporting, and creative direction in-house while scaling production without hiring.",
];

const rightPoints = [
  "Sell bigger scopes that include video without worrying how you'll fulfill.",
  "Move from scattered freelancers to one centralized, trackable pipeline.",
  "Keep brand consistency across clients with stored brand kits and templates.",
  "Protect margins by trading per-project chaos for predictable monthly costs.",
];

export function L2Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 leading-tight">
            A Dedicated Editing Team Behind Your Agency's Logo
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            You own the client relationship and strategy. We handle the editing engine that keeps your video deliverables moving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — How it works */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-brand-navy mb-6">How the subscription works</h3>
            <ul className="space-y-4 mb-8">
              {leftPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-accent" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <button className="group bg-brand-accent hover:bg-brand-accent-hover text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-[1.03] shadow-lg shadow-brand-accent/20 flex items-center gap-2 cursor-pointer">
              Get an Agency Editing Plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-400 mt-3">
              Tell us your client count and video volume — we'll match you with the right level.
            </p>
          </motion.div>

          {/* Right — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-xl font-bold text-brand-navy mb-6">For your agency, that means…</h3>
            <div className="space-y-4">
              {rightPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-brand-light rounded-xl p-5 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed font-medium">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
