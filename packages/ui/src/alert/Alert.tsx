'use client';

import { forwardRef } from 'react';
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from '@myds/icons';
import { cn } from '@myds/utils';
import { alertVariants } from './Alert.styles';
import type { AlertProps } from './Alert.types';

const defaultIcons = {
  info: <Info className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />,
  success: (
    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
  ),
  warning: (
    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
  ),
  danger: (
    <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
  ),
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'info',
      title,
      icon,
      onClose,
      action,
      children,
      ...props
    },
    ref,
  ) => {
    const iconToRender =
      icon ?? (variant ? defaultIcons[variant] : defaultIcons.info);

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        {iconToRender}

        <div className="grid flex-1 gap-1">
          {title && (
            <h5 className="font-semibold leading-none tracking-tight">
              {title}
            </h5>
          )}
          {children && (
            <div className="text-sm leading-relaxed opacity-90">{children}</div>
          )}
          {action && <div className="mt-2">{action}</div>}
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss alert"
            className="shrink-0 rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-current"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';
