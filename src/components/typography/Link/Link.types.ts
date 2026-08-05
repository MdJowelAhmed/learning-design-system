import type { AnchorHTMLAttributes } from 'react';

export type LinkUnderline = 'always' | 'hover' | 'none';
export type LinkColor = 'primary' | 'secondary' | 'neutral' | 'muted';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Underline behavior on link.
   * @default 'hover'
   */
  underline?: LinkUnderline;
  /**
   * Color variant.
   * @default 'primary'
   */
  color?: LinkColor;
  /**
   * Opens link in external new tab safely with target="_blank" and rel="noopener noreferrer".
   */
  external?: boolean;
  /**
   * Disabled state.
   */
  disabled?: boolean;
  /**
   * Merge props onto child element via Radix Slot.
   */
  asChild?: boolean;
}
