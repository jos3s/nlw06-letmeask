import { ReactNode } from 'react';
import * as Styled from './styles';

import {Letmeask} from './../Letmeask';


type HeaderProps={
  children:ReactNode,
}

export const Header=({children}:HeaderProps)=>{
  return (
    <Styled.Header>
        <div>
          <Letmeask height="3em"/>
          <Styled.Tools>
            {children}
          </Styled.Tools>
        </div>
      </Styled.Header>
  )
}