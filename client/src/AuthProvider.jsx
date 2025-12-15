import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading ,setLoading]=useState(true)

    useEffect(()=>{
   const savedInfo=localStorage.getItem("user")
   if(savedInfo){
    setUser(JSON.parse(savedInfo))
   }
   setLoading(false);
    },[])

    useEffect(()=>{
        if(user){
            localStorage.setItem("user", JSON.stringify(user))
        }
        else{
            localStorage.removeItem("user")
        }
    },[user])
    return(
        <AuthContext.Provider value={{user, setUser, loading}} >
         {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;