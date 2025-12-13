
import {  useContext, useEffect, useState } from "react";
import Search from "../utils/Search";
import Articles, { ArticleCard } from "../components/Articles";
import Course, { CourseCard } from "../components/Courses"; 
import Books from "../components/Books";
import Posts from "../components/Posts";
import axios from "axios";
import { ApiContext } from "../ApiContext";
import { AuthContext } from "../AuthContext";
import { WhatsappShareButton } from "react-share";
import { FaBookmark } from "react-icons/fa";
const Saved=()=>{
      const [activeTab, setActiveTab]=useState("articles")
      const [articles, setArticles]=useState([])
      // const [courses, setCourses]=useState([])
      const [books, setBooks]=useState([])
      const {apiUrl}=useContext(ApiContext)
       const {user}=useContext(AuthContext)
              useEffect(() => {
          axios.get(`${apiUrl}/server/savedPages/savedArticles/getSaveArticles.php?student_id=${user?.id}`)
              .then(res => {
                  setArticles(res.data.saved_articles)
                  console.log(articles) 
              })
              .catch(err => console.error(err))
                 axios.get(`${apiUrl}/server/savedPages/savedBooks/getSaveBooks.php?student_id=${user?.id}`)
              .then(res => {
                  setBooks(res.data.saved_books)
                  console.log(books) 
              })
              //     axios.get(`${apiUrl}/server/savedPages/savedCourse/getSaveCourses.php?student_id=${user?.id}`)
              // .then(res => {
              //     setCourses(res.data.data)
              //     console.log(courses) 
              // })
                    axios.get(`${apiUrl}/server/savedPages/savedPosts/getSaveArticles.php?student_id=${user?.id}`)
              .then(res => {
                  setArticles(res.data.saved_articles)
                  console.log(articles) 
              })
              .catch(err => console.error(err))
           
      }, []);
 
    return (
        <section>
          <h2 className="text-center font-bold text-2xl pb-5">Xoş gəlmisiniz, {user?.name}</h2>
            <Search/>
                 <h4 className="font-bold text-xl mt-5">Kategoriyalar</h4>
              <div className="course-filter mt-3 mb-5 flex flex-col md:flex-row justify-between">
                    <div className="filter-items grid md:grid-cols-4 grid-cols-1 gap-3">
                    <button className={` flex-1 rounded-md ${activeTab==="books" ?  "bg-blue-800" : 'bg-gray-200'}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
                    <button className={`flex-1 rounded-md ${activeTab==="articles" ?  "bg-blue-800" : 'bg-gray-200'}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
                    <button className={`flex-1 rounded-md ${activeTab==="courses" ?  "bg-blue-800 " : 'bg-gray-200'}`} onClick={()=>setActiveTab("courses")}>Kurslar</button>
                    <button className={` flex-1 rounded-md ${activeTab==="posts" ?  "bg-blue-800 " : 'bg-gray-200'}`} onClick={()=>setActiveTab("posts")}>Postlar</button>           
                </div>
                {/* <button className="text-blue-500" >Hamısına bax</button> */}
            </div>
            {/* {activeTab === "courses" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {courses.length === 0 ? (
      <p className="text-center text-xl font-bold col-span-3">Kurs tapılmadı</p>
    ) : (
      courses.map((item) => (
        <CourseCard key={item._id} item={item} />
      ))
    )}
  </div>
)} */}
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
                    {activeTab==="books" && 
                  <>
                    {books.length === 0 ? (
      <p className="text-center text-xl font-bold col-span-3">Kitab tapılmadı</p>
    ) : (
      
   books.map((item, index)=>(
    <div className="grid grid-cols-1 md:grid-cols-3">
    
                   <div className="library-item shadow-xl rounded-xl mt-4" key={index}>

                <div className="flex flex-col md:flex-row gap-5">
                                          <a href={`/library/books/${item.book_id}`}>
                  <div className="flex items-center justify-center">

                  <img
                    src={item.book_img}
                    className="w-20 h-25 object-cover"
                    alt="book"
                  ></img>
                                      
                  </div>
                  </a>
                  <div className="mentor-title flex flex-col gap-3">
                    <h4 className="font-bold text-lg break-all">
                      {item.book_title}
                    </h4>
                    <p>PDF </p>
                    <div className="flex gap-5 md:flex-row stats ">
                      <div className="flex items-center gap-1">
                        <a className="flex gap-1" download href={`item.book_url`}>
                          <img src="/images/download.svg" />
                          <span>Yüklə</span>
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/images/share.svg" />
                        <WhatsappShareButton url={window.location.href} title={item.book_title}>Paylaş</WhatsappShareButton>
                      </div>
                      <div className="flex items-center gap-1">
                      <FaBookmark fontSize={24}/> 
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
          ))
        )}
                  </>
                   }
          
                    {activeTab==="posts" && <Posts/> } 
        </section>
    )
}
export default Saved;