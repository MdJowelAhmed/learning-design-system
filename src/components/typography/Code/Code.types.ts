import type { HTMLAttributes } from 'react';

export type CodeVariant = 'inline' | 'block';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  /**
   * Code variant layout ('inline' code span vs 'block' pre-formatted code block).
   * @default 'inline'
   */
  variant?: CodeVariant;
  /**
   * Adds interactive copy button.
   * @default false
   */
  copyable?: boolean;
  /**
   * Merge props onto child element via Radix Slot.
   */
  asChild?: boolean;
}
