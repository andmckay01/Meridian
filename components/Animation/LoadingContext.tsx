import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface LoadingContextType {
  animationPlayed: boolean;
  setAnimationPlayed: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default undefined value, but tell TypeScript the shape of it
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Custom hook for using context
export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Define props type for LoadingProvider component
interface LoadingProviderProps {
  children: ReactNode;
}

// LoadingProvider component with types for props
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ animationPlayed, setAnimationPlayed }}>
      {children}
    </LoadingContext.Provider>
  );
};
