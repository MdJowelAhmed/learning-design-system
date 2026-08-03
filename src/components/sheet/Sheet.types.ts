import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export type SheetSide = 'top' | 'bottom' | 'left' | 'right';

export interface SheetContentProps extends ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> {
  side?: SheetSide;
}

export type SheetHeaderProps = HTMLAttributes<HTMLDivElement>;
export type SheetFooterProps = HTMLAttributes<HTMLDivElement>;
export type SheetTitleProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;
export type SheetDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;
