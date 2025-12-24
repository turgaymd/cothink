
import {  useContext, useEffect, useState } from "react";
import Search from "../utils/Search";
import Articles, { ArticleCard } from "../components/Articles";
import Course, { CourseCard } from "../components/Courses"; 
import Books from "../components/Books";
import Posts, { PostCard } from "../components/Posts";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
import { WhatsappShareButton } from "react-share";
import { FaBookmark } from "react-icons/fa";
const Saved=()=>{
      const [activeTab, setActiveTab]=useState("books")
      const [articles, setArticles]=useState([])
      const [courses, setCourses]=useState([])
      const [books, setBooks]=useState([])
      const [posts, setPosts]=useState([])
      const {apiUrl}=useContext(ApiContext)
       
 console.log(articles)
       const {user}=useContext(AuthContext)
              useEffect(() => {
          axios.get(`${apiUrl}/server/savedPages/savedArticles/getSaveArticles.php?student_id=${user?.id}`)
              .then(res => {
                  setArticles(res.data.saved_articles)
              
              })
              .catch(err => console.error(err))
                 axios.get(`${apiUrl}/server/savedPages/savedBooks/getSaveBooks.php?student_id=${user?.id}`)
              .then(res => {
                  setBooks(res.data.saved_books)
      
              })
                  axios.get(`${apiUrl}/server/savedPages/savedCourse/getSaveCourses.php?student_id=${user?.id}`)
              .then(res => {
                  setCourses(res.data.saved_courses)
  
              })
                    axios.get(`${apiUrl}/server/savedPages/savedPosts/getSavedPosts.php?student_id=${user?.id}`)
              .then(res => {
                  setPosts(res.data.saved_books)
    
              })
              .catch(err => console.error(err))
           
      }, []);

         const handleUnsave=async(item)=>{
           await axios.delete(`${apiUrl}/server/savedPages/savedBooks/unSaveBooks.php?book_id=${item.book_id}`,
             {data:{book_id:item.book_id, student_id:user?.id},
             headers: { "Content-Type": "application/json" } },
           )
                      setBooks((prev)=>prev.filter((book)=>book.book_id!==item.book_id))
         }
         
 
    return (
        <section>
          <h2 className="text-center font-bold text-2xl pb-5">Xoş gəlmisiniz, {user?.name}</h2>
            <Search/>
                 <h4 className="font-bold text-xl mt-5">Kategoriyalar</h4>
              <div className="course-filter mt-3 mb-5 flex flex-col md:flex-row justify-between">
                    <div className="filter-items grid md:grid-cols-4 grid-cols-2 gap-3">
                    <button className={` flex-1 rounded-md ${activeTab==="books" ?  "active" : 'bg-gray-200'}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
                    <button className={`flex-1 rounded-md ${activeTab==="articles" ?  "active" : 'bg-gray-200'}`} onClick={()=>setActiveTab("articles")}>Bloqlar</button>
                    <button className={`flex-1 rounded-md ${activeTab==="courses" ?  "active " : 'bg-gray-200'}`} onClick={()=>setActiveTab("courses")}>Kurslar</button>
                    <button className={` flex-1 rounded-md ${activeTab==="posts" ?  "active " : 'bg-gray-200'}`} onClick={()=>setActiveTab("posts")}>Postlar</button>           
                </div>
                {/* <button className="text-blue-500" >Hamısına bax</button> */}
            </div>
            {activeTab === "courses" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {!Array.isArray(courses) || courses?.length === 0 ? (
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
      <p className="text-center text-xl font-bold col-span-3">Bloq tapılmadı</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
   {books.map((item, index)=>(
   <div className="library-item  shadow-sm hover:shadow-md transition rounded-xl mt-4" key={index}>
                <div className="flex  gap-4">
                  <a href={`/library/books/${item.book_id}`}>
                      <img
                        src={item.book_img}
                        className="w-20 h-28 object-cover rounded-md"
                        alt="book"
                      ></img>
  
                  </a>
                  <div className=" flex flex-col flex-1 gap-3">
                    <h4 className="font-semibold text-sm line-clamp-2">
                      {item.book_title}
                    </h4>
                    <span className="inline-block rounded w-fit bg-gray-100 px-2 py-0.5">PDF </span>
                      <div className="flex items-center gap-4 mt-auto pt-3 text-sm">
                        <a className="flex gap-1" download href={`item.book_url`}>
                          <img src="/images/download.svg" />
                          <span>Yüklə</span>
       </a>
                      <div className="flex items-center gap-1">
                        <img src="/images/share.svg"  className="w-5"/>
                        <WhatsappShareButton url={window.location.href} title={item.book_title}>Paylaş</WhatsappShareButton>
                      </div>
                      <button className="ml-auto">

                          <FaBookmark fontSize={20} onClick={()=>handleUnsave(item)}/>
                      </button>
                    </div>
                                     
                      </div>
                  </div>
              </div>
            //        <div className="library-item shadow-xl rounded-xl mt-4" key={index}>

            //     <div className="flex flex-col md:flex-row gap-5">
            //                               <a href={`/library/books/${item.book_id}`}>
            //       <div className="flex items-center justify-center">

            //       <img
            //         src={item.book_img}
            //         className="w-20 h-25 object-cover"
            //         alt="book"
            //       ></img>
                                      
            //       </div>
            //       </a>
            //       <div className="mentor-title flex flex-col gap-3">
            //         <h4 className="font-bold text-lg break-all">
            //           {item.book_title}
            //         </h4>
            //         <p>PDF </p>
            //         <div className="flex gap-5 md:flex-row stats ">
            //           <div className="flex items-center gap-1">
            //             <a className="flex gap-1" download href={`item.book_url`}>
            //               <img src="/images/download.svg" />
            //               <span>Yüklə</span>
            //             </a>
            //           </div>
            //           <div className="flex items-center gap-1">
            //             <img src="/images/share.svg" />
            //             <WhatsappShareButton url={window.location.href} title={item.book_title}>Paylaş</WhatsappShareButton>
            //           </div>
            //           <div className="flex items-center gap-1">
            //           <FaBookmark fontSize={24}/> 
            //           </div>
            //         </div>
            //       </div>
            //     </div>

            // </div>
         
          ))}
           </div>
        )}
                  </>
                   }
          
                      {activeTab === "posts" &&
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       
                           {!Array.isArray(posts) ||  posts?.length >0 ? (    
                                 posts.map((item) =>( <PostCard  key={item.post_id} item={item} />
                              ))) :
                        ( 
                          <p className="text-center text-xl font-bold col-span-3">
                                  Postlar tapılmadı
                                </p>
                        )
                      } 
                          </div>
                    }
        </section>
    )
}
export default Saved;