import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './index';

describe('Command Component System', () => {
  it('renders command palette inside dialog when open is true', () => {
    render(
      <Command open={true}>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    expect(
      screen.getByPlaceholderText('Type a command...'),
    ).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('Search Emoji')).toBeInTheDocument();
  });
});
