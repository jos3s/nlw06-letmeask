import * as Styled from './styles';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Letmeask } from "../../components/Letmeask";
import { Button } from "../../components/Button";
import { RoomCode } from '../../components/RoomCode';
import { FormEvent, useEffect, useState } from 'react';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';

type FirebaseQuestions=Record<string,{
  author:{
    name:string,
    avatar: string,
  }
  content:string,
  isHighlihted:boolean,
  isAnswer:boolean,
} >

type Questions={
  id:string,
  author:{
    name:string,
    avatar: string,
  }
  content:string,
  isHighlihted:boolean,
  isAnswer:boolean,
}

type RoomParams ={
  id: string,
}

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [title, setTitle] = useState('');
  const [questionSend, setQuestionSend] = useState(false);

  const {user} = useAuth();
  const params =useParams<RoomParams>();
  const roomId=params.id;

  useEffect(() => {
    const roomRef=database.ref(`rooms/${roomId}`);

    roomRef.on('value',room=>{
      const databaseRoom=room.val();
      const firebaseQuestions:FirebaseQuestions=databaseRoom.questions ?? {};

      const parsedQuestion=Object.entries(firebaseQuestions).map(([key, value])=>{
        return {
          id:key,
          content:value.content,
          author:value.author,
          isHighlihted:value.isHighlihted,
          isAnswer:value.isAnswer,
        }
      });
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    })

  }, [roomId])

  const handleSendQuestion = async (event: FormEvent)=>{
    event.preventDefault();
    if(newQuestion.trim()==='') return;

    if(!user) return;

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
    setQuestionSend(true);
    setTimeout(() => {
      setQuestionSend(false);
    },1500);
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <Letmeask height="3em"/>
          <Styled.Tools>
            <RoomCode code={roomId}/>
            <ToggleTheme/>
          </Styled.Tools>
        </div>
      </Styled.Header>
      {questionSend && <Toast type="info">Pergunta enviada!</Toast>}
      <Styled.Main>
        <Styled.Title>
          <h1>Sala {title}</h1>
          {questions.length >0 && <span>{questions.length} pergunta(s)</span>}
        </Styled.Title>

        <form onSubmit={handleSendQuestion}>
          <textarea 
            placeholder="Digite a sua pergunta..." 
            value={newQuestion}
            onChange={event=>setNewQuestion(event.target.value)}
          />
          <Styled.FormFooter>
            {user ? (
              <Styled.User>
                <img src={user?.avatar} alt={user?.name}/>
                <span>{user?.name}</span>
              </Styled.User>
            ) : (
              <span> Para enviar uma pergunta, <button>faca seu login</button> </span>
            )}
            <Button btnType="fill" disabled={!user}>Enviar pergunta</Button>
          </Styled.FormFooter>
        </form>
      </Styled.Main>
    </Styled.Container>
  );
};
