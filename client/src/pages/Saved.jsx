
import { useEffect, useState } from "react";
import Search from "../utils/Search";
import Articles, { ArticleCard } from "../components/Articles";
import Course, { CourseCard } from "../components/Courses"; 
import Books from "../components/Books";
import Posts from "../components/Posts";
import axios from "axios";
const Saved=()=>{
      const [activeTab, setActiveTab]=useState("books")
      const [articles, setArticles]=useState([])
      const [courses, setCourses]=useState([])
      
              useEffect(() => {
          axios.get("http://localhost/cothink1/cothink/server/articles/articleRead.php")
              .then(res => {
                  setArticles(res.data)
                  console.log(res.data) // burda gələn datanı görə bilərsən
              })
              .catch(err => console.error(err))
              axios.get("http://localhost/cothink1/cothink/server/courses/courseRead.php").then(res=>{
            setCourses(res.data)
            console.log(courses)
        })
      }, []);
 
    return (
        <section>
            <Search/>
                 <h4 className="font-bold text-xl mt-5">Kategoriyalar</h4>
              <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex md:flex-row flex-col gap-3">
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
                  {activeTab==="articles" && 
                  <>
                    {articles.length === 0 ? (
      <p className="text-center text-xl font-bold col-span-3">Məqalə tapılmadı</p>
    ) : (
      articles.map((item) => (
        <ArticleCard key={item._id} item={item} />
      ))
    )}
                  </>
                   }
                  {activeTab==="books" && <Books/> }
                    {activeTab==="posts" && <Posts/> }
        </section>
    )
}
export default Saved;