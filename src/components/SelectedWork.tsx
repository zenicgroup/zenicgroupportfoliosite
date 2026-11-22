import { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOWCASE_PROJECTS, type ProjectGroup, type ShowcaseProject } from '../data/portfolio';
import { ProjectPreviewArt } from './ProjectPreviewArt';

interface SelectedWorkProps {
  onInspectProject: (project: ShowcaseProject) => void;
}

const FILTER_OPTIONS: { id: ProjectGroup; label: string }[] = [
  { id: 'all', label: 'All Showcases (7)' },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
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

          {/* Interactive Category Filter Controls (Functional buttons, clean segmented bar) */}
          <div
            role="tablist"
            aria-label="Filter portfolio demos by industry group"
            className="inline-flex flex-wrap items-center gap-1 self-start rounded-xl border border-white/[0.08] bg-[#0a0c14] p-1"
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
                  className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive
                      ? 'bg-indigo-500/20 text-white border border-indigo-400/30'
                      : 'text-slate-400 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Showcase Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          {visibleProjects.map((project) => {
            const isFullRow = activeGroup === 'all' && project.gridSpan === 'full';
            const colSpanClass =
              activeGroup !== 'all'
                ? visibleProjects.length === 1
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`group/card relative flex overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0c15] p-5 sm:p-6 transition-colors duration-200 hover:border-indigo-400/35 ${
                  isFullRow ? 'flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-8' : 'flex-col justify-between'
                } ${colSpanClass}`}
              >
                {/* Subtle Top Radial Hover Sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                />

                {/* Interactive Website Preview Frame */}
                <button
                  type="button"
                  onClick={() => onInspectProject(project)}
                  aria-label={`Inspect ${project.name} website preview`}
                  className={`relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-xl cursor-pointer ${
                    isFullRow ? 'lg:col-span-7' : ''
                  }`}
                >
                  <ProjectPreviewArt
                    projectId={project.id}
                    domainLabel={project.domainLabel}
                    compact={project.gridSpan === 'compact' && activeGroup === 'all'}
                  />
                  <span className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#05060b]/85 px-2.5 py-1 text-[11px] font-medium text-slate-200 opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover/card:opacity-100">
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
                  </div>

                  {/* Card Footer Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/12 px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:border-indigo-400/70 hover:bg-indigo-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onInspectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Overview</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
