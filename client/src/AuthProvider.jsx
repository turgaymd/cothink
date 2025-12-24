import {  useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { ApiContext } from "./context/ApiContext";
import axios from "axios";
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [profile, setProfile]=useState(null)
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
        if(user){
            localStorage.setItem("user", JSON.stringify(user))
        }
        else{
            localStorage.removeItem("user")
        }

    },[user])

useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      try {
        const endpoint =
          user.type === "mentor"
            ? `${apiUrl}/server/mentors/mentorDetail.php?id=${user.id}`
            : `${apiUrl}/server/students/studentProfil.php?id=${user.id}`;

        const res = await axios.get(endpoint);
        setProfile(res.data.data);
      } catch (err) {
        console.error("Profil yüklənmədi", err);
      }
    };

    fetchProfile();
  }, [user, apiUrl, setProfile]);
  
    return(
        <AuthContext.Provider value={{user, setUser, profile, setProfile, loading}} >
         {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;