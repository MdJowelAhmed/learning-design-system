import { cva } from 'class-variance-authority';

export const tableVariants = cva(
  'w-full text-left border-collapse font-sans text-neutral-900 dark:text-neutral-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-b border-neutral-200 dark:border-neutral-800',
        bordered:
          'border border-neutral-200 dark:border-neutral-800 [&_th]:border-r [&_th]:border-neutral-200 dark:[&_th]:border-neutral-800 [&_td]:border-r [&_td]:border-neutral-200 dark:[&_td]:border-neutral-800 last:[&_th]:border-r-0 last:[&_td]:border-r-0',
        striped:
          '[&_tbody_tr:nth-child(even)]:bg-neutral-50/60 dark:[&_tbody_tr:nth-child(even)]:bg-neutral-800/40 border-b border-neutral-200 dark:border-neutral-800',
        minimal: 'border-none',
        ghost: 'border-none bg-transparent',
      },
      size: {
        xs: '[&_th]:px-2 [&_th]:py-1.5 [&_td]:px-2 [&_td]:py-1.5 text-xs',
        sm: '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 text-xs',
        md: '[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 text-sm',
        lg: '[&_th]:px-6 [&_th]:py-4 [&_td]:px-6 [&_td]:py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export const tableRowVariants = cva(
  'border-b border-neutral-200 dark:border-neutral-800 transition-colors',
  {
    variants: {
      hoverable: {
        true: 'hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60',
      },
      selected: {
        true: 'bg-primary-50/80 dark:bg-primary-950/40 font-medium border-primary-200 dark:border-primary-800',
      },
      clickable: {
        true: 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 select-none bg-neutral-50 dark:bg-neutral-900/50',
      },
    },
    defaultVariants: {
      hoverable: true,
    },
  },
);
