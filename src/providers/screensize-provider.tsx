import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';

export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const ScreenSizeContext = createContext<ScreenSize>('sm');

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};

const ScreenSizeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('sm');

  const updateScreenSize = () => {
    const width = window.innerWidth;

    if (width >= 1536) setScreenSize('2xl');
    else if (width >= 1280) setScreenSize('xl');
    else if (width >= 1024) setScreenSize('lg');
    else if (width >= 768) setScreenSize('md');
    else setScreenSize('sm');
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;