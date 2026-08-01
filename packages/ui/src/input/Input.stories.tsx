import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Mail, Search, Lock } from '@myds/icons';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username...',
    helperText: 'Your unique handle on the platform.',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'alex@example.com',
    leftAdornment: <Mail className="h-4 w-4" />,
  },
};

export const SearchInput: Story = {
  args: {
    placeholder: 'Search documentation...',
    leftAdornment: <Search className="h-4 w-4" />,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    leftAdornment: <Lock className="h-4 w-4" />,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: 'Please enter a valid email address.',
    leftAdornment: <Mail className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'API Key',
    value: 'sk_live_123456789',
    disabled: true,
  },
};
