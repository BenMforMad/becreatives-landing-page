import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What kinds of videos can you edit for agencies?',
    a: 'Ad creatives, social reels/shorts, UGC-style videos, YouTube videos, webinars, product demos, brand films, and more. If it needs editing, we likely support it.',
  },
  {
    q: 'How many client accounts can we use this for?',
    a: "Plans are designed for multiple accounts. On a call, we'll map your client roster and volume to the right plan so you don't over- or under-buy capacity.",
  },
  {
    q: 'How fast are typical turnarounds?',
    a: "Most requests are turned around in a few business days, depending on complexity and your queue. You'll always see what's in progress and what's next.",
  },
  {
    q: 'How do we share assets and feedback?',
    a: 'You upload assets and briefs into our platform, then leave time-stamped comments and revision notes directly on the video. No more scattered links and threads.',
  },
  {
    q: 'Can we get source files if needed?',
    a: 'If source files are required for certain clients or campaigns, this can be discussed as part of your plan setup.',
  },
  {
    q: 'What if a client changes direction mid-project?',
    a: 'You update the brief and priorities in the platform. We adjust the queue with you so your most time-sensitive edits are always at the top.',
  },
];

export function L2FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Agency Video Editing FAQ
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-brand-navy text-lg pr-8">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-accent transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
