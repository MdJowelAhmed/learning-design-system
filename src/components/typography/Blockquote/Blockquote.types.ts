import type { BlockquoteHTMLAttributes, ReactNode } from 'react';

export type BlockquoteColor = 'default' | 'muted' | 'primary';

export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  /**
   * Color accent theme.
   * @default 'default'
   */
  color?: BlockquoteColor;
  /**
   * Quote author / attribution.
   */
  author?: ReactNode;
  /**
   * Citation source URL or text.
   */
  cite?: string;
  /**
   * Merge props onto child element via Radix Slot.
   */
  asChild?: boolean;
}
