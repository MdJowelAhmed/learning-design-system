/**
 * Accessibility utility functions for components.
 */

/**
 * Generates a unique ID for ARIA attributes.
 * Uses crypto.randomUUID when available, falls back to timestamp-based ID.
 */
export function generateId(prefix = 'myds'): string {
  const random =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10);
  return `${prefix}-${random}`;
}

/**
 * Returns aria-describedby value for form fields with helper/error text.
 */
export function getDescribedBy(
  id: string,
  options: { hasHelperText?: boolean; hasErrorText?: boolean },
): string | undefined {
  const parts: string[] = [];
  if (options.hasErrorText) parts.push(`${id}-error`);
  if (options.hasHelperText) parts.push(`${id}-helper`);
  return parts.length > 0 ? parts.join(' ') : undefined;
}

/**
 * Returns appropriate ARIA attributes for loading states.
 */
export function getLoadingProps(isLoading: boolean) {
  return {
    'aria-busy': isLoading,
    'aria-disabled': isLoading || undefined,
  } as const;
}

/**
 * Handles keyboard events for custom interactive elements.
 * Triggers callback on Enter or Space key.
 */
export function handleKeyboardActivation(
  callback: () => void,
): (event: { key: string; preventDefault: () => void }) => void {
  return (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };
}

/**
 * Creates a visually hidden style object for screen-reader-only content.
 */
export const visuallyHidden: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
};
