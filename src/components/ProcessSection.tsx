import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../config/zenic';
import { ZENIC_EASE, ZENIC_VIEWPORT, sectionHeaderVariants } from '../lib/motion';

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative border-b border-white/[0.06] bg-architectural-grid py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Centered Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
              How We Work
            </span>
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
          </div>

          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl [text-wrap:balance]">
            A proven process. Predictable results.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            From first conversation to launch and beyond — here&apos;s exactly how we deliver every
            time.
          </p>
        </motion.div>

        {/* 4-Step Horizontal Process Grid with Animated Connecting Beam */}
        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={ZENIC_VIEWPORT}
            transition={{ duration: 0.9, delay: 0.15, ease: ZENIC_EASE }}
            className="pointer-events-none absolute top-11 right-[12%] left-[12%] hidden h-px origin-left bg-gradient-to-r from-indigo-500/20 via-indigo-400/60 to-violet-500/25 lg:block"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ZENIC_VIEWPORT}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: ZENIC_EASE,
                }}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#090b13]/92 p-6 sm:p-7 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-indigo-400/45 hover:shadow-[0_20px_40px_-24px_rgba(99,102,241,0.45)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400/35 bg-[#0e1224] font-display text-sm font-bold text-indigo-300 tabular-nums transition-all duration-200 group-hover:scale-105 group-hover:border-indigo-400/70 group-hover:bg-indigo-500/20 group-hover:text-white group-hover:shadow-[0_0_20px_-4px_rgba(99,102,241,0.65)]">
                  {item.step}
                </span>

                <h3 className="mt-7 font-display text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
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
