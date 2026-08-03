'use client';

import { useCallback, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * Detects clicks outside a referenced element.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, () => setIsOpen(false));
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true,
): void {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handlerRef.current(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, enabled]);
}

/**
 * Traps focus within a container element.
 * Used for modals, dialogs, and other overlay components.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useFocusTrap(ref, isOpen);
 */
export function useFocusTrap<T extends HTMLElement>(
  ref: RefObject<T | null>,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements =
        el.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusableElements.length === 0) return;

      const firstFocusable = focusableElements[0]!;
      const lastFocusable = focusableElements[focusableElements.length - 1]!;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    // Focus the first focusable element on mount
    const focusableElements =
      el.querySelectorAll<HTMLElement>(focusableSelector);
    if (focusableElements.length > 0) {
      focusableElements[0]!.focus();
    }

    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [ref, enabled]);
}

/**
 * Handles keyboard navigation for list-like components.
 * Supports ArrowUp, ArrowDown, Home, End, Enter, and Escape.
 *
 * @example
 * useKeyboardNavigation({
 *   ref: listRef,
 *   onSelect: (index) => handleSelect(index),
 *   onEscape: () => setIsOpen(false),
 *   itemCount: items.length,
 * });
 */
export function useKeyboardNavigation({
  ref,
  onSelect,
  onEscape,
  itemCount,
  activeIndex = -1,
  onActiveIndexChange,
  orientation = 'vertical',
  loop = true,
  enabled = true,
}: {
  ref: RefObject<HTMLElement | null>;
  onSelect?: (index: number) => void;
  onEscape?: () => void;
  itemCount: number;
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  orientation?: 'vertical' | 'horizontal';
  loop?: boolean;
  enabled?: boolean;
}): void {
  const onSelectRef = useRef(onSelect);
  const onEscapeRef = useRef(onEscape);
  const onChangeRef = useRef(onActiveIndexChange);

  onSelectRef.current = onSelect;
  onEscapeRef.current = onEscape;
  onChangeRef.current = onActiveIndexChange;

  const navigate = useCallback(
    (direction: 1 | -1) => {
      let nextIndex = activeIndex + direction;

      if (loop) {
        if (nextIndex < 0) nextIndex = itemCount - 1;
        if (nextIndex >= itemCount) nextIndex = 0;
      } else {
        nextIndex = Math.max(0, Math.min(itemCount - 1, nextIndex));
      }

      onChangeRef.current?.(nextIndex);
    },
    [activeIndex, itemCount, loop],
  );

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
    const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case prevKey:
          e.preventDefault();
          navigate(-1);
          break;
        case nextKey:
          e.preventDefault();
          navigate(1);
          break;
        case 'Home':
          e.preventDefault();
          onChangeRef.current?.(0);
          break;
        case 'End':
          e.preventDefault();
          onChangeRef.current?.(itemCount - 1);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (activeIndex >= 0) onSelectRef.current?.(activeIndex);
          break;
        case 'Escape':
          e.preventDefault();
          onEscapeRef.current?.();
          break;
      }
    };

    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [ref, enabled, orientation, navigate, activeIndex, itemCount]);
}
