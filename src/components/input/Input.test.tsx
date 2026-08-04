import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { createRef } from 'react';
import { Input } from './Input';

describe('Input', () => {
  // ─── Render ──────────────────────────────────
  it('renders with label and links it to input via htmlFor', () => {
    render(<Input label="Email" placeholder="you@example.com" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders placeholder text', () => {
    render(<Input placeholder="Search here" />);
    expect(screen.getByPlaceholderText('Search here')).toBeInTheDocument();
  });

  // ─── Typing ──────────────────────────────────
  it('handles user typing (uncontrolled)', () => {
    render(<Input label="Username" />);
    const input = screen.getByLabelText('Username');
    fireEvent.change(input, { target: { value: 'johndoe' } });
    expect(input).toHaveValue('johndoe');
  });

  it('fires onChange callback', () => {
    const handleChange = vi.fn();
    render(<Input label="Username" onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText('Username'), {
      target: { value: 'test' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // ─── States ──────────────────────────────────
  it('renders error state with role="alert" and aria-invalid', () => {
    render(<Input label="Email" error="Invalid email address" />);
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Invalid email address',
    );
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('renders warning message when no error', () => {
    render(<Input label="User" warning="Username may be taken" />);
    expect(screen.getByText('Username may be taken')).toBeInTheDocument();
  });

  it('renders success message when no error or warning', () => {
    render(<Input label="Email" success="Email is available" />);
    expect(screen.getByText('Email is available')).toBeInTheDocument();
  });

  it('renders helper text when no other messages', () => {
    render(<Input label="Bio" helperText="Keep it short" />);
    expect(screen.getByText('Keep it short')).toBeInTheDocument();
  });

  it('prioritises error over warning and success', () => {
    render(
      <Input
        label="Field"
        error="Error msg"
        warning="Warning msg"
        success="Success msg"
      />,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Error msg');
    expect(screen.queryByText('Warning msg')).not.toBeInTheDocument();
    expect(screen.queryByText('Success msg')).not.toBeInTheDocument();
  });

  // ─── Disabled ────────────────────────────────
  it('disables input when disabled prop is set', () => {
    render(<Input label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });

  // ─── ReadOnly ────────────────────────────────
  it('marks input as readOnly', () => {
    render(<Input label="ReadOnly" readOnly value="locked value" />);
    expect(screen.getByLabelText('ReadOnly')).toHaveAttribute('readonly');
  });

  // ─── Loading ─────────────────────────────────
  it('disables input when loading', () => {
    render(<Input label="Loading" loading />);
    expect(screen.getByLabelText('Loading')).toBeDisabled();
  });

  // ─── Required ────────────────────────────────
  it('marks input as required and sets aria-required', () => {
    render(<Input label="Email" required />);
    const input = screen.getByLabelText(/Email/i);
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toBeRequired();
  });

  // ─── Clearable ───────────────────────────────
  it('shows clear button when clearable and value is non-empty', () => {
    render(<Input label="Filter" clearable defaultValue="some value" />);
    expect(
      screen.getByRole('button', { name: /clear input/i }),
    ).toBeInTheDocument();
  });

  it('hides clear button when value is empty', () => {
    render(<Input label="Filter" clearable defaultValue="" />);
    expect(
      screen.queryByRole('button', { name: /clear input/i }),
    ).not.toBeInTheDocument();
  });

  it('calls onClear and clears the value when clear button is clicked', () => {
    const onClear = vi.fn();
    render(
      <Input label="Filter" clearable defaultValue="hello" onClear={onClear} />,
    );
    fireEvent.click(screen.getByRole('button', { name: /clear input/i }));
    expect(onClear).toHaveBeenCalled();
  });

  // ─── Counter ─────────────────────────────────
  it('shows character counter when maxLength is set', () => {
    render(<Input label="Bio" maxLength={100} defaultValue="Hello" />);
    expect(screen.getByText(/5/)).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });

  // ─── Prefix & Suffix ─────────────────────────
  it('renders prefix content', () => {
    render(<Input label="Price" prefix="$" placeholder="0.00" />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('renders suffix content', () => {
    render(<Input label="Domain" suffix=".com" placeholder="mysite" />);
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  // ─── Accessibility ───────────────────────────
  it('sets aria-describedby when message is present', () => {
    render(<Input label="Email" helperText="Some helper" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-describedby');
  });

  // ─── forwardRef ──────────────────────────────
  it('forwards ref to the underlying input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input label="Ref Test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
