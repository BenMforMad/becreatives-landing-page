/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Repositioning } from './components/Repositioning';
import { Offer } from './components/Offer';
import { IsThisForYou } from './components/IsThisForYou';
import { HowItWorks } from './components/HowItWorks';
import { FearHook } from './components/FearHook';
import { SocialProof } from './components/SocialProof';
import { UpgradePath } from './components/UpgradePath';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-brand-navy bg-brand-light">
      <Hero />
      <Repositioning />
      <Offer />
      <IsThisForYou />
      <HowItWorks />
      <FearHook />
      <SocialProof />
      <UpgradePath />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
