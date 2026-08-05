'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../utils';
import { textVariants } from './Text.styles';
import type { TextProps } from './Text.types';

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      size,
      weight,
      align,
      color,
      truncate,
      italic,
      underline,
      strikethrough,
      as = 'p',
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : as;

    return (
      <Component
        ref={ref as any}
        className={cn(
          textVariants({
            size,
            weight,
            align,
            color,
            truncate,
            italic,
            underline,
            strikethrough,
            className,
          }),
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';
