import { ReactNode, createContext, useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalTheme';
import DefaultTheme from '../styles/styled';
import {light, dark} from '../styles/theme';


type ThemeContextType = {
  isLight:boolean,
  theme: typeof DefaultTheme | undefined,
  toggleTheme: () => void;
}

type ThemeContextProviderProps = {
  children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(light);
  const isLight = theme.isLight;

  useEffect(() => {
    const localTheme = window.localStorage.getItem("@letmeask/nlwtheme");

    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      window.localStorage.setItem("@letmeask/nlwtheme", JSON.stringify(dark));
      setTheme(dark);
    } else {
      window.localStorage.setItem("@letmeask/nlwtheme", JSON.stringify(light));
      setTheme(light);
    }
  };
  console.log(theme)
  return (
    <ThemeContext.Provider
    value={{
      isLight,
      theme,
      toggleTheme,
    }}
  >
    <ThemeProvider
      theme={theme}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </ThemeContext.Provider>
  )
}