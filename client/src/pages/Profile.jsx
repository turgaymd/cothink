import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Articles from "../components/Articles";
import Books from "../components/Books";
import courses from "../data/CourseData";
import { CourseCard } from "../components/Courses";
import Posts from "../components/Posts";
const Profiles=()=>{
      const [activeTab, setActiveTab]=useState("courses")
    return  (
        <section>
            <div className="flex justify-between">
        <div className="flex gap-5">
            <div>
                <img src="rauf.jpg" className="rounded-full h-24 w-24 object-cover"/>                
            </div>
            <div className="flex flex-col gap-3 justify-center">
                <h4 className="font-bold text-xl">Rauf Quliyev</h4>
                <div className="flex gap-5">
                     <span>2.6k tələbə</span>
                    <span>38 post</span>
                    <span>120 izləyici</span>
                    <span>45 izlədiklərim</span>
                </div>
            </div>
             </div>
             <div className="actions flex gap-3">
                <button><IoAddCircleOutline fontSize={24}/></button> 
                <button><IoMenu fontSize={24}/></button> 
             </div>
        </div>
        <div className="flex gap-3 mt-3 mb-3">
            <a className="bg-blue-800 text-white rounded-full py-3 px-5" href="/profile/edit">Profili redaktə et</a>
            <button className="bg-blue-800 text-white rounded-full px-5 py-3">Profili paylaş</button>
        </div>
            <div className="flex justify-center mb-5 mt-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={`rounded-full w-full ${activeTab==="courses" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActiveTab("courses")}>Kurslar</button>
            <button className={` rounded-full w-full ${activeTab==="posts" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActiveTab("posts")}>Postlar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
        </div> 
        </div>
  {activeTab === "courses" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
               
</section>

    )
}
export default Profiles;