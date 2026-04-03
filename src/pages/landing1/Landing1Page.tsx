import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  CheckCircle2,
  ArrowRight,
  Expand,
  Palette,
  Zap,
  ShieldCheck,
  Star,
  ChevronDown,
  MessageCircle,
  Users,
  Clock,
  DollarSign,
} from 'lucide-react';

// ─── Fade-up variant factory ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

// ─── Google Fonts injection ──────────────────────────────────────────────────
function FontLink() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:wght@400;500;600&display=swap');

      .l1-heading {
        font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif;
      }
      .l1-body {
        font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
      }
      .l1-scope {
        font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
      }
      .l1-scope h1,
      .l1-scope h2,
      .l1-scope h3,
      .l1-scope h4,
      .l1-scope h5,
      .l1-scope h6 {
        font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif;
      }

      /* Grain overlay */
      .l1-grain::before {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0.04;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        background-size: 160px 160px;
        z-index: 0;
      }

      /* Dot-grid hero pattern */
      .l1-dot-grid {
        background-image: radial-gradient(circle, rgba(212,168,83,0.18) 1px, transparent 1px);
        background-size: 28px 28px;
      }

      /* Step connector */
      .l1-step-connector {
        position: absolute;
        top: 22px;
        left: 50%;
        right: -50%;
        height: 1px;
        border-top: 2px dashed rgba(212,168,83,0.35);
        z-index: 0;
      }

      /* Accordion content */
      .l1-accordion-content {
        overflow: hidden;
      }
    `}</style>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

// ─── Inner container ──────────────────────────────────────────────────────────
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

// ─── Gold eyebrow label ───────────────────────────────────────────────────────
function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
      <span className="w-[6px] h-[6px] rounded-full bg-[#D4A853] shrink-0" />
      <span
        className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#D4A853] l1-body"
        style={{ letterSpacing: '0.18em' }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── Gold CTA button ──────────────────────────────────────────────────────────
function GoldButton({
  children,
  className = '',
  ghost = false,
}: {
  children: React.ReactNode;
  className?: string;
  ghost?: boolean;
}) {
  if (ghost) {
    return (
      <button
        className={`cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[#D4A853]/50 text-[#D4A853] text-[15px] font-semibold l1-body transition-all duration-200 hover:border-[#D4A853] hover:bg-[#D4A853]/8 hover:scale-[1.02] ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#D4A853] text-[#141210] text-[15px] font-semibold l1-body transition-all duration-200 hover:bg-[#C49A47] hover:scale-[1.02] shadow-lg shadow-[#D4A853]/20 ${className}`}
    >
      {children}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 1. HERO
// ═══════════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <Section className="bg-[#141210] overflow-hidden l1-grain" id="hero">
      {/* Dot grid */}
      <div className="absolute inset-0 l1-dot-grid opacity-100 pointer-events-none" />
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-[#141210]/60 to-[#141210] pointer-events-none" />

      <Container className="py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)}>
              <Eyebrow>For Digital Agencies</Eyebrow>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="l1-heading text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#FAF7F2] mb-5"
            >
              Stop Letting Editing&nbsp;Capacity Limit Your{' '}
              <span className="text-[#D4A853]">Client Growth</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              className="l1-body text-[#A09890] text-lg leading-relaxed mb-8 max-w-lg"
            >
              beCreatives embeds a dedicated editing team inside your agency workflow — so you can
              take on bigger retainers, faster — without hiring or managing in-house.
            </motion.p>

            {/* Bullet points */}
            <motion.ul {...fadeUp(0.2)} className="space-y-3 mb-10">
              {[
                'White-label editing under your agency brand',
                'Same-editor continuity — they learn your clients',
                '48-hour turnaround on all project types',
                'Flat monthly pricing — no per-video surprises',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 l1-body text-[#FAF7F2]/85 text-[15px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#D4A853] shrink-0 mt-[6px]" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div {...fadeUp(0.26)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
              <GoldButton>
                See Agency Plans <ArrowRight className="w-4 h-4" />
              </GoldButton>
              <button className="cursor-pointer inline-flex items-center gap-2 text-[#FAF7F2]/70 text-[14px] l1-body hover:text-[#FAF7F2] transition-colors">
                <span className="w-8 h-8 rounded-full bg-white/8 border border-white/12 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
                Watch example client videos
              </button>
            </motion.div>

            <motion.p {...fadeUp(0.3)} className="l1-body text-[#6B6560] text-[12.5px]">
              No contracts. Cancel anytime. Setup in under 24 hours.
            </motion.p>
          </div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 32, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D4A853]/20 shadow-2xl shadow-black/60">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Agency team reviewing video edits"
                referrerPolicy="no-referrer"
                className="w-full object-cover aspect-[4/3]"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/50 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -left-6 bg-[#1E1C19] border border-[#D4A853]/30 rounded-xl px-5 py-3.5 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-[#D4A853]/12 border border-[#D4A853]/25 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-[#D4A853]" />
              </div>
              <div>
                <p className="l1-heading text-[#FAF7F2] text-[15px] font-bold leading-none mb-0.5">
                  2,400+ videos
                </p>
                <p className="l1-body text-[#A09890] text-[11px] tracking-wide">delivered per month</p>
              </div>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -top-px -right-px w-24 h-24 border-t-2 border-r-2 border-[#D4A853]/50 rounded-tr-2xl pointer-events-none" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2. SOCIAL PROOF
// ═══════════════════════════════════════════════════════════════════════════════
function SocialProof() {
  const logos = [
    { name: 'GrowthLab', style: 'font-bold tracking-[-0.02em] italic' },
    { name: 'PerformanceCo', style: 'font-semibold tracking-[0.06em] uppercase text-sm' },
    { name: 'BrandStudio', style: 'font-extrabold tracking-tight' },
    { name: 'SocialWave', style: 'font-medium tracking-[0.04em]' },
    { name: 'MediaPulse', style: 'font-bold italic tracking-[-0.01em]' },
  ];

  return (
    <Section className="bg-[#FAF7F2]">
      <Container className="py-16 lg:py-20">
        <motion.p
          {...fadeUp(0)}
          className="text-center l1-body text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B6560] mb-10"
        >
          Trusted by Digital, Performance, and Creative Agencies
        </motion.p>

        <motion.div
          {...fadeUp(0.06)}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 mb-14"
        >
          {logos.map((logo) => (
            <span
              key={logo.name}
              className={`l1-heading text-xl text-[#141210] opacity-35 ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </motion.div>

        <motion.blockquote
          {...fadeUp(0.1)}
          className="max-w-2xl mx-auto border-l-4 border-[#D4A853] pl-7"
        >
          <p className="l1-body text-xl md:text-2xl italic text-[#141210] leading-relaxed mb-4">
            "We added three new retainers in one quarter — beCreatives made it operationally
            possible without a single new hire."
          </p>
          <footer className="l1-body text-[#6B6560] text-sm font-medium">
            — Alex R., COO · Meridian Digital
          </footer>
        </motion.blockquote>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3. PROBLEM
// ═══════════════════════════════════════════════════════════════════════════════
function Problem() {
  const pains = [
    'You turn down retainers because you can\'t guarantee editing turnaround',
    'Freelancers disappear, get busy, or require constant re-briefing',
    'In-house editors cost $60k+/yr and are hard to scale up or down',
    'Clients notice inconsistency — and churn when quality dips',
  ];

  return (
    <Section className="bg-[#F0EDE6]">
      <Container className="py-24 lg:py-28">
        <div className="max-w-3xl">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>The Bottleneck</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp(0.06)}
            className="l1-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#141210] mb-5"
          >
            Your Editing Bottleneck Is Costing You Retainers
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="l1-body text-[#6B6560] text-lg leading-relaxed mb-12 max-w-xl"
          >
            Most agencies hit a ceiling — not because they can't win clients, but because they
            can't reliably deliver video at scale. Here's what that actually looks like:
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            {pains.map((pain, i) => (
              <motion.div
                key={pain}
                {...fadeUp(0.1 + i * 0.07)}
                className="bg-white border border-[#E0DDD6] rounded-xl p-5 flex items-start gap-3.5 shadow-sm"
              >
                <span className="w-[9px] h-[9px] rounded-full bg-[#C45C4B] shrink-0 mt-1.5" />
                <p className="l1-body text-[#141210] text-[14.5px] leading-snug">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. SOLUTION
// ═══════════════════════════════════════════════════════════════════════════════
function Solution() {
  const gets = [
    'A dedicated editor who knows your clients inside-out',
    'White-label delivery — your brand, not ours',
    'Scalable capacity — ramp up when you win big accounts',
    'A project manager so you never chase a deliverable again',
  ];

  const means = [
    'Higher retainer value per client with video included',
    'Faster proposals — you know delivery is handled',
    'Clients that stay longer because content never slips',
    'More time to sell, strategize, and grow',
  ];

  return (
    <Section className="bg-[#FAF7F2]">
      <Container className="py-24 lg:py-28">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Eyebrow center>The Solution</Eyebrow>
          <h2 className="l1-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#141210] mb-4">
            A Dedicated Editing Team Behind Your Agency's Logo
          </h2>
          <p className="l1-body text-[#6B6560] text-lg max-w-xl mx-auto leading-relaxed">
            We operate invisibly inside your workflow — your clients never know we exist.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 mb-10">
          {/* Light card */}
          <motion.div
            {...fadeUp(0.08)}
            className="bg-white border border-[#E0DDD6] rounded-2xl p-8 shadow-sm"
          >
            <p className="l1-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6560] mb-6">
              What you get
            </p>
            <ul className="space-y-4">
              {gets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" />
                  <span className="l1-body text-[#141210] text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dark card */}
          <motion.div
            {...fadeUp(0.14)}
            className="bg-[#141210] border border-[#2A2725] rounded-2xl p-8 shadow-sm"
          >
            <p className="l1-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[#A09890] mb-6">
              For your agency, that means…
            </p>
            <ul className="space-y-4">
              {means.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" />
                  <span className="l1-body text-[#FAF7F2] text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.2)} className="text-center">
          <GoldButton className="mb-3">
            Explore Agency Plans <ArrowRight className="w-4 h-4" />
          </GoldButton>
          <p className="l1-body text-[#6B6560] text-[12.5px]">No commitment. 14-day money-back guarantee.</p>
        </motion.div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 5. BENEFITS
// ═══════════════════════════════════════════════════════════════════════════════
function Benefits() {
  const cards = [
    {
      Icon: Expand,
      title: 'Scale Without Overhead',
      desc: 'Add video to every retainer without adding headcount. Our team flexes with your client load — up or down, month to month.',
    },
    {
      Icon: Palette,
      title: 'True White-Label Quality',
      desc: "Your brand, your style guide, your templates. We learn your clients' voice and produce content indistinguishable from in-house.",
    },
    {
      Icon: Zap,
      title: '48-Hour Turnaround',
      desc: 'Fast delivery without sacrificing quality. Rush jobs don\'t derail your ops — we absorb the pressure so you don\'t have to.',
    },
    {
      Icon: ShieldCheck,
      title: 'Predictable, Flat Pricing',
      desc: 'One monthly fee regardless of how many revisions or feedback rounds it takes. Zero surprise invoices, ever.',
    },
  ];

  return (
    <Section className="bg-[#141210] l1-grain overflow-hidden">
      <Container className="py-24 lg:py-28 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Eyebrow center>Why beCreatives</Eyebrow>
          <h2 className="l1-heading text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#FAF7F2]">
            Why Agencies Plug beCreatives Into Their Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(0.06 + i * 0.07)}
              className="group bg-[#1E1C19] border border-[#2A2725] rounded-2xl p-6 transition-all duration-300 hover:border-[#D4A853]/30 hover:shadow-lg hover:shadow-[#D4A853]/5 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[#D4A853]/10 border border-[#D4A853]/20 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[#D4A853]" />
              </div>
              <h3 className="l1-heading text-[#FAF7F2] text-[17px] font-semibold mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="l1-body text-[#A09890] text-[13.5px] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 6. HOW IT WORKS
// ═══════════════════════════════════════════════════════════════════════════════
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Book a Strategy Call',
      desc: 'We learn your agency workflow, client roster, and style guides in a 30-min onboarding call.',
    },
    {
      num: '02',
      title: 'Meet Your Dedicated Editor',
      desc: 'We match you with an editor who specialises in your content type — and who only works on your account.',
    },
    {
      num: '03',
      title: 'Submit & Receive',
      desc: 'Drop briefs into your shared project hub. We deliver polished edits in 48 hours or less.',
    },
    {
      num: '04',
      title: 'Scale With Confidence',
      desc: 'Add clients and retainers knowing your editing capacity grows with you — at zero extra stress.',
    },
  ];

  return (
    <Section className="bg-[#FAF7F2]">
      <Container className="py-24 lg:py-28">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <Eyebrow center>Process</Eyebrow>
          <h2 className="l1-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#141210] mb-4">
            Up and Running in 4 Simple Steps
          </h2>
          <p className="l1-body text-[#6B6560] text-lg max-w-lg mx-auto">
            From first call to first delivered video in under 72 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              {...fadeUp(0.06 + i * 0.08)}
              className="relative flex flex-col"
            >
              {/* Connector line (only on lg, not last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block l1-step-connector" />
              )}
              <div className="relative z-10">
                <span
                  className="l1-heading font-extrabold text-[#D4A853] leading-none block mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', opacity: 0.28 }}
                >
                  {num}
                </span>
                <h3 className="l1-heading text-[#141210] text-[17px] font-bold mb-2">{title}</h3>
                <p className="l1-body text-[#6B6560] text-[14px] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.32)} className="text-center">
          <GoldButton className="mb-3">
            Get Started Today <ArrowRight className="w-4 h-4" />
          </GoldButton>
          <p className="l1-body text-[#6B6560] text-[12.5px]">First project delivered in 48 hours. Guaranteed.</p>
        </motion.div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 7. USE CASES
// ═══════════════════════════════════════════════════════════════════════════════
function UseCases() {
  const cases = [
    {
      badge: 'Performance',
      title: 'Performance Marketing Agencies',
      bullets: [
        'High-volume ad creative variants (15s, 30s, 60s)',
        'UGC-style and hook-first formats',
        'Platform-native aspect ratios for Meta, TikTok, YouTube',
        'Rapid iteration for winning creative testing',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    },
    {
      badge: 'Creative',
      title: 'Full-Service Creative Agencies',
      bullets: [
        'Brand films, case studies, and testimonial videos',
        'Long-form and short-form social content',
        'Motion graphics and animated logo overlays',
        'Multi-deliverable packages per client per month',
      ],
      image: null,
    },
    {
      badge: 'Social',
      title: 'Social Media & Content Agencies',
      bullets: [
        'Daily/weekly social video pipelines',
        'Reels, TikToks, YouTube Shorts — at volume',
        'Captions, B-roll sourcing, music licensing',
        'Consistent style across dozens of client accounts',
      ],
      image: null,
    },
  ];

  return (
    <Section className="bg-[#F0EDE6]">
      <Container className="py-24 lg:py-28">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Eyebrow center>Use Cases</Eyebrow>
          <h2 className="l1-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#141210]">
            Built for Every Type of Agency
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {cases.map(({ badge, title, bullets, image }, i) => (
            <motion.div
              key={title}
              {...fadeUp(0.06 + i * 0.08)}
              className="group bg-white border border-[#E0DDD6] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {image && (
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-7">
                <span className="inline-block px-3 py-1 bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] text-[11px] font-semibold tracking-[0.14em] uppercase rounded-full mb-4 l1-body">
                  {badge}
                </span>
                <h3 className="l1-heading text-[#141210] text-[18px] font-bold mb-4 leading-snug">{title}</h3>
                <ul className="space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#D4A853] shrink-0 mt-1.5" />
                      <span className="l1-body text-[#6B6560] text-[13.5px] leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 8. TESTIMONIALS
// ═══════════════════════════════════════════════════════════════════════════════
function Testimonials() {
  const testimonials = [
    {
      quote:
        'We tripled the amount of video in our retainers without hiring a single editor. beCreatives just absorbs whatever we throw at them — and the quality is consistently impressive.',
      name: 'Sarah M.',
      role: 'Founder',
      agency: 'GrowthLab Digital',
      initials: 'SM',
    },
    {
      quote:
        'Our dedicated editor now knows each of our main clients better than most freelancers ever did. The continuity is the real product — and our clients feel it.',
      name: 'James K.',
      role: 'Creative Director',
      agency: 'BrandStudio',
      initials: 'JK',
    },
    {
      quote:
        'The biggest win is predictability. I know exactly what it costs, I know exactly when it\'s delivered, and I know exactly what quality to expect. That\'s priceless at our scale.',
      name: 'Lisa T.',
      role: 'Head of Operations',
      agency: 'SocialWave Media',
      initials: 'LT',
    },
  ];

  return (
    <Section className="bg-[#141210] l1-grain overflow-hidden">
      <Container className="py-24 lg:py-28 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Eyebrow center>Testimonials</Eyebrow>
          <h2 className="l1-heading text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#FAF7F2]">
            Agencies Love Working With Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, agency, initials }, i) => (
            <motion.div
              key={name}
              {...fadeUp(0.06 + i * 0.09)}
              className="bg-[#1E1C19] border border-[#2A2725] rounded-2xl p-7 relative overflow-hidden"
              style={{ borderTop: '2px solid #D4A853' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-[#D4A853] fill-[#D4A853]" />
                ))}
              </div>

              <p className="l1-body text-[#FAF7F2]/85 text-[14.5px] italic leading-relaxed mb-7">
                "{quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/25 flex items-center justify-center shrink-0">
                  <span className="l1-heading text-[#D4A853] text-[13px] font-bold">{initials}</span>
                </div>
                <div>
                  <p className="l1-heading text-[#FAF7F2] text-[14px] font-semibold leading-none mb-0.5">
                    {name}
                  </p>
                  <p className="l1-body text-[#A09890] text-[12px]">
                    {role} · {agency}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 9. OBJECTIONS
// ═══════════════════════════════════════════════════════════════════════════════
function Objections() {
  const objections = [
    {
      q: "We already have creatives in-house — why would we outsource?",
      a: "In-house teams are great for strategy and ideation. But at volume, they get stretched thin. We handle the execution overflow — so your team focuses on high-value work, not grunt editing.",
    },
    {
      q: "How will editors learn our brand and client styles?",
      a: "Your dedicated editor goes through a full onboarding with your brand guides, past work, and client briefs. After the first month, they know your accounts inside-out.",
    },
    {
      q: "What if we don't have a consistent volume of work?",
      a: "Our plans are designed for variable workloads. Slow months cost the same — but busy months don't cost more. We flex with your client pipeline.",
    },
    {
      q: "Can we really trust a third party with client-facing work?",
      a: "Every deliverable goes through you before it reaches your client — always. We're invisible to them. You review, approve, and send. Full creative control stays with your team.",
    },
  ];

  return (
    <Section className="bg-[#FAF7F2]">
      <Container className="py-24 lg:py-28">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Eyebrow center>Common Questions</Eyebrow>
          <h2 className="l1-heading text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#141210]">
            "But We Already Have Creatives In-House…"
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {objections.map(({ q, a }, i) => (
            <motion.div
              key={q}
              {...fadeUp(0.06 + i * 0.07)}
              className="bg-white border border-[#E0DDD6] rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4A853]/10 border border-[#D4A853]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#D4A853]" />
                </div>
                <p className="l1-heading text-[#141210] text-[15px] font-bold leading-snug">{q}</p>
              </div>
              <p className="l1-body text-[#6B6560] text-[14px] leading-relaxed pl-[44px]">{a}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 10. FAQ
// ═══════════════════════════════════════════════════════════════════════════════
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      q: "How quickly can we get started?",
      a: "After your onboarding call we match you with a dedicated editor within 24 hours. Most agencies receive their first delivered video within 48 hours of signing up.",
    },
    {
      q: "What types of video do you edit?",
      a: "Everything from short-form social clips (Reels, TikToks, Shorts) to long-form brand films, ad creatives, podcast clips, testimonial videos, and explainer content. If it's a video, we edit it.",
    },
    {
      q: "How does the white-label model work exactly?",
      a: "We deliver files to you — branded however you specify. Your clients see your agency name, your file naming conventions, and your email address on everything. We operate completely in the background.",
    },
    {
      q: "Is there a limit to how many videos we can submit per month?",
      a: "Plans include a defined monthly volume, but we're flexible. If you're having a record month, talk to your account manager — we've never let a high-performing agency hit a wall.",
    },
    {
      q: "What software do your editors use?",
      a: "Adobe Premiere Pro, After Effects, DaVinci Resolve, and CapCut for social-first formats. We can also work inside your preferred project management tools like Frame.io, Notion, or ClickUp.",
    },
    {
      q: "What if we're not happy with a delivered edit?",
      a: "Unlimited revisions are included until you're satisfied — that's a core part of every plan. And if you're ever genuinely unhappy in your first 14 days, we'll refund you in full. No questions asked.",
    },
  ];

  return (
    <Section className="bg-[#F0EDE6]">
      <Container className="py-24 lg:py-28">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Eyebrow center>FAQ</Eyebrow>
          <h2 className="l1-heading text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#141210]">
            Agency Video Editing FAQ
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-2.5">
          {items.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={q}
                {...fadeUp(0.04 + i * 0.05)}
                className="bg-white border border-[#E0DDD6] rounded-xl overflow-hidden"
              >
                <button
                  className="cursor-pointer w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="l1-heading text-[#141210] text-[15px] font-semibold leading-snug">
                    {q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-[#6B6560]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="l1-accordion-content"
                    >
                      <p className="l1-body text-[#6B6560] text-[14px] leading-relaxed px-6 pb-5">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 11. FINAL CTA
// ═══════════════════════════════════════════════════════════════════════════════
function FinalCTA() {
  return (
    <Section className="bg-[#141210] l1-grain overflow-hidden">
      {/* Ambient gold glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-60%, -50%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)',
          top: '30%',
          right: '5%',
          filter: 'blur(60px)',
        }}
      />

      <Container className="py-28 lg:py-36 relative z-10 text-center">
        <motion.div {...fadeUp(0)}>
          <Eyebrow center>Ready to Scale?</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="l1-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#FAF7F2] mb-5 max-w-3xl mx-auto"
        >
          Make Video Your Agency's Strength,{' '}
          <span className="text-[#D4A853]">Not a Stressor</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.14)}
          className="l1-body text-[#A09890] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Join agencies that have turned video into their most profitable service —
          without adding a single in-house editor.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5"
        >
          <GoldButton className="text-base px-8 py-4">
            Talk to Our Agency Team <ArrowRight className="w-4 h-4" />
          </GoldButton>
          <GoldButton ghost className="text-base px-8 py-4">
            Browse Example Videos
          </GoldButton>
        </motion.div>

        <motion.p {...fadeUp(0.24)} className="l1-body text-[#6B6560] text-[12.5px] mb-14">
          No contracts. 14-day money-back guarantee. Setup in under 24 hours.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.28)}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-10"
        >
          {[
            { Icon: Users, label: 'Dedicated Editors' },
            { Icon: Clock, label: '48h Turnaround' },
            { Icon: DollarSign, label: 'Predictable Cost' },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#D4A853]" />
              </div>
              <span className="l1-body text-[#A09890] text-[13px] font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 12. FOOTER
// ═══════════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="bg-[#0E0D0B] border-t border-[#1A1816]">
      <Container className="py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="l1-heading text-[#D4A853] text-lg font-bold tracking-tight">
              beCreatives
            </span>
            <span className="l1-body text-[#A09890] text-[13px]">for Agencies</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="l1-body text-[#6B6560] text-[13px] hover:text-[#A09890] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="l1-body text-[#4A4845] text-[12px]">
            © {new Date().getFullYear()} beCreatives. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function Landing1Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'beCreatives — Video Editing for Agencies';
  }, []);

  return (
    <div className="l1-scope">
      <FontLink />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Objections />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
