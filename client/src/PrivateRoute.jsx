import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
const PrivateRouter=()=>{
const {user, loading}=useContext(AuthContext)
    console.log(user)
    if(!loading){
      return;
    }
 if(!user){
       return  <Navigate to={'/login'} replace/>
 }
   return <Outlet/>


}
export default PrivateRouter;