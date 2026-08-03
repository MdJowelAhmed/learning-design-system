import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Design System UI</h4>
        <p className="text-sm text-neutral-500">
          An open-source component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'OR CONTINUE WITH EMAIL',
  },
};
