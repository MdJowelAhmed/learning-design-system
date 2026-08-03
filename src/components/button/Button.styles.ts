import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
    'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
    'active:scale-[0.98]',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm dark:bg-blue-500 dark:hover:bg-blue-600',
        secondary:
          'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 shadow-sm dark:bg-purple-500 dark:hover:bg-purple-600',
        outline:
          'border border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800',
        ghost:
          'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800',
        soft: 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:bg-blue-900/50',
        danger:
          'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm dark:bg-red-500 dark:hover:bg-red-600',
        success:
          'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm dark:bg-emerald-500 dark:hover:bg-emerald-600',
        warning:
          'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 shadow-sm dark:bg-amber-500 dark:hover:bg-amber-600',
        link: 'text-blue-600 underline-offset-4 hover:underline p-0 h-auto font-normal dark:text-blue-400',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs rounded-md gap-1.5',
        sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
        md: 'h-10 px-4 text-sm rounded-lg gap-2',
        lg: 'h-12 px-6 text-base rounded-xl gap-2.5',
        xl: 'h-14 px-8 text-lg rounded-xl gap-3',
        'icon-xs': 'h-7 w-7 p-0 rounded-md',
        'icon-sm': 'h-8 w-8 p-0 rounded-md',
        'icon-md': 'h-10 w-10 p-0 rounded-lg',
        'icon-lg': 'h-12 w-12 p-0 rounded-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);
