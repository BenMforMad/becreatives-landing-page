import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function IsThisForYou() {
  const isForYou = [
    "You want to see the quality before committing to a monthly plan",
    "You have one (or a few) videos you need done right now",
    "You've been burned by inconsistent freelancers and need a reliable result",
    "You're testing video content for a new product, launch, or campaign",
    "You want a professional editor, not a template"
  ];

  const isntForYou = [
    "You need 10+ videos per month (our subscription is a better fit — and cheaper per video)",
    "You want to stay on a DIY platform and do it yourself",
    "You're not serious about the quality of your content"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
            Is This Right for You?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* IS For You */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-teal-50/50 rounded-3xl p-8 md:p-10 border border-teal-100"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
              <div className="bg-emerald-100 p-1.5 rounded-full">
                <Check className="w-5 h-5 text-emerald-600" strokeWidth={3} />
              </div>
              THIS IS FOR YOU IF...
            </h3>
            <ul className="space-y-4">
              {isForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ISN'T For You */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-red-50/50 rounded-3xl p-8 md:p-10 border border-red-100"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
              <div className="bg-red-100 p-1.5 rounded-full">
                <X className="w-5 h-5 text-red-600" strokeWidth={3} />
              </div>
              THIS ISN'T FOR YOU IF...
            </h3>
            <ul className="space-y-4">
              {isntForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 italic">
            Producing more than 4 videos a month? <a href="#" className="text-brand-accent hover:underline font-semibold">See our subscription plans →</a> — and use your $89 as credit to get started.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
