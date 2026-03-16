import { motion } from 'motion/react';
import { CheckCircle2, Clock, CreditCard, PlayCircle } from 'lucide-react';

export function Hero() {
  const showcaseVideos = [
    {
      title: "Luxury Property Tour",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Clinic Promo & Patient Testimonial",
      category: "Medical & Dental",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "High-Converting UGC Ad",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Podcast Clip & Captions",
      category: "Creator",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="relative bg-brand-navy text-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide uppercase text-white/90">Try Us Risk-Free — From $89</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
        >
          The Cheapest Way to Experience<br className="hidden md:block" />
          <span className="text-brand-accent">Professional Video Editing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          One video. One editor. 48 hours. — And if you love it, your $89 goes toward your first month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center mb-16"
        >
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-brand-accent/30 flex items-center gap-2 mb-8 w-full md:w-auto justify-center">
            Get My First Video Edited — $89
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-accent" />
              <span>14-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-accent" />
              <span>48h Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-accent" />
              <span>$89 Applies to Month 1</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Showcase - Mobile Optimized Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full relative"
        >
          {/* Fade edges for scroll indication on desktop */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6">
            {showcaseVideos.map((video, idx) => (
              <div 
                key={idx} 
                className="snap-center shrink-0 w-[260px] md:w-[280px] aspect-[9/16] bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 shadow-2xl"
              >
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-5 right-5 text-left">
                  <div className="inline-block px-3 py-1 bg-brand-accent text-white text-[10px] uppercase tracking-wider font-bold rounded-full mb-3 shadow-sm">
                    {video.category}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{video.title}</h3>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
