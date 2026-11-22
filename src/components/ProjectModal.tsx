import { useEffect } from 'react';
import { X, ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import type { ShowcaseProject } from '../data/portfolio';
import { ProjectPreviewArt } from './ProjectPreviewArt';

interface ProjectModalProps {
  project: ShowcaseProject | null;
  onClose: () => void;
  onRequestSimilar: (industry: string) => void;
}

export function ProjectModal({ project, onClose, onRequestSimilar }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/12 bg-[#090b13] p-5 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <p className="text-xs font-medium text-indigo-300/90 tabular-nums">
              {project.index} &middot; {project.category}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-slate-300 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Enlarged Website Preview */}
        <div className="mt-6">
          <ProjectPreviewArt projectId={project.id} domainLabel={project.domainLabel} />
        </div>

        {/* Details & Action Split */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-7 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
              About This Showcase
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
            <ul className="space-y-2 pt-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
            <div>
              <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Live Showcase URL
              </p>
              <p className="mt-1 truncate text-sm font-medium text-indigo-300">
                {project.domainLabel}
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-semibold text-white transition-all hover:brightness-110 whitespace-nowrap"
              >
                <span>Open Live Demo</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestSimilar(project.category);
                }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.08] whitespace-nowrap cursor-pointer"
              >
                <span>Build Something Similar</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
