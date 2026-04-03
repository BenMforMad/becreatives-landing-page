import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const objections = [
  {
    question: 'Are you replacing our designers and editors?',
    answer: 'No. We handle the repetitive production work so your in-house team can focus on concepts, strategy, and high-impact projects instead of endless cutting and resizing.',
  },
  {
    question: "Can you match our clients' styles?",
    answer: "Yes. We work from your brand kits, references, and past work to stay on-brand. Over time, your editors become fluent in each client's look and feel.",
  },
  {
    question: 'How do we keep control over quality?',
    answer: 'You set the brief, provide examples, review drafts, and request changes. You keep creative direction; we handle execution under your guidance.',
  },
  {
    question: 'Will managing another vendor slow us down?',
    answer: "The platform centralizes requests, assets, and feedback so you're not chasing freelancers across email and chat. Your team sends briefs the same way every time.",
  },
];

export function L2Objections() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 leading-tight">
            "But We Already Have Creatives In-House..."
          </h2>
        </motion.div>

        <div className="space-y-5">
          {objections.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-brand-light rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-start gap-3 mb-3">
                <MessageCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <h3 className="font-bold text-brand-navy text-lg">{obj.question}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-8">{obj.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
