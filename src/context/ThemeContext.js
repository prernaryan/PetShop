import React, {useState, createContext, useContext} from 'react';
import {COLOR_SCHEME} from '../constants/ColorsSchema';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(COLOR_SCHEME.LIGHT);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === COLOR_SCHEME.LIGHT ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT,
    );
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
