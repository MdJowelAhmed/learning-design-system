import type { HTMLAttributes } from 'react';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between buttons */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  /** Layout direction */
  orientation?: 'horizontal' | 'vertical';
}
