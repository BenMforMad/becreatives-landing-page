import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'We tripled the amount of video in our retainers without hiring a single editor. Our team finally focuses on strategy instead of arguing with timelines.',
    name: 'Sarah M.',
    title: 'Founder',
    agency: 'GrowthLab Digital',
  },
  {
    quote: 'Our dedicated editor now knows each of our main clients better than most freelancers ever did. Quality is consistent, and we don\'t panic when a campaign changes last minute.',
    name: 'James K.',
    title: 'Creative Director',
    agency: 'BrandStudio',
  },
  {
    quote: 'The biggest win is predictability. We know what we pay each month and roughly how many edits we can push — budgeting and scoping are way easier.',
    name: 'Lisa T.',
    title: 'Head of Operations',
    agency: 'SocialWave Media',
  },
];

export function L2Testimonials() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            What Agencies Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-gray-600 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}, {t.agency}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
