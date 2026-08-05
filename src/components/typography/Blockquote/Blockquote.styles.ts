import { cva } from 'class-variance-authority';

export const blockquoteVariants = cva(
  'border-l-4 pl-4 py-1.5 my-3 italic font-sans transition-colors text-base leading-relaxed',
  {
    variants: {
      color: {
        default:
          'border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 bg-neutral-50/50 dark:bg-neutral-900/50 rounded-r-md',
        muted:
          'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400',
        primary:
          'border-primary-500 text-neutral-900 dark:text-neutral-100 bg-primary-50/30 dark:bg-primary-950/20 rounded-r-md',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);
