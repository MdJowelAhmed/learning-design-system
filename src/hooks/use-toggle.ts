'use client';

import { useCallback, useState } from 'react';

export function useToggle<T = boolean>(
  options?: T[],
): [T, (value?: React.SetStateAction<T>) => void] {
  const [state, setState] = useState<any>(options ? options[0] : false);

  const toggle = useCallback(
    (value?: React.SetStateAction<T>) => {
      if (value !== undefined) {
        setState(value);
        return;
      }

      if (options && options.length > 0) {
        setState((current: T) => {
          const currentIndex = options.indexOf(current);
          const nextIndex = (currentIndex + 1) % options.length;
          return options[nextIndex];
        });
      } else {
        setState((current: boolean) => !current);
      }
    },
    [options],
  );

  return [state, toggle];
}
