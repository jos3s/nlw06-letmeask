import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalTheme';
import { light, dark } from './styles/theme';

import { Routes } from './routers/index';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <GlobalStyle />
    </ThemeProvider >
  );
}

export default App;