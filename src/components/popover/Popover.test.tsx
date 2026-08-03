import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';

describe('Popover', () => {
  it('opens popover content on trigger click', () => {
    const { getByText, queryByText } = render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Body</PopoverContent>
      </Popover>,
    );

    expect(queryByText('Popover Body')).not.toBeInTheDocument();
    fireEvent.click(getByText('Open Popover'));
    expect(getByText('Popover Body')).toBeInTheDocument();
  });
});
