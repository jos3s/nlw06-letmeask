import { useState } from 'react';
import * as Styled from './styles';

import copyImg from "./../../assets/images/copy.svg";
import { Toast } from '../Toast';

type RoomCodeProps={
  code: string,
}

export const RoomCode =(props:RoomCodeProps)=>{
  const [copied, setCopied] = useState(false);

  const copyRoomCodeToClipboard = ()=>{
    navigator.clipboard.writeText(props.code);
    setCopied(copied => !copied);

    setTimeout(()=>{
      setCopied(copied => !copied);
    },2500);
  }
  
  return (
    <Styled.Container>
      {copied && <Toast type="info">Copiado para o clipboard!</Toast>}
      <Styled.Button onClick={copyRoomCodeToClipboard}>
        <Styled.Icon>
          <img src={copyImg} alt="Copiar código da sala"/>
        </Styled.Icon>
        <Styled.Text>Sala #{props.code}</Styled.Text>
      </Styled.Button>
    </Styled.Container>
  )
}