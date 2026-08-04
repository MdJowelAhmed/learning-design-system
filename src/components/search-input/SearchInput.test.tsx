import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('renders with search icon', () => {
    render(<SearchInput label="Search" />);
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('calls onSearch when Enter is pressed', () => {
    const onSearch = vi.fn();
    render(<SearchInput label="Search" onSearch={onSearch} />);
    const input = screen.getByLabelText('Search');
    fireEvent.change(input, { target: { value: 'react' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSearch).toHaveBeenCalledWith('react');
  });

  it('shows clear button when there is a value', () => {
    render(<SearchInput label="Search" defaultValue="hello" />);
    expect(
      screen.getByRole('button', { name: /clear input/i }),
    ).toBeInTheDocument();
  });

  it('calls onClear and onSearch when clear button is clicked', () => {
    const onSearch = vi.fn();
    const onClear = vi.fn();
    render(
      <SearchInput
        label="Search"
        defaultValue="hello"
        onSearch={onSearch}
        onClear={onClear}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /clear input/i }));
    expect(onClear).toHaveBeenCalled();
    expect(onSearch).toHaveBeenCalledWith('');
  });

  it('is disabled when disabled prop is set', () => {
    render(<SearchInput label="Search" disabled />);
    expect(screen.getByLabelText('Search')).toBeDisabled();
  });
});
