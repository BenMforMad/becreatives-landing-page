import { motion } from 'motion/react';
import { Expand, Palette, Zap, ShieldCheck } from 'lucide-react';

const cards = [
  {
    icon: <Expand className="w-7 h-7 text-brand-accent" />,
    title: 'Take On More Video Without Hiring',
    desc: 'Add video deliverables to more retainers without adding full-time editors. Your production capacity grows without your payroll exploding.',
  },
  {
    icon: <Palette className="w-7 h-7 text-brand-accent" />,
    title: 'Keep Every Brand On-Point',
    desc: 'We store per-client brand guidelines, assets, and preferences so edits look like they came from your in-house creative team.',
  },
  {
    icon: <Zap className="w-7 h-7 text-brand-accent" />,
    title: 'Hit Aggressive Launch Timelines',
    desc: 'Handle sudden campaign pivots and last-minute concepts with a team built to work in queues, not one-off favors.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-brand-accent" />,
    title: 'Protect Your Margin on Every Account',
    desc: 'Swap unpredictable per-project editing costs for a subscription you can bake into retainers and packages.',
  },
];

export function L2Benefits() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[-20%] left-[-5%] w-[40%] h-[140%] bg-brand-accent opacity-[0.04] blur-[120px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-5%] w-[30%] h-[100%] bg-teal-400 opacity-[0.04] blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Why Agencies Plug beCreatives Into Their Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.08] transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug">{card.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
