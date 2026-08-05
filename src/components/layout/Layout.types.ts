import type { HTMLAttributes, ReactNode } from 'react';

export type LayoutGap =
  'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: LayoutGap;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
}

export interface FlexProps extends StackProps {}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: LayoutGap;
}

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  centered?: boolean;
}

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
}

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number | '16/9' | '4/3' | '1/1' | '21/9';
  children?: ReactNode;
}
