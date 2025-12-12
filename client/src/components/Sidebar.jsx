import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Sidebar({open, setOpen}){
    return (
        <div className="sidebar w-full md:p-0 px-2">
           <ul className="w-full flex flex-col md:gap-3 gap-5 md:pl-0 pl-7">
            {
              open && (
                <div className="md:hidden flex flex-col gap-5 transition-all duration-300 ease-in-out">
                 
                  {/* Profile və Notification */}
                <div className="flex justify-between mt-10 ">
                    <div className="flex gap-3">
                    <NavLink className="profile-img rounded-full flex-shrink-0" to={"/profile"} onClick={()=>setOpen(false)}>
                      <img src="/images/avatarr.svg" className="w-10 h-10" alt="Profile"/>
                    </NavLink>  
                    <button className="bg-gray-300 rounded-md p-2 flex-shrink-0">
                      <IoIosNotificationsOutline className="text-2xl"/>
                    </button>
                  </div>

                  {/* X düyməsi */}
                   <div className="flex justify-end -mt-2 -mr-2">
                    <button 
                      onClick={()=>setOpen(false)} 
                      className="p-2  hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <IoClose fontSize={45}/>
                    </button>
                  </div>

                </div>
                  
                  {/* Axtarış */}
                  <form className="w-full">
                    <input 
                      type="text" 
                      placeholder="Axtarış..." 
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    />
                  </form>
                  
                  {/* Header-dan gələn menular */}
                  <div className="flex flex-col gap-4 pb-4 border-b border-gray-200">
                    <li className="nav-item">
                      <NavLink 
                        className="flex gap-2 text-base font-medium" 
                        to="/home" 
                        onClick={()=>setOpen(false)}
                      >
                        Ana Səhifə
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink 
                        className="flex gap-2 text-base font-medium" 
                        to="/questions" 
                        onClick={()=>setOpen(false)}
                      >
                        Sual-Cavab
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink 
                        className="flex gap-2 text-base font-medium" 
                        to="/mentors" 
                        onClick={()=>setOpen(false)}
                      >
                        Mentorlar
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink 
                        className="flex gap-2 text-base font-medium" 
                        to="/rating" 
                        onClick={()=>setOpen(false)}
                      >
                        Reytinq
                      </NavLink>
                    </li>
                  </div>
                  
                  {/* Sidebar menular */}
                  <div className="flex flex-col gap-4">
                    <li>
                      <NavLink 
                        className="flex gap-2 text-sm" 
                        to={"/share"} 
                        onClick={()=>setOpen(false)}
                      >
                        Yeni paylaşım
                      </NavLink>
                    </li>
                  </div>
                </div>
              )
            }                     
            
            <li>
              <NavLink 
                className="flex gap-2 md:p-3 md:justify-center lg:justify-start lg:pl-7 text-sm md:text-base" 
                to={"/courses"} 
                onClick={()=>setOpen(false)}
              >
                <img src="/images/courses.svg" className="hidden md:flex w-5 h-5" alt=""/>
                <p className="md:hidden lg:block">Kurslar</p>
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                className="flex gap-2 md:p-3 md:justify-center lg:justify-start lg:pl-7 text-sm md:text-base" 
                to={"/library"} 
                onClick={()=>setOpen(false)}
              >
                <img src="/images/library.svg" className="hidden md:flex w-5 h-5" alt=""/>
                <p className="md:hidden lg:block">Kitabxana</p>
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                className="flex gap-2 md:p-3 md:justify-center lg:justify-start lg:pl-7 text-sm md:text-base" 
                to={"/saved"} 
                onClick={()=>setOpen(false)}
              >
                <img src="/images/save.svg" className="hidden md:flex w-5 h-5" alt=""/>
                <p className="md:hidden lg:block">Yadda saxlanılanlar</p>
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                className="flex gap-2 md:p-3 md:justify-center lg:justify-start lg:pl-7 text-sm md:text-base" 
                to={"/settings"} 
                onClick={()=>setOpen(false)}
              >
                <img src="/images/settings.svg" className="hidden md:flex w-5 h-5 " alt=""/>
                <p className="md:hidden lg:block">Parametrlər</p>
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                className="hidden md:flex gap-2 md:p-3 md:justify-center lg:justify-start lg:pl-7 text-sm md:text-base" 
                to={"/share"} 
                onClick={()=>setOpen(false)}
              >
                <img src="/images/new_share.svg" className="w-5 h-5" alt=""/>
                <p className="md:hidden lg:block">Yeni paylaşım</p>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink 
                className="md:hidden text-red-500 flex gap-2 text-sm" 
                to="/login" 
                onClick={()=>setOpen(false)}
              >
                Hesabdan çıxış
              </NavLink>
            </li>
           </ul>
        </div>
    )
}

export default Sidebar; 