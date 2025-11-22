import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
function Header(){
    return(
      <div className="navbar flex justify-between items-center">
        <div className="logo">
            <Link to ="/home">
                        <img src="logo.jpg"></img>
            </Link>

        </div>
            <ul className="flex flex-row gap-5 nav">
                <li className="nav-item"><NavLink className={({isActive})=> isActive ? "active" : "" } to="/home">Ana Səhifə</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=> isActive ? "active" : "" } to="/discussion">Sual-Cavab</NavLink></li>
                <li className="nav-item"><NavLink className="" to="/mentors">Mentorlar</NavLink></li>
                <li className="nav-item"><NavLink className="" to="/rating">Reytinq</NavLink></li>
            </ul>
            <div className="actions flex items-center gap-2">                 
                   <button className="bg-gray-300 rounded-md p-2"><CiSearch className="text-2xl"/></button>
                   <button className="bg-gray-300 rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   <Link className="profile-img rounded-full pl-2" to={"/profile"}>
                    <img src="avatarr.svg"></img>
                   </Link>            
            </div>
        </div>

    )
}
export default Header;