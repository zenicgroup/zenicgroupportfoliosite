import { ZENIC_CORPORATE } from '../config/zenic';

export function ZenicLogo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`group/logo inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#040a1a] transition-all duration-200 group-hover/logo:border-indigo-400/45 group-hover/logo:shadow-[0_0_16px_-4px_rgba(99,102,241,0.5)]">
        <img
          src={ZENIC_CORPORATE.logoOfficialPng}
          alt="Zenic Group official logo"
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover/logo:scale-105"
          referrerPolicy="no-referrer"
        />
      </span>
      <span className="font-display text-[15px] sm:text-base font-bold tracking-[0.06em] text-white uppercase transition-colors duration-200 group-hover/logo:text-indigo-100">
        Zenic Group
      </span>
    </span>
  );
}
