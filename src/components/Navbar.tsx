import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ZenicLogo } from './ZenicLogo';

interface NavbarProps {
  onStartProject: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Work', href: '#work' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onStartProject }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#05060b]/85 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-[#05060b]/60 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md"
          aria-label="Zenic Group Home"
        >
          <ZenicLogo />
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-white whitespace-nowrap shrink-0 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-sky-400 after:to-violet-400 after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-none focus-visible:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onStartProject}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-[#0d101d] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:border-indigo-400/60 hover:bg-indigo-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/5 hover:text-white md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-[#070811]/95 backdrop-blur-xl px-4 pb-5 pt-3 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 border-t border-white/[0.08] pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onStartProject();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
