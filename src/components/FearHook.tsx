import { motion } from 'motion/react';

export function FearHook() {
  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
            Your Content Represents Your Brand. <br className="hidden md:block" />
            <span className="text-brand-accent">Make It Count.</span>
          </h2>
          
          <div className="text-lg md:text-xl text-white/80 space-y-6 max-w-3xl mx-auto leading-relaxed text-left md:text-center">
            <p>
              Freelancers who don't know your niche. Templates that make you look like everyone else. Editors who disappear after two revisions.
            </p>
            <p>
              We've heard it all — from the 1,000+ companies that came to us after trying everything else.
            </p>
            <p>
              <strong className="text-white">Your $89 edit is handled by a dedicated professional</strong> who has edited thousands of videos across industries, platforms, and content styles. No guessing. No generic results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
