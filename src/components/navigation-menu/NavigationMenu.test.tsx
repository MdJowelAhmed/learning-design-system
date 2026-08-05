import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './index';

describe('NavigationMenu Component System', () => {
  it('renders navigation menu list and triggers', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
