import React, {createContext, useState,useEffect } from 'react'
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);

    const createUser =  (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // google signUP
    const loginWithGoogle = () =>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider);
    } 

    // login
    const login = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

 useEffect( ()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser =>{
    // console.log(currentUser)
    setUser(currentUser)
    setLoading(false);
  });
  return ()=>{
    return unSubscribe();
  }
 })

    const authInfo ={
        user,
        createUser,
        loginWithGoogle,
        loading,
        login
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider