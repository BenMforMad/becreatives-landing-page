import { useEffect } from 'react';
import { L2Hero } from './components/L2Hero';
import { L2SocialProof } from './components/L2SocialProof';
import { L2VideoShowcase } from './components/L2VideoShowcase';
import { L2HowItWorks } from './components/L2HowItWorks';
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
      <L2VideoShowcase />
      <L2HowItWorks />
      <L2FinalCTA />
      <L2Footer />
    </div>
  );
}
