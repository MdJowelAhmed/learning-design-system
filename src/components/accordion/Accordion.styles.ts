import { cva } from 'class-variance-authority';

export const accordionVariants = cva('w-full font-sans transition-colors', {
  variants: {
    variant: {
      default:
        'divide-y divide-neutral-200 dark:divide-neutral-800 border-b border-neutral-200 dark:border-neutral-800',
      bordered:
        'border border-neutral-200 dark:border-neutral-800 rounded-xl divide-y divide-neutral-200 dark:divide-neutral-800 overflow-hidden shadow-xs',
      ghost: 'border-none divide-y-0',
      filled:
        'bg-neutral-100/70 dark:bg-neutral-800/70 rounded-xl divide-y divide-neutral-200/50 dark:divide-neutral-700/50 overflow-hidden',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const accordionItemVariants = cva('transition-colors group', {
  variants: {
    variant: {
      default:
        'border-b border-neutral-200 dark:border-neutral-800 last:border-b-0',
      bordered: '',
      ghost: 'rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/50',
      filled: '',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none select-none bg-neutral-50 dark:bg-neutral-900/50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const accordionTriggerVariants = cva(
  'focus-ring flex flex-1 items-center justify-between font-medium text-neutral-900 dark:text-neutral-50 transition-all hover:underline leading-none select-none [&[data-state=open]_.accordion-icon]:rotate-180',
  {
    variants: {
      size: {
        sm: 'py-2.5 px-3 text-xs gap-2',
        md: 'py-4 px-4 text-sm gap-3',
        lg: 'py-5 px-5 text-base gap-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export const accordionContentVariants = cva(
  'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-neutral-700 dark:text-neutral-300 transition-all',
  {
    variants: {
      size: {
        sm: 'px-3 pb-3 pt-0 text-xs leading-relaxed',
        md: 'px-4 pb-4 pt-0 text-sm leading-relaxed',
        lg: 'px-5 pb-5 pt-0 text-base leading-relaxed',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
