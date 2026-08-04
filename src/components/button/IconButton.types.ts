import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type {
  ButtonColor,
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
} from '../button/Button.types';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label — required because there is no visible text */
  'aria-label': string;
  /** The icon to display */
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  radius?: ButtonRadius;
  /** Shows a spinner and prevents interaction */
  loading?: boolean;
  asChild?: boolean;
}
