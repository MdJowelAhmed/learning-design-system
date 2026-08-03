import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
];

export const Default: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Select a framework...',
    options: frameworks,
    helperText: 'Choose your primary frontend library.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Select a framework...',
    options: frameworks,
    error: 'Framework selection is required.',
  },
};
