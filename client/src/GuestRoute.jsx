import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PrivateRouter=()=>{
const {user}=useContext(AuthContext)
    console.log(user)
 if(!user){
       return  <Navigate to={'/home'} replace/>
 }
   return <Outlet/>


}
export default PrivateRouter;