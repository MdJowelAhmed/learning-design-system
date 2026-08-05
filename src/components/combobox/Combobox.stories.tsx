import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './index';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

export const Default: StoryObj<typeof Combobox> = {
  args: {
    options: frameworks,
    placeholder: 'Select framework...',
  },
};
