import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './index';

const meta: Meta = {
  title: 'Components/NavigationMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4">
              <NavigationMenuLink className="block rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <div className="text-sm font-semibold">Introduction</div>
                <p className="text-xs text-neutral-500">
                  Re-usable components built using Radix Primitives and Tailwind
                  CSS.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink className="block rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <div className="text-sm font-semibold">Installation</div>
                <p className="text-xs text-neutral-500">
                  How to install dependencies and structure your app.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
