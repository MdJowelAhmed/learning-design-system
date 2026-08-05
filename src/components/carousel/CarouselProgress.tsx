'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';
import type { CarouselProgressProps } from './Carousel.types';
import { useCarousel } from './useCarouselContext';

export const CarouselProgress = forwardRef<
  HTMLDivElement,
  CarouselProgressProps
>(({ className, ...props }, ref) => {
  const { currentIndex, totalSlides, isPaused, autoplay, delay } =
    useCarousel();

  const progressPercent =
    totalSlides > 0 ? ((currentIndex + 1) / totalSlides) * 100 : 0;

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuenow={Math.round(progressPercent)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        'relative h-1 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800',
        className,
      )}
      {...props}
    >
      <motion.div
        className="bg-primary-600 dark:bg-primary-400 h-full rounded-full"
        initial={{ width: `${progressPercent}%` }}
        animate={{
          width: `${progressPercent}%`,
        }}
        transition={{
          duration: autoplay && !isPaused ? delay / 1000 : 0.3,
          ease: 'linear',
        }}
      />
    </div>
  );
});

CarouselProgress.displayName = 'CarouselProgress';
