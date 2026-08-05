'use client';

import { forwardRef } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils';
import { cardVariants } from './Card.styles';
import type { CardProps } from './Card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      size = 'md',
      radius = 'lg',
      clickable = false,
      selected = false,
      loading = false,
      disabled = false,
      asChild = false,
      className,
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'div';

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (clickable && !disabled && (e.key === 'Enter' || e.key === ' ')) {
        if (e.key === ' ') {
          e.preventDefault(); // prevent page scroll down on Space
        }
        onClick?.(e as unknown as MouseEvent<HTMLDivElement>);
      }
      onKeyDown?.(e);
    };

    return (
      <Component
        ref={ref}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        aria-disabled={disabled || undefined}
        aria-busy={loading || undefined}
        onClick={disabled || loading ? undefined : onClick}
        onKeyDown={handleKeyDown}
        className={cn(
          cardVariants({
            variant,
            size,
            radius,
            clickable,
            selected,
            disabled,
            loading,
            className,
          }),
        )}
        {...props}
      >
        {children}

        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-xs transition-opacity dark:bg-neutral-900/70">
            <Loader2 className="text-primary-600 dark:text-primary-400 h-6 w-6 animate-spin" />
            <span className="sr-only">Loading card content</span>
          </div>
        )}
      </Component>
    );
  },
);

Card.displayName = 'Card';
