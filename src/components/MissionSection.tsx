import { Zap, PenTool, Coffee, Globe, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { MISSION_PILLARS, type MissionPillar } from '../config/zenic';
import {
  ZENIC_EASE,
  ZENIC_VIEWPORT,
  sectionHeaderVariants,
  staggerContainerVariants,
  staggerCardVariants,
} from '../lib/motion';

const PILLAR_ICON_MAP: Record<MissionPillar['id'], LucideIcon> = {
  build: Zap,
  learn: PenTool,
  innovate: Coffee,
  scale: Globe,
};

export function MissionSection() {
  return (
    <section id="about" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Mission Statement */}
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ZENIC_VIEWPORT}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                Our Mission
              </span>
            </div>

            <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl [text-wrap:balance]">
              We exist to{' '}
              <span className="relative inline-block">
                <span className="zenic-gradient-text">remove barriers</span>
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={ZENIC_VIEWPORT}
                  transition={{ duration: 0.7, delay: 0.2, ease: ZENIC_EASE }}
                  className="absolute right-0 -bottom-1 left-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-sky-400/70 via-indigo-400/80 to-violet-400/70"
                />
              </span>{' '}
              for builders everywhere.
            </h2>

            <div className="mt-7 space-y-4 text-base leading-[1.75] text-slate-400">
              <p>
                Zenic Group was founded on a single belief — that great technology should be
                accessible, powerful and scalable for every developer and creator, not just the
                privileged few with resources.
              </p>
              <p>
                Our ecosystem spans education, development, AI and research — each division
                operating independently, all contributing to a shared mission of democratising
                innovation globally.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Supporting Feature Cards */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ZENIC_VIEWPORT}
            className="lg:col-span-7 space-y-4"
          >
            {MISSION_PILLARS.map((pillar) => {
              const Icon = PILLAR_ICON_MAP[pillar.id];
              return (
                <motion.div
                  key={pillar.id}
                  variants={staggerCardVariants}
                  className="group flex items-start gap-5 rounded-2xl border border-white/[0.08] bg-[#0a0c15] p-6 sm:p-7 transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-[#0c0f1b] hover:shadow-[0_16px_36px_-22px_rgba(99,102,241,0.4)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/25 bg-indigo-500/10 text-indigo-300 transition-all duration-200 group-hover:scale-105 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/18">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
