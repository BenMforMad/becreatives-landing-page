import { motion } from 'motion/react';
import { ArrowRight, Users, Clock, Shield } from 'lucide-react';

export function L1FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#1a1815' }}>
      {/* Ambient glows */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[45%] h-[140%] rounded-full blur-[100px] rotate-12"
        style={{ background: '#C05746', opacity: 0.07 }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[120%] rounded-full blur-[100px] -rotate-12"
        style={{ background: '#C05746', opacity: 0.04 }}
      />

      <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: '#FAF7F0',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to Scale Your Agency's Video Output?
          </h2>
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(250, 247, 240, 0.5)', fontFamily: "'Inter', sans-serif" }}
          >
            Give your team a dedicated editing partner so you can sell, plan, and
            create with confidence — knowing production won't hold you back.
          </p>

          <div className="flex justify-center mb-4">
            <button
              className="group inline-flex items-center gap-3 font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              style={{
                background: '#C05746',
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 12px 32px rgba(192, 87, 70, 0.3)',
              }}
            >
              Talk to Our Agency Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <p className="text-sm mb-14" style={{ color: 'rgba(250, 247, 240, 0.3)', fontFamily: "'Inter', sans-serif" }}>
            Share your client list and video volume — we'll show you what we can take off your plate.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: Users, label: 'Dedicated Editors' },
              { icon: Clock, label: '48h Avg. Turnaround' },
              { icon: Shield, label: 'Predictable Monthly Cost' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'rgba(250, 247, 240, 0.35)', fontFamily: "'Inter', sans-serif" }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#C05746' }} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
