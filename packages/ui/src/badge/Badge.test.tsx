import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders badge content', () => {
    render(<Badge>New Feature</Badge>);
    expect(screen.getByText('New Feature')).toBeInTheDocument();
  });
});
