import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('Text Component', () => {
  it('renders paragraph by default', () => {
    render(<Text>Default paragraph text</Text>);
    const el = screen.getByText('Default paragraph text');
    expect(el.tagName).toBe('P');
  });

  it('renders specified tag via `as` prop', () => {
    render(<Text as="span">Span text</Text>);
    const el = screen.getByText('Span text');
    expect(el.tagName).toBe('SPAN');
  });

  it('applies font size, weight and color classes correctly', () => {
    render(
      <Text size="sm" weight="semibold" color="muted">
        Muted Small Text
      </Text>,
    );
    const el = screen.getByText('Muted Small Text');
    expect(el.className).toContain('text-sm');
    expect(el.className).toContain('font-semibold');
    expect(el.className).toContain('text-neutral-600');
  });
});
