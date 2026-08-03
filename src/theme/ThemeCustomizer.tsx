import React from 'react';
import { useTheme, brandPalettes, BrandColor } from './ThemeProvider';
import { cn } from '../utils';

export const ThemeCustomizer: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { brandColor, setBrandColor, theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        'space-y-4 rounded-xl border bg-white p-4 shadow-sm dark:bg-neutral-900',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
          Theme Mode
        </h4>
        <div className="flex gap-1 rounded-lg border bg-neutral-100 p-1 dark:bg-neutral-800">
          {(['light', 'dark', 'system'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setTheme(mode)}
              className={cn(
                'rounded-md px-2 py-1 text-xs font-medium capitalize transition-all',
                theme === mode
                  ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-950 dark:text-neutral-50'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400',
              )}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
          Brand Accent Color
        </h4>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(brandPalettes) as BrandColor[]).map((color) => {
            const palette = brandPalettes[color];
            const isSelected = brandColor === color;

            return (
              <button
                key={color}
                onClick={() => setBrandColor(color)}
                style={{ backgroundColor: palette.primary }}
                className={cn(
                  'h-6 w-6 rounded-full transition-transform focus:ring-2 focus:ring-offset-2 focus:outline-none',
                  isSelected
                    ? 'scale-110 ring-2 ring-neutral-900 dark:ring-neutral-50'
                    : 'hover:scale-105',
                )}
                aria-label={`Select ${color} brand color`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
