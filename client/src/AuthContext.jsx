import { createContext, useEffect, useState } from "react";
export const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)

    useEffect(()=>{
   const savedInfo=localStorage.getItem("user")
   if(savedInfo){
    setUser(JSON.parse(savedInfo))
   }
    },[])

    return(
        <AuthContext.Provider value={{user}}>
         {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;