import { Routes } from './routers/index';

import {ThemeContextProvider} from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeContextProvider >
  );
}

export default App;