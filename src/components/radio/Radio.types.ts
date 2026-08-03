import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export interface RadioItemProps extends ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> {
  label?: ReactNode;
  description?: ReactNode;
}

export interface RadioGroupProps extends ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> {
  label?: string;
  error?: string;
  orientation?: 'horizontal' | 'vertical';
}
