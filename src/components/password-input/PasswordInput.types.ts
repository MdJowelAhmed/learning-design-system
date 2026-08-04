import type { InputProps } from '../input/Input.types';

export interface PasswordInputProps extends Omit<
  InputProps,
  'type' | 'rightIcon'
> {
  /** Show the toggle button to reveal/hide the password */
  showToggle?: boolean;
}
