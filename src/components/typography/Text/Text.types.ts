import type { HTMLAttributes } from 'react';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextColor =
  | 'default'
  | 'muted'
  | 'subtle'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'white';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * Font size variant.
   * @default 'md'
   */
  size?: TextSize;
  /**
   * Font weight variant.
   * @default 'normal'
   */
  weight?: TextWeight;
  /**
   * Text alignment.
   */
  align?: TextAlign;
  /**
   * Color variant.
   * @default 'default'
   */
  color?: TextColor;
  /**
   * Truncate text with ellipsis.
   */
  truncate?: boolean;
  /**
   * Italicize text.
   */
  italic?: boolean;
  /**
   * Underline text.
   */
  underline?: boolean;
  /**
   * Line-through text.
   */
  strikethrough?: boolean;
  /**
   * HTML element tag to render when not using asChild.
   * @default 'p'
   */
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'small' | 'mark';
  /**
   * Merge props onto child element via Radix Slot.
   */
  asChild?: boolean;
}
