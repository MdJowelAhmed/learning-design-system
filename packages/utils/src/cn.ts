import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge.
 * This is the primary utility for combining Tailwind classes in components.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-primary-500', className)
 * cn('text-sm font-medium', 'text-lg') // → 'text-lg font-medium' (tailwind-merge resolves conflicts)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
