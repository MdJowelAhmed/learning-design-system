import type { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text for the textarea */
  label?: string;
  /** Error message to display below textarea */
  error?: string;
  /** Helper text to display below textarea */
  helperText?: string;
  /** Show character counter */
  showCount?: boolean;
  /** Maximum character length */
  maxLength?: number;
  /** Full width container */
  fullWidth?: boolean;
}
