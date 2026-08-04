import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    helperText: 'Must be at least 8 characters.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    error: 'Password must be at least 8 characters.',
    value: '123',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    disabled: true,
    value: 'mysecretpassword',
  },
};

export const NoToggle: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    showToggle: false,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <PasswordInput
          key={size}
          size={size}
          label={`Size: ${size}`}
          placeholder="••••••••"
        />
      ))}
    </div>
  ),
};
