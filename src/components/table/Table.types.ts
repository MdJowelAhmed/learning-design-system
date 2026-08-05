import type {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';

export type TableVariant =
  'default' | 'bordered' | 'striped' | 'minimal' | 'ghost';
export type TableSize = 'xs' | 'sm' | 'md' | 'lg';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /**
   * Visual table variant.
   * @default 'default'
   */
  variant?: TableVariant;
  /**
   * Table cell padding size token.
   * @default 'md'
   */
  size?: TableSize;
  /**
   * Wraps table in horizontal scroll container for responsive mobile viewports.
   * @default true
   */
  responsive?: boolean;
  /**
   * Expands table to 100% container width.
   * @default true
   */
  fullWidth?: boolean;
  /**
   * Merge props onto child element via Radix Slot.
   */
  asChild?: boolean;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Highlight row on hover.
   * @default true
   */
  hoverable?: boolean;
  /**
   * Highlight row as selected.
   * @default false
   */
  selected?: boolean;
  /**
   * Enable cursor pointer and focus ring for interactive rows.
   * @default false
   */
  clickable?: boolean;
  /**
   * Dim row and disable pointer events.
   * @default false
   */
  disabled?: boolean;
}

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Text alignment.
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Displays sort direction indicator icon.
   * @default false
   */
  sortable?: boolean;
  /**
   * Sort direction state ('asc', 'desc', or false).
   */
  sortDirection?: 'asc' | 'desc' | false;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Text alignment.
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Formats font as tabular monospace numbers.
   * @default false
   */
  numeric?: boolean;
  /**
   * Truncates text with ellipsis.
   * @default false
   */
  truncate?: boolean;
  /**
   * Allow text wrapping.
   * @default true
   */
  wrap?: boolean;
}

export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}

export interface TableEmptyProps extends Omit<
  HTMLAttributes<HTMLTableCellElement>,
  'title'
> {
  /**
   * Empty state title.
   * @default 'No Data'
   */
  title?: ReactNode;
  /**
   * Empty state description.
   * @default 'There is no data available.'
   */
  description?: ReactNode;
  /**
   * Custom empty state icon or graphic.
   */
  icon?: ReactNode;
  /**
   * Column span for the empty state cell.
   * @default 100
   */
  colSpan?: number;
}

export interface TableLoadingProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Number of skeleton rows to render.
   * @default 5
   */
  rows?: number;
  /**
   * Number of skeleton columns per row.
   * @default 4
   */
  columns?: number;
  /**
   * Column span if using a single cell skeleton row.
   */
  colSpan?: number;
}
