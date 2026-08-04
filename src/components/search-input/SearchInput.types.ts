import type { InputProps } from '../input/Input.types';

export interface SearchInputProps extends Omit<
  InputProps,
  'type' | 'leftIcon'
> {
  /** Fired when the user submits a search (Enter key or button) */
  onSearch?: (value: string) => void;
  /** Debounce delay in ms for the onChange-based search (0 = no debounce) */
  debounceMs?: number;
}
