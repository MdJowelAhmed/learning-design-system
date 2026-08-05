import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './index';

describe('Menubar Component System', () => {
  it('renders menubar triggers and opens menu via keyboard or pointer', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    const trigger = screen.getByRole('menuitem', { name: 'File' });
    expect(trigger).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(screen.getByText('New Tab')).toBeInTheDocument();
    expect(screen.getByText('New Window')).toBeInTheDocument();
  });
});
