import { useEffect, useState } from "react";

import { database } from '../services/firebase';
import { useAuth } from "./useAuth";

type FirebaseQuestions=Record<string,{
  author:{
    name:string,
    avatar: string,
  }
  content:string,
  isHighlihted:boolean,
  isAnswer:boolean,
  likes:Record<string,{
    authorId:string,
  }>
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
  likeCount:number,
  likeId:string|undefined,
}


export const useRoom=(roomId:string)=>{
  const {user} = useAuth();

  const [questions, setQuestions] = useState<Questions[]>([]);
  const [title, setTitle] = useState('');

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
          likeCount:Object.values(value.likes ?? {}).length,
          likeId:Object.entries(value.likes ?? {}).find(([key, like])=> like.authorId === user?.id)?.[0],
        }
      });
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    })

  
    return ()=>{
      roomRef.off('value');
    }
  }, [roomId, user?.id])

  return {questions, title}
}