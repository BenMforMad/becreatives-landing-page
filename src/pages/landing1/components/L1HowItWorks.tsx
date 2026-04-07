import { motion } from 'motion/react';
import { ClipboardList, FolderOpen, Upload, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Map Your Clients & Formats',
    desc: 'On a short call, you share your client mix, typical deliverables, and expected monthly volume.',
  },
  {
    num: '02',
    icon: FolderOpen,
    title: 'Set Up Client Workspaces',
    desc: 'We create workspaces with brand colors, fonts, and reference creatives. Your team gets access to submit.',
  },
  {
    num: '03',
    icon: Upload,
    title: 'Submit Briefs, We Edit',
    desc: 'Drop in briefs, scripts, and raw assets. We handle cutting, motion, captions, sound, and versioning.',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Review, Iterate & Scale',
    desc: 'Review edits, request changes, approve. As we learn your clients, edits get faster and more on-point.',
  },
];

export function L1HowItWorks() {
  return (
    <section className="py-24 relative" style={{ background: '#FAF7F0' }}>
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl mx-auto px-5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.18em] mb-4"
            style={{ color: '#C05746', fontFamily: "'Inter', sans-serif" }}
          >
            Process
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              color: '#1a1815',
              letterSpacing: '-0.01em',
            }}
          >
            How Your Agency Works with beCreatives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px"
            style={{ background: '#D6D0C8' }}
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5 border"
                  style={{ background: '#1a1815', borderColor: '#2a2520' }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#C05746' }} />
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
                  style={{ color: '#A09890', fontFamily: "'Inter', sans-serif" }}
                >
                  {step.num}
                </span>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: '#1a1815', fontFamily: "'Inter', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#8A8480', fontFamily: "'Inter', sans-serif" }}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-col items-center"
        >
          <button
            className="group inline-flex items-center gap-2.5 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg cursor-pointer"
            style={{
              background: '#C05746',
              color: '#fff',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 8px 24px rgba(192, 87, 70, 0.2)',
            }}
          >
            Talk to Our Agency Team
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="text-sm mt-3" style={{ color: '#A09890', fontFamily: "'Inter', sans-serif" }}>
            Share your client list and video volume — we'll show you what we can take off your plate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
