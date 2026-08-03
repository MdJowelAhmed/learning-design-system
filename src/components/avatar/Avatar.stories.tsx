import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    alt: 'Sarah Jenkins',
    fallback: 'SJ',
    size: 'lg',
    status: 'online',
  },
};

export const WithFallbackInitials: Story = {
  args: {
    fallback: 'Alex Morgan',
    size: 'md',
    status: 'busy',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
      <Avatar size="2xl" fallback="2XL" />
    </div>
  ),
};
