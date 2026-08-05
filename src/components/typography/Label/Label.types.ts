import type { LabelHTMLAttributes } from 'react';

export type LabelSize = 'sm' | 'md' | 'lg';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Font size variant.
   * @default 'sm'
   */
  size?: LabelSize;
  /**
   * Indicates input is required, appending a red asterisk (*).
   */
  required?: boolean;
  /**
   * Disabled state styling.
   */
  disabled?: boolean;
  /**
   * Error state styling.
   */
  error?: boolean;
  /**
   * Merge props onto child element via Radix Slot.
   */
  asChild?: boolean;
}
