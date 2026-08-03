import { forwardRef } from 'react';
import { cn } from '../../utils';
import type { SkeletonProps } from './Skeleton.types';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-pulse bg-neutral-200 dark:bg-neutral-800',
          variant === 'default' && 'rounded-md',
          variant === 'circular' && 'rounded-full',
          variant === 'rounded' && 'rounded-xl',
          className,
        )}
        {...props}
      />
    );
  },
);

Skeleton.displayName = 'Skeleton';
