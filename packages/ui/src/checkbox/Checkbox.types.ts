import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export interface CheckboxProps extends ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  /** Label text or node */
  label?: ReactNode;
  /** Description text below label */
  description?: ReactNode;
  /** Error message */
  error?: string;
}
