import { Routes } from './routers/index';

import {ThemeContextProvider} from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';

import { ModalProvider } from 'styled-react-modal'
import {ModalBackground} from './styles/modalBackground';

function App() {
  return (
    <ThemeContextProvider>
      <ModalProvider backgroundComponent={ModalBackground}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ModalProvider>
    </ThemeContextProvider >
  );
}

export default App;