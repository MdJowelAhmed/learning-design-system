import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

describe('Heading Component', () => {
  it('renders correct h tag based on level prop', () => {
    render(<Heading level={1}>Heading 1</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent('Heading 1');
  });

  it('renders h3 tag when level 3 is specified', () => {
    render(<Heading level={3}>Heading 3</Heading>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.tagName).toBe('H3');
  });

  it('applies custom size and color classes', () => {
    render(
      <Heading level={2} size="5xl" color="primary">
        Custom Heading
      </Heading>,
    );
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.className).toContain('text-5xl');
    expect(heading.className).toContain('text-primary-600');
  });

  it('supports asChild rendering', () => {
    render(
      <Heading asChild level={2}>
        <span data-testid="custom-child">As Child Heading</span>
      </Heading>,
    );
    const child = screen.getByTestId('custom-child');
    expect(child).toHaveTextContent('As Child Heading');
  });
});
