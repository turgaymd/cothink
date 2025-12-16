import { SlArrowRight } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { BiBlock } from "react-icons/bi";
import { PiKey } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../AuthContext";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Settings=({setActiveTab, setSettings})=>{
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)

    const handleLogout=()=>{
      localStorage.removeItem("user")
        navigate("/")
    }
 
    return (
        <section className="p-4">
           {
                     <>
                           <div className="back hidden md:flex justify-start">
                     <button onClick={()=>{setSettings("")

                        navigate("/courses")}
                     }><MdOutlineArrowBackIosNew fontSize={24}/></button>
               </div>
   <div className="flex flex-col justify-center items-center mb-4">
                
                 <div className="profiles-img">
                <img src="/images/admin.png" className="rounded-full w-24 h-24"/>
            </div>
            <h2 className="font-medium text-xl">{user?.name}</h2>
            </div>
        <div className=" px-3 py-2 mb-5 mt-4 shadow-sm inset-shadow-sm">
        <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 cursor-pointer" onClick={()=>setActiveTab("about")}>
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><CiUser fontSize={24}/></span>  
            </div>
            <div className="flex flex-col pt-3">
            <h4 className="font-bold">Haqqımda</h4>
            <p className="text-gray-400">Ad , soyad, profil şəkli</p>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3" onClick={()=>setActiveTab("changePassword")}>
            <div className="flex items-center gap-3 cursor-pointer" >
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><PiKey fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Şifrəni dəyiş</h4>
            <p className="text-gray-400">Hesab təhlükəsizliyi</p>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3" onClick={()=>setActiveTab("twofactorauth")}>
            <div className="flex items-center gap-3 cursor-pointer" >
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><CiUser fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">İki mərhələli təsdiq</h4>
            <p className="text-gray-400">İki mərhələli təsdiq</p>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
          {/* <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full "><BiBlock fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Bloklanmış hesablar</h4>
            <p className="text-gray-400">Təhlükəsizlik səbəblərinə görə bloklanmış hesabları burada idarə edə və açılmasını tələb edə bilərsən.</p>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div> */}
         <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogout}>
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><IoLogOutOutline className="text-red-500" fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-red-500">Hesabdan çıxış</h4>
            </div>
            </div>
           <button ><SlArrowRight className="text-red-500"/></button> 
        </div>
        </div>
        <h4 className="pb-3 text-black font-bold">Daha çox</h4>
        <div className="features_card shadow-sm inset-shadow-sm">
            <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><CiUser fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Tema</h4>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
        <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 cursor-pointer" onClick={()=>setActiveTab("support")}>
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><FaRegComments fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Kömək / Dəstək</h4>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
                <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><CiCircleInfo fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Websayt Haqqında</h4>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
             
        
        </div>
                     </>
                  }
              
</section>
    )
}
export default Settings;