import { cva } from 'class-variance-authority';

export const linkVariants = cva(
  'inline-flex items-center gap-1 font-medium transition-colors focus-ring rounded-xs',
  {
    variants: {
      color: {
        primary:
          'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
        secondary:
          'text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300',
        neutral:
          'text-neutral-900 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300',
        muted:
          'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200',
      },
      underline: {
        always: 'underline underline-offset-4',
        hover: 'hover:underline underline-offset-4',
        none: 'no-underline',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      color: 'primary',
      underline: 'hover',
    },
  },
);
