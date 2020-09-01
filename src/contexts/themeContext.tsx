import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, Platform } from 'react-native';
import _ from 'lodash';

import { setThemeKeyToStorage, getThemeKeyFromStorage } from '../utils/storage';
import { ITheme, TThemeKey } from '../themes/interface';
import { LIGHT_THEME, THEMES } from '../themes';
import { THEME_KEYS, STATUS_BAR_STYLES } from '../constants';

interface ContextProps {
  theme: ITheme;
  themeKey: TThemeKey;
  switchTheme: (themeKey: TThemeKey) => void;
}

const DEFAULT_THEME_CONTEXT: ContextProps = {
  theme: null,
  themeKey: null,
  switchTheme: _.noop,
};

export const ThemeContext = React.createContext(DEFAULT_THEME_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [themeKey, setThemeKey] = useState<TThemeKey>(THEME_KEYS.LIGHT_THEME);
  const [theme, setTheme] = useState<ITheme>(LIGHT_THEME);

  const findTheme = useCallback(
    (desiredThemeKey: TThemeKey) =>
      _.find(THEMES, (someTheme) => someTheme._KEY === desiredThemeKey) ||
      THEMES[0],
    [],
  );

  useEffect(() => {
    getThemeKeyFromStorage().then((storageThemeKey: TThemeKey) => {
      if (storageThemeKey) {
        setTheme(findTheme(storageThemeKey));
        setThemeKey(storageThemeKey);
      }
    });
  }, [getThemeKeyFromStorage, setTheme]);

  const switchTheme = useCallback(
    (newThemeKey: TThemeKey) => {
      setTheme(findTheme(newThemeKey));
      setThemeKey(newThemeKey);
      setThemeKeyToStorage(newThemeKey);
    },
    [setTheme, setThemeKeyToStorage],
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeKey,
        switchTheme,
      }}>
      {Platform.OS !== 'web' && (
        <StatusBar
          barStyle={
            themeKey === THEME_KEYS.LIGHT_THEME
              ? STATUS_BAR_STYLES.DARK_CONTENT
              : STATUS_BAR_STYLES.LIGHT_CONTENT
          }
        />
      )}
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
