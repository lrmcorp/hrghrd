import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Movement', href: '#movement' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reach Us', href: 'mailto:?subject=Hello%20HR%20Group' },
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
    <div id="home" className="relative h-screen w-full overflow-hidden bg-black font-geist">
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

      <main className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        <div id="movement" className="max-w-3xl">
          <p className="mb-4 animate-[fadeSlideUp_0.8s_ease_0.2s_both] text-xs text-white/90 sm:mb-6 sm:text-sm">
            Wellness for every age
          </p>
          <h1 className="animate-[fadeSlideUp_0.8s_ease_0.4s_both] text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Move well.<br />Live fully.<br />Together.
          </h1>
        </div>

        <div id="story">
          <p className="mb-5 max-w-sm animate-[fadeSlideUp_0.8s_ease_0.7s_both] text-sm leading-relaxed text-white/70 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Healthy movement for every body, every age.
          </p>
          <a href="mailto:?subject=Move%20with%20HR%20Group" className="inline-flex animate-[fadeSlideUp_0.8s_ease_0.9s_both] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3">
            Move With Us <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </main>
    </div>
  );
}
