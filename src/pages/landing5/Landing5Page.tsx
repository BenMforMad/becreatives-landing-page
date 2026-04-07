import { useEffect, useRef } from 'react';
import './landing5.css';

// Static HTML content from the original landing page files.
// This is a hardcoded string of trusted, developer-authored HTML — not user input.
// dangerouslySetInnerHTML is safe here as no dynamic/untrusted data is injected.
const landing5HTML = `
  <header class="header" id="header">
    <div class="container header__inner">
      <a href="#" class="logo" aria-label="beCreatives Home">
        <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="beCreatives logo">
          <rect x="0" y="4" width="20" height="20" rx="4" fill="var(--color-primary)"/>
          <path d="M5 10L10 14L5 18" stroke="var(--color-text-inverse)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <polygon points="12,10 12,18 18,14" fill="var(--color-text-inverse)"/>
          <text x="26" y="20" font-family="'Clash Grotesk', sans-serif" font-weight="600" font-size="17" fill="currentColor">beCreatives</text>
        </svg>
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="#how-it-works" class="nav__link">How It Works</a>
        <a href="#showreel" class="nav__link">Our Work</a>
        <a href="#cta" class="btn btn--primary btn--sm">Talk to Our Team</a>
      </nav>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main>

    <section class="hero" id="hero">
      <div class="container hero__inner">
        <h1 class="hero__headline">Make Video Your Agency\u2019s Strength, Not a Stressor</h1>
        <p class="hero__subline">A dedicated editing team that plugs into your agency \u2014 so you can take on more video work without hiring.</p>
        <a href="#cta" class="btn btn--primary btn--lg hero__cta">Talk to Our Agency Team</a>
        <p class="hero__microcopy">Share your client list and video volume \u2014 we\u2019ll show you what we can take off your plate.</p>
      </div>
    </section>

    <section class="social-proof" id="social-proof">
      <div class="container">
        <p class="social-proof__label">Trusted by agencies who need video at scale</p>
        <div class="social-proof__logos">
          <span class="logo-placeholder">Agency</span>
          <span class="logo-placeholder">Agency</span>
          <span class="logo-placeholder">Agency</span>
          <span class="logo-placeholder">Agency</span>
          <span class="logo-placeholder">Agency</span>
        </div>
        <blockquote class="social-proof__quote">
          <p>\u201cTestimonial from a real client goes here \u2014 one strong line that speaks to the transformation.\u201d</p>
          <cite>\u2014 Name, Title, Agency</cite>
        </blockquote>
      </div>
    </section>

    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <h2 class="section-headline section-headline--center">How It Works</h2>
        <div class="steps">
          <div class="step">
            <div class="step__number">01</div>
            <h3 class="step__title">Tell us about your clients</h3>
            <p>Share your client mix, typical deliverables, and monthly volume on a short call.</p>
          </div>
          <div class="step">
            <div class="step__number">02</div>
            <h3 class="step__title">We set up your workspaces</h3>
            <p>Each client gets a workspace with their brand assets, fonts, and reference creatives.</p>
          </div>
          <div class="step">
            <div class="step__number">03</div>
            <h3 class="step__title">Submit briefs, we edit</h3>
            <p>Drop in briefs and raw footage. We handle cutting, motion, captions, and versioning.</p>
          </div>
          <div class="step">
            <div class="step__number">04</div>
            <h3 class="step__title">Review and scale</h3>
            <p>Approve edits, request changes, and confidently sell more video into your scopes.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="showreel" id="showreel">
      <div class="container">
        <h2 class="section-headline section-headline--center">See the Work</h2>
        <p class="showreel__sub">A look at what agencies produce with beCreatives behind the scenes.</p>
        <div class="showreel__player" id="video-player">
          <div class="showreel__placeholder" role="button" tabindex="0" aria-label="Play showreel video">
            <img src="/landing5/assets/hero.jpg" alt="Agency video showreel thumbnail" loading="lazy" width="1200" height="675">
            <div class="showreel__play-btn">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="36" fill="rgba(0,0,0,0.55)"/>
                <polygon points="28,22 28,50 52,36" fill="#fff"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="final-cta" id="cta">
      <div class="container final-cta__inner">
        <h2 class="final-cta__headline">Ready to Scale Your Video Output?</h2>
        <p class="final-cta__subline">Share your client list and video volume \u2014 we\u2019ll show you what we can take off your plate.</p>
        <a href="#" class="btn btn--primary btn--lg">Talk to Our Agency Team</a>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <svg width="120" height="24" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="beCreatives">
          <rect x="0" y="4" width="20" height="20" rx="4" fill="var(--color-primary)"/>
          <path d="M5 10L10 14L5 18" stroke="var(--color-text-inverse)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <polygon points="12,10 12,18 18,14" fill="var(--color-text-inverse)"/>
          <text x="26" y="20" font-family="'Clash Grotesk', sans-serif" font-weight="600" font-size="17" fill="currentColor">beCreatives</text>
        </svg>
      </div>
      <p class="footer__copy">&copy; 2026 beCreatives. All rights reserved.</p>
    </div>
  </footer>
`;

export default function Landing5Page() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'beCreatives \u2013 Video Editing for Agencies';
  }, []);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    // Force light theme to match the original design
    root.setAttribute('data-theme', 'light');

    // Mobile nav toggle
    const navToggle = root.querySelector<HTMLButtonElement>('.nav-toggle');
    const nav = root.querySelector<HTMLElement>('.nav');
    const handleToggle = () => {
      if (!navToggle || !nav) return;
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    };
    const handleNavLinkClick = () => {
      nav?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    };
    navToggle?.addEventListener('click', handleToggle);
    nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', handleNavLinkClick));

    // Header scroll effect
    const header = root.querySelector('#header');
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header?.classList.add('header--scrolled');
      } else {
        header?.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll reveal
    const revealEls = root.querySelectorAll(
      '.section-headline, .step, .showreel__player, .social-proof__quote, .final-cta__inner'
    );
    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => observer.observe(el));

    // Stagger steps
    root.querySelectorAll('.steps').forEach(grid => {
      Array.from(grid.children).forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navToggle?.removeEventListener('click', handleToggle);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={scopeRef}
      className="landing5-scope"
      dangerouslySetInnerHTML={{ __html: landing5HTML }}
    />
  );
}
