import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from './Button.styles';

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** If true, the button will render as a Radix Slot child */
  asChild?: boolean;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Text to show during loading state */
  loadingText?: string;
  /** Icon to render before text */
  leftIcon?: ReactNode;
  /** Icon to render after text */
  rightIcon?: ReactNode;
  /** Make button full width */
  fullWidth?: boolean;
}
