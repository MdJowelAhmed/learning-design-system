'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

export interface MotionContextValue {
  reducedMotion?: 'user' | 'always' | 'never';
  transition?: {
    type?: string;
    duration?: number;
    stiffness?: number;
    damping?: number;
  };
}

const MotionContext = createContext<MotionContextValue>({});

export function MotionProvider({
  children,
  reducedMotion = 'user',
  transition = { type: 'spring', stiffness: 300, damping: 30 },
}: MotionContextValue & { children: ReactNode }) {
  return (
    <MotionContext.Provider value={{ reducedMotion, transition }}>
      <MotionConfig
        reducedMotion={reducedMotion}
        transition={transition as any}
      >
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function useMotionConfig(): MotionContextValue {
  return useContext(MotionContext);
}
