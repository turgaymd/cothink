  import { IoIosNotificationsOutline } from "react-icons/io";
  import { Link, NavLink } from "react-router-dom";
  import { IoClose, IoHome, IoLogOutOutline, IoSettingsOutline ,IoStarOutline } from "react-icons/io5";
  import { FiBookmark } from "react-icons/fi";
  import { GoPlusCircle } from "react-icons/go";
  import { BsCameraVideo } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaRegStar } from "react-icons/fa";
import { PiChalkboard, PiChalkboardTeacher, PiChatDots } from "react-icons/pi";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";

function Sidebar({open, setOpen, setSettings, setActiveTab}){
  const {user}=useContext(AuthContext)
    const [mentor, setMentor]=useState(null)
    const [student, setStudent]=useState(null)
    const {apiUrl}=useContext(ApiContext)

 useEffect(()=>{
  if(user.type==="mentor"){
  axios

      .get(`${apiUrl}/server/mentors/mentorDetail.php?id=${user.id}`)
      .then((res) => {
        setMentor(res.data.data);
      })
      .catch((err) => console.log(err));
  }
  else{

          axios
      .get(`${apiUrl}/server/students/studentProfil.php?id=${user.id}`)
      .then((res) => {
        setStudent(res.data.data);
      })
      .catch((err) => console.log(err));
  }
    },[user])

  const handleSettings = () => {
    setSettings(true);
    setOpen(false);
    if(window.innerWidth <= 768){
      setActiveTab("");
    }
    else{
      setActiveTab("about");
    }
  };
  
  const handleNavigate = () => {
    setSettings(false);
      if(window.innerWidth <= 768){
      setOpen(false);
    }
  };
  
   const mentorImg = !mentor?.profile_img? "/images/admin.png": mentor?.profile_img.startsWith("http") ? mentor?.profile_img : `https://cothink.az/${mentor.profile_img}`;
   const studentImg=!student?.profile_img? "/images/admin.png": student?.profile_img.startsWith("http") ? student?.profile_img : `https://cothink.az/${student.profile_img}`;
  return (
    <div className="sidebar w-full md:p-0 px-2 ">
      <ul className="w-full flex flex-col md:gap-3 gap-5 md:pl-0 pl-7">
        {
          open && (
            <div className="md:hidden flex flex-col gap-5 transition-all duration-300 ease-in-out">
              <div className="flex justify-between mt-10 ">
                <div className="flex items-center">
                  <NavLink className="profile-img rounded-full shrink-0" to={"/profile"} onClick={handleNavigate}>
                   
                   {
                    user?.type==="mentor" ? (<img src={mentorImg} className="w-5 h-5" alt="Profile"/>) : 
               (  <img src={studentImg} className="w-5 h-5" alt="Profile"/> )
                 }
                    
                  </NavLink>  
                 <div className=""> <button className="  rounded-md shrink-0">
                    <IoIosNotificationsOutline fontSize={25}/>
                  </button></div>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={handleNavigate} 
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <IoClose fontSize={28}/>
                  </button>
                </div>
              </div>
              
              <form className="w-full">
                <input 
                  type="text" 
                  placeholder="Axtarış..." 
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </form>
              
              <div className="flex flex-col gap-4 pb-4 border-b border-gray-200">
                <li className="nav-item">
                  <NavLink 
                    className="flex gap-2 text-base font-medium" 
                    to="/home" 
                    onClick={handleNavigate}
                  >
                    <IoHomeOutline fontSize={24}/>
                    Ana Səhifə
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink 
                    className="flex gap-2 text-base font-medium" 
                    to="/questions" 
                    onClick={handleNavigate}
                  >
                    <PiChatDots fontSize={24}/>
                    Sual-Cavab
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink 
                    className="flex gap-2 text-base font-medium" 
                    to="/mentors" 
                    onClick={handleNavigate}
                  >
                    <PiChalkboardTeacher fontSize={24}/>
                    Mentorlar
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink 
                    className="flex gap-2 text-base font-medium" 
                    to="/rating" 
                    onClick={handleNavigate}
                  >
                    <FaRegStar fontSize={24}/>
                    Reytinq
                  </NavLink>
                </li>
              </div>
              
              <div className="flex flex-col gap-4">
                <li>
                  <NavLink 
                    className="flex gap-2 text-sm" 
                    to={"/share"} 
                    onClick={handleNavigate}
                  >
                       <GoPlusCircle fontSize={24} className="md:flex"/>
                    Yeni paylaşım
                  </NavLink>
                </li>
              </div>
            </div>
          )
        }                     
        
        <li>
          <NavLink 
            className="flex gap-3 md:p-3 md:justify-center items-center lg:justify-start lg:pl-7 text-sm md:text-base" 
            to={"/courses"} 
            onClick={handleNavigate}
          >
            <BsCameraVideo fontSize={26} className="md:flex"/>
            <p className="md:hidden lg:block">Kurslar</p>
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            className="flex gap-2 md:p-3 md:justify-center items-center lg:justify-start lg:pl-7 text-sm md:text-base" 
            to={"/library"} 
            onClick={handleNavigate}
          >
            <img src="/images/library.svg" className="md:flex w-5 h-5" alt=""/>
            <p className="md:hidden lg:block">Kitabxana</p>
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            className="flex gap-2 md:p-3 md:justify-center items-center lg:justify-start lg:pl-7 text-sm md:text-base" 
            to={"/saved"} 
            onClick={handleNavigate}
          >
            <FiBookmark fontSize={24} className=" md:flex"/>
            <p className="md:hidden lg:block">Yadda saxlanılanlar</p>
          </NavLink>
        </li>
        
      <li>
  <a
    className="flex gap-2 md:p-3 md:justify-center items-center lg:justify-start lg:pl-7 text-sm md:text-base cursor-pointer" 
    onClick={handleSettings}
  >
    <img src="/images/settings.svg" className=" md:flex w-5 h-5 " alt=""/>
    <p className="md:hidden lg:block">Parametrlər</p>
  </a>
</li>
        
        <li>
          <NavLink 
            className="hidden md:flex gap-2 md:p-3 md:justify-center items-center lg:justify-start lg:pl-7 text-sm md:text-base" 
            to={"/share"} 
            onClick={handleNavigate}
          >
            <GoPlusCircle fontSize={24} className="md:flex"/>
            <p className="md:hidden lg:block">Yeni paylaşım</p>
          </NavLink>
        </li>
        
        <li className="nav-item flex gap-1 items-center">
          <IoLogOutOutline className="md:hidden flex text-red-500" fontSize={24}/>
          <NavLink 
            className="md:hidden text-red-500 flex gap-2 text-sm" 
            to="/login" 
            onClick={handleNavigate}
          >
            Hesabdan çıxış
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

  export default Sidebar;