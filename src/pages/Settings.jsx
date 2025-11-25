import { SlArrowRight } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { BiBlock } from "react-icons/bi";
import { PiKey } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TwoFactorAuth from "../components/TwoFactorAuth";
import Support from "../components/Support";
import ResetPassword from "../components/ResetPassword";

const Settings=()=>{
    const navigate=useNavigate()
    const [activeTab, setActiveTab]=useState("about")
    const handleLogout=()=>{
        navigate("/")
    }
    if( activeTab==="changePassword"){
       return <ResetPassword/>
    }
    if(activeTab=="twofactorauth"){
      return <TwoFactorAuth/>
    }
    if(activeTab=="support"){
      return <Support/>
    }
    return (
        <section>
           {
                     <>
   <div className="flex flex-col justify-center items-center mb-4">
                
            <div>
                <img src="avatarr.svg" className="rounded-full h-24 w-24 bg-blue-600"/>
            </div>
            <h2 className="font-medium text-xl pt-3">Gülarə Nəsirova</h2>
            </div>
        <div className="features_card shadow-white-200 shadow-xl px-3 py-2 mb-5">
        <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 cursor-pointer" onClick={()=>navigate("/profile/edit")}>
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><CiUser fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Haqqımda</h4>
            <p className="text-gray-400">Ad , soyad, ünvan, profil şəkli</p>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
            <div className="flex items-center gap-3 cursor-pointer" onClick={()=>setActiveTab("changePassword")}>
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><PiKey fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Şifrəni dəyiş</h4>
            <p className="text-gray-400">Hesab təhlükəsizliyi üçün</p>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
            <div className="flex items-center gap-3 cursor-pointer" onClick={()=>setActiveTab("twofactorauth")}>
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
          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
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
        </div>
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
        <div className="features_card shadow-white-200 shadow-xl">
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
        
        </div>
                     </>
                  }
              
</section>
    )
}
export default Settings;