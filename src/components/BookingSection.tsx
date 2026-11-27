import { useState, useEffect } from 'react';
import {
  Calendar,
  Video,
  Mail,
  Globe,
  CheckCircle2,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CAL_BOOKING_CONFIG } from '../config/zenic';
import {
  ZENIC_EASE,
  ZENIC_SPRING,
  ZENIC_VIEWPORT,
  sectionHeaderVariants,
} from '../lib/motion';

const BOOKING_PERKS = [
  { icon: Calendar, text: 'Choose 15-min or 30-min session' },
  { icon: Video, text: 'Google Meet link auto-generated' },
  { icon: Mail, text: 'Confirmation email sent instantly' },
  { icon: Globe, text: 'Available across all time zones' },
  { icon: CheckCircle2, text: 'No hard sell — just honest advice' },
];

export function BookingSection() {
  const [sessionLength, setSessionLength] = useState<'15' | '30'>('15');
  const [isFrameLoading, setIsFrameLoading] = useState(true);

  const activeSession =
    sessionLength === '15' ? CAL_BOOKING_CONFIG.session15 : CAL_BOOKING_CONFIG.session30;

  useEffect(() => {
    setIsFrameLoading(true);
    const safetyTimer = window.setTimeout(() => setIsFrameLoading(false), 4500);
    return () => window.clearTimeout(safetyTimer);
  }, [sessionLength]);

  return (
    <section id="booking" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Info & Perks */}
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ZENIC_VIEWPORT}
            className="lg:col-span-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                Book a Call
              </span>
            </div>

            <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl [text-wrap:balance]">
              Schedule a free strategy session
            </h2>

            <p className="mt-5 text-base leading-[1.75] text-slate-400">
              Book a focused discovery call with our team. We&apos;ll understand your goals, answer
              questions and outline how Zenic can help — completely free, no commitment needed.
            </p>

            <ul className="mt-8 space-y-3.5">
              {BOOKING_PERKS.map(({ icon: Icon, text }, idx) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={ZENIC_VIEWPORT}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.06,
                    ease: ZENIC_EASE,
                  }}
                  className="group flex items-center gap-3.5 text-sm text-slate-200"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-400/25 bg-indigo-500/10 text-indigo-300 transition-all duration-200 group-hover:scale-105 group-hover:border-indigo-400/50">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Session Selector & Cal.com Embed */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ZENIC_VIEWPORT}
            transition={{ duration: 0.55, delay: 0.1, ease: ZENIC_EASE }}
            className="lg:col-span-7"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
              Choose session length
            </p>

            <div className="grid grid-cols-2 gap-3.5">
              {[CAL_BOOKING_CONFIG.session15, CAL_BOOKING_CONFIG.session30].map((opt) => {
                const isActive = sessionLength === opt.id;
                return (
                  <motion.button
                    key={opt.id}
                    type="button"
                    whileTap={{ scale: 0.985 }}
                    onClick={() => setSessionLength(opt.id)}
                    aria-pressed={isActive}
                    className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border px-4 py-4 text-center transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'border-indigo-400/60 bg-indigo-500/15 shadow-[0_0_24px_-8px_rgba(99,102,241,0.5)]'
                        : 'border-white/[0.08] bg-[#0a0c15] hover:border-white/20'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="booking-session-active"
                        transition={ZENIC_SPRING}
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400"
                      />
                    )}
                    <span
                      className={`font-display text-2xl font-extrabold tabular-nums transition-colors duration-200 ${
                        isActive ? 'text-indigo-300' : 'text-white'
                      }`}
                    >
                      {opt.duration}
                    </span>
                    <span className="mt-1 text-xs font-medium text-slate-400">{opt.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Cal.com Iframe Container */}
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a0c15] shadow-xl">
              <AnimatePresence>
                {isFrameLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#0a0c15]/95 backdrop-blur-sm"
                  >
                    <Loader2 className="h-6 w-6 animate-spin text-indigo-400" aria-hidden="true" />
                    <span className="text-xs font-medium text-slate-400">Loading calendar…</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <iframe
                key={activeSession.url}
                src={activeSession.url}
                title={`Schedule a ${activeSession.duration}-minute discovery call with Zenic Group`}
                className="h-[520px] w-full border-0 bg-[#0a0c15]"
                loading="lazy"
                onLoad={() => setIsFrameLoading(false)}
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>
                Powered by Cal.com &middot; Confirmation email sent automatically to you and our team
              </span>
              <a
                href={activeSession.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-medium text-indigo-300 transition-colors hover:text-white"
              >
                <span>Open calendar in new tab</span>
                <ExternalLink
                  className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
