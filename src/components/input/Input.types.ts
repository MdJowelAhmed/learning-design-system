import type { InputHTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { inputWrapperVariants } from './Input.styles';

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    VariantProps<typeof inputWrapperVariants> {
  // ─── Field-level props ───────────────────────
  /** Visible label above the input */
  label?: string;
  /** Helper text (lowest priority message) */
  helperText?: string;
  /** Error message — disables warning/success/helper */
  error?: string;
  /** Warning message — shown if no error */
  warning?: string;
  /** Success message — shown if no error or warning */
  success?: string;
  /** Shows a red asterisk (*) on the label */
  required?: boolean;

  // ─── Size & Appearance ───────────────────────
  /** Input height and text scale */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Visual style of the input */
  variant?: 'outlined' | 'filled' | 'ghost' | 'underlined';
  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Stretch to full container width */
  fullWidth?: boolean;

  // ─── Slots ───────────────────────────────────
  /** Icon inside the input on the left */
  leftIcon?: ReactNode;
  /** Icon inside the input on the right (overridden by clearable/loading) */
  rightIcon?: ReactNode;
  /** Text or node shown before the input (inside border) e.g. "$" */
  prefix?: ReactNode;
  /** Text or node shown after the input (inside border) e.g. "USD" */
  suffix?: ReactNode;

  // ─── Behaviors ───────────────────────────────
  /** Shows a spinner and disables the input */
  loading?: boolean;
  /** Shows an × button to clear the value (only when value is non-empty) */
  clearable?: boolean;
  /** Callback fired when the clear button is clicked */
  onClear?: () => void;
}
