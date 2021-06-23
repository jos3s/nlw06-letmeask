import * as Styled from './styles';

type QuestionProps={
  content:string,
  author:{
    name:string,
    avatar:string,
  }
}

export const Question=({content,author}:QuestionProps)=>{
  return (
    <Styled.Container>
      <p>{content}</p>
      <footer>
        <Styled.User>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>  
        </Styled.User>
        <div>

        </div>
      </footer>
    </Styled.Container>
  )
}