import { NavLink } from "react-router-dom";

function Sidebar(){
    return (
        <div className="sidebar">
           <ul>
             <li><NavLink  className="flex gap-2 p-3" to={"/courses"}><img src="/courses.svg" className="sm:w-50 sm:h-50"/><p className="hidden md:flex">Kurslar</p></NavLink></li>
             <li ><NavLink  className="flex gap-2 p-3" to={"/library"}><img src="/library.svg"/><p className="hidden md:flex">Kitabxana</p></NavLink></li>
             <li ><NavLink className="flex gap-2 p-3" to={"/saved"} ><img src="/save.svg"/><p className="hidden md:flex">Yadda saxlanılanlar</p></NavLink></li>
             <li><NavLink  className="flex gap-2 p-3" to={"/settings"}  ><img src="/settings.svg"/><p className="hidden md:flex">Parametrlər</p></NavLink></li>
           </ul>
           </div>
    )
}
export default Sidebar;