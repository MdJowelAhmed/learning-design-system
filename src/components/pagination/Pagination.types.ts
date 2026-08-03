import type { HTMLAttributes, AnchorHTMLAttributes } from 'react';
import type { ButtonProps } from '../button/Button.types';

export type PaginationProps = HTMLAttributes<HTMLElement>;
export type PaginationContentProps = HTMLAttributes<HTMLUListElement>;
export type PaginationItemProps = HTMLAttributes<HTMLLIElement>;
export interface PaginationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  size?: ButtonProps['size'];
}
