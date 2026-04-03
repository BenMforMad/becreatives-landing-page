import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';

const bullets = [
  "You're winning strategy and creative retainers, but production hits a wall at editing.",
  "Your team is spread across ads, reporting, creative, and client calls — not sitting in timelines all day.",
  "Send in briefs and raw footage and get fully edited ads, social content, and brand videos back in days.",
  "One subscription gives your agency predictable, scalable video output across multiple client accounts.",
];

export function L2Hero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(119,178,180,0.4)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      {/* Ambient glow */}
      <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[120%] bg-brand-accent opacity-[0.06] blur-[140px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/90">
                For Digital Agencies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Stop Letting Editing Capacity Limit Your{' '}
              <span className="text-brand-accent">Client Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-white/60 mb-8 leading-relaxed max-w-xl"
            >
              Plug a dedicated video editing team into your agency so you can say "yes" to more scopes, more formats, and more clients — without adding full-time headcount.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3 mb-10"
            >
              {bullets.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/75 text-[15px] leading-relaxed">{text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button className="group bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.03] shadow-lg shadow-brand-accent/25 flex items-center gap-2 cursor-pointer">
                See Agency Plans
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium cursor-pointer px-2 py-4">
                <Play className="w-5 h-5" />
                Watch example client videos
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-white/40 mt-4"
            >
              View pricing and typical output for performance, creative, and social agencies.
            </motion.p>
          </div>

          {/* Right Column — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Agency team collaborating around screens showing video ad variations"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-brand-accent">2,400+</p>
              <p className="text-xs text-white/60 font-medium">Videos delivered / month</p>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-brand-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              Avg. 48h turnaround
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
