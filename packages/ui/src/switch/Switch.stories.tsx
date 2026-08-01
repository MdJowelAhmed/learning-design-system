import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Dark Mode',
    description: 'Toggle dark theme across the application.',
  },
};

export const Checked: Story = {
  args: {
    label: 'Push Notifications',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Experimental Features',
    disabled: true,
  },
};
