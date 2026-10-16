import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, CircleDot, Dumbbell, Menu, Mountain, Smile, Waves, X } from 'lucide-react';

const videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Movement', href: '#movement' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reach Us', href: 'mailto:?subject=Hello%20HR%20Group' },
];

const movementBrands = [
  {
    name: 'Daily Dose Pilates',
    description: 'A little movement, every day.',
    href: 'https://dailydosepilates.com/',
    Icon: Waves,
    color: 'bg-[#e6e5d9]',
  },
  {
    name: 'Limitless Fitness',
    description: 'Strength starts where you are.',
    href: 'https://limitlessfitness.id/',
    Icon: Dumbbell,
    color: 'bg-[#dce5d9]',
  },
  {
    name: 'Sunrise Padel',
    description: 'Make room for play.',
    href: 'https://sunrisepadel.id/',
    Icon: CircleDot,
    color: 'bg-[#ede1d1]',
  },
  {
    name: 'The Cave',
    description: 'Find your own momentum.',
    Icon: Mountain,
    color: 'bg-[#dce1df]',
  },
  {
    name: 'Little Rollers for Kids',
    description: 'Big joy for little movers.',
    Icon: Smile,
    color: 'bg-[#ebe0df]',
  },
];

function Logo() {
  return (
    <a href="#home" aria-label="HR Group home" className="inline-flex shrink-0 items-center gap-2.5 text-white sm:gap-3">
      <svg viewBox="0 0 92 92" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9" fill="none">
        <path d="M6 4V88M32 88V4H65L88 12V42L58 53M6 68L58 46V19M58 19V88M88 88V61L58 50" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter" />
      </svg>
      <span className="whitespace-nowrap text-base font-light tracking-[0.075em] sm:text-lg">HR GROUP</span>
    </a>
  );
}

export default function App() {
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

        <a href="mailto:?subject=Hello%20HR%20Group" className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:inline-flex">
          Let's Talk
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
          <a href="mailto:?subject=Hello%20HR%20Group" tabIndex={mobileMenuOpen ? 0 : -1} onClick={() => setMobileMenuOpen(false)} className="mt-10 inline-flex w-fit rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105">
            Let's Talk
          </a>
        </nav>
      </div>

      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 animate-[fadeSlideUp_0.8s_ease_0.2s_both] text-xs text-white/90 sm:mb-6 sm:text-sm">
            Wellness for every age
          </p>
          <h1 className="animate-[fadeSlideUp_0.8s_ease_0.4s_both] text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Move well.<br />Live fully.<br />Together.
          </h1>
        </div>

        <div>
          <p className="mb-5 max-w-sm animate-[fadeSlideUp_0.8s_ease_0.7s_both] text-sm leading-relaxed text-white/70 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Healthy movement for every body, every age.
          </p>
          <a href="#movement" className="inline-flex animate-[fadeSlideUp_0.8s_ease_0.9s_both] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3">
            Move With Us <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      </section>

      <main>
        <section id="movement" aria-labelledby="movement-heading" className="movement-viewport h-[100svh] px-4 py-5 sm:px-6 sm:py-7 md:px-12 md:py-9 lg:px-16 lg:py-10">
          <div className="mx-auto flex h-full max-w-[1440px] flex-col">
            <div className="movement-intro mb-3 flex shrink-0 items-end justify-between gap-6 border-b border-[#172018]/20 pb-3 md:mb-5 md:pb-5">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#687368] md:mb-3 md:text-xs">01 / The Movement</p>
                <h2 id="movement-heading" className="text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">Find your way to move.</h2>
              </div>
              <p className="hidden max-w-xs text-sm leading-relaxed text-[#5f695f] md:block lg:text-base">Five ways to find your flow.</p>
            </div>

            <div className="movement-grid grid min-h-0 flex-1 grid-rows-5 gap-2 md:grid-cols-2 md:grid-rows-3 md:gap-3 lg:grid-cols-6 lg:grid-rows-2">
              {movementBrands.map(({ name, description, href, Icon, color }, index) => {
                const Card = href ? 'a' : 'article';
                return (
                <Card
                  key={name}
                  {...(href ? { href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Visit ${name} website (opens in a new tab)` } : {})}
                  className={`movement-card group relative flex min-h-0 flex-col justify-center overflow-hidden rounded-2xl p-3 pr-10 md:rounded-[26px] md:p-4 lg:justify-between lg:p-6 ${color} ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} ${href ? 'cursor-pointer transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#172018]' : ''}`}
                >
                  <div className="movement-card-top hidden items-start justify-between lg:flex">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#546055]">0{index + 1}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#172018]/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 lg:h-11 lg:w-11">
                      <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="max-w-sm text-base font-medium leading-tight tracking-tight sm:text-xl lg:text-3xl">{name}</h3>
                    <p className="movement-card-description mt-0.5 text-xs leading-tight text-[#4f5d50] md:mt-2 md:text-sm">{description}</p>
                    {href && <span className="movement-card-visit mt-4 hidden items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] lg:inline-flex">Visit website <ArrowUpRight size={14} aria-hidden="true" /></span>}
                  </div>
                  {href && <ArrowUpRight size={19} aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 lg:hidden" />}
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-20 hidden h-64 w-64 rounded-full border-[32px] border-white/25 transition-transform duration-700 group-hover:scale-125 lg:block" />
                </Card>
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
      </main>
    </div>
  );
}
