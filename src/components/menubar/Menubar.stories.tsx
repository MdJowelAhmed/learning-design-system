import type { Meta, StoryObj } from '@storybook/react';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
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

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const DesktopApplicationMenu: StoryObj<typeof Menubar> = {
  render: () => (
    <Menubar className="w-[600px]">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Design-System-V2</MenubarItem>
              <MenubarItem>Analytics-Dashboard</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel font-semibold>Panels & Visibility</MenubarLabel>
          <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel font-semibold>Theme Preference</MenubarLabel>
          <MenubarRadioGroup value="dark">
            <MenubarRadioItem value="light">Light Mode</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark Mode</MenubarRadioItem>
            <MenubarRadioItem value="system">
              System Preference
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Window</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Minimize</MenubarItem>
          <MenubarItem>Zoom</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const Variants: StoryObj<typeof Menubar> = {
  render: () => (
    <div className="flex w-[600px] flex-col gap-6">
      <div>
        <h4 className="mb-2 text-xs font-semibold text-neutral-500">
          Default Bordered
        </h4>
        <Menubar variant="default">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-semibold text-neutral-500">
          Ghost Desktop
        </h4>
        <Menubar variant="ghost">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-semibold text-neutral-500">
          Filled Muted
        </h4>
        <Menubar variant="filled">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  ),
};

export const Sizes: StoryObj<typeof Menubar> = {
  render: () => (
    <div className="flex w-[600px] flex-col gap-4">
      <Menubar size="sm">
        <MenubarMenu>
          <MenubarTrigger>Small (h-8)</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Menubar size="md">
        <MenubarMenu>
          <MenubarTrigger>Medium (h-10)</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Menubar size="lg">
        <MenubarMenu>
          <MenubarTrigger>Large (h-12)</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};
