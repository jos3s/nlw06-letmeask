import { FormEvent, useState } from 'react';
import * as Styled from './styles';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import { Letmeask } from "../../components/Letmeask";
import { Button } from "../../components/Button";
import { RoomCode } from '../../components/RoomCode';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { Question } from '../../components/Question';
import { database } from '../../services/firebase';

type RoomParams ={
  id: string,
}

export const AdminRoom = () => {
  const [newQuestion, setNewQuestion] = useState('');
  
  const [questionSend, setQuestionSend] = useState('not');
  
  const params =useParams<RoomParams>();
  const roomId=params.id;

  const {user} = useAuth();
  const {questions,title} = useRoom(roomId);
  

  const handleSendQuestion = async (event: FormEvent)=>{
    event.preventDefault();
    if(newQuestion.trim()==='') {
      setQuestionSend('warning');
      setTimeout(() => {
        setQuestionSend('not');
      },1500);
      return;
    };

    if(!user) {
      setQuestionSend('error');
      setTimeout(() => {
        setQuestionSend('not');
      },1500);
      return;
    };

    const question={
      content:newQuestion,
      author:{
        name:user.name,
        avatar:user.avatar,
      },
      isHighlihted:false,
      isAnswer:false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('');
    setQuestionSend('send');
    setTimeout(() => {
      setQuestionSend('not');
    },1500);
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <Letmeask height="3em"/>
          <Styled.Tools>
            <RoomCode code={roomId}/>
            <Button btnType="fill">Encerrar Sala</Button>
            <ToggleTheme/>
          </Styled.Tools>
        </div>
      </Styled.Header>

      {questionSend==="error" && <Toast type="error">Você precisa estar logado!</Toast>}
      {questionSend==="warning" && <Toast type="warning">Preencha a pergunta para enviar!</Toast>}
      {questionSend==="send" && <Toast type="info">Pergunta enviada!</Toast>}

      <Styled.Main>
        
        <Styled.Left>
          <Styled.Title>
            <h1>Sala {title}</h1>
          </Styled.Title>
        
          <Styled.Questions>
            {questions.map(question=>{
              return (
                <Question 
                  key={question.id}
                  content={question.content}
                  author={question.author}
                /> 
              )
            })}
          </Styled.Questions>
        
        </Styled.Left>
        
        <Styled.Right>
          <Styled.Cards>
            <Card btnStyle="primary" value={questions.length} text="Perguntas" />
            <Card btnStyle="fill" value={questions.length} text="Perguntas" />
            <Card btnStyle="outline" value={questions.length} text="Perguntas" />
          </Styled.Cards>
        </Styled.Right>
      </Styled.Main>
    </Styled.Container>
  );
};
