import { cva } from 'class-variance-authority';

export const codeVariants = cva(
  'font-mono text-neutral-900 dark:text-neutral-100 transition-colors',
  {
    variants: {
      variant: {
        inline:
          'relative rounded-md bg-neutral-100 dark:bg-neutral-800 px-[0.4rem] py-[0.15rem] text-xs font-semibold border border-neutral-200 dark:border-neutral-700',
        block:
          'block w-full overflow-x-auto rounded-lg bg-neutral-900 p-4 text-xs text-neutral-100 dark:bg-neutral-950 font-medium leading-relaxed border border-neutral-800',
      },
    },
    defaultVariants: {
      variant: 'inline',
    },
  },
);
