import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Link } from './Link';

describe('Link Component', () => {
  it('renders anchor tag with href', () => {
    render(<Link href="/dashboard">Dashboard</Link>);
    const link = screen.getByRole('link', { name: 'Dashboard' });
    expect(link.getAttribute('href')).toBe('/dashboard');
  });

  it('adds target="_blank" and rel="noopener noreferrer" when external is true', () => {
    render(
      <Link href="https://example.com" external>
        External Docs
      </Link>,
    );
    const link = screen.getByRole('link');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toContain('noopener');
    expect(link.getAttribute('rel')).toContain('noreferrer');
  });
});
