import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4';
const publicEmail = 'office@hrgroup.id';
const formRecipient = 'office@lrmcorporation.com';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Movement', href: '#movement' },
  { label: 'Our Story', href: '#story' },
];

const movementBrands = [
  {
    name: 'Daily Dose Pilates',
    href: 'https://dailydosepilates.com/',
    logoDomain: 'dailydosepilates.com',
    description: 'Mindful Pilates for strength, balance, and everyday movement.',
  },
  {
    name: 'Limitless Fitness',
    href: 'https://limitlessfitness.id/',
    logoDomain: 'limitlessfitness.id',
    description: 'Strength training and coaching for your next level.',
  },
  {
    name: 'Sunrise Padel',
    href: 'https://sunrisepadel.id/',
    logoDomain: 'sunrisepadel.id',
    description: 'Padel courts connecting people through play.',
  },
  {
    name: 'The Cave',
    href: 'https://thecave.id/',
    logoDomain: 'thecave.id',
    description: 'Boxing, Muay Thai, and conditioning with purpose.',
    logoClassName: 'drop-shadow-[0_1px_1px_rgba(23,32,24,0.8)]',
  },
  {
    name: 'Little Rollers for Kids',
    logoSrc: '/images/little-rollers.png',
    description: 'Playful movement building confident, active kids.',
  },
];

function BrandLogo({ name, domain, src, className = '' }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <div className="flex h-[clamp(64px,12vw,160px)] w-[85%] items-center justify-center sm:w-[75%]">
      {imageAvailable && (src || domain) ? (
        <img
          src={src || `https://www.google.com/s2/favicons?domain=${domain}&sz=256`}
          alt={`${name} logo`}
          loading="eager"
          className={`h-auto w-auto max-h-full max-w-full shrink-0 object-contain ${className}`}
          onError={() => setImageAvailable(false)}
        />
      ) : (
        <h3 className="text-[clamp(10px,1.5vw,18px)] font-semibold leading-tight">{name}</h3>
      )}
    </div>
  );
}

