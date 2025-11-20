import { NavLink } from "react-router-dom";

function Sidebar(){
    return (
        <div className="sidebar">
           <ul>
             <li><NavLink  className="flex gap-2" to={"/courses"}><img src="courses.svg"/>Kurslar</NavLink></li>
             <li ><NavLink  className="flex gap-2" to={"/library"}><img src="library.svg"/>Kitabxana</NavLink></li>
             <li ><NavLink className="flex gap-2" to={"/saved"} ><img src="save.svg"/>Yadda saxlanılanlar</NavLink></li>
             <li><NavLink  className="flex gap-2" to={"/settings"}  ><img src="settings.svg"/>Parametrlər</NavLink></li>
           </ul>
           </div>
    )
}
export default Sidebar;