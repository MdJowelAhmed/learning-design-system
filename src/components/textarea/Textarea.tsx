'use client';

import { forwardRef, useId, useState } from 'react';
import { cn } from '../../utils';
import type { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      showCount = false,
      maxLength,
      fullWidth = true,
      id: customId,
      disabled,
      onChange,
      value,
      defaultValue,
      rows = 4,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = customId ?? generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const [charCount, setCharCount] = useState(() => {
      const val = value ?? defaultValue ?? '';
      return String(val).length;
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div
        className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto')}
      >
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-neutral-700 select-none dark:text-neutral-300"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full resize-y rounded-lg p-3 font-sans text-sm transition-all duration-200',
            'border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900',
            'text-neutral-900 placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500',
            'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:focus:border-blue-400',
            'disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-60 dark:disabled:bg-neutral-800',
            error &&
              'border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-400 dark:focus:border-red-400',
            className,
          )}
          {...props}
        />

        <div className="flex items-center justify-between gap-2 text-xs">
          {error ? (
            <p
              id={errorId}
              role="alert"
              className="font-medium text-red-500 dark:text-red-400"
            >
              {error}
            </p>
          ) : helperText ? (
            <p id={helperId} className="text-neutral-500 dark:text-neutral-400">
              {helperText}
            </p>
          ) : (
            <span />
          )}

          {showCount && (
            <span className="ml-auto shrink-0 text-neutral-400 dark:text-neutral-500">
              {charCount}
              {maxLength ? ` / ${maxLength}` : ''}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
