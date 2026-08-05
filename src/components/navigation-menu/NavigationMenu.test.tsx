import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './index';

describe('Enterprise NavigationMenu Framework', () => {
  it('renders navigation menu triggers and links', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/components">
                Components
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/pricing" active>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    const trigger = screen.getByText('Products');
    expect(trigger).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByText('Components')).toBeInTheDocument();
  });
});
