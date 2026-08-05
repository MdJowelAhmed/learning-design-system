import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './index';

const meta: Meta = {
  title: 'Components/ScrollArea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export const Default: StoryObj = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
      <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
      {tags.map((tag) => (
        <div
          key={tag}
          className="border-b border-neutral-100 py-1 text-sm last:border-b-0 dark:border-neutral-800"
        >
          {tag}
        </div>
      ))}
    </ScrollArea>
  ),
};
