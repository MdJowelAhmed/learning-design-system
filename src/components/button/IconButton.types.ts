import type { ReactNode } from 'react';
import type { ButtonColor, ButtonProps } from './Button.types';

export interface IconButtonProps extends Omit<
  ButtonProps,
  'children' | 'color'
> {
  /** Accessible label — required because there is no visible text */
  'aria-label': string;
  /** The icon to display */
  children: ReactNode;
  /** Button color variant */
  color?: ButtonColor;
}
