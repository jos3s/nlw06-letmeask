import * as Styled from './styles';

import {useTheme} from './../../hooks/useTheme';

import { CgDarkMode } from "react-icons/cg";
import { Toast } from '../Toast';
import { useState } from 'react';

export const ToggleTheme = () => {
  const { toggleTheme, isLight} = useTheme();
  const [theme, setTheme] = useState('hidden');

  const handleClick = ()=> {
    setTheme('switch');
    toggleTheme();
    setTimeout(() => {
      setTheme('hidden');
    }, 2000);
  }

  return (
    <Styled.Container>
      {theme==="switch" && <Toast type="info">Tema alterado: {isLight? "Claro":"Escuro"}!</Toast>}
      <Styled.Button title="Switch Theme" onClick={handleClick} >
        <CgDarkMode/>
      </Styled.Button>
    </Styled.Container>
  )
}
