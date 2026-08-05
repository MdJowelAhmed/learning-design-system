import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './index';

describe('Collapsible Component System', () => {
  it('toggles collapsible content visibility on trigger click', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle Details</CollapsibleTrigger>
        <CollapsibleContent>Secret details revealed!</CollapsibleContent>
      </Collapsible>,
    );

    expect(screen.getByText('Toggle Details')).toBeInTheDocument();
    expect(
      screen.queryByText('Secret details revealed!'),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Toggle Details'));
    expect(screen.getByText('Secret details revealed!')).toBeInTheDocument();
  });
});
