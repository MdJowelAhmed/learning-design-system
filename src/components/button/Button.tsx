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
            <Loader2 className="shrink-0 animate-spin" aria-hidden="true" />
            {loadingText ? (
              <span>{loadingText}</span>
            ) : (
              children && <span>{children}</span>
            )}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="inline-flex shrink-0 items-center justify-center">
                {leftIcon}
              </span>
            )}
            {children &&
              (typeof children === 'string' || typeof children === 'number' ? (
                <span>{children}</span>
              ) : (
                children
              ))}
            {rightIcon && (
              <span className="inline-flex shrink-0 items-center justify-center">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </Component>
    );
  },
);

Button.displayName = 'Button';
