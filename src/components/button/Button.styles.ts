import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer border border-transparent whitespace-nowrap',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
    'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
    'active:scale-[0.97]',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600',
        secondary:
          'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 shadow-sm hover:shadow-md dark:bg-purple-500 dark:hover:bg-purple-600',
        outline:
          'border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200 shadow-xs dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800',
        ghost:
          'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800',
        soft: 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60',
        danger:
          'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm hover:shadow-md dark:bg-red-500 dark:hover:bg-red-600',
        success:
          'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm hover:shadow-md dark:bg-emerald-500 dark:hover:bg-emerald-600',
        warning:
          'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 shadow-sm hover:shadow-md dark:bg-amber-500 dark:hover:bg-amber-600',
        link: 'text-blue-600 underline-offset-4 hover:underline p-0 h-auto font-normal border-none shadow-none dark:text-blue-400',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs rounded-md gap-1.5 [&_svg]:h-3.5 [&_svg]:w-3.5',
        sm: 'h-8 px-3 text-xs rounded-md gap-1.5 [&_svg]:h-4 [&_svg]:w-4',
        md: 'h-10 px-4 text-sm rounded-lg gap-2 [&_svg]:h-4 [&_svg]:w-4',
        lg: 'h-12 px-6 text-base rounded-xl gap-2.5 [&_svg]:h-5 [&_svg]:w-5',
        xl: 'h-14 px-8 text-lg rounded-xl gap-3 [&_svg]:h-6 [&_svg]:w-6',
        'icon-xs':
          'h-7 w-7 p-0 rounded-md shrink-0 justify-center [&_svg]:h-3.5 [&_svg]:w-3.5',
        'icon-sm':
          'h-8 w-8 p-0 rounded-md shrink-0 justify-center [&_svg]:h-4 [&_svg]:w-4',
        'icon-md':
          'h-10 w-10 p-0 rounded-lg shrink-0 justify-center [&_svg]:h-5 [&_svg]:w-5',
        'icon-lg':
          'h-12 w-12 p-0 rounded-xl shrink-0 justify-center [&_svg]:h-6 [&_svg]:w-6',
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
