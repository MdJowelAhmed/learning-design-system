import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from '../../icons';
import { cn } from '../../utils';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
}

const variantStyles: Record<
  ToastVariant,
  { bg: string; icon: React.ReactNode }
> = {
  success: {
    bg: 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/80 dark:border-emerald-800 dark:text-emerald-200',
    icon: (
      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
    ),
  },
  error: {
    bg: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/80 dark:border-red-800 dark:text-red-200',
    icon: (
      <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
    ),
  },
  warning: {
    bg: 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/80 dark:border-amber-800 dark:text-amber-200',
    icon: (
      <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
    ),
  },
  info: {
    bg: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/80 dark:border-blue-800 dark:text-blue-200',
    icon: (
      <Info className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
    ),
  },
};

export interface ToastProps {
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}

export const ToastItem: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  const { id, title, description, variant = 'info' } = toast;
  const style = variantStyles[variant];

  return (
    <div
      role="status"
      className={cn(
        'animate-content-in flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300',
        style.bg,
      )}
    >
      {style.icon}
      <div className="flex-1 space-y-1">
        <p className="text-sm leading-none font-semibold">{title}</p>
        {description && <p className="text-xs opacity-90">{description}</p>}
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
        aria-label="Dismiss toast"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
