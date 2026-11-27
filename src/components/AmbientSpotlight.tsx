import { useEffect, useRef } from 'react';

export function AmbientSpotlight() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pointerFine = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;

    if (!pointerFine || reducedMotion || !isDesktop) return;

    const el = layerRef.current;
    if (!el) return;

    let rafId = 0;
    let targetX = -999;
    let targetY = -999;
    let hasMoved = false;

    const updateSpotlight = () => {
      rafId = 0;
      el.style.setProperty('--spotlight-x', `${targetX}px`);
      el.style.setProperty('--spotlight-y', `${targetY}px`);
      if (!hasMoved) {
        hasMoved = true;
        el.style.opacity = '1';
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateSpotlight);
      }
    };

    const onPointerLeave = () => {
      el.style.opacity = '0';
      hasMoved = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden select-none opacity-0 transition-opacity duration-500 lg:block"
      style={{
        background:
          'radial-gradient(560px circle at var(--spotlight-x, -999px) var(--spotlight-y, -999px), rgba(99, 102, 241, 0.055), rgba(56, 189, 248, 0.02) 40%, transparent 72%)',
      }}
    />
  );
}
