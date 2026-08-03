import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('toggles state on click', () => {
    const { getByText } = render(<Toggle>Bold</Toggle>);
    const button = getByText('Bold');
    expect(button).toHaveAttribute('data-state', 'off');
    fireEvent.click(button);
    expect(button).toHaveAttribute('data-state', 'on');
  });
});
