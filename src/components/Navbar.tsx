import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ZenicLogo } from './ZenicLogo';
import { ZENIC_EASE, ZENIC_SPRING } from '../lib/motion';

const NAV_LINKS = [
  { id: 'ecosystem', label: 'Ecosystem', href: '#ecosystem' },
  { id: 'work', label: 'Projects', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 34,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 180) {
        setActiveSection('');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0.05, 0.2, 0.4],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: ZENIC_EASE }}
      className={`sticky top-0 z-40 w-full transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-[#05060b]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_30px_-14px_rgba(0,0,0,0.85)]'
          : 'bg-[#05060b]/60 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-10">
        {/* Zone 1: Official Brand Wordmark */}
        <a
          href="#home"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Zenic Group Home"
        >
          <ZenicLogo />
        </a>

        {/* Zone 2: Clean Single-Line Nav Links with Active Indicator */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-white ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={ZENIC_SPRING}
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#quotation"
            className="group hidden sm:inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-[#0d101d] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/75 hover:bg-indigo-500/15 hover:shadow-[0_6px_20px_-8px_rgba(99,102,241,0.55)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
          >
            <span>Get Quote</span>
            <ArrowRight
              className="h-3.5 w-3.5 text-indigo-300 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/5 hover:text-white active:scale-95 lg:hidden cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.85 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.85 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[1.5px] w-full origin-left bg-gradient-to-r from-sky-400/75 via-indigo-400/85 to-violet-500/80"
      />

      {/* Responsive Animated Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: ZENIC_EASE }}
            className="overflow-hidden border-t border-white/[0.08] bg-[#070811]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="px-5 pb-5 pt-3">
              <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
                {NAV_LINKS.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.035, ease: ZENIC_EASE }}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-indigo-500/12 text-white'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
                      )}
                    </motion.a>
                  );
                })}
                <motion.a
                  href="#booking"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: NAV_LINKS.length * 0.035,
                    ease: ZENIC_EASE,
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Book a Call
                </motion.a>
              </nav>
              <div className="mt-3 border-t border-white/[0.08] pt-3">
                <a
                  href="#quotation"
                  onClick={handleLinkClick}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
