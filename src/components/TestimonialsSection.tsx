import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { LEGACY_TESTIMONIALS } from '../config/zenic';
import {
  ZENIC_EASE,
  ZENIC_VIEWPORT,
  sectionHeaderVariants,
  staggerContainerVariants,
  staggerCardVariants,
} from '../lib/motion';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Centered Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
              Client Stories
            </span>
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
          </div>

          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl [text-wrap:balance]">
            Trusted by ambitious teams
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Don&apos;t just take our word for it — here&apos;s what the businesses we&apos;ve built
            for have to say.
          </p>
        </motion.div>

        {/* 3 Testimonial Cards */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {LEGACY_TESTIMONIALS.map((item, idx) => (
            <motion.article
              key={item.id}
              variants={staggerCardVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0c15] p-6 sm:p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-indigo-400/35 hover:shadow-[0_20px_42px_-24px_rgba(99,102,241,0.35)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div>
                <div className="flex items-center gap-1" aria-label="5 out of 5 rating">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <motion.span
                      key={starIdx}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={ZENIC_VIEWPORT}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.08 + starIdx * 0.045,
                        ease: ZENIC_EASE,
                      }}
                      className="inline-flex"
                    >
                      <Star
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    </motion.span>
                  ))}
                </div>

                <blockquote className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-7 flex items-center gap-3.5 border-t border-white/[0.06] pt-5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.avatarGradient} font-display text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105`}
                  aria-hidden="true"
                >
                  {item.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Client stories preserved from legacy corporate website archive &mdash; verify client
          endorsement permissions prior to final public launch.
        </p>
      </div>
    </section>
  );
}
