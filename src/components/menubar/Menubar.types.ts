import type { HTMLAttributes } from 'react';
import type * as MenubarPrimitive from '@radix-ui/react-menubar';

export type MenubarProps = MenubarPrimitive.MenubarProps;
export type MenubarMenuProps = MenubarPrimitive.MenubarMenuProps;
export type MenubarTriggerProps = MenubarPrimitive.MenubarTriggerProps;
export type MenubarContentProps = MenubarPrimitive.MenubarContentProps;
export type MenubarItemProps = MenubarPrimitive.MenubarItemProps & {
  inset?: boolean;
};
export type MenubarCheckboxItemProps =
  MenubarPrimitive.MenubarCheckboxItemProps;
export type MenubarRadioItemProps = MenubarPrimitive.MenubarRadioItemProps;
export type MenubarLabelProps = MenubarPrimitive.MenubarLabelProps & {
  inset?: boolean;
};
export type MenubarSeparatorProps = MenubarPrimitive.MenubarSeparatorProps;
export type MenubarShortcutProps = HTMLAttributes<HTMLSpanElement>;
