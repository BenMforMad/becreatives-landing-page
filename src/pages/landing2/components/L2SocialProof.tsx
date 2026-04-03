import { motion } from 'motion/react';

const agencies = ['GrowthLab', 'PerformanceCo', 'BrandStudio', 'SocialWave', 'MediaPulse'];

export function L2SocialProof() {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10"
        >
          Trusted by Digital, Performance, and Creative Agencies
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12">
          {agencies.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-gray-50 border border-gray-100 rounded-lg px-6 py-3"
            >
              <span className="text-lg font-bold text-gray-300 tracking-tight select-none">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed">
            "We finally stopped turning down video work because we didn't have enough editors on staff."
          </p>
          <footer className="mt-4 text-sm text-gray-400 font-medium">
            — Agency Owner, Performance Agency
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
