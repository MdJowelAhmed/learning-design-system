import { cva } from 'class-variance-authority';

export const menubarVariants = cva(
  'flex items-center space-x-1 font-sans transition-colors select-none',
  {
    variants: {
      variant: {
        default:
          'border border-neutral-200 bg-white p-1 text-neutral-900 shadow-xs dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50 rounded-xl',
        ghost:
          'bg-transparent p-1 border-none shadow-none text-neutral-900 dark:text-neutral-50',
        filled:
          'bg-neutral-100 dark:bg-neutral-800/80 p-1 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 text-neutral-900 dark:text-neutral-50',
      },
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export const menubarTriggerVariants = cva(
  'flex cursor-pointer select-none items-center rounded-md font-medium outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-900 dark:focus:bg-neutral-800 dark:focus:text-neutral-100 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-100',
  {
    variants: {
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
