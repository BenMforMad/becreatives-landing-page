import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function UpgradePath() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Want more?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
              Your $89 Is Just the Beginning.
            </h2>
            <div className="text-lg text-gray-600 space-y-4 mb-8">
              <p>
                If one video turns into a content strategy, we've got a plan for that. Our subscription clients get a dedicated editor, unlimited requests, faster turnarounds, and a lower cost per video.
              </p>
              <p className="font-bold text-brand-navy">
                Your $89 trial applies toward your first month — so there's no extra cost to start.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-8 py-3 rounded-xl transition-all">
                See Subscription Plans →
              </button>
              <span className="text-gray-400 italic">or</span>
              <button className="w-full sm:w-auto text-brand-accent hover:text-brand-accent-hover font-bold px-8 py-3 rounded-xl transition-all border border-brand-accent/20 hover:bg-brand-accent/5">
                Start with $89 →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-light rounded-3xl p-6 md:p-8 border border-gray-100"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-2 text-gray-400 font-medium w-1/3"></th>
                  <th className="py-4 px-2 text-brand-navy font-bold w-1/3">Pay-Per-Video</th>
                  <th className="py-4 px-2 text-brand-accent font-bold w-1/3">Subscription</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-2 font-semibold text-brand-navy">Price</td>
                  <td className="py-4 px-2 text-gray-600">$89/video</td>
                  <td className="py-4 px-2 text-gray-600">From $X/month</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-2 font-semibold text-brand-navy">Commitment</td>
                  <td className="py-4 px-2 text-gray-600">None</td>
                  <td className="py-4 px-2 text-gray-600">Monthly, pause anytime</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-2 font-semibold text-brand-navy">Turnaround</td>
                  <td className="py-4 px-2 text-gray-600">48h</td>
                  <td className="py-4 px-2 text-gray-600">24–48h</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-2 font-semibold text-brand-navy">Dedicated Editor</td>
                  <td className="py-4 px-2"><Check className="w-5 h-5 text-emerald-500" /></td>
                  <td className="py-4 px-2"><Check className="w-5 h-5 text-emerald-500" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-2 font-semibold text-brand-navy">Revisions</td>
                  <td className="py-4 px-2 text-gray-600">2 rounds</td>
                  <td className="py-4 px-2 text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-semibold text-brand-navy">Best for</td>
                  <td className="py-4 px-2 text-gray-600">Testing the service</td>
                  <td className="py-4 px-2 text-brand-accent font-medium">Scaling content</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
