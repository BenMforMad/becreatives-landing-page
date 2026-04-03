import { motion } from 'motion/react';
import { XCircle } from 'lucide-react';

const painPoints = [
  "Every new video-heavy client means more late nights in Premiere or After Effects.",
  "Freelancers are inconsistent, disappear mid-project, and don't think in terms of client LTV.",
  "Hiring a full-time editor per big account kills your margin and adds risk when budgets shift.",
  "So you either say \"no\" to video in the scope or quietly overwork your team and hope they don't burn out.",
];

export function L2Problem() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-4 block">
            The Bottleneck
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
            Your Editing Bottleneck Is Costing You Retainers
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your clients want more video every quarter: UGC-style ads, shorts, reels, explainers, webinars, YouTube content, you name it. But editing is where your internal capacity breaks.
          </p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
            >
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-brand-navy font-bold text-lg">
            The result? Your agency leaves revenue on the table every single month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
