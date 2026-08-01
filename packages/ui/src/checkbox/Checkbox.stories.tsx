import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'Receive weekly updates on design system releases.',
  },
};

export const Checked: Story = {
  args: {
    label: 'Remember me',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select All Items',
    checked: 'indeterminate',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'I agree to Privacy Policy',
    error: 'You must agree to Privacy Policy before continuing.',
  },
};
