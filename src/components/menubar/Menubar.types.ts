import type { HTMLAttributes } from 'react';
import type * as MenubarPrimitive from '@radix-ui/react-menubar';

export type MenubarVariant = 'default' | 'ghost' | 'filled';
export type MenubarSize = 'sm' | 'md' | 'lg';

export interface MenubarProps extends MenubarPrimitive.MenubarProps {
  /**
   * Visual style variant.
   * @default 'default'
   */
  variant?: MenubarVariant;
  /**
   * Bar size token.
   * @default 'md'
   */
  size?: MenubarSize;
}

export type MenubarMenuProps = MenubarPrimitive.MenubarMenuProps;
export type MenubarTriggerProps = MenubarPrimitive.MenubarTriggerProps;
export type MenubarContentProps = MenubarPrimitive.MenubarContentProps;

export interface MenubarItemProps extends MenubarPrimitive.MenubarItemProps {
  inset?: boolean;
}

export type MenubarCheckboxItemProps =
  MenubarPrimitive.MenubarCheckboxItemProps;
export type MenubarRadioGroupProps = MenubarPrimitive.MenubarRadioGroupProps;
export type MenubarRadioItemProps = MenubarPrimitive.MenubarRadioItemProps;

export interface MenubarLabelProps extends MenubarPrimitive.MenubarLabelProps {
  inset?: boolean;
}

export type MenubarSeparatorProps = MenubarPrimitive.MenubarSeparatorProps;
export type MenubarShortcutProps = HTMLAttributes<HTMLSpanElement>;

export type MenubarSubProps = MenubarPrimitive.MenubarSubProps;

export interface MenubarSubTriggerProps
  extends MenubarPrimitive.MenubarSubTriggerProps {
  inset?: boolean;
}

export type MenubarSubContentProps = MenubarPrimitive.MenubarSubContentProps;
