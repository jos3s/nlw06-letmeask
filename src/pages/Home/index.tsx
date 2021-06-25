import { FormEvent, useState } from 'react';
import * as Styled from './../../styles/authPages';
import { Link, useHistory } from 'react-router-dom';

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
  
    if(roomCode.trim()==='') {
      setSignInRoom('empty');
      setTimeout(() => {
        setSignInRoom('not-connected');
      }, 2000);
      return;
    };

    const roomRef=await database.ref(`rooms/${roomCode}`).get();
    
    if(!roomRef.exists()){
      setSignInRoom('error');
      setTimeout(() => {
        setSignInRoom('not-connected');
      }, 2000);
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
          <strong className="mobile">Crie salas de Q&amp;A ao-vivo</strong>

          <Button btnG={true} btnType="fill" onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </Button>

          
          <Styled.Separator>ou entre em uma sala</Styled.Separator>

          

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
          <Styled.LinkRoom>Verifique aqui <Link to="/rooms">todas as nossas salas!</Link></Styled.LinkRoom>
        </Styled.Content>
      </Styled.Right>

      {alert === "conected" && (
        <Toast type="info">Você foi logado com sucesso!</Toast>
      )}
      {signInRoom === "conectedRoom" && (
        <Toast type="info">Conectado a sala com sucesso!</Toast>
      )}
      {signInRoom === "empty" && (
        <Toast type="warning">Digite o código da sala!</Toast>
      )}
      {signInRoom === "error" &&( 
        <Toast type="error" className="noAnimation">A sala não existe!</Toast>
      )}

    </Styled.Container>
  )
}