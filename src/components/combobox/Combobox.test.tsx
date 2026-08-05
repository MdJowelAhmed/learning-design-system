import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Combobox } from './index';

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'svelte', label: 'SvelteKit' },
  { value: 'vue', label: 'Vue.js' },
];

describe('Combobox Component System', () => {
  it('renders trigger with placeholder and opens options list on click', () => {
    render(<Combobox options={frameworks} placeholder="Select framework..." />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveTextContent('Select framework...');

    fireEvent.click(trigger);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('SvelteKit')).toBeInTheDocument();
  });

  it('filters options based on search query', () => {
    render(<Combobox options={frameworks} placeholder="Select framework..." />);

    fireEvent.click(screen.getByRole('combobox'));
    const input = screen.getByPlaceholderText('Search options...');
    fireEvent.change(input, { target: { value: 'Svelte' } });

    expect(screen.getByText('SvelteKit')).toBeInTheDocument();
    expect(screen.queryByText('Next.js')).not.toBeInTheDocument();
  });
});
