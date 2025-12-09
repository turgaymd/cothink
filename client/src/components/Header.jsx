import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

function Header({open, setOpen}){
    const [search, setSearch]=useState(false)

    return(
      <header className="w-full top-0 z-50 navbar items-center">
        <div className=" flex justify-between items-center">
                 <button className="md:hidden text-3xl" onClick={()=>setOpen(true)}>
                { open ? <IoClose fontSize={28}/> : <IoMenu fontSize={28}/>}
            </button>
        <div className="logo">
            <Link to ="/home" className="hidden md:flex">
                         <img src="/images/logo.jpg"></img>
                        </Link>
                         <Link to ="/home" className="md:hidden flex">
                         <img src="/images/mobile_logo.png"></img>
                        </Link>
        </div>
            <ul className="hidden md:flex gap-6 desktop-menu">
                <li className="nav-item"><NavLink className={({isActive})=> isActive ? "active" : "" } to="/home">Ana Səhifə</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=> isActive ? "active" : "" } to="/questions">Sual-Cavab</NavLink></li>
                <li className="nav-item"><NavLink className="" to="/mentors">Mentorlar</NavLink></li>
                <li className="nav-item"><NavLink className="" to="/rating">Reytinq</NavLink></li>
            </ul>
               <div className="hidden md:flex actions items-center gap-3 shrink-0">     
                {
                    search ?
                     (
   <form className="w-full">
                    <input type="text" placeholder="Axtarış..." className="w-56 border border-gray-300 rounded-md p-2 outline-none"/>
                  </form>
                     )
                  : 
                  (
<>
 <button className="bg-gray-300 rounded-md p-2">
                    <CiSearch className="text-2xl" onClick={()=>setSearch(true)}/></button>
                
</>
                  )
                }      
                   <button className="bg-gray-300 rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   <Link className="w-full profile-img rounded-full pl-2" to={"/profile"}>
                    <img src="/images/avatarr.svg"></img>
                   </Link>            
            </div>
        </div>
        
         
        </header>

    )
}
export default Header;