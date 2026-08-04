import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordInput } from './PasswordInput';

describe('PasswordInput', () => {
  it('renders as password type by default', () => {
    render(<PasswordInput label="Password" />);
    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password',
    );
  });

  it('toggles to text type when eye button is clicked', () => {
    render(<PasswordInput label="Password" />);
    const input = screen.getByLabelText('Password');
    const toggle = screen.getByRole('button', { name: /show password/i });

    expect(input).toHaveAttribute('type', 'password');
    fireEvent.click(toggle);
    expect(input).toHaveAttribute('type', 'text');
    expect(
      screen.getByRole('button', { name: /hide password/i }),
    ).toBeInTheDocument();
  });

  it('hides toggle when showToggle is false', () => {
    render(<PasswordInput label="Password" showToggle={false} />);
    expect(
      screen.queryByRole('button', { name: /show password/i }),
    ).not.toBeInTheDocument();
  });

  it('is disabled when disabled prop is set', () => {
    render(<PasswordInput label="Password" disabled />);
    expect(screen.getByLabelText('Password')).toBeDisabled();
  });

  it('shows error message', () => {
    render(<PasswordInput label="Password" error="Too short" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Too short');
  });
});
