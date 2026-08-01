import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { CheckCircle2, AlertTriangle, ShieldCheck } from '@myds/icons';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'soft',
  },
};

export const Statuses: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="success" leftIcon={<CheckCircle2 className="h-3 w-3" />}>
        Verified
      </Badge>
      <Badge variant="warning" leftIcon={<AlertTriangle className="h-3 w-3" />}>
        Pending
      </Badge>
      <Badge variant="danger">Failed</Badge>
      <Badge variant="neutral">Draft</Badge>
    </div>
  ),
};

export const LiveDot: Story = {
  args: {
    children: 'Live System',
    variant: 'success',
    dot: true,
    pill: true,
  },
};
