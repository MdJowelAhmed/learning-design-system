import type { Meta, StoryObj } from '@storybook/react';
import { FadeIn, SlideIn, ScaleIn } from './Motion';
import { Card } from '../card';

const meta: Meta<typeof FadeIn> = {
  title: 'Components/Motion',
  component: FadeIn,
};

export default meta;
type Story = StoryObj<typeof FadeIn>;

export const Default: Story = {
  render: () => (
    <div className="grid w-[600px] grid-cols-3 gap-4">
      <FadeIn>
        <Card className="p-6 text-center shadow-md">Fade In</Card>
      </FadeIn>
      <SlideIn direction="up">
        <Card className="p-6 text-center shadow-md">Slide Up</Card>
      </SlideIn>
      <ScaleIn>
        <Card className="p-6 text-center shadow-md">Scale In</Card>
      </ScaleIn>
    </div>
  ),
};