function Logo({ href = '#home' }) {
  return (
    <a href={href} aria-label="HR Group home" className="inline-flex shrink-0 items-center gap-2.5 text-white sm:gap-3">
      <svg viewBox="0 0 92 92" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9" fill="none">
        <path d="M6 4V88M32 88V4H65L88 12V42L58 53M6 68L58 46V19M58 19V88M88 88V61L58 50" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter" />
      </svg>
      <span className="whitespace-nowrap text-base font-light tracking-[0.075em] sm:text-lg">HR GROUP</span>
    </a>
  );
}

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[#f5f4ef] font-geist text-[#172018]">
      <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute h-full w-full object-cover object-[70%_center]"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35" />

      <header className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-10 lg:gap-14">
          <Logo />
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex lg:gap-9">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <a href="#contact" className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:inline-flex">
          Reach Us
        </a>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white transition-transform active:scale-90 md:hidden"
        >
          <Menu size={25} className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
          <X size={25} className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'}`} />
        </button>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileMenuOpen ? 'h-screen opacity-100' : 'pointer-events-none h-0 opacity-0'}`}
      >
        <nav aria-label="Mobile navigation" className={`flex h-full flex-col justify-center px-8 transition-all delay-100 duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col items-start gap-6">
            {links.map((link) => (
              <a key={link.label} href={link.href} tabIndex={mobileMenuOpen ? 0 : -1} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium text-white/90 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" tabIndex={mobileMenuOpen ? 0 : -1} onClick={() => setMobileMenuOpen(false)} className="mt-10 inline-flex w-fit rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105">
            Reach Us
          </a>
        </nav>
      </div>

      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        <div className="flex max-w-3xl flex-1 flex-col justify-center md:block md:flex-none">
          <p className="mb-4 animate-[fadeSlideUp_0.8s_ease_0.2s_both] text-xs text-white/90 sm:mb-6 sm:text-sm">
            Wellness for every age
          </p>
          <h1 className="animate-[fadeSlideUp_0.8s_ease_0.4s_both] text-[clamp(3rem,14vw,4.75rem)] font-medium leading-[0.98] tracking-tight text-white md:text-6xl md:leading-[1.1] lg:text-7xl">
            Move well.<br />Live fully.<br />Together.
          </h1>
        </div>

        <div>
          <p className="mb-5 max-w-sm animate-[fadeSlideUp_0.8s_ease_0.7s_both] text-sm leading-relaxed text-white/70 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Healthy movement for every body, every age.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#movement" className="inline-flex animate-[fadeSlideUp_0.8s_ease_0.9s_both] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3">
              Move With Us <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={`mailto:${publicEmail}`} className="animate-[fadeSlideUp_0.8s_ease_1.1s_both] text-xs text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white sm:text-sm">{publicEmail}</a>
          </div>
        </div>
      </div>
      </section>

      <main>
        <section id="movement" aria-labelledby="movement-heading" className="px-4 py-10 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mb-6 flex items-end justify-between gap-6 border-b border-[#172018]/20 pb-4 sm:mb-8 md:pb-6">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#687368] md:mb-3 md:text-xs">01 / The Movement</p>
                <h2 id="movement-heading" className="text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">Find your way to move.</h2>
              </div>
              <p className="hidden max-w-xs text-sm leading-relaxed text-[#5f695f] md:block lg:text-base">Five ways to find your flow.</p>
            </div>

            <div className="grid w-full grid-cols-5 items-start gap-2 sm:gap-5 lg:gap-8">
              {movementBrands.map(({ name, href, logoDomain, logoSrc, logoClassName, description }) => {
                const Brand = href ? 'a' : 'article';
                return (
                  <Brand
                    key={name}
                    {...(href ? { href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Visit ${name} website (opens in a new tab)` } : {})}
                    className={`flex min-w-0 flex-col items-center text-center ${href ? 'transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#172018]' : ''}`}
                  >
                    <BrandLogo name={name} domain={logoDomain} src={logoSrc} className={logoClassName} />
                    <p className="mt-4 max-w-[190px] text-[clamp(9px,1.2vw,14px)] leading-relaxed text-[#5f695f] sm:mt-5">{description}</p>
                  </Brand>
                );
              })}
            </div>
          </div>
        </section>

        <section id="story" aria-labelledby="story-heading" className="bg-[#19231c] px-6 py-20 text-white sm:py-24 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">02 / Our Story</p>
              <h2 id="story-heading" className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">A story in motion.</h2>
            </div>
            <p className="text-base text-white/60 md:pb-1 md:text-lg">More of our story, coming soon.</p>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}

function ContactSection() {
  const messageSent = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('sent') === '1';

  return (
      <section id="contact" aria-labelledby="contact-heading" className="bg-[#e9ede4] px-6 py-16 sm:py-20 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#617060]">03 / Reach Us</p>
            <h2 id="contact-heading" className="max-w-xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Let’s move<br />together.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#59665a]">Have a question or an idea? Send us a note and our team will get back to you.</p>
            <a href={`mailto:${publicEmail}`} className="mt-8 inline-block text-sm font-medium text-[#172018] underline decoration-[#172018]/40 underline-offset-4 hover:decoration-[#172018]">{publicEmail}</a>
          </div>

          <div>
            {messageSent && (
              <p role="status" className="mb-6 rounded-xl border border-[#90a38e] bg-white/70 px-5 py-4 text-sm text-[#172018]">Thank you. Your message has been sent.</p>
            )}
            <form action={`https://formsubmit.co/${formRecipient}`} method="POST" className="space-y-5">
              <input type="hidden" name="_subject" value="New message from HR Group website" />
              <input type="hidden" name="_next" value="https://hr-group-wellness.almond-flint-4094.chatgpt.site/?sent=1#contact" />
              <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="absolute -left-[10000px]" aria-hidden="true" />
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} className="w-full rounded-xl border border-[#b7c3b4] bg-white/70 px-4 py-3.5 text-base outline-none transition-colors placeholder:text-[#7a8679] focus:border-[#172018] focus:ring-2 focus:ring-[#172018]/15" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="w-full rounded-xl border border-[#b7c3b4] bg-white/70 px-4 py-3.5 text-base outline-none transition-colors placeholder:text-[#7a8679] focus:border-[#172018] focus:ring-2 focus:ring-[#172018]/15" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Your message</label>
                <textarea id="contact-message" name="message" rows={5} required maxLength={5000} className="w-full resize-y rounded-xl border border-[#b7c3b4] bg-white/70 px-4 py-3.5 text-base outline-none transition-colors placeholder:text-[#7a8679] focus:border-[#172018] focus:ring-2 focus:ring-[#172018]/15" placeholder="Tell us what’s on your mind" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#172018] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172018]">
                Send Message <ArrowRight size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
  );
}

export default function App() {
  return <HomePage />;
}
