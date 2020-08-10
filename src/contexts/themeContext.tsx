import React, { useState, useEffect, useCallback } from 'react';
import noop from 'lodash/noop';

import { setThemeToStorage, getThemeFromStorage } from '../utilities';
import { ITheme } from '../themes/interface';
import { LIGHT_THEME } from '../themes';

interface ContextProps {
  theme: ITheme;
  switchTheme: (theme: ITheme) => void;
}

const DEFAULT_THEME_CONTEXT: ContextProps = {
  theme: null,
  switchTheme: noop,
};

export const ThemeContext = React.createContext(DEFAULT_THEME_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [theme, setTheme] = useState<ITheme>(LIGHT_THEME);

  useEffect(() => {
    getThemeFromStorage().then((storageTheme) => {
      if (storageTheme) {
        setTheme(storageTheme);
      }
    });
  }, [getThemeFromStorage, setTheme]);

  const switchTheme = useCallback(
    (someTheme: ITheme) => {
      setTheme(someTheme);
      setThemeToStorage(someTheme);
    },
    [setTheme, setThemeToStorage],
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
