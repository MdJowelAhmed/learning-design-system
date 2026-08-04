import { cva } from 'class-variance-authority';

export const fieldLabelVariants = cva(
  'block select-none text-sm font-medium leading-none',
  {
    variants: {
      state: {
        default: 'text-neutral-700 dark:text-neutral-300',
        error: 'text-red-600 dark:text-red-400',
        warning: 'text-amber-600 dark:text-amber-400',
        success: 'text-emerald-600 dark:text-emerald-400',
      },
    },
    defaultVariants: { state: 'default' },
  },
);

export const fieldMessageVariants = cva(
  'flex items-start gap-1 text-xs font-medium',
  {
    variants: {
      intent: {
        error: 'text-red-500 dark:text-red-400',
        warning: 'text-amber-500 dark:text-amber-400',
        success: 'text-emerald-500 dark:text-emerald-400',
        helper: 'font-normal text-neutral-500 dark:text-neutral-400',
      },
    },
    defaultVariants: { intent: 'helper' },
  },
);

export const fieldCounterVariants = cva('text-xs tabular-nums', {
  variants: {
    state: {
      normal: 'text-neutral-400 dark:text-neutral-500',
      warning: 'text-amber-500 dark:text-amber-400',
      limit: 'font-medium text-red-500 dark:text-red-400',
    },
  },
  defaultVariants: { state: 'normal' },
});
