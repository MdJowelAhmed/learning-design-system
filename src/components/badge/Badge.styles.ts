import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors select-none gap-1.5 shrink-0',
  {
    variants: {
      variant: {
        solid: 'bg-blue-600 text-white dark:bg-blue-500',
        soft: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300',
        outline:
          'border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300',
        success:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
        warning:
          'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
        danger:
          'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 border border-red-200 dark:border-red-800',
        neutral:
          'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
      },
      size: {
        sm: 'h-5 px-2 text-[10px] rounded-md',
        md: 'h-6 px-2.5 text-xs rounded-md',
        lg: 'h-7 px-3 text-sm rounded-lg',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'soft',
      size: 'md',
      pill: false,
    },
  },
);
