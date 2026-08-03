import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ToastProvider, useToast } from './useToast';

const TestComponent = () => {
  const { addToast } = useToast();
  return (
    <button
      onClick={() =>
        addToast({
          title: 'Success!',
          description: 'Operation completed',
          variant: 'success',
        })
      }
    >
      Show Toast
    </button>
  );
};

describe('Toast', () => {
  it('renders and displays toast notification when triggered', () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );

    expect(screen.queryByText('Success!')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Show Toast'));
    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(screen.getByText('Operation completed')).toBeInTheDocument();
  });
});
