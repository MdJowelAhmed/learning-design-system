import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="rounded-md border p-4 dark:border-neutral-800"
      >
        Make changes to your account details here.
      </TabsContent>
      <TabsContent
        value="password"
        className="rounded-md border p-4 dark:border-neutral-800"
      >
        Change your security password here.
      </TabsContent>
    </Tabs>
  ),
};
