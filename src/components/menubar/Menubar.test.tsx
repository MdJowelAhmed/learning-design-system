import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './index';

describe('Enterprise Menubar Component System', () => {
  it('renders menubar triggers and opens items on keyboard Enter', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New File <MenubarShortcut>Ctrl + N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    const trigger = screen.getByRole('menuitem', { name: 'File' });
    expect(trigger).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(screen.getByText('New File')).toBeInTheDocument();
    expect(screen.getByText('Ctrl + N')).toBeInTheDocument();
    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('supports checkbox items and radio groups inside dropdown content', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value="dark">
              <MenubarRadioItem value="light">Light</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    const trigger = screen.getByRole('menuitem', { name: 'View' });
    fireEvent.keyDown(trigger, { key: 'Enter' });

    expect(screen.getByText('Show Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('supports nested submenus', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Project Alpha</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    const trigger = screen.getByRole('menuitem', { name: 'File' });
    fireEvent.keyDown(trigger, { key: 'Enter' });

    expect(screen.getByText('Open Recent')).toBeInTheDocument();
  });
});
