import { useEffect, useRef } from 'react';
import './landing6.css';

// Static HTML content from the original landing page files.
// This is a hardcoded string of trusted, developer-authored HTML — not user input.
// dangerouslySetInnerHTML is safe here as no dynamic/untrusted data is injected.
const landing6HTML = `
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
        <a href="#benefits" class="nav__link">Benefits</a>
        <a href="#use-cases" class="nav__link">Use Cases</a>
        <a href="#faq" class="nav__link">FAQ</a>
        <a href="#final-cta" class="btn btn--primary btn--sm">Book a Call</a>
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
        <p class="hero__subheadline">A dedicated editing team that plugs into your agency. More video, no new hires.</p>
        <div class="hero__ctas">
          <a href="#final-cta" class="btn btn--primary btn--lg">Talk to Our Agency Team</a>
          <a href="#use-cases" class="btn btn--ghost">See example videos</a>
        </div>
      </div>
    </section>

    <section class="social-proof" id="social-proof">
      <div class="container">
        <p class="social-proof__label">Trusted by Digital, Performance, and Creative Agencies</p>
        <div class="social-proof__logos">
          <span class="logo-placeholder">GrowthLab</span>
          <span class="logo-placeholder">PerformanceCo</span>
          <span class="logo-placeholder">BrandStudio</span>
          <span class="logo-placeholder">SocialWave</span>
        </div>
        <blockquote class="social-proof__quote">
          <p>\u201cWe finally stopped turning down video work because we didn\u2019t have enough editors on staff.\u201d</p>
          <cite>\u2014 Agency Owner, Partner Agency</cite>
        </blockquote>
      </div>
    </section>

    <section class="problem" id="problem">
      <div class="container problem__inner">
        <div class="problem__content">
          <h2 class="section-headline">Your Editing Bottleneck Is Costing You Retainers</h2>
          <p class="problem__lead">Your clients want more video every quarter: UGC-style ads, shorts, reels, explainers, webinars, YouTube content, you name it. But editing is where your internal capacity breaks.</p>
          <ul class="problem__list" role="list">
            <li>Every new video-heavy client means more late nights in Premiere or After Effects.</li>
            <li>Freelancers are inconsistent, disappear mid-project, and don\u2019t think in terms of client LTV.</li>
            <li>Hiring a full-time editor per big account kills your margin and adds risk when budgets shift.</li>
            <li>So you either say \u201cno\u201d to video in the scope or quietly overwork your team and hope they don\u2019t burn out.</li>
          </ul>
        </div>
        <div class="problem__media">
          <img src="/landing6/assets/problem.jpg" alt="Stressed professional overwhelmed at their desk with piling tasks" loading="lazy" width="900" height="450">
        </div>
      </div>
    </section>

    <section class="solution" id="solution">
      <div class="container">
        <div class="solution__header">
          <h2 class="section-headline">A Dedicated Editing Team Behind Your Agency\u2019s Logo</h2>
          <p class="solution__subheadline">You own the client relationship and strategy. We handle the editing engine that keeps your video deliverables moving.</p>
        </div>
        <div class="solution__grid">
          <div class="solution__left">
            <h3 class="solution__card-title">What you get</h3>
            <ul role="list">
              <li>A predictable, flat-rate editing subscription that your whole agency can tap into.</li>
              <li>One or more dedicated editors who learn your clients, brands, and formats.</li>
              <li>Submit briefs and footage through our platform; we handle cutting, motion, captions, versions, and formats.</li>
              <li>Keep clients, reporting, and creative direction in-house while scaling production without hiring.</li>
            </ul>
          </div>
          <div class="solution__right">
            <h3 class="solution__card-title">For your agency, that means\u2026</h3>
            <ul role="list">
              <li>Sell bigger scopes that include video without worrying how you\u2019ll fulfill.</li>
              <li>Move from scattered freelancers to one centralized, trackable pipeline.</li>
              <li>Keep brand consistency across clients with stored brand kits and templates.</li>
              <li>Protect margins by trading per-project chaos for predictable monthly costs.</li>
            </ul>
          </div>
        </div>
        <div class="solution__media">
          <img src="/landing6/assets/solution.png" alt="Agency workspace dashboard showing client folders with video requests in stages" loading="lazy" width="2846" height="1648">
        </div>
        <div class="solution__cta">
          <a href="#final-cta" class="btn btn--primary btn--lg">Let\u2019s Map Your Workflow</a>
          <p class="cta-microcopy">Tell us your client count and video volume \u2014 we\u2019ll match you with the right setup.</p>
        </div>
      </div>
    </section>

    <section class="benefits" id="benefits">
      <div class="container">
        <h2 class="section-headline section-headline--center">Why Agencies Plug beCreatives Into Their Stack</h2>
        <div class="benefits__grid">
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="14" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/><rect x="22" y="4" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/><rect x="22" y="22" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M18 21H22M18 14V7H22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <h3 class="benefit-card__title">Take On More Video Without Hiring</h3>
            <p>Add video deliverables to more retainers without adding full-time editors. Your production capacity grows without your payroll exploding.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="6" width="24" height="28" rx="3" stroke="currentColor" stroke-width="2"/><path d="M14 14h12M14 20h8M14 26h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="30" cy="30" r="6" fill="var(--color-primary)" opacity="0.15"/><path d="M28 30l2 2 4-4" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h3 class="benefit-card__title">Keep Every Brand On-Point</h3>
            <p>We store per-client brand guidelines, assets, and preferences so edits look like they came from your in-house creative team.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 6v8l5-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="2"/><path d="M20 14v6l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h3 class="benefit-card__title">Hit Aggressive Launch Timelines</h3>
            <p>Handle sudden campaign pivots and last-minute concepts with a team built to work in queues, not one-off favors.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 30V18l10-12 10 12v12H10z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M16 30v-8h8v8" stroke="currentColor" stroke-width="2"/><path d="M20 18v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="14" r="2" fill="var(--color-primary)"/></svg>
            </div>
            <h3 class="benefit-card__title">Protect Your Margin on Every Account</h3>
            <p>Swap unpredictable per-project editing costs for a subscription you can bake into retainers and packages.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <h2 class="section-headline section-headline--center">How Your Agency Works with beCreatives</h2>
        <div class="steps">
          <div class="step">
            <div class="step__number">01</div>
            <h3 class="step__title">Map your clients and formats</h3>
            <p>On a short call, you share your client mix (DTC, SaaS, local, etc.), typical deliverables (ads, reels, YouTube, webinars), and expected monthly volume.</p>
          </div>
          <div class="step">
            <div class="step__number">02</div>
            <h3 class="step__title">Set up your client workspaces</h3>
            <p>We create workspaces for each client with their logos, brand colors, fonts, and reference creatives. Your team gets access to submit briefs and footage.</p>
          </div>
          <div class="step">
            <div class="step__number">03</div>
            <h3 class="step__title">Submit briefs, we edit</h3>
            <p>Your strategists and account managers drop in briefs, scripts, and raw assets. Our editors handle cutting, motion, captions, sound, and versioning for each platform.</p>
          </div>
          <div class="step">
            <div class="step__number">04</div>
            <h3 class="step__title">Review, iterate, and scale</h3>
            <p>You review edits, request changes, and approve. As we learn your clients, edits get faster and more on-point, letting you confidently sell more video into your scopes.</p>
          </div>
        </div>
        <div class="steps__cta">
          <a href="#final-cta" class="btn btn--primary btn--lg">Book a Quick Call</a>
          <p class="cta-microcopy">Get a clear picture of output and turnaround based on your client roster.</p>
        </div>
      </div>
    </section>

    <section class="use-cases" id="use-cases">
      <div class="container">
        <h2 class="section-headline section-headline--center">Built for the Way Modern Agencies Work</h2>
        <div class="use-cases__grid">
          <div class="use-case-card">
            <div class="use-case-card__badge">Performance</div>
            <h3 class="use-case-card__title">Performance Agencies</h3>
            <ul role="list">
              <li>Constantly test new hooks, angles, and offers in video ads.</li>
              <li>Need fast turnarounds and multiple variations per concept, not one \u201chero\u201d video.</li>
            </ul>
            <img src="/landing6/assets/usecase-perf.png" alt="Ad performance dashboard with campaign metrics and video thumbnails" loading="lazy" width="2708" height="1876" class="use-case-card__img">
          </div>
          <div class="use-case-card">
            <div class="use-case-card__badge">Creative</div>
            <h3 class="use-case-card__title">Creative Studios</h3>
            <ul role="list">
              <li>Concept big campaigns and need a reliable execution arm for all video outputs.</li>
              <li>Keep your senior creatives out of timelines and focused on ideas and pitches.</li>
            </ul>
          </div>
          <div class="use-case-card">
            <div class="use-case-card__badge">Social</div>
            <h3 class="use-case-card__title">Social &amp; Content Agencies</h3>
            <ul role="list">
              <li>Publish daily content across multiple platforms and clients.</li>
              <li>Turn recorded calls, webinars, and lo-fi footage into polished social assets.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="objections" id="objections">
      <div class="container">
        <h2 class="section-headline section-headline--center">\u201cBut We Already Have Creatives In-House\u2026\u201d</h2>
        <div class="objections__grid">
          <div class="objection-card">
            <h3>Are you replacing our designers and editors?</h3>
            <p>No. We handle the repetitive production work so your in-house team can focus on concepts, strategy, and high-impact projects instead of endless cutting and resizing.</p>
          </div>
          <div class="objection-card">
            <h3>Can you match our clients\u2019 styles?</h3>
            <p>Yes. We work from your brand kits, references, and past work to stay on-brand. Over time, your editors become fluent in each client\u2019s look and feel.</p>
          </div>
          <div class="objection-card">
            <h3>How do we keep control over quality?</h3>
            <p>You set the brief, provide examples, review drafts, and request changes. You keep creative direction; we handle execution under your guidance.</p>
          </div>
          <div class="objection-card">
            <h3>Will managing another vendor slow us down?</h3>
            <p>The platform centralizes requests, assets, and feedback so you\u2019re not chasing freelancers across email and chat. Your team sends briefs the same way every time.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq" id="faq">
      <div class="container container--narrow">
        <h2 class="section-headline section-headline--center">Agency Video Editing FAQ</h2>
        <div class="faq__list">
          <details class="faq-item">
            <summary>What kinds of videos can you edit for agencies?</summary>
            <p>Ad creatives, social reels/shorts, UGC-style videos, YouTube videos, webinars, product demos, brand films, and more. If it needs editing, we likely support it.</p>
          </details>
          <details class="faq-item">
            <summary>How many client accounts can we use this for?</summary>
            <p>Plans are designed for multiple accounts. On a call, we\u2019ll map your client roster and volume to the right plan so you don\u2019t over- or under-buy capacity.</p>
          </details>
          <details class="faq-item">
            <summary>How fast are typical turnarounds?</summary>
            <p>Most requests are turned around in a few business days, depending on complexity and your queue. You\u2019ll always see what\u2019s in progress and what\u2019s next.</p>
          </details>
          <details class="faq-item">
            <summary>How do we share assets and feedback?</summary>
            <p>You upload assets and briefs into our platform, then leave time-stamped comments and revision notes directly on the video. No more scattered links and threads.</p>
          </details>
          <details class="faq-item">
            <summary>Can we get source files if needed?</summary>
            <p>If source files are required for certain clients or campaigns, this can be discussed as part of your plan setup.</p>
          </details>
          <details class="faq-item">
            <summary>What if a client changes direction mid-project?</summary>
            <p>You update the brief and priorities in the platform. We adjust the queue with you so your most time-sensitive edits are always at the top.</p>
          </details>
        </div>
      </div>
    </section>

    <section class="final-cta" id="final-cta">
      <div class="container final-cta__inner">
        <div class="final-cta__content">
          <h2 class="section-headline">Stop Letting Editing Capacity Limit Your Client Growth</h2>
          <p class="final-cta__subheadline">Give your team a dedicated editing partner so you can sell, plan, and create with confidence \u2014 knowing production won\u2019t hold you back.</p>
          <div class="final-cta__actions">
            <a href="#" class="btn btn--primary btn--lg">Talk to Our Agency Team</a>
            <a href="#use-cases" class="btn btn--ghost">See example videos</a>
          </div>
          <p class="cta-microcopy">Share your client list and video volume \u2014 we\u2019ll show you what we can take off your plate.</p>
        </div>
        <div class="final-cta__media">
          <img src="/landing6/assets/final-cta.jpg" alt="Agency team celebrating successful project delivery with high fives in a modern office" loading="lazy" width="1300" height="957">
        </div>
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
        <p>Video editing for agencies that want to grow without the hiring headache.</p>
      </div>
      <div class="footer__links">
        <a href="#how-it-works">How It Works</a>
        <a href="#benefits">Benefits</a>
        <a href="#use-cases">Use Cases</a>
        <a href="#faq">FAQ</a>
      </div>
      <p class="footer__copy">&copy; 2026 beCreatives. All rights reserved.</p>
    </div>
  </footer>
`;

export default function Landing6Page() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'beCreatives \u2013 Video Editing for Agencies';
  }, []);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    // Auto-detect dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

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
      if (window.scrollY > 50) {
        header?.classList.add('header--scrolled');
      } else {
        header?.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll reveal
    const revealEls = root.querySelectorAll(
      '.section-headline, .benefit-card, .step, .use-case-card, .objection-card, .faq-item, .hero__inner, .problem__content, .problem__media, .solution__header, .solution__left, .solution__right, .solution__media, .final-cta__content, .final-cta__media'
    );
    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));

    // Stagger cards
    root.querySelectorAll('.benefits__grid, .steps, .use-cases__grid, .objections__grid').forEach(grid => {
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
      className="landing6-scope"
      dangerouslySetInnerHTML={{ __html: landing6HTML }}
    />
  );
}
