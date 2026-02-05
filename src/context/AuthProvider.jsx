import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = () => {
    const user={
        id:1,
        name:"Nammu",
        email:"Nam7@gmail.com"
    }
  return (
   <AuthContext.Provider value={user}>

   </AuthContext.Provider>
  )
}

export default AuthProvider