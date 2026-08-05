'use client';

import { forwardRef, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Check, Copy } from 'lucide-react';
import { cn } from '../../../utils';
import { codeVariants } from './Code.styles';
import type { CodeProps } from './Code.types';

export const Code = forwardRef<HTMLElement, CodeProps>(
  (
    {
      variant = 'inline',
      copyable = false,
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      if (typeof children === 'string') {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    if (variant === 'block' && !asChild) {
      return (
        <div className="group relative my-2">
          <pre
            ref={ref as any}
            className={cn(codeVariants({ variant: 'block', className }))}
            {...props}
          >
            <code>{children}</code>
          </pre>
          {copyable && typeof children === 'string' && (
            <button
              type="button"
              onClick={handleCopy}
              className="focus:ring-primary-500 absolute top-3 right-3 rounded-md bg-neutral-800 p-1.5 text-neutral-300 opacity-80 transition-all group-hover:opacity-100 hover:bg-neutral-700 hover:text-white focus:ring-2 focus:outline-none"
              title="Copy code"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          )}
        </div>
      );
    }

    const Component = asChild ? Slot : 'code';

    return (
      <span
        className={cn('inline-flex items-center gap-1', copyable && 'relative')}
      >
        <Component
          ref={ref as any}
          className={cn(codeVariants({ variant, className }))}
          {...props}
        >
          {children}
        </Component>
        {copyable && variant === 'inline' && typeof children === 'string' && (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded p-0.5 text-neutral-500 transition-colors hover:text-neutral-900 focus:outline-none dark:hover:text-neutral-100"
            title="Copy snippet"
          >
            {copied ? (
              <Check className="h-3 w-3 text-emerald-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </button>
        )}
      </span>
    );
  },
);

Code.displayName = 'Code';
