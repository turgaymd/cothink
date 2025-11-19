
function Sidebar({setActiveTab}){
    return (
      <div >
        <div className="sidebar">
           <ul>
             <li className="bg-blue-600"><button  className="flex gap-2 "  onClick={()=>setActiveTab("courses")}><img src="courses.svg"/>Kurslar</button></li>
             <li ><button  className="flex gap-2" onClick={()=>setActiveTab("library")}><img src="library.svg"/>Kitabxana</button></li>
             <li ><button  className="flex gap-2"  onClick={()=>setActiveTab("saved")}><img src="save.svg"/>Yadda saxlanılanlar</button></li>
             <li><button  className="flex gap-2"   onClick={()=>setActiveTab("settings")} ><img src="settings.svg"/>Parametrlər</button></li>
           </ul>
           </div>
           </div>
    )
}
export default Sidebar;