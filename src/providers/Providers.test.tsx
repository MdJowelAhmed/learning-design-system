import { fireEvent, render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '../theme';
import { Icon, IconProvider, ThemeToggle } from './index';

describe('Enterprise Platform Providers', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('renders ThemeToggle and handles theme toggle click', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle data-testid="theme-toggle" />
      </ThemeProvider>,
    );

    const toggleBtn = screen.getByTestId('theme-toggle');
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('renders unified Icon component dynamically by name', () => {
    render(
      <IconProvider size="lg">
        <Icon name="search" data-testid="search-icon" />
      </IconProvider>,
    );

    const icon = screen.getByTestId('search-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('h-6', 'w-6');
  });
});
