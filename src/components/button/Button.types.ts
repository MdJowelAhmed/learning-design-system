import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from './Button.styles';

export type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost' | 'link';
export type ButtonColor =
  'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render the button's child as the root element via Radix Slot */
  asChild?: boolean;
  /** Shows a spinner and prevents interaction */
  loading?: boolean;
  /** Replaces the button label while loading */
  loadingText?: string;
  /** Icon rendered before the label */
  leftIcon?: ReactNode;
  /** Icon rendered after the label */
  rightIcon?: ReactNode;
  /** Stretches the button to fill its container */
  fullWidth?: boolean;
}
