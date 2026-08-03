import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Write your comments here...',
    helperText: 'Max 500 characters.',
  },
};

export const WithCharacterCounter: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Brief description for your profile...',
    showCount: true,
    maxLength: 160,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Bug Description',
    error: 'Description must be at least 20 characters long.',
  },
};
