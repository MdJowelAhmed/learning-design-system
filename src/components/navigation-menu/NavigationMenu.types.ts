import type * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export type NavigationMenuVariant =
  'default' | 'ghost' | 'underline' | 'filled';
export type NavigationMenuSize = 'sm' | 'md' | 'lg';

export interface NavigationMenuProps
  extends NavigationMenuPrimitive.NavigationMenuProps {
  /**
   * Visual style variant for navigation items.
   * @default 'default'
   */
  variant?: NavigationMenuVariant;
  /**
   * Size token for triggers and links.
   * @default 'md'
   */
  size?: NavigationMenuSize;
}

export type NavigationMenuListProps =
  NavigationMenuPrimitive.NavigationMenuListProps;
export type NavigationMenuItemProps =
  NavigationMenuPrimitive.NavigationMenuItemProps;
export type NavigationMenuTriggerProps =
  NavigationMenuPrimitive.NavigationMenuTriggerProps;
export type NavigationMenuContentProps =
  NavigationMenuPrimitive.NavigationMenuContentProps;
export type NavigationMenuLinkProps =
  NavigationMenuPrimitive.NavigationMenuLinkProps;
export type NavigationMenuViewportProps =
  NavigationMenuPrimitive.NavigationMenuViewportProps;
export type NavigationMenuIndicatorProps =
  NavigationMenuPrimitive.NavigationMenuIndicatorProps;
