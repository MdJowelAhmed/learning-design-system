import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, Mail, Plus } from '@myds/icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'soft',
        'danger',
        'success',
        'warning',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'icon-xs',
        'icon-sm',
        'icon-md',
        'icon-lg',
      ],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Soft: Story = {
  args: {
    children: 'Soft Button',
    variant: 'soft',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete Account',
    variant: 'danger',
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Send Email',
    leftIcon: <Mail className="h-4 w-4" />,
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Submit Order',
    loading: true,
    loadingText: 'Processing...',
  },
};

export const IconButton: Story = {
  args: {
    size: 'icon-md',
    variant: 'outline',
    children: <Plus className="h-5 w-5" />,
    'aria-label': 'Add new item',
  },
};
