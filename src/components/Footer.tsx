import { Mail, MessageCircle, Globe } from 'lucide-react';
import { ZenicLogo } from './ZenicLogo';
import { SHOWCASE_PROJECTS, ZENIC_CONTACT } from '../data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#04050a] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" aria-label="Zenic Group Home">
              <ZenicLogo />
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Designing and developing industry-specific websites that help businesses establish a
              credible digital presence and grow with confidence.
            </p>
          </div>

          {/* Portfolio Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Portfolio
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#home" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="transition-colors hover:text-white">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#industries" className="transition-colors hover:text-white">
                  Industries
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Live Demo Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Showcases
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SHOWCASE_PROJECTS.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${ZENIC_CONTACT.email}`}
                  className="transition-colors hover:text-white"
                >
                  {ZENIC_CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={ZENIC_CONTACT.phoneHref}
                  className="transition-colors hover:text-white tabular-nums"
                >
                  {ZENIC_CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={ZENIC_CONTACT.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {ZENIC_CONTACT.domainLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Action Icons */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500 tabular-nums">
            &copy; {currentYear} {ZENIC_CONTACT.brand} &middot; All rights reserved &middot;{' '}
            <a
              href={ZENIC_CONTACT.domain}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
            >
              {ZENIC_CONTACT.domainLabel}
            </a>
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${ZENIC_CONTACT.email}`}
              aria-label="Email Zenic Group"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-colors hover:border-indigo-400/40 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={ZENIC_CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Zenic Group on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-colors hover:border-indigo-400/40 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={ZENIC_CONTACT.domain}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit zenic.group"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-colors hover:border-indigo-400/40 hover:text-white"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
