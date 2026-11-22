import { useState, useEffect, type FormEvent } from 'react';
import { X, ArrowRight, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { INDUSTRIES, ZENIC_CONTACT } from '../data/portfolio';

interface ProjectBriefModalProps {
  isOpen: boolean;
  initialIndustry?: string;
  onClose: () => void;
}

export function ProjectBriefModal({
  isOpen,
  initialIndustry = '',
  onClose,
}: ProjectBriefModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState(initialIndustry || 'Healthcare & Hospitals');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialIndustry) {
      setIndustry(initialIndustry);
    }
  }, [initialIndustry]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError('Please enter your name so we know how to address you.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  const composedSubject = encodeURIComponent(
    `Website Project Enquiry — ${businessName.trim() || industry}`
  );
  const composedBody = encodeURIComponent(
    `Hi Zenic Group,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nBusiness: ${businessName.trim() || 'Not specified'}\nIndustry: ${industry}\n\nProject Details:\n${notes.trim() || 'Looking to build a professional website for our business.'}`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brief-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={resetAndClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/12 bg-[#090b13] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
              Start Your Project
            </p>
            <h3
              id="brief-modal-title"
              className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white"
            >
              Tell Us About Your Website
            </h3>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close project enquiry form"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-slate-300 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-indigo-400/35 bg-indigo-500/15 text-indigo-300">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h4 className="mt-4 font-display text-xl font-bold text-white">
              Your Project Brief Is Ready
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Send your prepared enquiry directly to Zenic Group via email or WhatsApp to start
              right away.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${ZENIC_CONTACT.email}?subject=${composedSubject}&body=${composedBody}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-sm font-semibold text-white transition-all hover:brightness-110 whitespace-nowrap"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Send via Email</span>
              </a>

              <a
                href={`${ZENIC_CONTACT.whatsappHref}?text=${composedBody}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.09] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                <span>Send on WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs font-medium text-slate-400 underline-offset-4 hover:text-white hover:underline cursor-pointer"
            >
              Edit brief details
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2.5 text-xs font-medium text-rose-200"
              >
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="brief-name" className="block text-xs font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  id="brief-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Sharma"
                  className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#0d101c] px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="brief-email" className="block text-xs font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  id="brief-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#0d101c] px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="brief-business"
                  className="block text-xs font-medium text-slate-300"
                >
                  Business Name (Optional)
                </label>
                <input
                  id="brief-business"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Your company name"
                  className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#0d101c] px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="brief-industry"
                  className="block text-xs font-medium text-slate-300"
                >
                  Industry
                </label>
                <select
                  id="brief-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-xl border border-white/12 bg-[#0d101c] px-3.5 text-sm text-white focus:border-indigo-400 focus:outline-none"
                >
                  {INDUSTRIES.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="Other / Custom Industry">Other / Custom Industry</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="brief-notes" className="block text-xs font-medium text-slate-300">
                Project Goals or Demo Reference
              </label>
              <textarea
                id="brief-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share what kind of website you need or which demo inspired you..."
                className="mt-1.5 w-full rounded-xl border border-white/12 bg-[#0d101c] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-white/[0.08] pt-4 sm:flex-row">
              <p className="text-xs text-slate-500">
                Direct contact: <span className="text-slate-300">{ZENIC_CONTACT.email}</span>
              </p>
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-sm font-semibold text-white transition-all hover:brightness-110 sm:w-auto whitespace-nowrap cursor-pointer"
              >
                <span>Prepare Enquiry</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
