'use client';
import { createContext, useState, useCallback, useEffect } from 'react';

interface LoadingProviderValue {
  numLoaded: number;
  loading: boolean;
  incLoaded: () => void;
}

export type { LoadingProviderValue };

// const NUM_NEEDED = 26;
const NUM_NEEDED = 0;

export const LoadingContext = createContext({});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [numLoaded, setNumLoaded] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const incLoaded = useCallback(() => {
    setNumLoaded((prev: number) => prev + 1);
  }, []);

  useEffect(() => {
    if (numLoaded >= NUM_NEEDED) {
      setLoading(false);
    }
  }, [numLoaded]);

  const contextValue = { numLoaded, loading, incLoaded };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}
