'use client';
import { useContext } from 'react';

import { LoadingContext } from '../_contexts/LoadingContext';
import { LoadingProviderValue } from '../_contexts/LoadingContext';

export function useLoadCount(): LoadingProviderValue {
  const context = useContext(LoadingContext) as LoadingProviderValue;
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
