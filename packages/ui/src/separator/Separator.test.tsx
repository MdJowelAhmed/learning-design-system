import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Separator } from './Separator';

describe('Separator', () => {
  it('renders separator with label', () => {
    render(<Separator label="OR" />);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });
});
