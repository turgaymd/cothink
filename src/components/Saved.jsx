
import { useState } from "react";
import Search from "./Search";
import Articles from "./Articles";
import Course, { CourseCard } from "./Courses";
import courses from "../data/CourseData";
import Books from "./Books";
const Saved=()=>{
      const [activeTab, setActiveTab]=useState("books")

 
    return (
        <section>
            <Search/>
                 <h4 className="font-bold text-xl mt-5">Kategoriyalar</h4>
              <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex gap-3">
                    <button className={` rounded-md ${activeTab==="books" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
                    <button className={`rounded-md ${activeTab==="articles" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
                    <button className={`rounded-md ${activeTab==="courses" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("courses")}>Kurslar</button>
                    <button className={`rounded-md ${activeTab==="posts" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("posts")}>Postlar</button>
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
                  {activeTab==="books" && <Books/> }
        </section>
    )
}
export default Saved;