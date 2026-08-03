import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard';

describe('HoverCard', () => {
  it('renders trigger element correctly', () => {
    const { getByText } = render(
      <HoverCard>
        <HoverCardTrigger>@nextjs</HoverCardTrigger>
        <HoverCardContent>Next.js Framework</HoverCardContent>
      </HoverCard>,
    );
    expect(getByText('@nextjs')).toBeInTheDocument();
  });
});
