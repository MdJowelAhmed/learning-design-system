import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'w-full font-sans transition-all duration-200 bg-white dark:bg-neutral-900',
    'border border-neutral-300 dark:border-neutral-700',
    'text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
    'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400',
    'disabled:bg-neutral-100 dark:disabled:bg-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed',
  ].join(' '),
  {
    variants: {
      inputSize: {
        sm: 'h-8 px-3 text-xs rounded-md',
        md: 'h-10 px-3.5 text-sm rounded-lg',
        lg: 'h-12 px-4 text-base rounded-xl',
      },
      state: {
        default: '',
        error:
          'border-red-500 dark:border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:focus:border-red-400',
        success:
          'border-emerald-500 dark:border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20',
      },
    },
    defaultVariants: {
      inputSize: 'md',
      state: 'default',
    },
  },
);
