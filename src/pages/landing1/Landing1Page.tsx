import { useEffect } from 'react';
import { L1Hero } from './components/L1Hero';
import { L1SocialProof } from './components/L1SocialProof';
import { L1VideoShowcase } from './components/L1VideoShowcase';
import { L1HowItWorks } from './components/L1HowItWorks';
import { L1FinalCTA } from './components/L1FinalCTA';
import { L1Footer } from './components/L1Footer';

/* Inject Cormorant Garamond for editorial headlines */
function FontLink() {
  useEffect(() => {
    const id = 'l1-fonts';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap';
      document.head.appendChild(link);
    }
  }, []);
  return null;
}

export default function Landing1Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'beCreatives — Video Editing for Agencies';
  }, []);

  return (
    <>
      <FontLink />
      <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", color: '#1a1815' }}>
        <L1Hero />
        <L1SocialProof />
        <L1VideoShowcase />
        <L1HowItWorks />
        <L1FinalCTA />
        <L1Footer />
      </div>
    </>
  );
}
