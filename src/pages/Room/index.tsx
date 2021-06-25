import { FormEvent, useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import {  useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import { Button } from "../../components/Button";
import { RoomCode } from '../../components/RoomCode';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { Question } from '../../components/Question';
import { database } from '../../services/firebase';
import { Header } from '../../components/Header';

import chatImg from '../../assets/images/messages.svg';
import { Badge } from '../../components/Badge';

type RoomParams ={
  id: string,
}

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [questionSend, setQuestionSend] = useState('not');
  const [roomFinished, setRoomFinished] = useState(false);
  const [order, setOrder] = useState("moreLikes");

  const params = useParams<RoomParams>();
  const roomId=params.id;

  const {user,signInWithGoogle, logoutWithGoogle} = useAuth();
  const {questions:noOrderQuestions,title} = useRoom(roomId);
  
  
  const questions = noOrderQuestions.sort((a,b) => {
    if(order==="moreLikes"){
      return a.isAnswer ? 1 : b.isAnswer ? -1 : b.likeCount - a.likeCount;
    }else if (order==="lessLikes"){
      return a.isAnswer ? 1 : b.isAnswer ? -1 : a.likeCount - b.likeCount;
    }else if(order==="lastAnswared"){
      return a.isAnswer ? 1 : b.isAnswer ? -1 : 0;
    }else {
      return a.isAnswer ? -1 : b.isAnswer ? 1 : 0;
    }
  });

  const handleCreateRoom = async () => {
    !user && await signInWithGoogle();
  }
  
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
      isHighlighted:false,
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

  const handleSelectOrder =(event:any)=>{
      console.log(event.target.value)
      setOrder(event.target.value);  
  }

  const valideRoom=useCallback(
    async () => {
      const roomRef=await database.ref(`rooms/${roomId}`).get();
      const finished=roomRef.val()?.endeAt || false;
      if(finished){
        setRoomFinished(true);
        return;
      }
    },
    [roomId],
  )

  useEffect(()=>{
    valideRoom();
  }, [valideRoom]);

  return (
    <Styled.Container>
      <Header>
        <RoomCode code={roomId}/>
        <ToggleTheme/>
      </Header>

      <Styled.Main>
          
        <Styled.Left>
          <Styled.Title>
            <h1>Sala: {title}</h1>
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
                      <Styled.Logout onClick={logoutWithGoogle}>deslogar</Styled.Logout>
                    </Styled.UserData>
                  </Styled.User>
                ) : (
                  <span> Para enviar uma pergunta, <button onClick={handleCreateRoom}>faca seu login</button> </span>
                )}
                <Button btnType="fill" disabled={!user}>Enviar pergunta</Button>
              </Styled.FormFooter>
            </Styled.Form>
          )}
        
          <Styled.Questions>
            {questions.length>0 && (
              <Styled.Filter>
                <span>Ordene por:</span>
                <select onChange={handleSelectOrder} >
                  <optgroup label="Por likes">
                    <option value="moreLikes">Mais likes</option>
                    <option value="lessLikes">Menos likes</option>
                  </optgroup>
                  <optgroup label="Por respondida">
                    <option value="answeredFirst">Responidas primeiro</option>
                    <option value="lastAnswared">Responidas por último</option>
                  </optgroup>
                </select>
              </Styled.Filter>
            )}
            {questions.map(question=>{
              return (
                <Question 
                  key={question?.id}
                  content={question?.content}
                  author={question?.author}
                  isAnswer={question?.isAnswer}
                  isHighlighted={question?.isHighlighted}
                >
                  {!question?.isAnswer && (
                    <button
                      type="button"
                      aria-label="Marcar como gostei"
                      className={`btnLike  ${question?.likeId? 'liked' : ''}`}
                      onClick={()=>handleLikeQuestion(question?.id, question?.likeId)}
                      disabled={roomFinished}
                    >
                      {question?.likeCount >0 && <span>{question?.likeCount}</span>}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                  {question?.isAnswer && (
                    <Badge type="info">Respondida</Badge>
                  )}
                </Question>
              )
            })}

            {questions.length===0 && (
              <Styled.NotQuestions>
                <Styled.Img src={chatImg} alt="Messagens"/>
                <h3>Parece que não há mensagens nessa sala...</h3>
              </Styled.NotQuestions>
              
            )}
          </Styled.Questions>
        
        </Styled.Left>
        
        <Styled.Right>
          <Styled.Cards>
            <Card 
              btnStyle="primary" 
              value={questions?.length || 0} 
              text="Perguntas" />
            <Card 
              btnStyle="fill" 
              value={questions?.reduce((ac, {likeCount})=> ac+likeCount, 0) || 0} 
              text="Likes" />
            <Card 
              btnStyle="outline" 
              value={questions?.reduce((ac, {isAnswer})=> {
                if (isAnswer) return ac+1;
                return ac;
              }, 0) || 0} 
              text="Respondidas" />
          </Styled.Cards>
        </Styled.Right>
      </Styled.Main>

      {questionSend==="error" && (
        <Toast type="error">Você precisa estar logado!</Toast>
      )}
      {questionSend==="warning" && !user && (
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
