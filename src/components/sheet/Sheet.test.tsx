import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from './Sheet';

describe('Sheet', () => {
  it('opens sheet content when trigger is clicked', () => {
    const { getByText, queryByText } = render(
      <Sheet>
        <SheetTrigger>Open Drawer</SheetTrigger>
        <SheetContent>
          <SheetTitle>Drawer Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    expect(queryByText('Drawer Title')).not.toBeInTheDocument();
    fireEvent.click(getByText('Open Drawer'));
    expect(getByText('Drawer Title')).toBeInTheDocument();
  });
});
