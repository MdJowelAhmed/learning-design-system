import type { HTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { badgeVariants } from './Badge.styles';

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  /** Left icon/dot slot */
  leftIcon?: ReactNode;
  /** Right icon slot (e.g. remove button) */
  rightIcon?: ReactNode;
  /** Show live pulse dot */
  dot?: boolean;
}
