import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

const sampleOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
];

describe('Select', () => {
  it('renders select with label and placeholder', () => {
    render(
      <Select
        label="Country"
        placeholder="Choose country"
        options={sampleOptions}
      />,
    );
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('Choose country')).toBeInTheDocument();
  });
});
