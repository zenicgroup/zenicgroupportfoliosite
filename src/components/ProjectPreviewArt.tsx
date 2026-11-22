import {
  UtensilsCrossed,
  Clock,
  CalendarCheck,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Dumbbell,
  Flame,
  Trophy,
  Compass,
  Sparkles,
  PawPrint,
  HeartHandshake,
  Lock,
  Terminal,
  Briefcase,
  Layers,
  Building2,
  Ruler,
} from 'lucide-react';

interface ProjectPreviewArtProps {
  projectId: string;
  domainLabel: string;
  compact?: boolean;
}

export function ProjectPreviewArt({
  projectId,
  domainLabel,
  compact = false,
}: ProjectPreviewArtProps) {
  return (
    <div className="group/preview relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#080a12] shadow-2xl">
      {/* Minimalist Browser Top Chrome */}
      <div className="flex h-8 shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#0d101b] px-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
          <Lock className="h-2.5 w-2.5 text-slate-500" aria-hidden="true" />
          <span className="truncate max-w-[160px] sm:max-w-none">{domainLabel}</span>
        </div>
        <div className="w-8" aria-hidden="true" />
      </div>

      {/* Rendered Website Canvas */}
      <div
        className={`relative flex-1 overflow-hidden transition-transform duration-500 ease-out group-hover/card:scale-[1.018] ${
          compact ? 'min-h-[230px]' : 'min-h-[260px] sm:min-h-[300px]'
        }`}
      >
        {projectId === 'restro' && <RestroPreview />}
        {projectId === 'hospital' && <HospitalPreview />}
        {projectId === 'gym' && <GymPreview />}
        {projectId === 'interior' && <InteriorPreview />}
        {projectId === 'pets' && <PetsPreview />}
        {projectId === 'itcareer' && <ItCareerPreview />}
        {projectId === 'hic' && <HicPreview />}
      </div>
    </div>
  );
}

function RestroPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#16130f] via-[#1c1812] to-[#110e0b] p-4 sm:p-5 text-[#f7f2e8]">
      {/* Mini Nav */}
      <div className="flex items-center justify-between border-b border-amber-200/10 pb-2.5">
        <span className="font-display text-[11px] font-bold tracking-[0.12em] text-amber-200 uppercase">
          The Olive Table
        </span>
        <div className="flex items-center gap-3 text-[9px] text-stone-300">
          <span>Menu</span>
          <span>Reservations</span>
          <span className="rounded border border-amber-400/50 px-2 py-0.5 text-amber-300">
            Book Table
          </span>
        </div>
      </div>

      {/* Editorial Centerpiece */}
      <div className="my-3 grid grid-cols-12 gap-3 items-center">
        <div className="col-span-7 space-y-2">
          <p className="text-[9px] tracking-[0.18em] text-amber-300/80 uppercase">
            Contemporary Dining
          </p>
          <h4 className="font-display text-base sm:text-lg font-bold leading-snug text-[#faf5eb]">
            Handcrafted Cuisine &amp; Seasonal Flavors.
          </h4>
          <p className="text-[10px] leading-relaxed text-stone-400">
            Curated tasting menus, wood-fired specialties, and intimate evening dining.
          </p>
        </div>

        {/* Plated Culinary Geometric Art */}
        <div className="col-span-5 flex items-center justify-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-amber-200/20 bg-gradient-to-b from-stone-800/80 to-stone-900 shadow-inner">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/30 bg-[#231e16]">
              <UtensilsCrossed className="h-6 w-6 text-amber-300" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Preview Row */}
      <div className="grid grid-cols-2 gap-2 border-t border-amber-200/10 pt-2.5">
        <div className="rounded-md bg-white/[0.03] px-2.5 py-1.5">
          <p className="text-[9px] font-semibold text-amber-200">Chef&apos;s Tasting</p>
          <p className="text-[9px] text-stone-400">Herb-roasted sea bass &amp; citrus glaze</p>
        </div>
        <div className="flex items-center justify-between rounded-md bg-white/[0.03] px-2.5 py-1.5">
          <div>
            <p className="text-[9px] font-semibold text-amber-200">Evening Service</p>
            <p className="text-[9px] text-stone-400">Tue – Sun · 18:00 – 23:00</p>
          </div>
          <Clock className="h-3.5 w-3.5 text-amber-300/70 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function HospitalPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#f4f8fb] p-4 sm:p-5 text-slate-900">
      {/* Clean Medical Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
        <div className="flex items-center gap-1.5">
          <HeartPulse className="h-4 w-4 text-teal-600" aria-hidden="true" />
          <span className="text-[11px] font-bold tracking-tight text-slate-900">
            Madies Healthcare
          </span>
        </div>
        <div className="flex items-center gap-3 text-[9px] font-medium text-slate-600">
          <span>Departments</span>
          <span>Doctors</span>
          <span className="rounded-md bg-teal-600 px-2 py-0.5 font-semibold text-white">
            Book Visit
          </span>
        </div>
      </div>

      {/* Hero Row */}
      <div className="my-3 space-y-1.5">
        <p className="text-[9px] font-semibold tracking-wider text-teal-700 uppercase">
          Multi-Specialty Medical Center
        </p>
        <h4 className="font-display text-base sm:text-lg font-bold leading-snug text-slate-900">
          Compassionate Care, Modern Diagnostics.
        </h4>
        <p className="text-[10px] leading-relaxed text-slate-600">
          Dedicated medical teams across cardiology, internal medicine, and 24/7 emergency care.
        </p>
      </div>

      {/* Department Grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: Stethoscope, title: 'Cardiology', sub: 'Specialist Care' },
          { icon: ShieldCheck, title: 'Diagnostics', sub: 'Imaging & Lab' },
          { icon: CalendarCheck, title: 'Appointments', sub: 'Same-Day Visits' },
        ].map(({ icon: Icon, title, sub }) => (
          <div
            key={title}
            className="rounded-lg border border-slate-200 bg-white p-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          >
            <Icon className="mb-1 h-3.5 w-3.5 text-teal-600" aria-hidden="true" />
            <p className="text-[10px] font-semibold text-slate-900">{title}</p>
            <p className="text-[9px] text-slate-500">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GymPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#0b0b0e] via-[#130d12] to-[#08080a] p-4 sm:p-5 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <span className="font-display text-[11px] font-extrabold tracking-[0.12em] text-white uppercase">
          FORGE ATHLETICS
        </span>
        <div className="flex items-center gap-3 text-[9px] font-medium text-zinc-300">
          <span>Programmes</span>
          <span>Coaches</span>
          <span className="rounded bg-rose-500 px-2 py-0.5 font-bold text-white">
            Join Now
          </span>
        </div>
      </div>

      {/* Athletic Centerpiece */}
      <div className="my-3 grid grid-cols-12 gap-3 items-center">
        <div className="col-span-12 sm:col-span-8 space-y-2">
          <p className="text-[9px] font-bold tracking-[0.2em] text-rose-400 uppercase">
            Strength &amp; Conditioning Club
          </p>
          <h4 className="font-display text-lg sm:text-xl font-extrabold uppercase leading-none tracking-tight text-white">
            Build Strength.{' '}
            <span className="text-rose-400">Become More.</span>
          </h4>
          <p className="text-[10px] leading-relaxed text-zinc-400 max-w-sm">
            Olympic lifting zones, personal coaching programmes, and recovery suites designed for
            consistent progression.
          </p>
        </div>

        <div className="hidden sm:flex col-span-4 flex-col gap-1.5 rounded-lg border border-rose-500/25 bg-rose-500/[0.07] p-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-300">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" />
            <span>PERFORMANCE TRACKS</span>
          </div>
          <div className="space-y-1 text-[9px] text-zinc-300">
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>Hypertrophy</span>
              <span className="text-rose-300">Coach-Led</span>
            </div>
            <div className="flex justify-between">
              <span>Metabolic HIIT</span>
              <span className="text-rose-300">Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: Dumbbell, label: 'Free Weights' },
          { icon: Trophy, label: 'Personal Training' },
          { icon: Flame, label: 'Memberships' },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5"
          >
            <Icon className="h-3.5 w-3.5 text-rose-400 shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-medium text-zinc-200 truncate">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InteriorPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#ebe6de] p-4 sm:p-5 text-stone-900">
      {/* Minimal Architectural Header */}
      <div className="flex items-center justify-between border-b border-stone-900/10 pb-2.5">
        <span className="font-display text-[11px] font-bold tracking-[0.14em] text-stone-900 uppercase">
          Sorel Spaces
        </span>
        <div className="flex items-center gap-3 text-[9px] font-medium text-stone-600">
          <span>Projects</span>
          <span>Studio</span>
          <span className="border-b border-stone-900 pb-0.5 text-stone-900">Enquire</span>
        </div>
      </div>

      {/* Split Editorial Architectural Frame */}
      <div className="my-3 grid grid-cols-12 gap-3 items-stretch">
        <div className="col-span-12 sm:col-span-6 flex flex-col justify-center space-y-2">
          <p className="text-[9px] font-semibold tracking-[0.18em] text-stone-500 uppercase">
            Interior Architecture
          </p>
          <h4 className="font-display text-lg font-bold leading-tight text-stone-900">
            Calm, Tactile Spaces Built Around Light.
          </h4>
          <p className="text-[10px] leading-relaxed text-stone-600">
            Residential residences, hospitality lounges, and bespoke material curation.
          </p>
        </div>

        {/* Architectural Spatial Elevation Illustration */}
        <div className="col-span-12 sm:col-span-6 relative overflow-hidden rounded-lg border border-stone-900/10 bg-gradient-to-br from-[#d9d0c3] to-[#c4b8a6] p-3">
          <div className="flex h-full min-h-[112px] flex-col justify-between">
            <div className="flex items-center justify-between text-[9px] font-medium text-stone-700">
              <span>RESIDENCE ARCHIVE</span>
              <Compass className="h-3.5 w-3.5 text-stone-700" aria-hidden="true" />
            </div>
            {/* Minimal architectural arch & horizon */}
            <svg viewBox="0 0 180 70" className="w-full" aria-hidden="true">
              <rect x="10" y="10" width="46" height="52" rx="23" fill="#efeae2" opacity="0.7" />
              <rect x="66" y="18" width="104" height="44" rx="4" fill="#a89882" opacity="0.45" />
              <line x1="10" y1="62" x2="170" y2="62" stroke="#57534e" strokeWidth="1" />
            </svg>
            <div className="flex items-center justify-between text-[9px] text-stone-700">
              <span>Limestone &amp; Walnut</span>
              <span>Portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spatial Categories */}
      <div className="flex items-center justify-between border-t border-stone-900/10 pt-2 text-[9px] font-medium text-stone-600">
        <span>Residential Design</span>
        <span>&middot;</span>
        <span>Commercial Interiors</span>
        <span>&middot;</span>
        <span>Bespoke Millwork</span>
      </div>
    </div>
  );
}

function PetsPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#f2f7f4] to-[#e6f0ea] p-4 sm:p-5 text-emerald-950">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-emerald-900/10 pb-2.5">
        <div className="flex items-center gap-1.5">
          <PawPrint className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
          <span className="text-[11px] font-bold tracking-tight text-emerald-950">
            Clover &amp; Paws
          </span>
        </div>
        <div className="flex items-center gap-2 text-[9px] font-medium text-emerald-800">
          <span>Grooming</span>
          <span className="rounded-full bg-emerald-700 px-2.5 py-0.5 font-semibold text-white">
            Book Care
          </span>
        </div>
      </div>

      {/* Center Content */}
      <div className="my-3 space-y-1.5">
        <p className="text-[9px] font-semibold tracking-wider text-emerald-700 uppercase">
          Pet Shop &amp; Veterinary Care
        </p>
        <h4 className="font-display text-base sm:text-lg font-bold leading-snug text-emerald-950">
          Gentle Grooming &amp; Everyday Pet Wellness.
        </h4>
        <p className="text-[10px] leading-relaxed text-emerald-900/75">
          Tailored spa sessions, wellness checkups, and curated nutrition for dogs and cats.
        </p>
      </div>

      {/* Service Tiles */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-emerald-900/10 bg-white/80 p-2">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-semibold text-emerald-950">Full Grooming</p>
            <p className="text-[9px] text-emerald-800/70">Coat &amp; Spa Care</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-emerald-900/10 bg-white/80 p-2">
          <HeartHandshake className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-semibold text-emerald-950">Vet Checkups</p>
            <p className="text-[9px] text-emerald-800/70">Preventive Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItCareerPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#090d1f] via-[#0e1430] to-[#080b18] p-4 sm:p-5 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-indigo-500 text-white">
            <Terminal className="h-3 w-3" aria-hidden="true" />
          </div>
          <span className="font-display text-[11px] font-bold tracking-tight text-white">
            ITCareer.Co
          </span>
        </div>
        <div className="flex items-center gap-3 text-[9px] font-medium text-slate-300">
          <span>Tracks</span>
          <span>Mentorship</span>
          <span className="rounded bg-indigo-500 px-2 py-0.5 font-semibold text-white">
            Get Started
          </span>
        </div>
      </div>

      {/* Center Content */}
      <div className="my-3 space-y-2">
        <p className="text-[9px] font-semibold tracking-[0.18em] text-indigo-300 uppercase">
          Tech Career Acceleration
        </p>
        <h4 className="font-display text-base sm:text-lg font-bold leading-snug text-white">
          Structured Pathways Into High-Growth IT Roles.
        </h4>
        <p className="text-[10px] leading-relaxed text-slate-400">
          Hands-on role tracks across cloud engineering, full-stack development, and career
          readiness.
        </p>
      </div>

      {/* Role Tracks */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-indigo-400/20 bg-indigo-500/[0.08] p-2">
          <Briefcase className="h-3.5 w-3.5 text-indigo-300 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-semibold text-white">Career Roadmaps</p>
            <p className="text-[9px] text-slate-400">Cloud, Dev &amp; Data</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <Layers className="h-3.5 w-3.5 text-sky-300 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-semibold text-white">Skill Labs</p>
            <p className="text-[9px] text-slate-400">Project-Based</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HicPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#141413] via-[#1c1b18] to-[#0f0f0e] p-4 sm:p-5 text-stone-100">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b border-amber-200/15 pb-2.5">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
          <span className="font-display text-[11px] font-bold tracking-[0.14em] text-white uppercase">
            HIC Infrastructure
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-stone-300">
          <span>Projects</span>
          <span>Facade Systems</span>
          <span className="rounded bg-amber-500 px-2.5 py-0.5 font-semibold text-stone-950">
            Consult Now
          </span>
        </div>
      </div>

      {/* Hero Split */}
      <div className="my-3 grid grid-cols-12 gap-3 items-center">
        <div className="col-span-12 sm:col-span-7 space-y-2">
          <p className="text-[9px] font-semibold tracking-[0.18em] text-amber-400 uppercase">
            Real Estate &amp; Structural Engineering
          </p>
          <h4 className="font-display text-lg sm:text-xl font-bold leading-tight text-white">
            Elevating Spaces With Structural Excellence.
          </h4>
          <p className="text-[10px] leading-relaxed text-stone-400 max-w-sm">
            Shaping commercial infrastructure, architectural facade solutions, and enduring real
            estate developments.
          </p>
        </div>

        {/* Architectural Facade Graphic */}
        <div className="hidden sm:flex col-span-5 flex-col justify-between rounded-lg border border-amber-400/20 bg-stone-900/80 p-3">
          <div className="flex items-center justify-between text-[9px] text-amber-300">
            <span>STRUCTURAL DESIGN</span>
            <Ruler className="h-3 w-3" aria-hidden="true" />
          </div>
          <svg viewBox="0 0 180 76" className="my-2 w-full" aria-hidden="true">
            <rect x="18" y="22" width="38" height="48" fill="#292524" stroke="#f59e0b" strokeWidth="1" />
            <rect x="64" y="8" width="48" height="62" fill="#44403c" stroke="#fbbf24" strokeWidth="1.2" />
            <rect x="120" y="28" width="42" height="42" fill="#292524" stroke="#a8a29e" strokeWidth="1" />
            <line x1="8" y1="70" x2="172" y2="70" stroke="#78716c" strokeWidth="1" />
          </svg>
          <div className="flex items-center justify-between text-[9px] text-stone-400">
            <span>Commercial</span>
            <span>Turnkey Delivery</span>
          </div>
        </div>
      </div>

      {/* Bottom Pillar Row */}
      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-2.5 text-[10px] text-stone-300">
        <div className="rounded bg-white/[0.04] px-2.5 py-1.5 font-medium">
          Facade Engineering
        </div>
        <div className="rounded bg-white/[0.04] px-2.5 py-1.5 font-medium">
          Commercial Real Estate
        </div>
        <div className="rounded bg-white/[0.04] px-2.5 py-1.5 font-medium">
          Structural Integrity
        </div>
      </div>
    </div>
  );
}
