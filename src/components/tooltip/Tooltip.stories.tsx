import type { Meta, StoryObj } from '@storybook/react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from './Tooltip';
import { Button } from '../button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to bookmarks</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
