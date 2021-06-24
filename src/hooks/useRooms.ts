import { useEffect, useState } from "react";

import { database } from '../services/firebase';

type FirebaseRooms=Record<string,{
  authorId:string,
  title:string,
  endeAt?:string,
} >

type Rooms={
  id:string,
  name:string,
  endeAt?:string,
}


export const useRooms=()=>{
  const [rooms, setRooms] = useState<Rooms[]>([]);

  useEffect(() => {
    const roomsRef=database.ref(`rooms/`);
    
    roomsRef.on('value', room=>{
      const databaseRooms=room.val();
      const rooms:FirebaseRooms=databaseRooms ?? {};
      const parsedRooms=Object.entries(rooms).map(([key, value]:any)=>{
        return {
          id:key,
          name:value.title,
          endeAt:value?.endeAt,
        }
      });
      setRooms(parsedRooms);
    })

  
    return ()=>{
      roomsRef.off('value');
    }
  }, []);

  return {rooms};
}