import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-xl border p-4 text-sm transition-colors flex items-start gap-3 shadow-xs',
  {
    variants: {
      variant: {
        info: 'bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/50 dark:text-blue-200 dark:border-blue-800',
        success:
          'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-200 dark:border-emerald-800',
        warning:
          'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-800',
        danger:
          'bg-red-50 text-red-900 border-red-200 dark:bg-red-950/50 dark:text-red-200 dark:border-red-800',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);
