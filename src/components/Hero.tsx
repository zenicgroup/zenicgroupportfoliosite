import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onStartProject: () => void;
}

export function Hero({ onStartProject }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] bg-architectural-grid"
    >
      {/* Restrained editorial radial vignette and subtle top indigo atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.14),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.06),transparent_45%)]"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-4 pb-10 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Unboxed clean eyebrow — zero pill enclosure, zero decorative pulsing dot */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-indigo-300/90 uppercase"
          >
            DIGITAL EXPERIENCES &middot; BUILT FOR BUSINESS
          </motion.p>

          {/* Oversized editorial headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,6.2vw,5.25rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white [text-wrap:balance]"
          >
            Your Business.
            <span className="mt-1 block">
              Our{' '}
              <span className="zenic-gradient-text">Digital Craft.</span>
            </span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            We design and develop professional websites that help businesses establish their
            digital presence, showcase their services and grow with confidence.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-500 to-violet-500 px-7 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] transition-transform duration-150 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 whitespace-nowrap shrink-0"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-semibold text-slate-100 transition-all duration-150 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Build Your Website</span>
            </button>
          </motion.div>
        </div>

        {/* Minimal Hero Footer Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 flex flex-col items-center justify-center pt-6"
        >
          <a
            href="#work"
            className="group inline-flex flex-col items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-slate-400 transition-colors hover:text-slate-200 focus-visible:outline-none focus-visible:text-white"
          >
            <span>EXPLORE OUR INDUSTRY SHOWCASES</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-transform duration-200 group-hover:translate-y-0.5 group-hover:border-indigo-400/40">
              <ArrowDown className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
