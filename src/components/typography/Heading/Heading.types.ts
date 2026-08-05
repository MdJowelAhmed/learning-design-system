import type { HTMLAttributes } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize =
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type HeadingWeight =
  'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type HeadingAlign = 'left' | 'center' | 'right' | 'justify';
export type HeadingColor =
  | 'default'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'danger'
  | 'success'
  | 'warning'
  | 'white';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Semantic heading level (1-6). Determines default HTML tag (h1-h6).
   * @default 1
   */
  level?: HeadingLevel;
  /**
   * Font size variant. If omitted, defaults based on level.
   */
  size?: HeadingSize;
  /**
   * Font weight variant.
   * @default 'bold'
   */
  weight?: HeadingWeight;
  /**
   * Text alignment.
   */
  align?: HeadingAlign;
  /**
   * Color variant.
   * @default 'default'
   */
  color?: HeadingColor;
  /**
   * Truncate text with ellipsis.
   */
  truncate?: boolean;
  /**
   * Merge props onto child element via Radix Slot.
   */
  asChild?: boolean;
}
