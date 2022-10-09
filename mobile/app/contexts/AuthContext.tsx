import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as logOut,
  User,
  UserCredential,
} from "firebase/auth"

import React, { ReactNode, useContext, useEffect, useState } from "react"
import { auth } from "../firebase"

export interface AuthContextParams {
  signIn: (email: string, password: string) => Promise<UserCredential>
  // signInWithGoogle: () => Promise<UserCredential>
  createUser: (email: string, password: string) => Promise<UserCredential>
  signOut: () => Promise<void>
  user: User | null
  loaded: boolean
}

const AuthContext = React.createContext<AuthContextParams>(
  {} as AuthContextParams
)

export function useAuth(): AuthContextParams {
  return useContext(AuthContext)
}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loaded, setLoaded] = useState<boolean>(false)

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //   const signInWithGoogle = () => {
  //     const provider = new GoogleAuthProvider()

  //     return signInWithPopup(auth, provider)
  //   }

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signOut = () => {
    return logOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)

      if (!loaded) setLoaded(true)
    })

    return () => unsubscribe()
  }, [])

  const value: AuthContextParams = {
    signIn,
    // signInWithGoogle,
    createUser,
    signOut,
    user,
    loaded,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
