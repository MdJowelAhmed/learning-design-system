'use client';

import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../utils';
import { Heading, Text } from '../typography';
import type { HeadingProps, TextProps } from '../typography';
import type { CardProps } from './Card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      hoverable = false,
      bordered = true,
      padding = 'md',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden rounded-2xl bg-white text-neutral-900 shadow-sm transition-all duration-200 dark:bg-neutral-900 dark:text-neutral-50',
          bordered && 'border border-neutral-200 dark:border-neutral-800',
          hoverable && 'cursor-pointer hover:-translate-y-0.5 hover:shadow-md',
          padding === 'sm' && 'p-4',
          padding === 'md' && 'p-6',
          padding === 'lg' && 'p-8',
          padding === 'none' && 'p-0',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-4 flex flex-col gap-1.5', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, ...props }, ref) => (
    <Heading
      ref={ref}
      level={3}
      size="lg"
      weight="semibold"
      className={cn('leading-none', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLElement, TextProps>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} size="sm" color="muted" className={className} {...props} />
  ),
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-neutral-800 dark:text-neutral-200', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-800',
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
