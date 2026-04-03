import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2, 
  BookOpen, 
  Zap, 
  ShieldCheck,
  MonitorPlay,
  Users,
  Clock,
  CloudUpload,
  FolderOpen,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Stop Letting Editing Capacity <span className="text-indigo-600">Limit Your Client Growth</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Plug a dedicated video editing team into your agency so you can say "yes" to more scopes, more formats, and more clients — without adding full-time headcount.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ul className="space-y-4 mb-10 text-left inline-block lg:block">
                {[
                  "You're winning strategy, media, and creative retainers, but production hits a wall at editing.",
                  "Your team is spread across ads, reporting, creative, and client calls — not sitting in timelines all day.",
                  "Send in briefs and raw footage and get fully edited ads, social content, and brand videos back in days.",
                  "One subscription gives your agency predictable, scalable video output across multiple client accounts."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full transition-colors flex items-center justify-center w-full sm:w-auto text-lg shadow-lg shadow-indigo-200">
                  See Agency Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <span className="text-xs text-slate-500 mt-3 text-center lg:text-left max-w-xs">
                  View pricing and typical output for performance, creative, and social agencies.
                </span>
              </div>
              <button className="text-slate-700 hover:text-indigo-600 font-medium py-4 px-6 rounded-full transition-colors flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0 sm:mb-8">
                <Play className="mr-2 h-5 w-5" />
                Watch example client videos
              </button>
            </FadeIn>
          </div>
          <div className="lg:col-span-6 relative">
            <FadeIn delay={0.4}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-200">
                <img 
                  src="https://picsum.photos/seed/agency-office/1200/900" 
                  alt="Modern digital agency office team reviewing video edits" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent mix-blend-multiply"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by Digital, Performance, and Creative Agencies
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale mb-12">
          {/* Placeholder Logos */}
          <div className="text-xl font-bold font-serif">GrowthLab</div>
          <div className="text-xl font-bold tracking-tighter">PerformanceCo</div>
          <div className="text-xl font-bold italic">BrandStudio</div>
          <div className="text-xl font-bold uppercase tracking-widest">SocialWave</div>
        </div>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed">
              "We finally stopped turning down video work because we didn't have enough editors on staff."
            </p>
            <div className="mt-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden mr-3">
                <img src="https://picsum.photos/seed/sarah/100/100" alt="Sarah J." className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Sarah Jenkins</div>
                <div className="text-sm text-slate-500">Founder, GrowthLab</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 order-2 lg:order-1">
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-square lg:aspect-[4/5] bg-slate-200">
                <img 
                  src="https://picsum.photos/seed/stressed-agency/1000/1200?grayscale" 
                  alt="Stressed agency strategist" 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
              </div>
            </FadeIn>
          </div>
          <div className="order-1 lg:order-2">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Your Editing Bottleneck Is Costing You Retainers
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Your clients want more video every quarter: UGC-style ads, shorts, reels, explainers, webinars, YouTube content, you name it. But editing is where your internal capacity breaks.
              </p>
              <ul className="space-y-6">
                {[
                  "Every new video-heavy client means more late nights in Premiere or After Effects.",
                  "Freelancers are inconsistent, disappear mid-project, and don't think in terms of client LTV.",
                  "Hiring a full-time editor per big account kills your margin and adds risk when budgets shift.",
                  "So you either say \"no\" to video in the scope or quietly overwork your team and hope they don't burn out."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              A Dedicated Editing Team Behind Your Agency's Logo
            </h2>
            <p className="text-xl text-slate-600">
              You own the client relationship and strategy. We handle the editing engine that keeps your video deliverables moving.
            </p>
          </FadeIn>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-16">
          <FadeIn delay={0.1}>
            <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">How the subscription works:</h3>
              <ul className="space-y-4">
                {[
                  "You get a predictable, flat-rate editing subscription that your whole agency can tap into.",
                  "We assign one or more dedicated editors who learn your clients, brands, and formats.",
                  "You submit briefs and footage through our platform; we handle cutting, motion, captions, versions, and formats.",
                  "You keep clients, reporting, and creative direction in-house while scaling production without hiring."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-indigo-50 rounded-2xl p-8 h-full border border-indigo-100 mt-8 lg:mt-0">
              <h3 className="text-xl font-semibold text-indigo-900 mb-6">For your agency, that means:</h3>
              <ul className="space-y-4">
                {[
                  "Sell bigger scopes that include video without worrying how you'll fulfill.",
                  "Move from scattered freelancers to one centralized, trackable pipeline.",
                  "Keep brand consistency across clients with stored brand kits and templates.",
                  "Protect margins by trading per-project chaos for predictable monthly costs."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-900/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
            {/* Mockup UI representation */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-slate-400 text-xs font-mono ml-4">Agency Workspace Dashboard</div>
            </div>
            <img 
              src="https://picsum.photos/seed/dashboard-ui/1200/600" 
              alt="Dashboard UI Mockup" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="text-center flex flex-col items-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full transition-colors inline-flex items-center text-lg shadow-lg shadow-indigo-200">
            Get an Agency Editing Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <span className="text-sm text-slate-500 mt-4 max-w-md">
            Tell us your client count and video volume — we'll match you with the right level.
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: <Maximize2 className="h-6 w-6 text-indigo-600" />,
      title: "Take On More Video Without Hiring",
      description: "Add video deliverables to more retainers without adding full-time editors. Your production capacity grows without your payroll exploding."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      title: "Keep Every Brand On-Point",
      description: "We store per-client brand guidelines, assets, and preferences so edits look like they came from your in-house creative team."
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: "Hit Aggressive Launch Timelines",
      description: "Handle sudden campaign pivots and last-minute concepts with a team built to work in queues, not one-off favors."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
      title: "Protect Your Margin on Every Account",
      description: "Swap unpredictable per-project editing costs for a subscription you can bake into retainers and packages."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Agencies Plug beCreatives Into Their Stack
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-slate-800 rounded-2xl p-8 h-full border border-slate-700 hover:border-indigo-500 transition-colors">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Map your clients and formats",
      description: "On a short call, you share your client mix (DTC, SaaS, local, etc.), typical deliverables (ads, reels, YouTube, webinars), and expected monthly volume."
    },
    {
      title: "Set up your client workspaces",
      description: "We create workspaces for each client with their logos, brand colors, fonts, and reference creatives. Your team gets access to submit briefs and footage."
    },
    {
      title: "Submit briefs, we edit",
      description: "Your strategists and account managers drop in briefs, scripts, and raw assets. Our editors handle cutting, motion, captions, sound, and versioning for each platform."
    },
    {
      title: "Review, iterate, and scale",
      description: "You review edits, request changes, and approve. As we learn your clients, edits get faster and more on-point, letting you confidently sell more video into your scopes."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            How Your Agency Works with beCreatives
          </h2>
        </FadeIn>

        <div className="relative mb-20">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 h-full relative">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8 lg:left-1/2 lg:-translate-x-1/2 shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 mt-4 lg:text-center">{step.title}</h3>
                  <p className="text-slate-600 lg:text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="text-center flex flex-col items-center">
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-full transition-colors inline-flex items-center text-lg">
            Talk to Our Agency Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <span className="text-sm text-slate-500 mt-4">
            Get a clear picture of output and turnaround based on your client roster.
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            Built for the Way Modern Agencies Work
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/performance-agency/600/400" 
                  alt="Performance agency media buyer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow bg-slate-50">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Performance agencies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">Constantly test new hooks, angles, and offers in video ads.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">Need fast turnarounds and multiple variations per concept, not one "hero" video.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/creative-studio/600/400" 
                  alt="Creative director storyboarding" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow bg-slate-50">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Creative studios</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">Concept big campaigns and need a reliable execution arm for all video outputs.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">Keep your senior creatives out of timelines and focused on ideas and pitches.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/social-agency/600/400" 
                  alt="Social manager scheduling posts" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow bg-slate-50">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Social & content agencies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">Publish daily content across multiple platforms and clients.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">Turn recorded calls, webinars, and lo-fi footage into polished social assets.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "We tripled the amount of video in our retainers without hiring a single editor. Our team finally focuses on strategy instead of arguing with timelines.",
      name: "Marcus T.",
      title: "Managing Director",
      agency: "Elevate Digital",
      image: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      quote: "Our dedicated editor now knows each of our main clients better than most freelancers ever did. Quality is consistent, and we don't panic when a campaign changes last minute.",
      name: "Elena R.",
      title: "Creative Director",
      agency: "Studio North",
      image: "https://picsum.photos/seed/elena/100/100"
    },
    {
      quote: "The biggest win is predictability. We know what we pay each month and roughly how many edits we can push — budgeting and scoping are way easier.",
      name: "David K.",
      title: "Founder",
      agency: "Scale Partners",
      image: "https://picsum.photos/seed/david/100/100"
    }
  ];

  return (
    <section className="py-24 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            What Agencies Say
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col relative">
                <div className="flex text-yellow-400 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-lg italic mb-8 flex-grow">
                  "{t.quote}"
                </p>
                <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.title}, <span className="font-medium text-indigo-600">{t.agency}</span></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objections() {
  const objections = [
    {
      q: "Are you replacing our designers and editors?",
      a: "No. We handle the repetitive production work so your in-house team can focus on concepts, strategy, and high-impact projects instead of endless cutting and resizing."
    },
    {
      q: "Can you match our clients' styles?",
      a: "Yes. We work from your brand kits, references, and past work to stay on-brand. Over time, your editors become fluent in each client's look and feel."
    },
    {
      q: "How do we keep control over quality?",
      a: "You set the brief, provide examples, review drafts, and request changes. You keep creative direction; we handle execution under your guidance."
    },
    {
      q: "Will managing another vendor slow us down?",
      a: "The platform centralizes requests, assets, and feedback so you're not chasing freelancers across email and chat. Your team sends briefs the same way every time."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            "But We Already Have Creatives In-House..."
          </h2>
        </FadeIn>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-4 aspect-square flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">Stressed Team</div>
                  <div className="text-xs text-slate-500">Juggling freelancers & timelines</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-indigo-500 bg-indigo-50 p-4 aspect-square flex flex-col items-center justify-center text-center transform translate-y-8">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="font-semibold text-indigo-900 mb-1">Organized Pipeline</div>
                  <div className="text-xs text-indigo-700/70">Calm account management</div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div>
            <div className="space-y-8">
              {objections.map((obj, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{obj.q}</h3>
                    <p className="text-slate-600 leading-relaxed">{obj.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      icon: <MonitorPlay className="w-5 h-5" />,
      q: "What kinds of videos can you edit for agencies?",
      a: "Ad creatives, social reels/shorts, UGC-style videos, YouTube videos, webinars, product demos, brand films, and more. If it needs editing, we likely support it."
    },
    {
      icon: <Users className="w-5 h-5" />,
      q: "How many client accounts can we use this for?",
      a: "Plans are designed for multiple accounts. On a call, we'll map your client roster and volume to the right plan so you don't over- or under-buy capacity."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      q: "How fast are typical turnarounds?",
      a: "Most requests are turned around in a few business days, depending on complexity and your queue. You'll always see what's in progress and what's next."
    },
    {
      icon: <CloudUpload className="w-5 h-5" />,
      q: "How do we share assets and feedback?",
      a: "You upload assets and briefs into our platform, then leave time-stamped comments and revision notes directly on the video. No more scattered links and threads."
    },
    {
      icon: <FolderOpen className="w-5 h-5" />,
      q: "Can we get source files if needed?",
      a: "If source files are required for certain clients or campaigns, this can be discussed as part of your plan setup."
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      q: "What if a client changes direction mid-project?",
      a: "You update the brief and priorities in the platform. We adjust the queue with you so your most time-sensitive edits are always at the top."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            Agency Video Editing FAQ
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'border-indigo-200 bg-indigo-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button 
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center">
                    <div className={`mr-4 ${openIndex === i ? 'text-indigo-600' : 'text-slate-400'}`}>
                      {faq.icon}
                    </div>
                    <span className={`font-semibold text-lg ${openIndex === i ? 'text-indigo-900' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>
                  </div>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-0 ml-9 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/agency-success/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Make Video Your Agency's Strength, <span className="text-indigo-400">Not a Stressor</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Give your team a dedicated editing partner so you can sell, plan, and create with confidence — knowing production won't hold you back.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-xl shadow-indigo-900/50 w-full sm:w-auto">
                Talk to Our Agency Team
              </button>
              <span className="text-sm text-indigo-200 mt-3 max-w-xs">
                Share your client list and video volume — we'll show you what we can take off your plate.
              </span>
            </div>
            <button className="text-white hover:text-indigo-300 font-medium py-4 px-6 rounded-full transition-colors flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-0 sm:mb-8 border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm">
              Browse example videos
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-bold text-2xl tracking-tighter mb-4 md:mb-0">
          be<span className="text-indigo-500">Creatives</span>
        </div>
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} beCreatives. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Landing3Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'beCreatives — Agency Video Editing';
  }, []);

  return (
    <div className="landing3-scope min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Simple Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-slate-900 font-bold text-2xl tracking-tighter">
            be<span className="text-indigo-600">Creatives</span>
          </div>
          <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
            Agency Login
          </button>
        </div>
      </header>

      <main>
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
      </main>
      
      <Footer />
    </div>
  );
}
