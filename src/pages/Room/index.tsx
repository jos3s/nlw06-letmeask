import { FormEvent, useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { useRooms } from '../../hooks/useRooms';

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

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [questionSend, setQuestionSend] = useState('not');
  const [roomFinished, setRoomFinished] = useState(false);
  
  const params =useParams<RoomParams>();
  const roomId=params.id;

  const {user} = useAuth();
  const {questions,title} = useRoom(roomId);
  const {rooms} = useRooms();
  
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

  const handleLikeQuestion = async(questionId:string, likeId: string | undefined)=>{
    if(likeId){
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).remove();
    }else{
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId:user?.id,
      });
    }
    
  }

  const valideRoom=useCallback(
    async () => {
      const roomRef=await database.ref(`rooms/${roomId}`).get();
      if(roomRef.val().endeAt){
        setRoomFinished(true);
        return
      }
    },
    [roomId],
  )

  useEffect(()=>{
    valideRoom();
    console.log(rooms);
  }, [valideRoom,rooms]);

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

      <Styled.Main>
        
        <Styled.Left>
          <Styled.Title>
            <h1>Sala {title}</h1>
          </Styled.Title>
          
          {!roomFinished && (
            <Styled.Form onSubmit={handleSendQuestion}>
              <textarea 
                placeholder="Digite a sua pergunta..." 
                value={newQuestion}
                onChange={event=>setNewQuestion(event.target.value)}
              />
              <Styled.FormFooter>
                {user ? (
                  <Styled.User>
                    <img src={user?.avatar} alt={user?.name}/>
                    <Styled.UserData>
                      <span>{user?.name}</span>
                      <span>{user?.email}</span>
                    </Styled.UserData>
                  </Styled.User>
                ) : (
                  <span> Para enviar uma pergunta, <button>faca seu login</button> </span>
                )}
                <Button btnType="fill" disabled={!user}>Enviar pergunta</Button>
              </Styled.FormFooter>
            </Styled.Form>
          )}
        
          <Styled.Questions>
            {questions.map(question=>{
              return (
                <Question 
                  key={question.id}
                  content={question.content}
                  author={question.author}
                >
                  <button
                    type="button"
                    aria-label="Marcar como gostei"
                    className={`btnLike  ${question.likeId? 'liked' : ''}`}
                    onClick={()=>handleLikeQuestion(question.id, question.likeId)}
                    disabled={roomFinished}
                  >
                    {question.likeCount >0 && <span>{question.likeCount}</span>}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Question>
              )
            })}
          </Styled.Questions>
        
        </Styled.Left>
        
        <Styled.Right>
          <Styled.Cards>
            <Card 
              btnStyle="primary" 
              value={questions.length} 
              text="Perguntas" />
            <Card 
              btnStyle="fill" 
              value={questions.reduce((ac, {likeCount})=> ac+likeCount, 0)} 
              text="Likes" />
            <Card 
              btnStyle="outline" 
              value={questions.length} 
              text="Perguntas" />
          </Styled.Cards>
        </Styled.Right>
      </Styled.Main>

      {questionSend==="error" && (
        <Toast type="error">Você precisa estar logado!</Toast>
      )}
      {questionSend==="warning" && (
        <Toast type="warning">Preencha a pergunta para enviar!</Toast>
      )}
      {roomFinished && (
        <Toast type="error" className="noAnimation">A sala foi encerrada!</Toast>
      )}
      {questionSend==="send" && (
        <Toast type="info">Pergunta enviada!</Toast>
      )}

    </Styled.Container>
  );
};
