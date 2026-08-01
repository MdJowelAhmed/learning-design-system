import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders switch with label', () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByLabelText('Enable notifications')).toBeInTheDocument();
  });
});
