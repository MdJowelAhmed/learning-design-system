import type { ComponentPropsWithoutRef } from 'react';
import type * as SeparatorPrimitive from '@radix-ui/react-separator';

export interface SeparatorProps extends ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
> {
  label?: string;
}
