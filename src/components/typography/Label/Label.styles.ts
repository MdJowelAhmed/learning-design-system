import { cva } from 'class-variance-authority';

export const labelVariants = cva(
  'font-sans font-medium text-neutral-800 dark:text-neutral-200 select-none transition-colors inline-flex items-center gap-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      error: {
        true: 'text-red-600 dark:text-red-400',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
