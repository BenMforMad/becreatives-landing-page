import { motion } from 'motion/react';

const useCases = [
  {
    title: 'Performance Agencies',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    points: [
      'Constantly test new hooks, angles, and offers in video ads.',
      'Need fast turnarounds and multiple variations per concept, not one "hero" video.',
      'Scale creative testing without burning out your media team.',
    ],
  },
  {
    title: 'Creative Studios',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
    points: [
      'Concept big campaigns and need a reliable execution arm for all video outputs.',
      'Keep your senior creatives out of timelines and focused on ideas and pitches.',
      'Deliver campaign assets on time without over-hiring.',
    ],
  },
  {
    title: 'Social & Content Agencies',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    points: [
      'Publish daily content across multiple platforms and clients.',
      'Turn recorded calls, webinars, and lo-fi footage into polished social assets.',
      'Maintain consistent quality at high volume.',
    ],
  },
];

export function L2UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 leading-tight">
            Built for the Way Modern Agencies Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((uc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={uc.image}
                  alt={uc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-white font-bold text-xl">
                  {uc.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {uc.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
