import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)

    useEffect(()=>{
   const savedInfo=localStorage.getItem("user")
   if(savedInfo){
    setUser(JSON.parse(savedInfo))
   }
    },[])

    return(
        <AuthContext.Provider value={{user, setUser}} >
         {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;