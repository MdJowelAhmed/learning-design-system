import type { Meta, StoryObj } from '@storybook/react';
import { Toggle, ToggleGroup, ToggleGroupItem } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => <Toggle aria-label="Toggle bold">Bold</Toggle>,
};

export const Group: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="grid">
      <ToggleGroupItem value="grid" aria-label="Grid view">
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List view">
        List
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
