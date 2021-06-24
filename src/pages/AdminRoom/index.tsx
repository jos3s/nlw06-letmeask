import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import { useHistory, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { RoomCode } from '../../components/RoomCode';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { Question } from '../../components/Question';

import deletImg from './../../assets/images/delete.svg';
import { database } from '../../services/firebase';

type RoomParams ={
  id: string,
}

export const AdminRoom = () => {  
  const [signIn, setSignIn] = useState(false);
  const [notAdmin, setNotAdmin] = useState(false);

  const history=useHistory();
  const params =useParams<RoomParams>();
  const roomId=params.id;
  
  const {user} = useAuth();
  const {questions,title} = useRoom(roomId);

  const handleDeleteQuestion= async (questionId:string)=>{
    if(window.confirm('Deseja deletar essa pergunta?')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  const handleEndRoom=async () => {
    await database.ref(`rooms/${roomId}`).update({
      endeAt:new Date(),
    });
    history.push('/rooms/new');
  }

  const verifedAdmim = useCallback(
    async ()=>{
      const roomRef =await database.ref(`rooms/${roomId}`).get();
      if (roomRef.val()?.authorId !== user?.id){
        setNotAdmin(true);
        setTimeout(()=>{
          history.push('/');
        }, 3000);
      }
    },
    [roomId, user?.id, history],
  )

  useEffect(() => {
    if(user!==undefined){
      setSignIn(true);
      verifedAdmim();
    }
  },[user,verifedAdmim]);

  useEffect(() => {
    if(signIn){
      verifedAdmim();
    }
  },[signIn,verifedAdmim]);



  return (
    <Styled.Container>
      <Header>
        <RoomCode code={roomId}/>
        <Button btnType="fill" onClick={handleEndRoom}>Encerrar Sala</Button>
        <ToggleTheme/>
      </Header>
      
      {(!notAdmin && signIn) && (
        <Styled.Main>
        
          <Styled.Left>
            <Styled.Title>
              <h1>Sala {title}</h1>
            </Styled.Title>
          
            <Styled.Questions>
              {questions?.map(question=>{
                return (
                  <Question 
                    key={question?.id}
                    content={question?.content}
                    author={question?.author}
                  >
                    <button
                      type="button"
                      onClick={()=> handleDeleteQuestion(question?.id)}
                    >
                      <img src={deletImg} alt="Remover pergunta"/>
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
                value={questions?.length || 0} 
                text="Perguntas"
               />
              <Card 
                btnStyle="fill" 
                value={questions?.reduce((ac, {likeCount})=> ac+likeCount, 0) || 0} 
                text="Likes"
               />
              <Card 
                btnStyle="outline" 
                value={questions?.length || 0} 
                text="Perguntas"
               />
            </Styled.Cards>
          
          </Styled.Right>
        </Styled.Main>
      )}

      {notAdmin  &&( 
        <Toast type="error">Você não é o administrador da sala!</Toast>
      )}
    </Styled.Container>
  );
};
