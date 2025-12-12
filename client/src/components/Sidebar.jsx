
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
function Sidebar({setOpen, setSettings, setActiveTab}){


const handleNavigate=()=>{

   setSettings(false)
    setOpen(false)
}

  const handleSettings=()=>{
     setSettings(true)


    if(window.innerWidth<=768){
          setActiveTab("")
    }
       else{
        setActiveTab("about")     
       }
       setOpen(false)
  }
    return (
        <div className="sidebar w-full md:p-0 px-2">
           <ul className="w-full flex flex-col md:gap-3 gap-5 md:pl-0 pl-7 mt-5" >
            {
              open && (
                <div className="md:hidden flex flex-col gap-5 transition-all duration-300 ease-in-out" onClick={handleNavigate}>
                        <NavLink className="profile-img rounded-full pl-2 flex justify-between" to={"/profile"} onClick={handleNavigate}>
                    <img src="/images/admin.png"></img> 
                      <button className=" rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   </NavLink>  
                  <form className="w-full">
                    <input type="text" placeholder="Axtarış..." className="w-full border border-gray-300 rounded-md p-2"/>
                  </form>
                                                        <li><NavLink  className="md:hidden flex gap-2 pb-2 md:p-3 md:pl-7" to={"/share"}  onClick={handleNavigate}><img src="/images/new_share.svg" className="hidden md:flex"/>Yeni paylaşım</NavLink></li>
                  <li className="nav-item"><NavLink className="flex gap-2 md:p-3 md:pl-7 " to="/home" onClick={handleNavigate}>Ana Səhifə</NavLink></li>
                <li className="nav-item"><NavLink  className="flex gap-2 md:p-3 md:pl-7 " to="/questions" onClick={handleNavigate}>Sual-Cavab</NavLink></li>
                <li className="nav-item"><NavLink className="flex gap-2 md:p-3 md:pl-7 " to="/mentors" onClick={handleNavigate}>Mentorlar</NavLink></li>
                <li className="nav-item"><NavLink className="flex gap-2 md:p-3 md:pl-7 " to="/rating" onClick={handleNavigate}>Reytinq</NavLink></li>
                </div>
              )
            }                     
             <li><NavLink  className="flex gap-2 md:p-3 md:pl-7 " to={"/courses"} onClick={handleNavigate}><img src="/images/courses.svg" className="hidden md:flex"/>Kurslar</NavLink></li>
             <li ><NavLink  className="flex gap-2  md:p-3 md:pl-7 " to={"/library"} onClick={handleNavigate}><img src="/images/library.svg" className="hidden md:flex"/>Kitabxana</NavLink></li>
             <li ><NavLink className="flex gap-2  md:p-3  md:pl-7 pb-5" to={"/saved"} onClick={handleNavigate}><img src="/images/save.svg" className="hidden md:flex"/>Yadda saxlanılanlar</NavLink></li>
             <li><a  className="flex gap-2  md:p-3 md:pl-7 cursor-pointer text-blue-600 md:text-black"  onClick={handleSettings}>
                <img src="/images/settings.svg" className="hidden md:flex"/>Parametrlər</a></li>
                                       <li className="hidden md:block"><NavLink  className=" hidden md:flex gap-2  md:p-3 md:pl-7" to={"/share"}  onClick={handleNavigate}><img src="/images/new_share.svg" className="hidden md:flex"/>Yeni paylaşım</NavLink></li>
                                                        <li className="nav-item"><NavLink className="md:hidden text-red-500 flex gap-2 md:p-3 md:pl-7" to="/login" onClick={handleNavigate}>Hesabdan çıxış</NavLink></li>
           </ul>
           </div>
    )
}
export default Sidebar;