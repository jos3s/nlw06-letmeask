import { createContext, ReactNode, useEffect, useState } from "react";

import { auth, firebase } from '../services/firebase';

type User = {
  id: string,
  name: string,
  avatar: string,
  email:string,
}

type AuthContextType = {
  user: User | undefined,
  signInWithGoogle: () => Promise<void>,
  logoutWithGoogle: () => Promise<void>,
}

type AuthContextProviderProps = {
  children: ReactNode,
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL ||!email) {
          throw new Error("Missing information from Google Acount");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email:email,
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL ||!email) {
        throw new Error("Missing information from Google Acount");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email:email,
      })

    };
  }
  
  async function logoutWithGoogle() {
    firebase.auth().signOut().then(()=>{
      setUser(undefined)
    })
    .catch(err => console.error(err));
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle,logoutWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )
}