import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card';
import { Button } from '../button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>
          Enter your details below to set up your workspace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          By continuing, you agree to our terms of service and privacy policy.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Card hoverable className="max-w-md">
      <CardHeader>
        <CardTitle>Interactive Analytics Card</CardTitle>
        <CardDescription>
          Click to view detailed metrics report.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          $48,290.00
        </div>
      </CardContent>
    </Card>
  ),
};
