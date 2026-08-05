'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export interface PortalContextValue {
  container?: HTMLElement | null;
}

const PortalContext = createContext<PortalContextValue>({});

export function PortalProvider({
  children,
  containerId = 'ds-portal-root',
}: {
  children: ReactNode;
  containerId?: string;
}) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    let element = document.getElementById(containerId);
    if (!element) {
      element = document.createElement('div');
      element.id = containerId;
      document.body.appendChild(element);
    }
    setContainer(element);
  }, [containerId]);

  return (
    <PortalContext.Provider value={{ container }}>
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal(): PortalContextValue {
  return useContext(PortalContext);
}
