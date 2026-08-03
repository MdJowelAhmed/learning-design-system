'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils';
import { Loader2 } from '../../icons';
import { buttonVariants } from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      >
        {loading ? (
          <>
            <Loader2
              className="h-4 w-4 shrink-0 animate-spin text-current"
              aria-hidden="true"
            />
            <span>{loadingText ?? children}</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </Component>
    );
  },
);

Button.displayName = 'Button';
