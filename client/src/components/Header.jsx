import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

function Header({open, setOpen,setSettings}){
    const [search, setSearch]=useState(false)

    return(
      <header className="w-full top-0 z-50 navbar items-center">
        <div className="flex justify-between items-center">
          <button className="md:hidden text-3xl" onClick={()=>setOpen(true)}>
            { open ? <IoClose fontSize={28}/> : <IoMenu fontSize={28}/>}
          </button>
          
          <div className="logo">
            <Link to="/home" className="hidden md:flex">
              <img src="/images/logo.jpg" alt="Logo"/>
            </Link>
            <Link to="/home" className="md:hidden flex">
              <img src="/images/mobile_logo.png" alt="Mobile Logo"/>
            </Link>
          </div>
          
          <ul className="hidden md:flex gap-2 lg:gap-6 desktop-menu text-xs lg:text-base">
            <li className="nav-item whitespace-nowrap">
              <NavLink className={({isActive})=> isActive ? "active" : "" } to="/home">Ana Səhifə</NavLink>
            </li>
            <li className="nav-item whitespace-nowrap">
              <NavLink className={({isActive})=> isActive ? "active" : "" } to="/questions">Sual-Cavab</NavLink>
            </li>
            <li className="nav-item whitespace-nowrap">
              <NavLink className="" to="/mentors">Mentorlar</NavLink>
            </li>
            <li className="nav-item whitespace-nowrap">
              <NavLink className="" to="/rating">Reytinq</NavLink>
            </li>
          </ul>
          
          <div className="hidden md:flex actions items-center gap-1.5 lg:gap-3 shrink-0">     
            {
              search ? (
                <form className="w-full">
                  <input 
                    type="text" 
                    placeholder="Axtarış..." 
                    className="w-32 lg:w-56 border border-gray-300 rounded-md p-2 outline-none text-sm"
                    onBlur={() => setSearch(false)}
                    autoFocus
                  />
                </form>
              ) : (
                <button className="bg-gray-300 rounded-md p-2">
                  <CiSearch className="text-2xl" onClick={()=>setSearch(true)}/>
                </button>
              )
            }      
            <button className="bg-gray-300 rounded-md p-2">
              <IoIosNotificationsOutline className="text-2xl"/>
            </button>
            <Link className="profile-img rounded-full pl-2" to="/profile">
              <img src="/images/admin.png" className="w-10 h-10" alt="Profile"/>
            </Link>            
          </div>
        </div>
      </header>
    )
}

export default Header;