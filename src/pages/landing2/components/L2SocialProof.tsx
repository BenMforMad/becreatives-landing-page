import { motion } from 'motion/react';
import { Film, Clock, Users, Star } from 'lucide-react';

const metrics = [
  { icon: <Film className="w-5 h-5 text-brand-accent" />, value: '2,400+', label: 'Videos delivered monthly' },
  { icon: <Clock className="w-5 h-5 text-brand-accent" />, value: '48h', label: 'Avg. turnaround' },
  { icon: <Users className="w-5 h-5 text-brand-accent" />, value: '50+', label: 'Agency partners' },
  { icon: <Star className="w-5 h-5 text-brand-accent" />, value: '4.9/5', label: 'Client satisfaction' },
];

export function L2SocialProof() {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10"
        >
          Trusted by agencies across performance, creative, and social
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-gray-50 border border-gray-100 hover:scale-[1.03] transition-transform"
            >
              <div className="mb-3">{metric.icon}</div>
              <span className="text-2xl md:text-3xl font-extrabold text-brand-navy tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
