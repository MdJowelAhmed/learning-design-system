import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Blockquote } from './Blockquote';

describe('Blockquote Component', () => {
  it('renders blockquote element with content', () => {
    render(
      <Blockquote>Simplicity is prerequisite for reliability.</Blockquote>,
    );
    const quote = screen.getByText(
      'Simplicity is prerequisite for reliability.',
    );
    expect(quote).toBeInTheDocument();
  });

  it('renders author when author prop is provided', () => {
    render(
      <Blockquote author="Edsger W. Dijkstra">
        Simplicity is prerequisite for reliability.
      </Blockquote>,
    );
    expect(screen.getByText('— Edsger W. Dijkstra')).toBeInTheDocument();
  });
});
