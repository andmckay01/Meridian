"use client";

// this component creates the scroll context for use at the application root

import { createContext, useState, useContext, FC, ReactNode } from 'react';
import { ScrollContextProps } from '../utilities/interfaces';

const ScrollContext = createContext<ScrollContextProps>({
  scrollPosition: { x: 0, y: 0 },
  setScrollPosition: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  return (
    <ScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};
