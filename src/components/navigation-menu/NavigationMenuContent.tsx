'use client';

import { forwardRef } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '../../utils';
import type { NavigationMenuContentProps } from './NavigationMenu.types';

export const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto',
      className,
    )}
    {...props}
  />
));

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
