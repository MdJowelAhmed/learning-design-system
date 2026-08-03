import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Button } from '../button';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const InfoAlert: Story = {
  args: {
    variant: 'info',
    title: 'Update Available',
    children: 'A new version of the design system is available for download.',
    onClose: () => {},
  },
};

export const SuccessAlert: Story = {
  args: {
    variant: 'success',
    title: 'Payment Successful',
    children: 'Your subscription has been renewed for another year.',
  },
};

export const WarningAlert: Story = {
  args: {
    variant: 'warning',
    title: 'Storage Near Capacity',
    children: 'You have used 92% of your allocated workspace storage.',
  },
};

export const DangerAlert: Story = {
  args: {
    variant: 'danger',
    title: 'Deployment Failed',
    children: 'Check your build logs for detailed error tracebacks.',
    action: (
      <Button size="xs" variant="danger">
        Retry Deployment
      </Button>
    ),
  },
};
