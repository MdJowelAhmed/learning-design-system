import type { ReactNode } from 'react';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface ComboboxProps {
  /** Array of selectable option items */
  options: ComboboxOption[];
  /** Currently selected option value */
  value?: string;
  /** Default selected option value (uncontrolled mode) */
  defaultValue?: string;
  /** Callback fired when selection changes */
  onChange?: (value: string) => void;
  /** Placeholder text shown when no value is selected */
  placeholder?: string;
  /** Search input placeholder text */
  searchPlaceholder?: string;
  /** Text shown when search produces no results */
  emptyText?: string;
  /** Disable the entire combobox */
  disabled?: boolean;
  /** Custom trigger element class */
  className?: string;
}
