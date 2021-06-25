import * as Styled from './styles';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { useEffect } from 'react';
import { NotFoundIcon } from '../../components/NotFoundIcon';

export const NotFound = () => {  
  const history =useHistory();

  useEffect(() => {
    setTimeout(() =>{
      history.push('/');
    },3000);
  });

  return (
    <Styled.Container>
      <Header>
        <ToggleTheme/>
      </Header>

      <Styled.Main>
        <Styled.Title>
          <h1>Página não encontrada...</h1>
        </Styled.Title>
        <NotFoundIcon/>
      </Styled.Main>

      <Toast type="error" className="noAnimation">Você vai ser redirecionando para a home!</Toast>

    </Styled.Container>
  );
};
