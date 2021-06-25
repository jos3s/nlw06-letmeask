import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import { useHistory, useParams } from 'react-router-dom';
/* import Modal from 'react-modal'; */

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { RoomCode } from '../../components/RoomCode';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { Question } from '../../components/Question';
import { Modal } from '../../components/Modal';

import deletImg from './../../assets/images/delete.svg';
import checkImg from './../../assets/images/check.svg';
import answerImg from './../../assets/images/answer.svg';


type RoomParams ={
  id: string,
}

export const AdminRoom = () => {  
  const [signIn, setSignIn] = useState(false);
  const [notAdmin, setNotAdmin] = useState(false);
  const [questionIdModalOpen, setQuestionIdModalOpen] = useState<string|undefined>();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const history=useHistory();
  const params =useParams<RoomParams>();
  const roomId=params.id;
  
  const {user, logoutWithGoogle} = useAuth();
  const {questions,title} = useRoom(roomId);

  const handleDeleteQuestion= async (questionId:string|undefined)=>{
    setModalIsVisible(false);
    if(questionId){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  const handleCheckQuestionAsAnswered= async (questionId:string)=>{
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswer:true,
    })
  }

  const handleHighlightedQuestion= async (questionId:string)=>{
    const currentQuestion=questions.filter(question => question.id===questionId);
    if(currentQuestion[0].isHighlighted){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted:false,
      });
    }else{
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted:true,
      });
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


  useEffect(() => {
    if(!!questionIdModalOpen){
      console.log(questionIdModalOpen)
      setModalIsVisible(true);
    }
  },[questionIdModalOpen]);

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
              <div>
                <span>{user?.name}</span>
                <Styled.Logout onClick={logoutWithGoogle}>deslogar</Styled.Logout>
              </div>
            </Styled.Title>
          
            <Styled.Questions>
              {questions?.map(question=>{
                return (
                  <Question 
                    key={question?.id}
                    content={question?.content}
                    author={question?.author}
                    isAnswer={question?.isAnswer}
                    isHighlighted={question?.isHighlighted}
                  >
                    {!question?.isAnswer && (
                      <>
                        <button
                          type="button"
                          onClick={()=> handleCheckQuestionAsAnswered(question.id)}
                        >
                         <img src={checkImg} alt="Marcar pergunta como respondida"/>
                        </button>
                        <button
                          type="button"
                          onClick={()=> handleHighlightedQuestion(question.id)}
                        >
                          <img src={answerImg} alt="Dar desatque a pergunta"/>
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={()=> setQuestionIdModalOpen(question.id)}
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
                value={questions?.reduce((ac, {isAnswer})=> {
                  if (isAnswer) return ac+1;
                  return ac;
                }, 0) || 0} 
                text="Respondidas"
               />
            </Styled.Cards>
          
          </Styled.Right>
          
          <Modal
            modalVisibility={modalIsVisible}
            setVisibility={()=>{
              setModalIsVisible(false)
              setQuestionIdModalOpen(undefined)
            }}
            handleConfirme={()=>handleDeleteQuestion(questionIdModalOpen)}
          />
        </Styled.Main>
      )}

      {notAdmin  &&( 
        <Toast type="error">Você não é o administrador da sala!</Toast>
      )}

    </Styled.Container>
  );
};


/* 
 */


/* export const Modal=({setModalOpen, questionId, roomId})=>{
  const handleDeleteQuestion= async (string)=>{
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
  }

  return (
    <Styled.Modal>
      <Styled.ModalContainer>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5.99988H5H21" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <h2>Deseja deletar a pergunta?</h2>
        <Styled.ModalButtons>
          <Button 
            btnType="outline" 
            onClick={()=>setModalOpen(false)}
          >
            Cancelar
          </Button>
          <Button 
            btnType="fill" 
            onClick={handleDeleteQuestion}
          >
              Deletar
          </Button>
        </Styled.ModalButtons>
      </Styled.ModalContainer>
    </Styled.Modal> 
  )
} */