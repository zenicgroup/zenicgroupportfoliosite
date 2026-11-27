import { useState } from 'react';
import { ArrowUpRight, Maximize2, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOWCASE_PROJECTS, type ProjectGroup, type ShowcaseProject } from '../data/portfolio';
import { ZENIC_CORPORATE } from '../config/zenic';
import { ProjectPreviewArt } from './ProjectPreviewArt';
import {
  ZENIC_EASE,
  ZENIC_SPRING,
  ZENIC_VIEWPORT,
  sectionHeaderVariants,
} from '../lib/motion';

interface SelectedWorkProps {
  onInspectProject: (project: ShowcaseProject) => void;
}

const FILTER_OPTIONS: { id: ProjectGroup; label: string }[] = [
  { id: 'all', label: `All Showcases (${SHOWCASE_PROJECTS.length})` },
  { id: 'hospitality', label: 'Hospitality & Care' },
  { id: 'services', label: 'Fitness & Careers' },
  { id: 'spaces', label: 'Spaces & Real Estate' },
];

export function SelectedWork({ onInspectProject }: SelectedWorkProps) {
  const [activeGroup, setActiveGroup] = useState<ProjectGroup>('all');

  const visibleProjects =
    activeGroup === 'all'
      ? SHOWCASE_PROJECTS
      : SHOWCASE_PROJECTS.filter((project) => project.filterGroup === activeGroup);

  return (
    <section id="work" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                Selected Work
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl [text-wrap:balance]">
              Built for Every Industry.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Explore our collection of industry-specific website experiences, thoughtfully
              designed around the needs of different businesses.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            {/* Top Portfolio Archive CTA */}
            <a
              href={ZENIC_CORPORATE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-[#0d101d] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/75 hover:bg-indigo-500/15 hover:shadow-[0_8px_22px_-8px_rgba(99,102,241,0.55)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
            >
              <Globe className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
              <span>Visit Our Portfolio</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 text-indigo-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            {/* Interactive Category Filter Controls with Smooth Sliding Indicator */}
            <div
              role="tablist"
              aria-label="Filter portfolio demos by industry group"
              className="inline-flex flex-wrap items-center gap-1 self-start rounded-xl border border-white/[0.08] bg-[#0a0c14] p-1 lg:self-end"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = activeGroup === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveGroup(option.id)}
                    className={`relative rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="work-filter-pill"
                        transition={ZENIC_SPRING}
                        className="absolute inset-0 rounded-lg border border-indigo-400/35 bg-indigo-500/20"
                      />
                    )}
                    <span className="relative z-10">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Editorial Showcase Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          {visibleProjects.map((project, idx) => {
            const isOddFilteredLast =
              activeGroup !== 'all' &&
              visibleProjects.length % 2 === 1 &&
              idx === visibleProjects.length - 1;
            const isFullRow =
              (activeGroup === 'all' && project.gridSpan === 'full') || isOddFilteredLast;
            const colSpanClass =
              activeGroup !== 'all'
                ? isOddFilteredLast
                  ? 'lg:col-span-12'
                  : 'lg:col-span-6'
                : project.gridSpan === 'full'
                  ? 'lg:col-span-12'
                  : project.gridSpan === 'wide'
                    ? 'lg:col-span-7'
                    : 'lg:col-span-5';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ZENIC_VIEWPORT}
                transition={{
                  duration: 0.5,
                  delay: Math.min(idx * 0.05, 0.2),
                  ease: ZENIC_EASE,
                }}
                className={`group/card relative flex overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0c15] p-5 sm:p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_22px_45px_-22px_rgba(99,102,241,0.38)] ${
                  isFullRow ? 'flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-8' : 'flex-col justify-between'
                } ${colSpanClass}`}
              >
                {/* Subtle Top Radial Hover Sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                />

                {/* Interactive Website Preview Frame with Gentle Hover Zoom */}
                <button
                  type="button"
                  onClick={() => onInspectProject(project)}
                  aria-label={`Inspect ${project.name} website preview`}
                  className={`relative block w-full overflow-hidden rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer ${
                    isFullRow ? 'lg:col-span-7' : ''
                  }`}
                >
                  <div className="transition-transform duration-500 ease-out will-change-transform group-hover/card:scale-[1.02]">
                    <ProjectPreviewArt
                      projectId={project.id}
                      domainLabel={project.domainLabel}
                      compact={project.gridSpan === 'compact' && activeGroup === 'all'}
                    />
                  </div>
                  <span className="pointer-events-none absolute right-3 bottom-3 inline-flex translate-y-1 items-center gap-1.5 rounded-lg border border-white/15 bg-[#05060b]/85 px-2.5 py-1 text-[11px] font-medium text-slate-200 opacity-0 backdrop-blur-md transition-all duration-200 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                    <Maximize2 className="h-3 w-3 text-indigo-300" aria-hidden="true" />
                    <span>Inspect</span>
                  </span>
                </button>

                {/* Project Metadata & Actions */}
                <div
                  className={`flex flex-1 flex-col justify-between gap-5 ${
                    isFullRow ? 'mt-6 lg:mt-0 lg:col-span-5' : 'mt-6'
                  }`}
                >
                  <div>
                    {/* Clean unboxed metadata (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs font-medium text-indigo-300/85 tabular-nums">
                      <span>{project.index}</span>
                      <span aria-hidden="true" className="text-slate-600">
                        &middot;
                      </span>
                      <span className="text-slate-400">{project.category}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <p className="mt-3 text-[11px] font-medium tracking-wide text-slate-500">
                      {project.techStack.join(' · ')}
                    </p>
                  </div>

                  {/* Card Footer Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/12 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-indigo-400/75 hover:bg-indigo-500/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-indigo-300 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>

                    <button
                      type="button"
                      onClick={() => onInspectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:text-white whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Overview</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom More Works / Full Portfolio Callout Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ZENIC_VIEWPORT}
          transition={{ duration: 0.5, ease: ZENIC_EASE }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/[0.08] bg-[#0a0c15] px-6 py-5 sm:flex-row sm:items-center sm:px-8 sm:py-6"
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-indigo-300/90">
              Full Archive &middot; {ZENIC_CORPORATE.portfolioDomainLabel}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              Explore even more industry websites &amp; live builds
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Browse the complete Zenic Group showcase directory across additional sectors and
              formats.
            </p>
          </div>

          <a
            href={ZENIC_CORPORATE.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-500 to-violet-500 px-6 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(99,102,241,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_32px_-8px_rgba(99,102,241,0.85)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 whitespace-nowrap shrink-0"
          >
            <span>More Works</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
