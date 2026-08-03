import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    render(<Checkbox label="Accept Terms & Conditions" />);
    expect(
      screen.getByLabelText('Accept Terms & Conditions'),
    ).toBeInTheDocument();
  });
});
