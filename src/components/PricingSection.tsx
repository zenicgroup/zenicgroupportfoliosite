import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PRICING_PLANS, type PricingPlan } from '../config/zenic';
import {
  ZENIC_EASE,
  ZENIC_SPRING,
  ZENIC_VIEWPORT,
  sectionHeaderVariants,
} from '../lib/motion';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billingMode, setBillingMode] = useState<'monthly' | 'perProject'>('monthly');

  return (
    <section id="pricing" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Centered Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ZENIC_VIEWPORT}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
              Transparent Pricing
            </span>
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
          </div>

          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl [text-wrap:balance]">
            Plans that scale with you
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            No hidden fees. No nasty surprises. Every plan includes dedicated support from the
            Zenic team.
          </p>

          {/* Functional Monthly / Per Project Toggle with Smooth Sliding Pill */}
          <div
            role="group"
            aria-label="Pricing billing cadence"
            className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/12 bg-[#0a0c16] p-1"
          >
            {(
              [
                { id: 'monthly', label: 'Monthly' },
                { id: 'perProject', label: 'Per Project' },
              ] as const
            ).map((option) => {
              const isActive = billingMode === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setBillingMode(option.id)}
                  aria-pressed={isActive}
                  className={`relative rounded-full px-5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pricing-billing-pill"
                      transition={ZENIC_SPRING}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const activePrice = billingMode === 'monthly' ? plan.monthly : plan.perProject;
            const isPopular = Boolean(plan.popular);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ZENIC_VIEWPORT}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: ZENIC_EASE,
                }}
                className={`group relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 ${
                  isPopular
                    ? 'border-indigo-400/50 bg-gradient-to-b from-[#0f1328] via-[#0b0d1b] to-[#080a13] shadow-[0_24px_50px_-28px_rgba(99,102,241,0.45)] hover:border-indigo-400/75'
                    : 'border-white/[0.08] bg-[#0a0c15] hover:border-white/25 hover:shadow-[0_20px_44px_-28px_rgba(99,102,241,0.3)]'
                }`}
              >
                {isPopular && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/75 to-transparent"
                  />
                )}

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                    {isPopular && (
                      <span className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase whitespace-nowrap shadow-[0_4px_14px_-4px_rgba(99,102,241,0.6)]">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <p className="mt-1.5 text-sm text-slate-400">{plan.tagline}</p>

                  {/* Dynamic Price Display with Zero-CLS Height Lock */}
                  <div className="mt-7 min-h-[4.75rem]">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={`${plan.id}-${billingMode}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2, ease: ZENIC_EASE }}
                      >
                        <div className="flex items-baseline gap-1">
                          {activePrice.currency && (
                            <span className="font-display text-2xl font-bold text-slate-200">
                              {activePrice.currency}
                            </span>
                          )}
                          <span className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl tabular-nums">
                            {activePrice.amount}
                          </span>
                          {activePrice.unit && (
                            <span className="text-sm font-medium text-slate-400">
                              {activePrice.unit}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-xs text-slate-500">{activePrice.note}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="my-7 h-px bg-white/[0.07]" />

                  <ul className="space-y-3.5">
                    {plan.features.map((feat) => (
                      <li
                        key={feat.label}
                        className={`flex items-center gap-3 text-sm ${
                          feat.included ? 'text-slate-200' : 'text-slate-500 line-through'
                        }`}
                      >
                        {feat.included ? (
                          <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                        ) : (
                          <X className="h-4 w-4 shrink-0 text-slate-600" aria-hidden="true" />
                        )}
                        <span>{feat.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectPlan(plan)}
                    className={`inline-flex h-11 w-full items-center justify-center rounded-xl px-5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.65)] hover:brightness-110 hover:shadow-[0_12px_28px_-6px_rgba(99,102,241,0.8)]'
                        : 'border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.08]'
                    }`}
                  >
                    {plan.ctaLabel}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
