import { FormEvent, useState } from 'react';
import * as Styled from './../../styles/authPages';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Toast } from '../../components/Toast';
import { Letmeask } from '../../components/Letmeask';
import { ToggleTheme } from '../../components/ToggleTheme';

import ilustrationImg from "../../assets/images/illustration.svg";
import googleIcon from "../../assets/images/google-icon.svg";


export const Home = () => {
  const history = useHistory();
  
  const [alert, setAlert] = useState("not-connected");
  const [signInRoom, setSignInRoom] = useState('not-connected');
  const [roomCode, setRoomCode] = useState('');

  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    !user && await signInWithGoogle();
    setAlert("conected");
    setTimeout(() => {
      history.push('/rooms/new');
    }, 2100);
  }

  const handleJoinRoom = async (event:FormEvent) => {
    event.preventDefault();

    if(roomCode.trim()==='') return;

    const roomRef=await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      setSignInRoom('error');
      return;
    }

    setSignInRoom('conectedRoom');
    setTimeout(() => {
      history.push(`/rooms/${roomCode}`);
    },2100);
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
          <ToggleTheme />
          <Letmeask/>

          <Button btnG={true} btnType="fill" onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </Button>

          {alert === "conected" && <Toast type="info">Você foi logado com sucesso!</Toast>}

          <Styled.Separator>ou entre em uma sala</Styled.Separator>

          {signInRoom === "conectedRoom" && <Toast type="info">Conectado a sala com sucesso!</Toast>}
          {signInRoom === "error" && <Toast type="info">A sala não existe!</Toast>}

          <form onSubmit={handleJoinRoom}>
            <Input 
              type="text" 
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />
            <Button btnType="fill" type="submit">
              Entrar na sala
            </Button>
          </form>

        </Styled.Content>
      </Styled.Right>
    </Styled.Container>
  )
}