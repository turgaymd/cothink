import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
const PrivateRouter=()=>{
const {user}=useContext(AuthContext)
    if(!user){
       return  <Navigate to={'/login'} replace/>
}
else{
   return  <Outlet/>
}
}
export default PrivateRouter;