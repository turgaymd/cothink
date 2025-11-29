import { useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import courses from "../data/CourseData";
import { CourseCard } from "../components/Courses";
import Articles from "../components/Articles";
import Posts from "../components/Posts";
const Mentor=()=>{
    const [activeTab, setActiveTab]=useState("courses")
    return (
        <div>
       <section>
        <h2 className="text-center font-bold text-2xl ">Mentor Profili</h2>
        <div className="mentor-profile mt-4 ">
            <div className="bg-white shadow-3xl border border-gray-200 shadow-white-800 rounded-lg px-10 py-4">
                <div className="gap-2 grid grid-cols-1 lg:grid-cols-2">
                <div className="profil-img flex flex-col justify-center items-center">
                    <img src="/mentor_avatar.jpg" className="mentor-avatar rounded-full"/>
                   <div className="flex justify-end gap-5 comment-reactions pt-3 text-blue-700">
            <div className="like-count flex items-center gap-2"><HiOutlineUsers fontSize={24}/>   2.6k tələbə</div>
            <div className="comment-count flex items-center gap-2" ><FaRegComments fontSize={24}/>  Rəy(100+)</div>
        </div>

                </div>
                <div className="mentor-info flex flex-col gap-2">
<h4 className="font-bold text-xl">Aysel Məmmədova</h4>
<p>UX dizayn və istifadəçi tədqiqatı üzrə 6 illik təcrübəyə malikdir.</p>
<div className="flex gap-4">
   <span className="bg-white rounded-full px-4 py-2 border border-gray-400"> UX/UI Designer</span>
   <a></a>
   <a></a>
</div>
<p>Danışıq dilləri:</p>
<div className="flex gap-3 mt-2 mb-5">
<span className="bg-white rounded-md px-4 py-2 border border-gray-400">Azərbaycan</span>
<span className="bg-white rounded-md px-4 py-2 border border-gray-400">Alman</span>
<span className="bg-white rounded-md px-4 py-2 border border-gray-400">Ingilis</span>
</div>
                </div>
                                    
                </div>
            </div>
        </div>
            <div className="flex justify-center mb-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={`rounded-full w-full ${activeTab==="courses" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("courses")}>Kurslar</button>
            <button  className={`rounded-full w-full ${activeTab==="posts" ?  "bg-blue-700 text-white" : ''}`}  onClick={()=>setActiveTab("posts")}>Postlar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
        </div> 
                </div> 
                <div>                 
                      {activeTab === "courses" && (
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {courses.length === 0 ? (
      <p className="text-center text-xl font-bold col-span-3">Kurs tapılmadı</p>
    ) : (
      courses.map((item) => (
        <CourseCard key={item._id} item={item} />
      ))
    )}
        </div>
)}  
{activeTab==="articles" && <Articles/> }
   {activeTab==="posts" && <Posts/> }
</div>
        </section>
        </div>
    )
}
export default Mentor;