import type { HTMLAttributes, ReactNode } from 'react';
import type * as AccordionPrimitive from '@radix-ui/react-accordion';

export type AccordionVariant = 'default' | 'bordered' | 'ghost' | 'filled';
export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionBaseProps {
  /**
   * Visual style variant.
   * @default 'default'
   */
  variant?: AccordionVariant;
  /**
   * Padding and font size token.
   * @default 'md'
   */
  size?: AccordionSize;
}

export type AccordionSingleProps = AccordionPrimitive.AccordionSingleProps &
  AccordionBaseProps;

export type AccordionMultipleProps = AccordionPrimitive.AccordionMultipleProps &
  AccordionBaseProps;

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export type AccordionItemProps = AccordionPrimitive.AccordionItemProps;

export interface AccordionTriggerProps
  extends AccordionPrimitive.AccordionTriggerProps {
  /**
   * Hide right-aligned icon.
   * @default false
   */
  hideIcon?: boolean;
  /**
   * Custom icon element.
   */
  icon?: ReactNode;
}

export type AccordionContentProps = AccordionPrimitive.AccordionContentProps;

export interface AccordionIconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Custom icon element. Defaults to ChevronDown.
   */
  children?: ReactNode;
}
