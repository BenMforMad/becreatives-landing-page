import { motion } from 'motion/react';
import { Film, Clock, Users, TrendingUp } from 'lucide-react';

const metrics = [
  { icon: Film, value: '2,400+', label: 'Videos delivered monthly' },
  { icon: Clock, value: '48h', label: 'Avg. turnaround' },
  { icon: Users, value: '50+', label: 'Agency partners' },
  { icon: TrendingUp, value: '3×', label: 'More video in retainers' },
];

export function L1SocialProof() {
  return (
    <section className="py-16" style={{ background: '#fff' }}>
      <div className="max-w-4xl mx-auto px-5">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium uppercase tracking-[0.18em] mb-10"
          style={{ color: '#A09890', fontFamily: "'Inter', sans-serif" }}
        >
          Trusted by agencies across performance, creative, and social
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="flex flex-col items-center text-center py-6 px-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: '#E8E4DF', background: '#FAFAF8' }}
              >
                <Icon className="w-5 h-5 mb-3" style={{ color: '#C05746' }} />
                <span
                  className="text-2xl md:text-3xl font-semibold tracking-tight"
                  style={{ color: '#1a1815', fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {m.value}
                </span>
                <span
                  className="text-[11px] font-medium mt-1.5 uppercase tracking-wide"
                  style={{ color: '#A09890', fontFamily: "'Inter', sans-serif" }}
                >
                  {m.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
