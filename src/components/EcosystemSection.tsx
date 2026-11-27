import {
  GraduationCap,
  Globe,
  Layers,
  Cpu,
  FlaskConical,
  Search,
  Palette,
  Compass,
  Megaphone,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ECOSYSTEM_BRANDS, type EcosystemBrand } from '../config/zenic';
import {
  ZENIC_VIEWPORT,
  sectionHeaderVariants,
  staggerContainerVariants,
  staggerCardVariants,
} from '../lib/motion';

const BRAND_ICON_MAP: Record<EcosystemBrand['id'], LucideIcon> = {
  ai: Cpu,
  web: Globe,
  app: Layers,
  skill: GraduationCap,
  seo: Search,
  ui: Palette,
  ux: Compass,
  digital: Megaphone,
  labs: FlaskConical,
};

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
              Our Sub-Brands
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl [text-wrap:balance]">
            The Zenic Ecosystem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Nine specialised divisions, one unified vision — covering AI, Web, Apps, Education, SEO,
            UI/UX Design, Digital Growth, and Experimental R&amp;D.
          </p>
        </motion.div>

        {/* 9 Sub-Brand Cards (Clean 3x3 desktop grid) */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {ECOSYSTEM_BRANDS.map((brand) => {
            const Icon = BRAND_ICON_MAP[brand.id];

            return (
              <motion.a
                key={brand.id}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerCardVariants}
                whileTap={{ scale: 0.99 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0c15] p-6 sm:p-7 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-indigo-400/45 hover:bg-[#0c0f1b] hover:shadow-[0_20px_42px_-22px_rgba(99,102,241,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {/* Top Hairline Hover Sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Subtle Accent Aura on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${brand.accentColor}22 0%, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0e1222] transition-all duration-200 group-hover:scale-105 group-hover:border-white/20"
                    style={{ color: brand.accentColor }}
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-200 group-hover:scale-105"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-baseline gap-2.5">
                    <h3 className="font-display text-xl font-bold tracking-tight text-white">
                      {brand.name}
                    </h3>
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
                      &middot; {brand.category}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
                    {brand.description}
                  </p>
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-200"
                    style={{ color: brand.accentColor }}
                  >
                    <span>{brand.subdomainLabel}</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
