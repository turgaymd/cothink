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
                <li className="nav-item"><NavLink className="" to="/">Mentorlar</NavLink></li>
                <li className="nav-item"><NavLink className="" to="/articles">Reytinq</NavLink></li>
            </ul>
            <div className="actions flex gap-2">                 
                   <button className="bg-gray-300"><CiSearch/></button>
                   <button className="bg-gray-300"><IoIosNotificationsOutline/></button>
                   <button className="profile-img rounded-full w-8 h-8">
                    <img src="avatar.png"></img>
                   </button>            
            </div>
        </div>

    )
}
export default Header;