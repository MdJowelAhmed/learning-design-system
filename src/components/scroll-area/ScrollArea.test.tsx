import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScrollArea } from './index';

describe('ScrollArea Component System', () => {
  it('renders content inside viewport container', () => {
    render(
      <ScrollArea className="h-40 w-40">
        <div>Scrollable content text</div>
      </ScrollArea>,
    );

    expect(screen.getByText('Scrollable content text')).toBeInTheDocument();
  });
});
