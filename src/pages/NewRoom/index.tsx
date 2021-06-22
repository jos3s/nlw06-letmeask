import * as Styled from './../../styles/authPages';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Letmeask } from '../../components/Letmeask';

import ilustrationImg from "../../assets/images/illustration.svg";

export const NewRoom = () => {
  const { user } = useAuth();

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
          <h2>Eai {user?.name}, crie uma nova sala:</h2>
          <form>
            <Input type="text" placeholder="Nome da sala" />
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