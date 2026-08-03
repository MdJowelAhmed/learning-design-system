'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export type BrandColor =
  'indigo' | 'emerald' | 'violet' | 'rose' | 'amber' | 'blue' | 'cyan' | 'zinc';

export const brandPalettes: Record<
  BrandColor,
  { primary: string; hover: string; ring: string }
> = {
  indigo: { primary: '#6366f1', hover: '#4f46e5', ring: '#a5b4fc' },
  emerald: { primary: '#10b981', hover: '#059669', ring: '#6ee7b7' },
  violet: { primary: '#8b5cf6', hover: '#7c3aed', ring: '#c4b5fd' },
  rose: { primary: '#f43f5e', hover: '#e11d48', ring: '#fca5a5' },
  amber: { primary: '#f59e0b', hover: '#d97706', ring: '#fde68a' },
  blue: { primary: '#3b82f6', hover: '#2563eb', ring: '#93c5fd' },
  cyan: { primary: '#06b6d4', hover: '#0891b2', ring: '#67e8f9' },
  zinc: { primary: '#18181b', hover: '#09090b', ring: '#a1a1aa' },
};

export interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  brandColor: BrandColor;
  setTheme: (theme: Theme) => void;
  setBrandColor: (color: BrandColor) => void;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultBrandColor?: BrandColor;
  storageKey?: string;
  attribute?: string;
  forcedTheme?: ResolvedTheme;
  disableSystemTheme?: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

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

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultBrandColor = 'indigo',
  storageKey = 'myds-theme',
  attribute = 'data-theme',
  forcedTheme,
  disableSystemTheme = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme(storageKey) ?? defaultTheme;
  });

  const [brandColor, setBrandColorState] =
    useState<BrandColor>(defaultBrandColor);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  const resolvedTheme: ResolvedTheme = useMemo(() => {
    if (forcedTheme) return forcedTheme;
    if (theme === 'system' && !disableSystemTheme) return systemTheme;
    return theme === 'system' ? 'light' : theme;
  }, [theme, systemTheme, forcedTheme, disableSystemTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute(attribute, resolvedTheme);
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;

    const palette = brandPalettes[brandColor];
    if (palette) {
      root.style.setProperty('--ds-color-primary', palette.primary);
      root.style.setProperty('--ds-color-primary-hover', palette.hover);
      root.style.setProperty('--ds-color-ring', palette.ring);
    }
  }, [resolvedTheme, brandColor, attribute]);

  useEffect(() => {
    if (disableSystemTheme) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [disableSystemTheme]);

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

  const setBrandColor = useCallback((color: BrandColor) => {
    setBrandColorState(color);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }, [resolvedTheme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      brandColor,
      setTheme,
      setBrandColor,
      toggleTheme,
    }),
    [theme, resolvedTheme, brandColor, setTheme, setBrandColor, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return context;
}
