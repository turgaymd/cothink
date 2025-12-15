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
          <div className="flex items-center gap-3">
          <button className="md:hidden text-3xl" onClick={()=>setOpen(true)}>
            { open ? <IoClose fontSize={28}/> : <IoMenu fontSize={28}/>}
          </button>
          <button className="hidden md:flex text-3xl" onClick={()=>setOpen(!open)}>
            <IoMenu fontSize={28}/>
          </button>
          <div className="logo">
            <Link to="/home" className="hidden md:flex" onClick={()=>setSettings(false)}>
              <img src="/images/logo.jpg" alt="Logo"/>
            </Link>
        
          </div>            
          </div>
           <Link to="/home" className="md:hidden flex" onClick={()=>setSettings(false)}>
              <img src="/images/mobile_logo.png" alt="Mobile Logo" />
            </Link>
          <ul className="hidden md:flex gap-2 lg:gap-6 desktop-menu text-xs lg:text-base">
            <li className="nav-item whitespace-nowrap">
              <NavLink className={({isActive})=> isActive ? "active" : "" } to="/home" onClick={()=>setSettings(false)}>Ana Səhifə</NavLink>
            </li>
            <li className="nav-item whitespace-nowrap">
              <NavLink className={({isActive})=> isActive ? "active" : "" } to="/questions" onClick={()=>setSettings(false)}>Sual-Cavab</NavLink>
            </li>
            <li className="nav-item whitespace-nowrap">
              <NavLink className="" to="/mentors" onClick={()=>setSettings(false)}>Mentorlar</NavLink>
            </li>
            <li className="nav-item whitespace-nowrap">
              <NavLink className="" to="/rating" onClick={()=>setSettings(false)}>Reytinq</NavLink>
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
                <button className="bg-gray-200 rounded-md p-2">
                  <CiSearch className="text-2xl" onClick={()=>setSearch(true)}/>
                </button>
              )
            }      
            <button className="bg-gray-200 rounded-md p-2">
              <IoIosNotificationsOutline className="text-2xl"/>
            </button>
            <Link className="profile-img rounded-full pl-2" to="/profile" onClick={()=>setSettings(false)}>
              <img src="/images/admin.png" className="w-10 h-10" alt="Profile"/>
            </Link>            
          </div>
        </div>
      </header>
    )
}

export default Header;