import { motion } from 'motion/react';
import { APPROACH_STEPS } from '../data/portfolio';

export function ApproachSection() {
  return (
    <section
      id="about"
      className="relative border-b border-white/[0.06] bg-architectural-grid py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
              Our Approach
            </span>
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl [text-wrap:balance]">
            From Business Idea to Digital Presence.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            At Zenic Group, every website is shaped through a focused four-stage process built for
            clarity, speed, and long-term business confidence.
          </p>
        </div>

        {/* 4-Step Horizontal Process with Connecting Lines */}
        <div className="relative mt-16">
          {/* Desktop Horizontal Connecting Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-11 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-indigo-500/10 via-indigo-400/40 to-violet-500/10 lg:block"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#090b13]/90 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-indigo-400/35"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400/35 bg-[#0e1224] font-display text-sm font-bold text-indigo-300 tabular-nums">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
