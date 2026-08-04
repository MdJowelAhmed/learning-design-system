import type { RefCallback, MutableRefObject, Ref } from 'react';

/**
 * Merges multiple React refs into a single ref callback.
 * Useful when a component needs both a forwarded ref and an internal ref
 * pointing to the same DOM node.
 */
export function mergeRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = node;
      }
    }
  };
}
