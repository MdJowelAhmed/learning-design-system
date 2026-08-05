import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'overflow-hidden transition-all duration-200 text-neutral-900 dark:text-neutral-50 flex flex-col',
  {
    variants: {
      variant: {
        default:
          'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm',
        outlined:
          'bg-transparent border border-neutral-300 dark:border-neutral-700 shadow-none',
        filled: 'bg-neutral-100 dark:bg-neutral-800 border-none shadow-none',
        elevated:
          'bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-md hover:shadow-lg',
        ghost: 'bg-transparent border-none shadow-none',
      },
      size: {
        xs: 'p-3 gap-2 text-xs',
        sm: 'p-4 gap-3 text-sm',
        md: 'p-6 gap-4 text-base',
        lg: 'p-8 gap-5 text-lg',
        xl: 'p-10 gap-6 text-xl',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-md',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
        full: 'rounded-3xl', // logical max for card containers
      },
      clickable: {
        true: 'cursor-pointer hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950',
      },
      selected: {
        true: 'ring-2 ring-primary-500 border-primary-500 dark:border-primary-500',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 select-none bg-neutral-100 dark:bg-neutral-900/50',
      },
      loading: {
        true: 'relative pointer-events-none select-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'lg',
    },
  },
);
