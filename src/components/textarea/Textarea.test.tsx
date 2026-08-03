import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders correctly with label', () => {
    render(<Textarea label="Bio" placeholder="Tell us about yourself" />);
    expect(screen.getByLabelText('Bio')).toBeInTheDocument();
  });

  it('renders character count when showCount is true', () => {
    render(
      <Textarea
        label="Feedback"
        showCount
        maxLength={200}
        defaultValue="Great product!"
      />,
    );
    expect(screen.getByText('14 / 200')).toBeInTheDocument();
  });
});
