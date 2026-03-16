import { motion } from 'motion/react';
import { AlertCircle, Frown, Clock } from 'lucide-react';

export function Problem() {
  const painPoints = [
    {
      icon: <AlertCircle className="w-6 h-6 text-brand-accent" />,
      title: "I only need one video done right now",
      desc: "A subscription feels like overkill for a single project."
    },
    {
      icon: <Frown className="w-6 h-6 text-brand-accent" />,
      title: "I've been burned by cheap editors before",
      desc: "You need to see the quality before you trust anyone with your brand."
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-accent" />,
      title: "I don't have time to manage a freelancer",
      desc: "Sourcing, briefing, revising, paying... it's a whole job in itself."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Sound familiar?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
              Not Ready to Commit to a Subscription?
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Maybe you have one video to edit this week. Maybe you want to test the quality before going all-in. Or maybe you just don't need an editor every single day.
              </p>
              <p className="font-semibold text-brand-navy">
                That's completely valid. <span className="font-normal text-gray-600">Most video editing services will try to lock you into a monthly plan whether you need it or not.</span>
              </p>
              <p className="text-brand-accent font-medium">
                We built this offer for you.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {painPoints.map((point, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-brand-light border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg mb-1">"{point.title}"</h3>
                  <p className="text-gray-600">{point.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
