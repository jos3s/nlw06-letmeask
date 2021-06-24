import * as Styled from './styles';

import { useRooms } from '../../hooks/useRooms';

import { Header } from "../../components/Header";
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { RoomCard } from '../../components/RoomCard';


export const Rooms = () => {
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
            <h1>Salas</h1>
          </Styled.Title>

          <Styled.Rooms>
            {rooms.map(room=>{
              return (
                <RoomCard title={room.name} endeAt={room.endeAt} code={room.id}/>
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
