import { SlArrowRight } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { BiBlock } from "react-icons/bi";
import { PiKey } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegComments, FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { MdOutlineArrowBackIosNew, MdOutlineEdit } from "react-icons/md";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { TbAuth2Fa } from "react-icons/tb";
import { ThemeContext } from "../context/ThemeContext";

const Settings=({setActiveTab, setSettings})=>{
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const {apiUrl}=useContext(ApiContext)
    const [mentor,setMentor]=useState(null)
    const [student, setStudent]=useState(null)
    const {theme,setTheme}=useContext(ThemeContext)
 
    const handleLogout=()=>{
      localStorage.removeItem("user")
        navigate("/")
    }
  const handleTheme=()=>{
         setTheme(prev=>(prev==="light" ? "dark" : "light"))
  }
    
    useEffect(()=>{
    axios
      .get(`${apiUrl}/server/mentors/mentorDetail.php?id=${user.id}`)
      .then((res) => {
        setMentor(res.data.data);
      })
      .catch((err) => console.log(err));
        axios
      .get(`${apiUrl}/server/students/studentProfil.php?id=${user.id}`)
      .then((res) => {
        setStudent(res.data.data);
      })
      .catch((err) => console.log(err));
    },[])


     const mentorImg = !mentor?.profile_img? "/images/admin.png": mentor?.profile_img.startsWith("http") ? mentor?.profile_img : `https://cothink.az/${mentor.profile_img}`;
   const studentImg=!student?.profile_img? "/images/admin.png": student?.profile_img.startsWith("http") ? student?.profile_img : `https://cothink.az/${student.profile_img}`;
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
              
                 <div className="profiles-img relative">
                  {
                     user?.type==="mentor" ?  <img src={mentorImg} className="rounded-full w-24 h-24"/>
                 :                 <img src={studentImg} className="rounded-full w-24 h-24"/>
                  }

            
          

          {/* {
            !edit  && <button type="button" className=" p-1.5 bg-blue-500  rounded-full absolute -bottom-3 right-4 text-blue-500" >
              <FaRegEdit fontSize={18} className="text-white  rounded-full"/>
              </button>
          } */}
          </div>
            {/* {
              edit &&   <button type="submit" className="text-blue-500" >
            Göndər
            </button>
            } */}

            <h2 className="font-medium text-xl pt-3">{user?.name}</h2>
        
            </div>
           
        <div className=" px-3 py-2 mb-5 mt-4 shadow-sm inset-shadow-sm">
        <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 cursor-pointer" onClick={()=>setActiveTab("about")}>
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><CiUser fontSize={24}/></span>  
            </div>
            <div className="flex flex-col pt-3">
            <h4 className="font-bold">Haqqımda</h4>
            <p className="text-gray-400">Ad , soyad, email</p>
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
              <span className="text-blue-500 rounded-full"><TbAuth2Fa fontSize={28}/></span>  
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
        <h4 className="pb-3 font-bold">Daha çox</h4>
        <div className="features_card shadow-sm inset-shadow-sm" >
            <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><WiMoonAltThirdQuarter fontSize={28} /></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold  text-black">Tema</h4>
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
            <h4 className="font-bold  text-black">Kömək / Dəstək</h4>
            </div>
            </div>
           <button><SlArrowRight /></button> 
        </div>
                <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 cursor-pointer" onClick={()=>setActiveTab("features")}>
            <div className="flex items-center gap-3">
                 <div className="icons">
              <span className="text-blue-500 rounded-full"><CiCircleInfo fontSize={24}/></span>  
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-black">Websayt Haqqında</h4>
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