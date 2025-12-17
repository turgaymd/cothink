import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { ApiContext } from "./ApiContext";
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading ,setLoading]=useState(true)
    const {apiUrl}=useContext(ApiContext)

    useEffect(()=>{
   const savedInfo=localStorage.getItem("user")
   if(savedInfo){
    setUser(JSON.parse(savedInfo))
   }
   setLoading(false);
        
    },[])

    useEffect(()=>{
        if(!user) return;
  const fetchProfile=async()=>{
            try{
                const url=user.type==="student" ? `${apiUrl}/server/students/studentProfil.php?id=${user?.id}` : `${apiUrl}/server/mentors/mentorDetail.php?id=${user.id}`
               const res =await axios.get(url)
                const data=res.data.data
               const loggedUser={
                ...user,
                name:data.student_name || data.mentor_name || user.name,
                email:data.student_email || data.mentor_email || user.email,
                username:data.student_username || data.mentor_username || user.username,
                profile_img:data.profile_img ? `https://cothink.az${data.profile_img}` : "/images/admin.png"
               }
setUser(loggedUser);
            }
            catch(err){
                console.log(err)
            }
        }
   fetchProfile()
    },[user?.id, user?.type])

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