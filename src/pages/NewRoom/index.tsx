import {FormEvent,useState} from 'react';
import * as Styled from './../../styles/authPages';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Letmeask } from '../../components/Letmeask';
import { Toast } from '../../components/Toast';

import ilustrationImg from "../../assets/images/illustration.svg";
import { ToggleTheme } from '../../components/ToggleTheme';

export const NewRoom = () => {
  const [newRoom, setNewRoom] = useState('')
  const [newRoomState, setNewRoomState] = useState('not-create');
  const history=useHistory();
  const { user } = useAuth();

  const handleCreateRoom=async (event: FormEvent)=>{
    event.preventDefault();

    if(newRoom.trim()==="") return;

    const roomRef=database.ref('rooms');

    const firebaseRoom=await roomRef.push({
      title:newRoom,
      authorId:user?.id,
    });
    setNewRoomState('create');
    setTimeout(() => {
      history.push(`/rooms/${firebaseRoom.key}`);
    }, 2100);
  }

  return (
    <Styled.Container>
      <Styled.Left as="aside">
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
      </Styled.Left>
      {newRoomState==="create" && <Toast type="info">Sala criada com sucesso!</Toast>}
      <Styled.Right as="main">
        <Styled.Content>
          <Letmeask/>
          <ToggleTheme/>
          <Styled.User>
            <img src={user?.avatar} alt={user?.name}/>
            <h2>Eai {user?.name}, crie uma nova sala:</h2>
          </Styled.User>
          
          <form onSubmit={handleCreateRoom}>
            <Input 
              type="text" 
              placeholder="Nome da sala" 
              value={newRoom}
              onChange={event=> setNewRoom(event.target.value)}
            />
            <Button btnType="fill" type="submit">
              Criar na sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </Styled.Content>
      </Styled.Right>
    </Styled.Container>
  )
}