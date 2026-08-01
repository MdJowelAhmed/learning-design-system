import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RadioGroup, RadioItem } from './Radio';

describe('RadioGroup', () => {
  it('renders radio items correctly', () => {
    render(
      <RadioGroup label="Plan Selection">
        <RadioItem value="free" label="Free Plan" />
        <RadioItem value="pro" label="Pro Plan" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText('Free Plan')).toBeInTheDocument();
    expect(screen.getByLabelText('Pro Plan')).toBeInTheDocument();
  });
});
