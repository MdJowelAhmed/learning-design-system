import { cva } from 'class-variance-authority';

export const navigationMenuTriggerVariants = cva(
  'group inline-flex w-max items-center justify-center font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'rounded-lg bg-white text-neutral-900 hover:bg-neutral-100 focus:bg-neutral-100 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50',
        ghost:
          'rounded-lg bg-transparent text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-900 focus:bg-neutral-100/80 dark:text-neutral-300 dark:hover:bg-neutral-800/80 dark:hover:text-neutral-50',
        underline:
          'rounded-none border-b-2 border-transparent text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 data-[state=open]:border-primary-600 data-[state=open]:text-primary-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:data-[state=open]:border-primary-400 dark:data-[state=open]:text-primary-400',
        filled:
          'rounded-lg bg-neutral-100 text-neutral-800 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700',
      },
      size: {
        sm: 'h-8 px-3 text-xs gap-1',
        md: 'h-10 px-4 text-sm gap-1.5',
        lg: 'h-12 px-5 text-base gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
