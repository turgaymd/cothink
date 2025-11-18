import { useState } from "react";
import Home from "../pages/Home";
function Sidebar(){
  const [activeTab, setActiveTab]=useState("courses")
    return (
      <div className="w-full grid md:grid-cols-12">
        <div className="sidebar md:col-span-2">
           <ul>
             <li><button  className="flex gap-2"  onClick={()=>setActiveTab("courses")}><img src="course.svg"/>Kurslar</button></li>
             <li ><button  className="flex gap-2" onClick={()=>setActiveTab("library")}><img src="library.svg"/>Kitabxana</button></li>
             <li ><button  className="flex gap-2"  onClick={()=>setActiveTab("saved")}><img src="save.svg"/>Yadda saxlanılanlar</button></li>
             <li><button  className="flex gap-2"   onClick={()=>setActiveTab("settings")} ><img src="settings.svg"/>Parametrlər</button></li>
           </ul>
           </div>
           <div id="sidebar-tabs " className="md:col-span-10">
                <div>
                  <Home activeTab={activeTab}/>
                </div>
          </div>
           </div>

    )
}
export default Sidebar;