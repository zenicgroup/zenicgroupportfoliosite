import { ArrowRight, Calendar, Mail, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { ZENIC_CORPORATE } from '../config/zenic';
import { ZENIC_EASE, ZENIC_VIEWPORT } from '../lib/motion';

export function ConversionSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={ZENIC_VIEWPORT}
          transition={{ duration: 0.6, ease: ZENIC_EASE }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0d101f] via-[#090b15] to-[#06070d] px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          {/* Subtle top ambient indigo glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(99,102,241,0.18),transparent)]"
          />

          <div className="relative mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl [text-wrap:balance]">
              Ready to build something{' '}
              <span className="zenic-gradient-text">extraordinary?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Join businesses from India, UK and across the globe who trust Zenic Group to power
              their digital growth.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="#quotation"
                whileTap={{ scale: 0.98 }}
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-500 to-violet-500 px-7 text-sm font-semibold text-white shadow-[0_12px_32px_-10px_rgba(99,102,241,0.7)] transition-[transform,filter,box-shadow] duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_38px_-8px_rgba(99,102,241,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 whitespace-nowrap shrink-0"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>

              <motion.a
                href="#booking"
                whileTap={{ scale: 0.98 }}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
              >
                <Calendar
                  className="h-4 w-4 text-indigo-300 transition-transform duration-200 group-hover:scale-105"
                  aria-hidden="true"
                />
                <span>Book a Discovery Call</span>
              </motion.a>
            </div>

            {/* Direct Real Zenic Group Contact Channels */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ZENIC_VIEWPORT}
              transition={{ duration: 0.45, delay: 0.16, ease: ZENIC_EASE }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href={`mailto:${ZENIC_CORPORATE.email}`}
                aria-label={`Mail us at ${ZENIC_CORPORATE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#070911]/80 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/45 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                <span>Mail Us</span>
              </a>

              <a
                href={ZENIC_CORPORATE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#070911]/80 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/45 hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={ZENIC_CORPORATE.domain}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#070911]/80 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/45 hover:text-white"
              >
                <Globe className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                <span>{ZENIC_CORPORATE.domainLabel}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
