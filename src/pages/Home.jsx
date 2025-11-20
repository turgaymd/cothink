import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Library from "../components/Library";
import { useState } from "react";
import Course from "../components/Course";
const Home=()=>{
    const [activeTab, setActiveTab]=useState("courses")
    return(
        <div>
          <div className="grid md:grid-cols-12 gap-2">
            <div className="md:col-span-2 sidebar-content">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
          <div className="md:col-span-10 p-5">
            { activeTab ==="library" && <Library/>}
            { activeTab ==="courses" && <Course/>}
          </div>
          </div>
        </div>
    )
}
export default Home;