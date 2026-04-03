import { useEffect } from 'react';
import { L2Hero } from './components/L2Hero';
import { L2SocialProof } from './components/L2SocialProof';
import { L2Problem } from './components/L2Problem';
import { L2Solution } from './components/L2Solution';
import { L2Benefits } from './components/L2Benefits';
import { L2HowItWorks } from './components/L2HowItWorks';
import { L2UseCases } from './components/L2UseCases';
import { L2Testimonials } from './components/L2Testimonials';
import { L2Objections } from './components/L2Objections';
import { L2FAQ } from './components/L2FAQ';
import { L2FinalCTA } from './components/L2FinalCTA';
import { L2Footer } from './components/L2Footer';

export default function Landing2Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'beCreatives — Video Editing for Agencies';
  }, []);

  return (
    <div className="min-h-screen font-sans text-brand-navy bg-brand-light">
      <L2Hero />
      <L2SocialProof />
      <L2Problem />
      <L2Solution />
      <L2Benefits />
      <L2HowItWorks />
      <L2UseCases />
      <L2Testimonials />
      <L2Objections />
      <L2FAQ />
      <L2FinalCTA />
      <L2Footer />
    </div>
  );
}
