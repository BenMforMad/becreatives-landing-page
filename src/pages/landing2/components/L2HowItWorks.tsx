import { motion } from 'motion/react';
import { ClipboardList, FolderOpen, Upload, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8 text-white" />,
    title: '1. Map Your Clients & Formats',
    desc: 'On a short call, you share your client mix (DTC, SaaS, local, etc.), typical deliverables (ads, reels, YouTube, webinars), and expected monthly volume.',
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-white" />,
    title: '2. Set Up Client Workspaces',
    desc: 'We create workspaces for each client with their logos, brand colors, fonts, and reference creatives. Your team gets access to submit briefs and footage.',
  },
  {
    icon: <Upload className="w-8 h-8 text-white" />,
    title: '3. Submit Briefs, We Edit',
    desc: 'Your strategists and account managers drop in briefs, scripts, and raw assets. Our editors handle cutting, motion, captions, sound, and versioning for each platform.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: '4. Review, Iterate & Scale',
    desc: 'You review edits, request changes, and approve. As we learn your clients, edits get faster and more on-point, letting you confidently sell more video into your scopes.',
  },
];

export function L2HowItWorks() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            How Your Agency Works with beCreatives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-brand-navy flex items-center justify-center mb-6 shadow-lg shadow-brand-navy/20">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <button className="group bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.03] shadow-lg shadow-brand-accent/20 inline-flex items-center gap-2 cursor-pointer">
            Talk to Our Agency Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-400 mt-3">
            Get a clear picture of output and turnaround based on your client roster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
