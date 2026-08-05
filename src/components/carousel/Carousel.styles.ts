import { cva } from 'class-variance-authority';

export const carouselVariants = cva(
  'relative w-full overflow-hidden select-none outline-none',
  {
    variants: {
      orientation: {
        horizontal: 'flex flex-col',
        vertical: 'flex flex-row h-[400px]',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

export const carouselTrackVariants = cva('flex w-full h-full transition-all', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    gap: 'md',
    align: 'start',
  },
});

export const carouselItemVariants = cva(
  'shrink-0 grow-0 min-w-0 transition-all rounded-xl overflow-hidden',
  {
    variants: {
      slidesPerView: {
        1: 'w-full',
        2: 'w-1/2',
        3: 'w-1/3',
        4: 'w-1/4',
      },
    },
    defaultVariants: {
      slidesPerView: 1,
    },
  },
);
