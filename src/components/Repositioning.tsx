import { motion } from 'motion/react';

export function Repositioning() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Why $89?</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-10 leading-tight">
            We Made It Easy to Find Out If We're Right for You.
          </h2>
          
          <div className="text-lg md:text-xl text-gray-600 space-y-6 max-w-3xl mx-auto leading-relaxed text-left md:text-center">
            <p>
              We're not going to pitch you on a $899/month retainer before you've seen a single edit.
            </p>
            <p>
              <strong className="text-brand-navy">Start with one video.</strong> Upload your footage, give us the brief, and see exactly what your content looks like in our hands — polished, platform-ready, and on-brand.
            </p>
            <p>
              If it clicks, your $89 goes straight toward your first subscription month. If it doesn't? You keep the video and we part ways, no hard feelings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
