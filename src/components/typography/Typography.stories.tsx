import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from './Blockquote/Blockquote';
import { Code } from './Code/Code';
import { Heading } from './Heading/Heading';
import { Label } from './Label/Label';
import { Link } from './Link/Link';
import { Text } from './Text/Text';

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Headings: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level={1}>Heading 1 (Display / Page Title)</Heading>
      <Heading level={2}>Heading 2 (Section Title)</Heading>
      <Heading level={3}>Heading 3 (Sub-section Title)</Heading>
      <Heading level={4}>Heading 4 (Card / Group Title)</Heading>
      <Heading level={5}>Heading 5 (Component Title)</Heading>
      <Heading level={6}>Heading 6 (Small Subheading)</Heading>
    </div>
  ),
};

export const TextVariants: StoryObj = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-3">
      <Text size="xl">
        Extra Large Text - Lead paragraph or highlight message.
      </Text>
      <Text size="lg">
        Large Text - Subheaders and prominent description text.
      </Text>
      <Text size="md">
        Base Text - Standard paragraph body copy for articles and modals.
      </Text>
      <Text size="sm" color="muted">
        Small Muted Text - Secondary helper text, footnotes, captions.
      </Text>
      <Text size="xs" color="subtle">
        Extra Small Subtle Text - Fine print, timestamps.
      </Text>
    </div>
  ),
};

export const Labels: StoryObj = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4">
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <Label htmlFor="bio">Biography (Optional)</Label>
      <Label htmlFor="pwd" error>
        Password (Invalid)
      </Label>
      <Label htmlFor="disabled" disabled>
        Disabled Field
      </Label>
    </div>
  ),
};

export const Links: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#">Internal Navigation Link</Link>
      <Link href="https://github.com" external>
        External Documentation
      </Link>
      <Link href="#" color="neutral">
        Neutral Colored Link
      </Link>
    </div>
  ),
};

export const CodeSnippets: StoryObj = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4">
      <Text>
        Run <Code copyable>npm install my-design-system</Code> to get started.
      </Text>
      <Code variant="block" copyable>
        {`import { Button, Heading, Card } from 'my-design-system';

export default function App() {
  return <Heading level={1}>Hello World</Heading>;
}`}
      </Code>
    </div>
  ),
};

export const Quotes: StoryObj = {
  render: () => (
    <div className="max-w-xl">
      <Blockquote author="Design System Core Architecture" color="primary">
        Typography should be a foundation component, reused everywhere across
        Card, Dialog, Alert, and Form components.
      </Blockquote>
    </div>
  ),
};
