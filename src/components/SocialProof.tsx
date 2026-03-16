import { motion } from 'motion/react';
import { Star, PlayCircle } from 'lucide-react';

export function SocialProof() {
  const stats = [
    { value: "50,000+", label: "Videos Edited" },
    { value: "1,000+", label: "Clients Served" },
    { value: "4.7★", label: "Average Rating" }
  ];

  const testimonials = [
    {
      quote: "I landed three $20,000 deals thanks to a single beCreatives video ad. Commerce happens on video.",
      author: "Patrick Anghel",
      role: "Business Owner"
    },
    {
      quote: "We went from 100K to 800K views. The editing quality made all the difference in our content strategy.",
      author: "Alex Tubio",
      role: "Content Creator"
    },
    {
      quote: "Fast, accurate, and very creative. I've been extremely pleased with everything beCreatives has done. 10/10.",
      author: "Lloyd Dodgen",
      role: "Creator"
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-200 pb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-5xl font-black text-brand-navy mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
            Real Clients. Real Results.
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-8 flex-grow">"{test.quote}"</p>
              <div>
                <p className="font-bold text-brand-navy">{test.author}</p>
                <p className="text-sm text-gray-500">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[9/16] bg-gray-200 rounded-xl relative overflow-hidden group cursor-pointer">
              <img src={`https://picsum.photos/seed/testim${i}/400/700`} alt="Video Testimonial" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
