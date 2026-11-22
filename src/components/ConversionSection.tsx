import { ArrowRight, Mail, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { ZENIC_CONTACT } from '../data/portfolio';

interface ConversionSectionProps {
  onStartProject: () => void;
}

export function ConversionSection({ onStartProject }: ConversionSectionProps) {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0d101f] via-[#090b15] to-[#06070d] px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          {/* Subtle top ambient indigo glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(99,102,241,0.18),transparent)]"
          />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl [text-wrap:balance]">
              Your Business Deserves a{' '}
              <span className="zenic-gradient-text">Better Website.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Have a business idea or an existing website that needs a complete transformation?
              Let&apos;s build a digital experience that represents your brand.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-500 to-violet-500 px-7 text-sm font-semibold text-white shadow-[0_12px_32px_-10px_rgba(99,102,241,0.7)] transition-transform duration-150 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Let&apos;s Build Your Website</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-semibold text-slate-100 transition-colors duration-150 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
              >
                Explore Our Projects
              </a>
            </div>

            {/* Direct Real Zenic Group Contact Channels */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${ZENIC_CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#070911]/80 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                <span>{ZENIC_CONTACT.email}</span>
              </a>

              <a
                href={ZENIC_CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#070911]/80 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                <span>WhatsApp ({ZENIC_CONTACT.phoneDisplay})</span>
              </a>

              <a
                href={ZENIC_CONTACT.domain}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#070911]/80 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
              >
                <Globe className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                <span>{ZENIC_CONTACT.domainLabel}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
