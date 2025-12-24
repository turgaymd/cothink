import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Loading from "./utils/Loading";
const PrivateRouter=()=>{
const {user, loading}=useContext(AuthContext)
    
    if(loading){
      return <Loading/>
    }
 if(!user){
       return  <Navigate to={'/'} replace/>
 }
   return <Outlet/>


}
export default PrivateRouter;