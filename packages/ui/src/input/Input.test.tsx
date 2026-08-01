import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly with label', () => {
    render(<Input label="Email Address" placeholder="you@example.com" />);
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  });

  it('handles user typing', () => {
    const handleChange = vi.fn();
    render(<Input label="Username" onChange={handleChange} />);
    const input = screen.getByLabelText('Username');
    fireEvent.change(input, { target: { value: 'johndoe' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('johndoe');
  });

  it('renders error state correctly', () => {
    render(<Input label="Email" error="Invalid email address" />);
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Invalid email address',
    );
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('disables input when disabled is true', () => {
    render(<Input label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });
});
