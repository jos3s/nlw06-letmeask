import { useState } from 'react';
import * as Styled from './../../styles/authPages';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Toast } from '../../components/Toast';
import { Letmeask } from '../../components/Letmeask';

import ilustrationImg from "../../assets/images/illustration.svg";
import googleIcon from "../../assets/images/google-icon.svg";

export const Home = () => {
  const history = useHistory();
  const [alert, setAlert] = useState("not-connected");
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    !user && await signInWithGoogle();
    setAlert("conected");
    setTimeout(() => {
      history.push('/rooms/new');
    }, 3000);
  }

  return (
    <Styled.Container>
      <Styled.Left as="aside">
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
      </Styled.Left>
      <Styled.Right as="main">
        <Styled.Content>
          <Letmeask/>

          <Button btnG={true} btnType="fill" onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </Button>

          {alert === "conected" && <Toast type="info">Você foi logado com sucesso!</Toast>}

          <Styled.Separator>ou entre em uma sala</Styled.Separator>

          <form>
            <Input type="text" placeholder="Digite o código da sala" />
            <Button btnType="fill" type="submit">
              Entrar na sala
            </Button>
          </form>

        </Styled.Content>
      </Styled.Right>
    </Styled.Container>
  )
}