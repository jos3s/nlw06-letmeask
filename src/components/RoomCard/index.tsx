import * as Styled from './styles';

import {Link} from 'react-router-dom';

import { RoomCode } from '../../components/RoomCode';
import { Badge } from '../../components/Badge';

type QuestionProps={
  title:string,
  endeAt:string|undefined,
  code:string,
}

export const RoomCard=(props:QuestionProps)=>{
  return (
    <Styled.Container>
      <Link to={`/rooms/${props.code}`} className="link">
        <Styled.Title>{props.title}</Styled.Title>
      </Link>
      <footer>
        <Styled.Buttons>         
          {!props.endeAt && (
            <RoomCode code={props.code} text/>
            )}
          {!!props.endeAt && (
            <Badge type="error">Finalizada</Badge>
          )}
        </Styled.Buttons>
      </footer>
    </Styled.Container>
  )
}