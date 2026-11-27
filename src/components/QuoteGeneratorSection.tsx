import { useState, useEffect, useRef, type FormEvent } from 'react';
import {
  Layout,
  Code2,
  Smartphone,
  Cpu,
  ShoppingBag,
  Settings,
  TrendingUp,
  BarChart2,
  Monitor,
  Building2,
  Lock,
  CreditCard,
  LayoutGrid,
  Terminal,
  FileText,
  Search,
  MessageSquare,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  Send,
  Mail,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { AnimatePresence, motion, animate, useReducedMotion } from 'motion/react';
import {
  QUOTE_SERVICES,
  QUOTE_SCALES,
  QUOTE_FEATURES,
  QUOTE_TIMELINES,
  ZENIC_CORPORATE,
} from '../config/zenic';
import {
  ZENIC_EASE,
  ZENIC_SPRING,
  ZENIC_VIEWPORT,
  sectionHeaderVariants,
} from '../lib/motion';

interface QuoteGeneratorSectionProps {
  preselectedServiceId?: string | null;
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  'web-design': Layout,
  'web-app': Code2,
  'mobile-app': Smartphone,
  'ai-automation': Cpu,
  ecommerce: ShoppingBag,
  custom: Settings,
};

const SCALE_ICONS: Record<string, LucideIcon> = {
  small: TrendingUp,
  medium: BarChart2,
  large: Monitor,
  enterprise: Building2,
};

const FEATURE_ICONS: Record<string, LucideIcon> = {
  auth: Lock,
  payment: CreditCard,
  dashboard: LayoutGrid,
  api: Terminal,
  cms: FileText,
  seo: Search,
  chat: MessageSquare,
  analytics: BarChart3,
};

const STEP_LABELS = [
  { step: 1, label: 'Service' },
  { step: 2, label: 'Scale' },
  { step: 3, label: 'Features' },
  { step: 4, label: 'Your Info' },
  { step: 5, label: 'Summary' },
];

function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function AnimatedCurrency({ value, className = '' }: { value: number; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);
  const currentRef = useRef(value);

  useEffect(() => {
    if (prefersReducedMotion) {
      currentRef.current = value;
      setDisplayValue(value);
      return;
    }

    const from = currentRef.current;
    if (from === value) return;

    const controls = animate(from, value, {
      duration: 0.45,
      ease: ZENIC_EASE,
      onUpdate: (latest) => {
        const rounded = Math.round(latest);
        currentRef.current = rounded;
        setDisplayValue(rounded);
      },
      onComplete: () => {
        currentRef.current = value;
        setDisplayValue(value);
      },
    });

    return () => controls.stop();
  }, [value, prefersReducedMotion]);

  return <span className={`tabular-nums ${className}`}>{formatINR(displayValue)}</span>;
}

export function QuoteGeneratorSection({ preselectedServiceId }: QuoteGeneratorSectionProps) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedScale, setSelectedScale] = useState<string>('medium');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState<string>('1 month');
  const [notes, setNotes] = useState('');

  const [stepError, setStepError] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServices((prev) =>
        prev.includes(preselectedServiceId) ? prev : [...prev, preselectedServiceId]
      );
      setDirection(-1);
      setStep(1);
      setStepError('');
    }
  }, [preselectedServiceId]);

  const goToStep = (nextStep: number) => {
    setDirection(nextStep >= step ? 1 : -1);
    setStep(nextStep);
  };

  const toggleService = (id: string) => {
    setStepError('');
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const serviceObjects = QUOTE_SERVICES.filter((s) => selectedServices.includes(s.id));
  const scaleObject = QUOTE_SCALES.find((s) => s.id === selectedScale) ?? QUOTE_SCALES[0];
  const featureObjects = QUOTE_FEATURES.filter((f) => selectedFeatures.includes(f.id));

  const servicesTotal = serviceObjects.reduce((acc, s) => acc + s.price, 0);
  const scaleTotal = scaleObject ? scaleObject.price : 0;
  const featuresTotal = featureObjects.reduce((acc, f) => acc + f.price, 0);
  const estimatedTotal = servicesTotal + scaleTotal + featuresTotal;

  const handleNext = () => {
    setStepError('');
    if (step === 1 && selectedServices.length === 0) {
      setStepError('Please select at least one service to continue.');
      return;
    }
    if (step === 2 && !selectedScale) {
      setStepError('Please select a project scale to continue.');
      return;
    }
    goToStep(Math.min(5, step + 1));
  };

  const handleInfoSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStepError('');

    if (!fullName.trim()) {
      setStepError('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStepError('Please enter a valid email address.');
      return;
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      setStepError('Please enter a valid phone or WhatsApp number.');
      return;
    }

    goToStep(5);
  };

  const buildQuoteMessage = () => {
    const servicesText =
      serviceObjects.map((s) => `- ${s.name} (${formatINR(s.price)})`).join('\n') || 'None';
    const featuresText =
      featureObjects.length > 0
        ? featureObjects.map((f) => `- ${f.name} (+${formatINR(f.price)})`).join('\n')
        : '- Standard essentials only';

    return [
      'Hello Zenic Group, I generated an estimated project quote on zenic.in:',
      '',
      `Name: ${fullName.trim()}`,
      `Company: ${company.trim() || 'Not specified'}`,
      `Email: ${email.trim()}`,
      `Phone / WhatsApp: ${phone.trim()}`,
      `Timeline: ${timeline}`,
      '',
      'Selected Services:',
      servicesText,
      '',
      `Project Scale: ${scaleObject.name} (${scaleObject.price === 0 ? 'Base' : `+${formatINR(scaleObject.price)}`})`,
      '',
      'Additional Features:',
      featuresText,
      '',
      `Estimated Cost: ${formatINR(estimatedTotal)} (INR — subject to discovery call confirmation)`,
      notes.trim() ? `\nNotes: ${notes.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const whatsappUrl = `${ZENIC_CORPORATE.whatsappHref}?text=${encodeURIComponent(
    buildQuoteMessage()
  )}`;
  const emailUrl = `mailto:${ZENIC_CORPORATE.email}?subject=${encodeURIComponent(
    `Zenic Group Project Quote — ${company.trim() || fullName.trim() || 'New Enquiry'}`
  )}&body=${encodeURIComponent(buildQuoteMessage())}`;

  const progressRatio = (step - 1) / (STEP_LABELS.length - 1);

  return (
    <section id="quotation" className="relative border-b border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
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
              Quote Generator
            </span>
            <span className="h-px w-6 bg-indigo-400/70" aria-hidden="true" />
          </div>

          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl [text-wrap:balance]">
            Build your custom quote
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Answer a few questions and get an instant estimated price. Takes less than 2 minutes.
          </p>
        </motion.div>

        {/* Interactive 5-Step Wizard Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ZENIC_VIEWPORT}
          transition={{ duration: 0.55, delay: 0.08, ease: ZENIC_EASE }}
          className="mx-auto mt-14 max-w-4xl rounded-3xl border border-white/[0.09] bg-gradient-to-b from-[#0b0d19] to-[#070911] p-5 sm:p-10 shadow-2xl"
        >
          {/* Step Progress Bar with Smooth Progress Beam */}
          <div className="relative mb-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[18px] right-8 left-8 hidden h-[2px] bg-white/[0.06] sm:block"
            >
              <motion.div
                initial={false}
                animate={{ scaleX: progressRatio }}
                transition={{ duration: 0.4, ease: ZENIC_EASE }}
                className="h-full origin-left rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500"
              />
            </div>

            <div className="relative flex items-center justify-between gap-2 overflow-x-auto pb-2">
              {STEP_LABELS.map((item) => {
                const isActive = step === item.step;
                const isCompleted = step > item.step;
                return (
                  <div key={item.step} className="relative z-10 flex flex-1 justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        if (item.step < step) {
                          setStepError('');
                          goToStep(item.step);
                        }
                      }}
                      disabled={item.step > step}
                      className={`flex flex-col items-center gap-1.5 text-center transition-opacity duration-200 ${
                        item.step <= step ? 'cursor-pointer' : 'cursor-default opacity-60'
                      }`}
                    >
                      <motion.span
                        animate={{ scale: isActive ? 1.06 : 1 }}
                        transition={ZENIC_SPRING}
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold tabular-nums transition-colors duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_0_22px_rgba(99,102,241,0.6)]'
                            : isCompleted
                              ? 'border border-indigo-400/55 bg-[#0e1430] text-indigo-200'
                              : 'border border-white/12 bg-[#0b0d19] text-slate-500'
                        }`}
                      >
                        {isCompleted ? <Check className="h-4 w-4" aria-hidden="true" /> : item.step}
                      </motion.span>
                      <span
                        className={`text-[11px] font-medium whitespace-nowrap transition-colors duration-200 ${
                          isActive ? 'text-white' : isCompleted ? 'text-indigo-300' : 'text-slate-500'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {stepError && (
              <motion.div
                key={stepError}
                role="alert"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: ZENIC_EASE }}
                className="mb-6 rounded-xl border border-rose-500/35 bg-rose-500/10 px-4 py-3 text-xs font-medium text-rose-200"
              >
                {stepError}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated Step Content Container */}
          <AnimatePresence mode="wait" initial={false}>
            {/* STEP 1: Service Selection */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: direction * 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -14 }}
                transition={{ duration: 0.28, ease: ZENIC_EASE }}
              >
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  What service do you need?
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  Select all that apply — we&apos;ll tailor the quote accordingly.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {QUOTE_SERVICES.map((service) => {
                    const Icon = SERVICE_ICONS[service.id] ?? Layout;
                    const selected = selectedServices.includes(service.id);

                    return (
                      <motion.button
                        key={service.id}
                        type="button"
                        whileTap={{ scale: 0.985 }}
                        onClick={() => toggleService(service.id)}
                        aria-pressed={selected}
                        className={`group relative flex flex-col items-start rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer ${
                          selected
                            ? 'border-indigo-400/70 bg-indigo-500/15 shadow-[0_0_24px_-8px_rgba(99,102,241,0.5)]'
                            : 'border-white/[0.08] bg-white/[0.02] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-200 ${
                              selected
                                ? 'border-indigo-400/50 bg-indigo-500/20 text-indigo-200'
                                : 'border-white/10 bg-[#0d101c] text-indigo-300 group-hover:border-white/20'
                            }`}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>

                          {selected && (
                            <motion.span
                              initial={{ scale: 0.6, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={ZENIC_SPRING}
                              className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white"
                            >
                              <Check className="h-3 w-3" aria-hidden="true" />
                            </motion.span>
                          )}
                        </div>

                        <p className="mt-4 font-display text-base font-bold text-white">
                          {service.name}
                        </p>
                        <p className="mt-1 text-xs font-medium text-indigo-300/90 tabular-nums">
                          {service.priceLabel}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-6">
                  <p className="text-xs text-slate-400">
                    Current selection:{' '}
                    <AnimatedCurrency value={estimatedTotal} className="font-semibold text-white" />
                  </p>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_22px_-6px_rgba(99,102,241,0.65)] cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Project Scale */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: direction * 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -14 }}
                transition={{ duration: 0.28, ease: ZENIC_EASE }}
              >
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  What&apos;s the scale of your project?
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  This helps us estimate the right team size and timeline.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {QUOTE_SCALES.map((scale) => {
                    const Icon = SCALE_ICONS[scale.id] ?? Monitor;
                    const selected = selectedScale === scale.id;

                    return (
                      <motion.button
                        key={scale.id}
                        type="button"
                        whileTap={{ scale: 0.985 }}
                        onClick={() => {
                          setStepError('');
                          setSelectedScale(scale.id);
                        }}
                        aria-pressed={selected}
                        className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer ${
                          selected
                            ? 'border-indigo-400/70 bg-indigo-500/15 shadow-[0_0_24px_-8px_rgba(99,102,241,0.5)]'
                            : 'border-white/[0.08] bg-white/[0.02] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0d101c] text-indigo-300">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-2.5">
                            <div className="flex items-baseline gap-2.5">
                              <p className="font-display text-base font-bold text-white">
                                {scale.name}
                              </p>
                              <span className="text-xs font-medium text-indigo-300 tabular-nums">
                                {scale.price === 0 ? 'Included' : `+${formatINR(scale.price)}`}
                              </span>
                            </div>
                            {selected && (
                              <motion.span
                                initial={{ scale: 0.6, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={ZENIC_SPRING}
                                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white"
                              >
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </motion.span>
                            )}
                          </div>
                          <p className="mt-1 text-xs text-slate-400">{scale.subtitle}</p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-6">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => goToStep(1)}
                    className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] cursor-pointer"
                  >
                    <ArrowLeft
                      className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span>Back</span>
                  </motion.button>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-xs text-slate-400">
                      Estimate:{' '}
                      <AnimatedCurrency value={estimatedTotal} className="font-semibold text-white" />
                    </span>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_22px_-6px_rgba(99,102,241,0.65)] cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Features */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: direction * 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -14 }}
                transition={{ duration: 0.28, ease: ZENIC_EASE }}
              >
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  Which features do you need?
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  Select all relevant features for your project (optional).
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {QUOTE_FEATURES.map((feature) => {
                    const Icon = FEATURE_ICONS[feature.id] ?? Lock;
                    const selected = selectedFeatures.includes(feature.id);

                    return (
                      <motion.button
                        key={feature.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleFeature(feature.id)}
                        aria-pressed={selected}
                        className={`relative flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                          selected
                            ? 'border-indigo-400/70 bg-indigo-500/15 shadow-[0_0_20px_-8px_rgba(99,102,241,0.45)]'
                            : 'border-white/[0.08] bg-white/[0.02] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <Icon className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                          {selected && (
                            <motion.span
                              initial={{ scale: 0.6, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={ZENIC_SPRING}
                              className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-white"
                            >
                              <Check className="h-2.5 w-2.5" aria-hidden="true" />
                            </motion.span>
                          )}
                        </div>
                        <p className="mt-3 font-display text-sm font-bold text-white">
                          {feature.name}
                        </p>
                        <p className="mt-0.5 text-xs font-medium text-indigo-300/85 tabular-nums">
                          {feature.priceLabel}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-6">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => goToStep(2)}
                    className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] cursor-pointer"
                  >
                    <ArrowLeft
                      className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span>Back</span>
                  </motion.button>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-xs text-slate-400">
                      Estimate:{' '}
                      <AnimatedCurrency value={estimatedTotal} className="font-semibold text-white" />
                    </span>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_22px_-6px_rgba(99,102,241,0.65)] cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Customer Info */}
            {step === 4 && (
              <motion.form
                key="step-4"
                onSubmit={handleInfoSubmit}
                noValidate
                initial={{ opacity: 0, x: direction * 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -14 }}
                transition={{ duration: 0.28, ease: ZENIC_EASE }}
              >
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  Almost done — tell us about you
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  We&apos;ll prepare your detailed quote summary right away.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-medium text-slate-300">
                      Full Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#070912] px-3.5 text-sm text-white placeholder:text-slate-500 transition-[border-color,box-shadow] duration-150 focus:border-indigo-400 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.16)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-company"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Business / Company
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name (optional)"
                      className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#070912] px-3.5 text-sm text-white placeholder:text-slate-500 transition-[border-color,box-shadow] duration-150 focus:border-indigo-400 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.16)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Email Address *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#070912] px-3.5 text-sm text-white placeholder:text-slate-500 transition-[border-color,box-shadow] duration-150 focus:border-indigo-400 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.16)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 or +44 xxxxxxxx"
                      className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#070912] px-3.5 text-sm text-white placeholder:text-slate-500 transition-[border-color,box-shadow] duration-150 focus:border-indigo-400 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.16)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="quote-timeline"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Preferred Timeline
                  </label>
                  <select
                    id="quote-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#070912] px-3.5 text-sm text-white transition-[border-color,box-shadow] duration-150 focus:border-indigo-400 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.16)] focus:outline-none"
                  >
                    {QUOTE_TIMELINES.map((tl) => (
                      <option key={tl} value={tl}>
                        {tl}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <label htmlFor="quote-notes" className="block text-xs font-medium text-slate-300">
                    Additional Notes
                  </label>
                  <textarea
                    id="quote-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us more about your vision or any portfolio demo you liked..."
                    className="mt-1.5 w-full rounded-xl border border-white/12 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-[border-color,box-shadow] duration-150 focus:border-indigo-400 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.16)] focus:outline-none"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-6">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => goToStep(3)}
                    className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] cursor-pointer"
                  >
                    <ArrowLeft
                      className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span>Back</span>
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_22px_-6px_rgba(99,102,241,0.65)] cursor-pointer"
                  >
                    <span>Review Quote</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </motion.form>
            )}

            {/* STEP 5: Quote Summary & WhatsApp Send */}
            {step === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, x: direction * 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -14 }}
                transition={{ duration: 0.3, ease: ZENIC_EASE }}
              >
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  Your Estimated Quote
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  Review your itemized breakdown and send your quote request directly to our team.
                </p>

                {/* Estimated Cost Banner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.05, ease: ZENIC_EASE }}
                  className="mt-6 rounded-2xl border border-indigo-400/35 bg-gradient-to-br from-indigo-500/15 via-[#0c1024] to-[#080a14] p-6 text-center"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-indigo-300 uppercase">
                    Estimated Project Cost
                  </p>
                  <p className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    <AnimatedCurrency value={estimatedTotal} />
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Estimate only — final scope &amp; fixed pricing confirmed after our discovery
                    call &middot; Prices in INR
                  </p>
                </motion.div>

                {/* Itemized Breakdown */}
                <div className="mt-6 divide-y divide-white/[0.07] rounded-2xl border border-white/[0.08] bg-[#070912]">
                  {serviceObjects.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between px-5 py-3.5 text-sm"
                    >
                      <span className="text-slate-200">Service &middot; {service.name}</span>
                      <span className="font-semibold text-white tabular-nums">
                        {formatINR(service.price)}
                      </span>
                    </div>
                  ))}

                  <div className="flex items-center justify-between px-5 py-3.5 text-sm">
                    <span className="text-slate-200">
                      Project Scale &middot; {scaleObject.name}
                    </span>
                    <span className="font-semibold text-white tabular-nums">
                      {scaleObject.price === 0 ? 'Included' : `+${formatINR(scaleObject.price)}`}
                    </span>
                  </div>

                  {featureObjects.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center justify-between px-5 py-3.5 text-sm"
                    >
                      <span className="text-slate-200">Feature &middot; {feature.name}</span>
                      <span className="font-semibold text-white tabular-nums">
                        +{formatINR(feature.price)}
                      </span>
                    </div>
                  ))}

                  <div className="flex flex-wrap items-center justify-between gap-2 bg-white/[0.02] px-5 py-3.5 text-xs text-slate-400">
                    <span>
                      Prepared for <strong className="text-slate-200">{fullName}</strong>
                      {company ? ` (${company})` : ''}
                    </span>
                    <span>Timeline: {timeline}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col-reverse items-center justify-between gap-3 border-t border-white/[0.07] pt-6 sm:flex-row">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => goToStep(4)}
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] sm:w-auto cursor-pointer"
                  >
                    <ArrowLeft
                      className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span>Edit Details</span>
                  </motion.button>

                  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <motion.a
                      href={emailUrl}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.09] whitespace-nowrap"
                    >
                      <Mail className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                      <span>Send via Email</span>
                    </motion.a>

                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 whitespace-nowrap"
                    >
                      <Send
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                      <span>Send Quote via WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
