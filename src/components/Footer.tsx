import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { ZenicLogo } from './ZenicLogo';
import { ECOSYSTEM_BRANDS, ZENIC_CORPORATE } from '../config/zenic';
import {
  ZENIC_EASE,
  ZENIC_VIEWPORT,
  staggerContainerVariants,
  staggerCardVariants,
} from '../lib/motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#04050a] py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          {/* Brand Summary */}
          <motion.div variants={staggerCardVariants} className="md:col-span-4 space-y-4">
            <a href="#home" aria-label="Zenic Group Home" className="inline-block">
              <ZenicLogo />
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              A network of independent technology companies building developer platforms, AI
              infrastructure and future-defining products.
            </p>
          </motion.div>

          {/* Ecosystem Column */}
          <motion.div variants={staggerCardVariants} className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Ecosystem
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-300">
              {ECOSYSTEM_BRANDS.map((brand) => (
                <li key={brand.id}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-150 hover:translate-x-0.5 hover:text-white whitespace-nowrap"
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={staggerCardVariants} className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#work' },
                { label: 'Process', href: '#process' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Testimonials', href: '#testimonials' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block transition-all duration-150 hover:translate-x-0.5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={staggerCardVariants} className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${ZENIC_CORPORATE.email}`}
                  aria-label={`Mail us at ${ZENIC_CORPORATE.email}`}
                  className="inline-block transition-all duration-150 hover:translate-x-0.5 hover:text-white"
                >
                  Mail Us
                </a>
              </li>
              <li>
                <a
                  href={ZENIC_CORPORATE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all duration-150 hover:translate-x-0.5 hover:text-white"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="#quotation"
                  className="inline-block transition-all duration-150 hover:translate-x-0.5 hover:text-white"
                >
                  Get a Quote
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="inline-block transition-all duration-150 hover:translate-x-0.5 hover:text-white"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright & Verified Social Links with Divider Reveal */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={ZENIC_VIEWPORT}
          transition={{ duration: 0.7, ease: ZENIC_EASE }}
          className="mt-14 h-px origin-left bg-white/[0.06]"
        />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500 tabular-nums">
            &copy; {currentYear} {ZENIC_CORPORATE.brand} &middot; All rights reserved &middot;{' '}
            <a
              href={ZENIC_CORPORATE.domain}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
            >
              {ZENIC_CORPORATE.domainLabel}
            </a>
          </p>

          <div className="flex items-center gap-2.5">
            <motion.a
              href={`mailto:${ZENIC_CORPORATE.email}`}
              whileTap={{ scale: 0.94 }}
              aria-label="Email Zenic Group"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href={ZENIC_CORPORATE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.94 }}
              aria-label="Message Zenic Group on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href={ZENIC_CORPORATE.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.94 }}
              aria-label="Zenic Group on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
