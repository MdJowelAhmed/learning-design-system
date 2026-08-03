'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ReactNode } from 'react';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface ThemeContextValue {
  /** Current theme setting (may be 'system') */
  theme: Theme;
  /** The actual resolved theme after system preference */
  resolvedTheme: ResolvedTheme;
  /** Set the theme */
  setTheme: (theme: Theme) => void;
  /** Toggle between light and dark */
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
  /** Default theme on first load */
  defaultTheme?: Theme;
  /** localStorage key for persistence */
  storageKey?: string;
  /** HTML attribute to set on document element */
  attribute?: string;
  /** Force a specific theme (disables user selection) */
  forcedTheme?: ResolvedTheme;
  /** Disable system theme detection */
  disableSystemTheme?: boolean;
}

// ─────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getStoredTheme(key: string): Theme | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(key);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch {
    // localStorage may be unavailable
  }
  return null;
}

// ─────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'myds-theme',
  attribute = 'data-theme',
  forcedTheme,
  disableSystemTheme = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme(storageKey) ?? defaultTheme;
  });

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  // Resolve the actual theme
  const resolvedTheme: ResolvedTheme = useMemo(() => {
    if (forcedTheme) return forcedTheme;
    if (theme === 'system' && !disableSystemTheme) return systemTheme;
    return theme === 'system' ? 'light' : theme;
  }, [theme, systemTheme, forcedTheme, disableSystemTheme]);

  // Apply theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute(attribute, resolvedTheme);
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme, attribute]);

  // Listen for system theme changes
  useEffect(() => {
    if (disableSystemTheme) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [disableSystemTheme]);

  // Persist theme choice
  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // localStorage may be unavailable
      }
    },
    [storageKey],
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }, [resolvedTheme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
    [theme, resolvedTheme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ─────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return context;
}
