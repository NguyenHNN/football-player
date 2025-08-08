import React, { useState, useEffect, useMemo, useCallback } from 'react';

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // Default theme is light

  // On mount, read the preferred theme from localStorage
  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
  }, []); // Empty dependency array to run only on mount

  // Memoize theme object to prevent unnecessary re-renders
  const theme = useMemo(() => {
    return dark ? themes.dark : themes.light;
  }, [dark]);

  // Memoize toggle function
  const toggle = useCallback(() => {
    const isDark = !dark;
    localStorage.setItem('dark', JSON.stringify(isDark));
    setDark(isDark);
  }, [dark]);

  // Memoize context value
  const contextValue = useMemo(() => ({
    theme,
    dark,
    toggle
  }), [theme, dark, toggle]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };