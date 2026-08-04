import type { HTMLAttributes, LabelHTMLAttributes } from 'react';

// ─────────────────────────────────────────────
// FieldRoot
// ─────────────────────────────────────────────
export interface FieldRootProps extends HTMLAttributes<HTMLDivElement> {
  /** Makes the field take full available width */
  fullWidth?: boolean;
}

// ─────────────────────────────────────────────
// FieldLabel
// ─────────────────────────────────────────────
export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Shows a red asterisk (*) next to the label */
  required?: boolean;
  /** Visually hidden but accessible to screen readers */
  srOnly?: boolean;
}

// ─────────────────────────────────────────────
// FieldMessage
// Priority: error > warning > success > helperText
// ─────────────────────────────────────────────
export interface FieldMessageProps {
  id?: string;
  error?: string;
  warning?: string;
  success?: string;
  helperText?: string;
}

// ─────────────────────────────────────────────
// FieldCounter
// ─────────────────────────────────────────────
export interface FieldCounterProps {
  current: number;
  max: number;
}
