import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';
import { motion, animate, useInView, useReducedMotion } from 'motion/react';
import { HERO_STATS, type HeroStat } from '../config/zenic';
import { ZENIC_EASE } from '../lib/motion';

function AnimatedStatValue({ stat }: { stat: HeroStat }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const [displayNumber, setDisplayNumber] = useState(
    prefersReducedMotion ? stat.numericTarget : 0
  );

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplayNumber(stat.numericTarget);
      return;
    }

    const controls = animate(0, stat.numericTarget, {
      duration: 1.15,
      ease: ZENIC_EASE,
      onUpdate: (latest) => {
        setDisplayNumber(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, stat.numericTarget]);

  return (
    <span
      ref={ref}
      className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl tabular-nums"
    >
      {displayNumber}
      {stat.suffix}
    </span>
  );
}

const HEADLINE_WORDS = ['Build.', 'Learn.'];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/[0.06]">
      {/* Architectural Grid Reveal */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: ZENIC_EASE }}
        className="pointer-events-none absolute inset-0 bg-architectural-grid"
      />

      {/* Restrained Ambient Lighting & Soft Drift Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.16),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="zenic-orb-drift pointer-events-none absolute -top-24 left-1/2 hidden h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14)_0%,rgba(139,92,246,0.06)_45%,transparent_72%)] lg:block"
      />
      <div
        aria-hidden="true"
        className="zenic-orb-drift-alt pointer-events-none absolute right-[-6%] bottom-[12%] hidden h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] lg:block"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1400px] flex-col justify-between px-5 pb-10 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="mx-auto my-auto flex w-full max-w-6xl flex-col items-center text-center">
          {/* Corporate Ecosystem Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: ZENIC_EASE }}
            className="mb-7 sm:mb-9 text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-indigo-300/90 uppercase"
          >
            CORPORATE TECHNOLOGY ECOSYSTEM &middot; EST. 2024
          </motion.p>

          {/* Main Corporate Headline — Staggered Word Reveal */}
          <h1 className="font-display text-[clamp(2.5rem,5.8vw,5.25rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
            <span className="inline-flex flex-wrap justify-center gap-x-[0.26em] sm:flex-nowrap">
              {HEADLINE_WORDS.map((word, idx) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + idx * 0.08,
                    ease: ZENIC_EASE,
                  }}
                  className="inline-block sm:whitespace-nowrap"
                >
                  {word}
                </motion.span>
              ))}
            </span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.24,
                ease: ZENIC_EASE,
              }}
              className="mt-1 sm:mt-2 block zenic-gradient-text sm:whitespace-nowrap"
            >
              Innovate.
            </motion.span>
          </h1>

          {/* Corporate Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: ZENIC_EASE }}
            className="mt-7 sm:mt-8 max-w-2xl text-base leading-[1.75] text-slate-400 sm:text-lg"
          >
            A network of independent technology companies crafting developer platforms, AI
            infrastructure, and next-generation digital products for ambitious businesses worldwide.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.36, ease: ZENIC_EASE }}
            className="mt-9 sm:mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#quotation"
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-indigo-500 to-violet-500 px-7 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] transition-[transform,filter,box-shadow] duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_34px_-8px_rgba(99,102,241,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 whitespace-nowrap shrink-0"
            >
              <CheckCircle2
                className="h-4 w-4 text-indigo-100 transition-transform duration-200 group-hover:scale-110"
                aria-hidden="true"
              />
              <span>Get a Free Quote</span>
            </motion.a>

            <motion.a
              href="#ecosystem"
              whileTap={{ scale: 0.98 }}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight
                className="h-4 w-4 text-indigo-300 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>

          {/* Editable Corporate Statistics Row with Count-Up */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44, ease: ZENIC_EASE }}
            className="mt-14 w-full max-w-4xl border-t border-white/[0.08] pt-8"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/[0.08]">
              {HERO_STATS.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center px-4 text-center">
                  <AnimatedStatValue stat={stat} />
                  <span className="mt-1.5 text-[11px] font-medium tracking-[0.16em] text-slate-400 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-slate-500">
              9 active ecosystem divisions live across <span className="text-slate-400">*.zenic.in</span> &middot; Historical project metrics configurable in{' '}
              <span className="text-slate-400">zenic.ts</span> pending periodic audit.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator with Subtle Continuous Float */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.54 }}
          className="mt-8 flex flex-col items-center justify-center pt-2"
        >
          <a
            href="#ecosystem"
            className="group inline-flex flex-col items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] text-slate-400 transition-colors hover:text-slate-200 focus-visible:outline-none focus-visible:text-white"
          >
            <span>SCROLL</span>
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
              }
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-colors duration-200 group-hover:border-indigo-400/45 group-hover:bg-indigo-500/10"
            >
              <ArrowDown className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
