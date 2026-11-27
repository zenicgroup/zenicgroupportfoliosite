import type { Variants } from 'motion/react';

export const ZENIC_EASE = [0.16, 1, 0.3, 1] as const;

export const ZENIC_SPRING = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 32,
  mass: 0.85,
};

export const ZENIC_VIEWPORT = {
  once: true,
  amount: 0.16,
} as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: ZENIC_EASE,
    },
  }),
};

export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: ZENIC_EASE,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const staggerCardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: ZENIC_EASE,
    },
  },
};
