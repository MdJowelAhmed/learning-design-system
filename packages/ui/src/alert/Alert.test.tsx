import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders alert title and body', () => {
    render(<Alert title="System Maintenance">Scheduled for 2 AM UTC.</Alert>);
    expect(screen.getByText('System Maintenance')).toBeInTheDocument();
    expect(screen.getByText('Scheduled for 2 AM UTC.')).toBeInTheDocument();
  });
});
