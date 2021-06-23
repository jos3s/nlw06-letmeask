import * as Styled from './styles';

import {useTheme} from './../../hooks/useTheme';

import { CgDarkMode } from "react-icons/cg";

export const ToggleTheme = () => {
  const { toggleTheme} = useTheme();

  return (
    <Styled.Button title="Switch Theme" onClick={toggleTheme} >
      <CgDarkMode/>
    </Styled.Button>
  )
}
