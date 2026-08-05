'use client';

import {
  createContext,
  forwardRef,
  useContext,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../utils';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const iconSizeMap: Record<IconSize, string> = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

export interface IconProps extends HTMLAttributes<SVGElement> {
  name: string;
  size?: IconSize;
  color?: string;
  strokeWidth?: number;
}

export interface IconContextValue {
  size?: IconSize;
  color?: string;
  strokeWidth?: number;
  icons?: Record<string, React.ComponentType<any>>;
}

const IconContext = createContext<IconContextValue>({
  size: 'md',
  strokeWidth: 2,
});

export function IconProvider({
  children,
  size = 'md',
  color,
  strokeWidth = 2,
  icons,
}: IconContextValue & { children: ReactNode }) {
  return (
    <IconContext.Provider value={{ size, color, strokeWidth, icons }}>
      {children}
    </IconContext.Provider>
  );
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      size: customSize,
      color: customColor,
      strokeWidth: customStroke,
      className,
      ...props
    },
    ref,
  ) => {
    const context = useContext(IconContext);
    const size = customSize ?? context.size ?? 'md';
    const strokeWidth = customStroke ?? context.strokeWidth ?? 2;

    // Convert camelCase or kebab-case name to PascalCase for Lucide lookup
    const formatName = (str: string) =>
      str
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

    const iconKey = formatName(name);
    const Component =
      context.icons?.[name] ??
      (LucideIcons as any)[iconKey] ??
      (LucideIcons as any)[name] ??
      LucideIcons.HelpCircle;

    return (
      <Component
        ref={ref}
        strokeWidth={strokeWidth}
        className={cn(iconSizeMap[size], className)}
        style={customColor ? { color: customColor } : undefined}
        {...props}
      />
    );
  },
);

Icon.displayName = 'Icon';
