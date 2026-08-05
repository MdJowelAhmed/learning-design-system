import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './index';

describe('ContextMenu Component System', () => {
  it('renders context menu trigger area and opens menu on right click', () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="context-area">
          Right Click Here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Edit</ContextMenuItem>
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    const trigger = screen.getByTestId('context-area');
    expect(trigger).toBeInTheDocument();

    fireEvent.contextMenu(trigger);
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
});
