import * as Styled from './styles';

import { useRooms } from '../../hooks/useRooms';

import { Header } from "../../components/Header";
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { RoomCard } from '../../components/RoomCard';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';


export const Rooms = () => {
  const history = useHistory();
  const {rooms} = useRooms();
  
  const openRooms= rooms.filter(room => !room.endeAt);

  return (
    <Styled.Container>
      <Header>
        <ToggleTheme/>
      </Header>

      <Styled.Main>
        
        <Styled.Left>
          <Styled.Title>
            <h1>Salas:</h1>
            <Button btnType="outline" onClick={()=> history.push('/rooms/new')}>Crie uma sala</Button>
          </Styled.Title>

          <Styled.Rooms>
            {rooms.map(room=>{
              return (
                <RoomCard 
                  key={room.id} 
                  title={room.name} 
                  endeAt={room.endeAt} 
                  code={room.id}
                />
              )
            })}       
          </Styled.Rooms>
          
        </Styled.Left>
        
        <Styled.Right>
          <Styled.Cards>
            <Card 
              btnStyle="primary" 
              value={rooms.length} 
              text="Salas" />
            <Card 
              btnStyle="fill" 
              value={openRooms.length} 
              text="Abertas" />
            <Card 
              btnStyle="outline" 
              value={rooms.length-openRooms.length} 
              text="Fechadas" />
          </Styled.Cards>
        </Styled.Right>
        
      </Styled.Main>
    </Styled.Container>
  );
};
