'use client';

import { useCallback, useState } from 'react';

export interface UseDisclosureProps {
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useDisclosure(props: UseDisclosureProps = {}) {
  const { defaultIsOpen = false, onOpen, onClose } = props;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const open = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) onOpen?.();
      return true;
    });
  }, [onOpen]);

  const close = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) onClose?.();
      return false;
    });
  }, [onClose]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) onClose?.();
      else onOpen?.();
      return !prev;
    });
  }, [onClose, onOpen]);

  return { isOpen, open, close, toggle, setIsOpen };
}
