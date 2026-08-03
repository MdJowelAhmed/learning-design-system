import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './useToast';
import { Button } from '../button';

const ToastDemo = () => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="primary"
        onClick={() =>
          addToast({
            title: 'Successfully saved!',
            description: 'Your profile changes have been applied.',
            variant: 'success',
          })
        }
      >
        Success Toast
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          addToast({
            title: 'Payment failed!',
            description: 'Unable to process card payment.',
            variant: 'error',
          })
        }
      >
        Error Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          addToast({
            title: 'System Notice',
            description: 'Scheduled maintenance tonight at 12 AM.',
            variant: 'info',
          })
        }
      >
        Info Toast
      </Button>
    </div>
  );
};

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
