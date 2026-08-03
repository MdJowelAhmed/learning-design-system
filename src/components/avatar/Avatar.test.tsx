import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders fallback initials correctly', () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
