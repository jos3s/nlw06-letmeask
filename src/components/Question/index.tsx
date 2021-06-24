import { ReactNode } from 'react';
import * as Styled from './styles';

type QuestionProps={
  content:string,
  author:{
    name:string,
    avatar:string,
  },
  children?:ReactNode,
}

export const Question=({content,author, children}:QuestionProps)=>{
  return (
    <Styled.Container>
      <p>{content}</p>
      <footer>
        <Styled.User>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>  
        </Styled.User>
        <Styled.Buttons>
          {children}
        </Styled.Buttons>
      </footer>
    </Styled.Container>
  )
}