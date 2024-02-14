"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { preloadSphere } from '../Globe/preloadSphere'; // Adjust the import path as necessary
import * as THREE from 'three';

// Define the context value type
interface SphereContextType {
  sphere: THREE.Mesh | null;
  isLoaded: boolean;
}

// Create the context with an initial value
const SphereContext = createContext<SphereContextType | undefined>(undefined);

// Define the provider props type
interface SphereProviderProps {
  children: ReactNode;
}

export const SphereProvider: React.FC<SphereProviderProps> = ({ children }) => {
  const [sphere, setSphere] = useState<THREE.Mesh | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadSphere().then((loadedSphere) => {
      setSphere(loadedSphere);
      setIsLoaded(true);
    }).catch(error => console.error("Error preloading globe assets:", error));
  }, []);

  const value = { sphere, isLoaded };

  console.log('value . sphere');
  console.log(value.sphere);

  return (
    <SphereContext.Provider value={value}>
      {children}
    </SphereContext.Provider>
  );
};

// Hook to use the sphere context
export const useSphere = (): SphereContextType => {
  const context = useContext(SphereContext);
  if (context === undefined) {
    throw new Error('useSphere must be used within a SphereProvider');
  }
  return context;
};
