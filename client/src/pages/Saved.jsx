
import { useContext, useEffect, useState } from "react";
import Search from "../utils/Search";
import Articles, { ArticleCard } from "../components/Articles";
import Course, { CourseCard } from "../components/Courses"; 
import Books from "../components/Books";
import Posts from "../components/Posts";
import axios from "axios";
import { ApiContext } from "../ApiContext";
import { AuthContext } from "../AuthContext";
const Saved=()=>{
      const [activeTab, setActiveTab]=useState("articles")
      const [articles, setArticles]=useState([])
      const [courses, setCourses]=useState([])
      const {apiUrl}=useContext(ApiContext)
       const {user}=useContext(AuthContext)
              useEffect(() => {
          axios.get(`${apiUrl}/server/articles/articleRead.php`)
              .then(res => {
                  setArticles(res.data)
                  console.log(res.data) 
              })
              .catch(err => console.error(err))
              axios.get(`${apiUrl}/server/courses/courseRead.php`).then(res=>{
            setCourses(res.data)
            console.log(courses)
        })
      }, []);
 
    return (
        <section>
          <h2 className="text-center font-bold text-2xl pb-5">Xoş gəlmisiniz, {user?.name}</h2>
            <Search/>
                 <h4 className="font-bold text-xl mt-5">Kategoriyalar</h4>
              <div className="course-filter mt-5 mb-5 flex flex-col md:flex-row justify-between">
                    <div className="filter-items grid md:grid-cols-4 grid-cols-1 gap-3">
                    <button className={` flex-1 rounded-md ${activeTab==="books" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
                    <button className={`flex-1 rounded-md ${activeTab==="articles" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
                    <button className={`flex-1 rounded-md ${activeTab==="courses" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("courses")}>Kurslar</button>
                    <button className={` flex-1 rounded-md ${activeTab==="posts" ?  "bg-blue-800 text-white" : 'bg-gray-200'}`} onClick={()=>setActiveTab("posts")}>Postlar</button>           
                </div>
                <button className="text-blue-500" >Hamısına bax</button>
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
                  {/* {activeTab==="books" && <Books/> } */}
                    {activeTab==="posts" && <Posts/> } 
        </section>
    )
}
export default Saved;