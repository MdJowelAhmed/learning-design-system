'use client';

import { forwardRef, useId } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from '@myds/icons';
import { cn } from '@myds/utils';
import type { RadioGroupProps, RadioItemProps } from './Radio.types';

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    { className, label, error, orientation = 'vertical', children, ...props },
    ref,
  ) => (
    <div className="flex flex-col gap-1.5">
      {label && (
        <span className="select-none text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </span>
      )}

      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(
          'grid gap-2.5',
          orientation === 'horizontal'
            ? 'auto-cols-max grid-flow-col gap-4'
            : 'grid-flow-row',
          className,
        )}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>

      {error && (
        <p className="text-xs font-medium text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  ),
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export const RadioItem = forwardRef<HTMLButtonElement, RadioItemProps>(
  (
    { className, label, description, disabled, id: customId, value, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const id = customId ?? generatedId;

    return (
      <div className="flex items-start gap-2.5">
        <RadioGroupPrimitive.Item
          ref={ref}
          id={id}
          value={value}
          disabled={disabled}
          className={cn(
            'aspect-square h-4 w-4 rounded-full border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900',
            'mt-0.5 cursor-pointer text-blue-600 transition-all duration-150 dark:text-blue-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2',
            'data-[state=checked]:border-blue-600 dark:data-[state=checked]:border-blue-500',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle className="h-2 w-2 fill-current text-blue-600 dark:text-blue-400" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>

        {label && (
          <div className="grid gap-0.5 leading-none">
            <label
              htmlFor={id}
              className={cn(
                'cursor-pointer select-none text-sm font-medium text-neutral-800 dark:text-neutral-200',
                disabled && 'cursor-not-allowed opacity-60',
              )}
            >
              {label}
            </label>
            {description && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);
RadioItem.displayName = RadioGroupPrimitive.Item.displayName;
