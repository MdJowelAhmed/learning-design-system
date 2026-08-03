import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './Dialog';

describe('Dialog', () => {
  it('opens dialog content when trigger is clicked', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>Modal Description content</DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal Description content')).toBeInTheDocument();
  });
});
