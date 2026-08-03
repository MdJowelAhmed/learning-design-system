import type { ReactNode } from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string | ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}
