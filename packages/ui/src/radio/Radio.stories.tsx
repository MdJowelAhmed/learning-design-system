import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioItem } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="starter" label="Subscription Plan">
      <RadioItem
        value="starter"
        label="Starter"
        description="Ideal for personal projects ($0/mo)"
      />
      <RadioItem
        value="pro"
        label="Pro"
        description="For professional developers ($19/mo)"
      />
      <RadioItem
        value="enterprise"
        label="Enterprise"
        description="Custom solutions for large teams"
      />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup
      defaultValue="light"
      orientation="horizontal"
      label="Theme Preference"
    >
      <RadioItem value="light" label="Light" />
      <RadioItem value="dark" label="Dark" />
      <RadioItem value="system" label="System" />
    </RadioGroup>
  ),
};
