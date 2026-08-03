'use client';

import { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import { inputVariants } from './Input.styles';
import type { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputSize = 'md',
      state,
      label,
      error,
      helperText,
      leftAdornment,
      rightAdornment,
      fullWidth = true,
      id: customId,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = customId ?? generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const computedState = error ? 'error' : state;

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

        <div className="relative flex w-full items-center">
          {leftAdornment && (
            <div className="pointer-events-none absolute left-3 shrink-0 text-neutral-400 dark:text-neutral-500">
              {leftAdornment}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              inputVariants({ inputSize, state: computedState }),
              leftAdornment &&
                (inputSize === 'sm'
                  ? 'pl-8'
                  : inputSize === 'lg'
                    ? 'pl-11'
                    : 'pl-9'),
              rightAdornment &&
                (inputSize === 'sm'
                  ? 'pr-8'
                  : inputSize === 'lg'
                    ? 'pr-11'
                    : 'pr-9'),
              className,
            )}
            {...props}
          />

          {rightAdornment && (
            <div className="absolute right-3 shrink-0 text-neutral-400 dark:text-neutral-500">
              {rightAdornment}
            </div>
          )}
        </div>

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs font-medium text-red-500 dark:text-red-400"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p
            id={helperId}
            className="text-xs text-neutral-500 dark:text-neutral-400"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
