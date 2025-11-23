import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
function Header(){
    const [open, setOpen]=useState(  false  )
    return(
      <header className="w-full top-0 z-50 navbar items-center">
        <div className=" flex justify-between items-center">
        <div className="logo">
            <Link to ="/home">
                        <img src="logo.jpg"></img>
            </Link>
        </div>
            <ul className="hidden md:flex gap-6 nav">
                <li className="nav-item"><NavLink className={({isActive})=> isActive ? "active" : "" } to="/home">Ana Səhifə</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=> isActive ? "active" : "" } to="/questions">Sual-Cavab</NavLink></li>
                <li className="nav-item"><NavLink className="" to="/mentors">Mentorlar</NavLink></li>
                <li className="nav-item"><NavLink className="" to="/rating">Reytinq</NavLink></li>
            </ul>
               <div className="hidden md:flex actions items-center gap-3 ">                 
                   <button className="bg-gray-300 rounded-md p-2"><CiSearch className="text-2xl"/></button>
                   <button className="bg-gray-300 rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   <Link className="profile-img rounded-full pl-2" to={"/profile"}>
                    <img src="avatarr.svg"></img>
                   </Link>            
            </div>
            <button className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
                { open ? <IoClose/> : <IoMenu/>}
            </button>

        </div>
            {
                open && (
                <ul className="md:hidden bg-white shadow-md flex flex-col gap-5 px-6 py-4 nav">
                <li className="nav-item"><NavLink onClick={()=> setOpen(false) } to="/home">Ana Səhifə</NavLink></li>
                <li className="nav-item"><NavLink onClick={()=> setOpen(false) } to="/questions">Sual-Cavab</NavLink></li>
                <li className="nav-item"><NavLink onClick={()=> setOpen(false) } to="/mentors">Mentorlar</NavLink></li>
                <li className="nav-item"><NavLink onClick={()=> setOpen(false) } to="/rating">Reytinq</NavLink></li>
                  <div className="flex items-center gap-3 ">                 
                   <button className="bg-gray-300 rounded-md p-2"><CiSearch className="text-2xl"/></button>
                   <button className="bg-gray-300 rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   <Link className="profile-img rounded-full pl-2" to={"/profile"}>
                    <img src="avatarr.svg"></img>
                   </Link>            
            </div>
            </ul>   
                )

            }
         
        </header>

    )
}
export default Header;