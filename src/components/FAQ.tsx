import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "Does my $89 really apply toward a subscription?",
      a: "Yes — if you decide to continue after your trial edit, we credit your $89 toward your first subscription month. No extra payment needed."
    },
    {
      q: "What types of videos can I submit?",
      a: "Short-form content (Reels, TikTok, YouTube Shorts), talking heads, interviews, ads, tutorials, and repurposed clips. Raw footage up to 10 minutes. We don't handle music videos, wedding films, or heavy motion graphics."
    },
    {
      q: "What if I'm not happy with the result?",
      a: "You get 2 revision rounds. If you're still unsatisfied within 14 days, we'll refund you — no questions asked."
    },
    {
      q: "How do I submit my footage?",
      a: "After purchase you'll access SPACE, our editing portal. Upload your files, fill in a short creative brief, and your editor handles the rest."
    },
    {
      q: "Will I get a dedicated editor?",
      a: "Yes. One editor picks up your project and sees it through — they review your brief, make informed creative choices, and deliver a consistent result."
    },
    {
      q: "I need more than one video. Can I order multiple?",
      a: "Absolutely — each is $89. But if you're ordering 4 or more a month, our subscription plans offer better value, and your first $89 becomes your deposit."
    }
  ];

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
            Quick Answers
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-brand-navy text-lg pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-accent transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
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
