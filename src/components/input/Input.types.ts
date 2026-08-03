import type { InputHTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { inputVariants } from './Input.styles';

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Label text for the input */
  label?: string;
  /** Error message to display below input */
  error?: string;
  /** Helper text to display below input */
  helperText?: string;
  /** Left adornment (e.g. icon) */
  leftAdornment?: ReactNode;
  /** Right adornment (e.g. icon or clear button) */
  rightAdornment?: ReactNode;
  /** Make input container full width */
  fullWidth?: boolean;
}
