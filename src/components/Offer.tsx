import { motion } from 'motion/react';
import { Check, Gift } from 'lucide-react';

export function Offer() {
  const features = [
    "One professionally edited video (up to 10 minutes of raw footage)",
    "Platform-optimized format — Reels, TikTok, YouTube, LinkedIn, and more",
    "Captions & subtitles",
    "Background music from a licensed library",
    "Text overlays, transitions & branded graphics",
    "Up to 2 revision rounds",
    "Delivered in 48 business hours",
    "Managed via SPACE — our streamlined editing portal"
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">What you get</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-12">
            One Professional Edit. Everything Included.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 text-left relative"
        >
          <div className="absolute top-0 right-0 bg-brand-accent text-white font-bold text-sm px-4 py-1 rounded-bl-xl z-20">
            Most Popular
          </div>
          <div className="bg-brand-navy text-white p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-2xl"></div>
            
            <h3 className="text-6xl font-black mb-2 relative z-10">$89</h3>
            <p className="text-white/80 italic relative z-10">(One-time. No subscription required.)</p>
          </div>

          <div className="p-8 md:p-12">
            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-brand-accent" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 pt-4 border-t border-gray-100">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center mt-0.5">
                  <Gift className="w-4 h-4 text-brand-accent" strokeWidth={3} />
                </div>
                <span className="text-brand-navy font-bold">Bonus: <span className="font-medium text-gray-700">Your $89 fully applies toward your first subscription month if you decide to continue</span></span>
              </li>
            </ul>

            <div className="text-center mt-10">
              <button className="w-full md:w-auto bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-brand-accent/30 flex items-center justify-center gap-2 mx-auto mb-4">
                Claim My $89 Edit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <p className="text-sm text-gray-500 italic">
                Not ready to commit to a plan? You don't have to. This is completely standalone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
