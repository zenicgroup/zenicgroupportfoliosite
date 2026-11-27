import {
  HeartPulse,
  Utensils,
  Dumbbell,
  Compass,
  PawPrint,
  GraduationCap,
  Scale,
  Globe,
  HardHat,
  Package,
  Building2,
  Code2,
  ArrowUpRight,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';
import { INDUSTRIES, type IndustryItem } from '../data/portfolio';
import { ZENIC_EASE, ZENIC_VIEWPORT, sectionHeaderVariants } from '../lib/motion';

interface IndustriesSectionProps {
  onSelectIndustry: (industryName: string) => void;
}

const ICON_MAP: Record<IndustryItem['iconName'], LucideIcon> = {
  'heart-pulse': HeartPulse,
  utensils: Utensils,
  dumbbell: Dumbbell,
  compass: Compass,
  'paw-print': PawPrint,
  'graduation-cap': GraduationCap,
  scale: Scale,
  globe: Globe,
  'hard-hat': HardHat,
  package: Package,
  building: Building2,
  code: Code2,
};

export function IndustriesSection({ onSelectIndustry }: IndustriesSectionProps) {
  return (
    <section id="industries" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Sticky Editorial Intro */}
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ZENIC_VIEWPORT}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                  Industries
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
                One Vision. Multiple Industries.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Every sector speaks a different visual language and serves a different customer
                journey. We craft tailored websites engineered specifically for your industry.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectIndustry('Other / Custom Industry')}
                  className="group inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/10 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/70 hover:bg-indigo-500/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap cursor-pointer"
                >
                  <span>Discuss Your Sector</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 text-indigo-300 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Architectural Hairline Directory */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 divide-y divide-white/[0.07] border-y border-white/[0.07] sm:grid-cols-2 sm:divide-y-0 sm:border-y-0">
              {INDUSTRIES.map((industry, index) => {
                const Icon = ICON_MAP[industry.iconName];
                return (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={ZENIC_VIEWPORT}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(index * 0.03, 0.25),
                      ease: ZENIC_EASE,
                    }}
                    className="group relative flex flex-col justify-between gap-3 border-white/[0.07] p-6 transition-colors duration-200 hover:bg-white/[0.025] sm:border-b sm:odd:border-r"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#0b0e19] text-indigo-300 transition-all duration-200 group-hover:scale-105 group-hover:border-indigo-400/45 group-hover:text-indigo-200">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>

                        {industry.demoUrl && (
                          <a
                            href={industry.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/demo inline-flex items-center gap-1 text-xs font-medium text-indigo-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline whitespace-nowrap shrink-0"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight
                              className="h-3.5 w-3.5 transition-transform duration-150 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        )}
                      </div>

                      <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-white">
                        {industry.name}
                      </h3>

                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {industry.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
