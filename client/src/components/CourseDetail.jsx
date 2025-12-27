
import { BsChatRightText } from "react-icons/bs";
import { FaBookmark, FaRegBookmark, FaRegComments, FaRegFile } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { WhatsappShareButton } from "react-share";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { CommentCard } from "./Comments";


const CourseDetail=()=>{
  const [course, setCourse]=useState(null)
  const [savedCourses, setSavedCourses]=useState([])
  const [comments, setComments]=useState([])
  const [comment, setComment]=useState("")
  const [error,setError]=useState('')
  const [open, setOpen]=useState(true)
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)
  const [liked,setLiked]=useState(false)
  const { id } = useParams();  


   const fetchComments=async()=>{ 
     axios.get(`${apiUrl}/server/courses/courseComments.php?course_id=${id}`)
            .then((res) => {
              setComments(res.data.comments);
            })
            .catch((err) => console.error(err));
        }

    useEffect(() => {
      axios
        .get(`${apiUrl}/server/courses/courseDetails.php?id=${id}`)
        .then((res) => {
          setCourse(res.data.data);
        })
        .catch((err) => console.error(err));
        fetchComments()

          axios.get(`${apiUrl}/server/savedPages/savedCourse/getSaveCourses.php?student_id=${user?.id}`)
              .then(res => {
                const ids=res.data.saved_courses.map(item=>item.course_id)
                  setSavedCourses(ids)
              })
    }, [id, user])



     const handleCollapse=()=>{
      setOpen(!open)
     }

  const handleComments=async (e)=>{
    e.preventDefault()
    if(comment===""){
        setError("Komment daxil edin")
        return;
    }
   const res=  await axios.post(`${apiUrl}/server/courses/postComments.php?course_id=${id}`,
     {
        student_id:user?.id, comment_text:comment}
    )
    if(res.data.status==="success"){
        setComment("")
        toast.success("Rəy paylaşıldı")
        fetchComments()
}
              
            
}
const handleSave=async(item)=>{
   try {
      const res = await axios.post(
        `${apiUrl}/server/savedPages/savedCourse/postsaveCourses.php?course_id=${item.course_id}`,
         {
          student_id:user?.id
         },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.status === "success") {
        toast.success("Kurs yadda saxlanıldı");
        setSavedCourses((prev)=>[...prev, item.course_id])
      } else {
          toast.error("Tələbə kimi daxil olun");
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
}
 const handleUnsave=async(item)=>{
    
    await axios.delete(`${apiUrl}/server/savedPages/savedCourse/unSaveCourses.php?course_id=${item.course_id}`,
      {data:{course_id:item.course_id, student_id:user?.id},
      headers: { "Content-Type": "application/json" } },
      setSavedCourses((prev)=>prev.filter((id)=>id!==item.course_id))
    )

  }

 const handleLike=async(item)=>{
           setLiked(true)
    try {
      const res = await axios.post(
        `${apiUrl}/server/likes/courseLikes/like.php?course_id=${item.course_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
          if (res.data.status === "liked") {
             setCourse((prev)=>({...prev, likes:prev.likes+1}))
        setLiked(true)
      }
     else if(res.data.status === "exists"){
        toast.info("Artiq bəyənmisiniz")
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  }

     const handleUnlike=async(item)=>{
    try {
      const res = await axios.post(
        `${apiUrl}/server/likes/courseLikes/unlike.php?course_id=${item.course_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
          if (res.data.status === "unliked") {
             setCourse((prev)=>({...prev, likes:prev.likes-1}))
        setLiked(false)
      }
   else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  }
    return(
      <>
      
      <ToastContainer/>
     <section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
            <div className="col-span-7">
                <img src={course?.course_img} className="w-full"/>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500">{course?.course_title}</p>
                <a className="bg-blue-800 text-white px-4 py-2 rounded-md" href={`/courses/${course?.course_id}/content`}>Kursu əldə et</a>
            </div>
            <p className="text-blue-500">{course?.category_name}</p>
                <div className="flex  gap-3 mt-5">
            <div className="like-count flex items-center gap-1">
                 {
                                            liked ? <AiFillLike fontSize={24} onClick={()=>handleUnlike(course)}/> :
                                            <AiOutlineLike fontSize={24} onClick={()=>handleLike(course)}/>
                                }
    
              {course?.likes}</div>
            <div className="comment-count flex items-center gap-1" >
              <WhatsappShareButton url={window.location.href} title={course?.course_title}>    
                
          
                 <img src="/images/share.svg"></img></WhatsappShareButton>
         
              
              26</div>
            <div className="saved-count flex items-center gap-1">
                         {savedCourses?.includes(course?.course_id) ? 
                                                    (<FaBookmark fontSize={24} onClick={()=>handleUnsave(course)}/>) :
                                                     (<FaRegBookmark   fontSize={24} onClick={()=>handleSave(course)}/>)}
              {/* <img src="/images/save.svg"></img> */}
              {course?.saved
              }</div>
        </div>
        <div className="flex md:flex-row flex-col gap-3 justify-between mt-5 mb-5 w-full">
            <div className="flex gap-3">
 <img
  src={
    course?.profile_img
      ? course.profile_img.trim().startsWith("http")
        ? course.profile_img.trim()
        : `https://cothink.az/${course.profile_img.trim()}`
      : "/images/admin.png"
  }
  className="object-cover w-10 h-10 rounded-full"
  alt="course"
/>

            <div className="flex flex-col">
                <h4 className="font-medium">{course?.mentor_name}</h4>
                <p className="text-gray-400">Abunəçilər 11.2k</p>
                </div>
                
            </div>
            
            <div className="flex items-center gap-3 ">                 
                   <button className="bg-gray-200 rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   <button className="bg-blue-800 text-white rounded-md p-2"><BsChatRightText className="text-2xl"/></button>
                   <a className="text-blue-800 rounded-md px-5 py-2 border border-blue-700"  >İzlə</a>
            </div>
            
            </div>
             
             </div>
             <div className="col-span-5">
                <button className="w-full bg-blue-800 text-xl text-white rounded-full">Kurs planı</button>
                    <div className="features_card shadow-white-200 shadow-xl px-3 py-2 mb-5">
  
                        {
                          open && (
                            <> 
                                {course?.lessons && course?.lessons?.length>0 ?(
                        course?.lessons.map((lesson, index)=>(
                           <>
                            <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
  <div className="flex items-center gap-3 cursor-pointer" >
                                 <div className="icons">
                              <span className="text-blue-500 rounded-full"><FaRegCirclePlay fontSize={24}/></span>  
                            </div>
                            <div className="flex flex-col">
                            <h4 className="font-bold">{lesson.lesson_title}</h4>
                            <p className="text-gray-400">3 dəq 45 san</p>
                            </div>
                            </div>          
                        </div>
                        </>
                          ))
                        )
                          : (
                            <p className="font-bold col-span-4 text-center text-xl">Dərs tapılmadı</p>
                          )
                        }
                            </>
                          )
                        }   
                        </div>
             </div>
                </div>
            <div className="grid md:grid-cols-12 grid-cols-1">
              <div className="col-span-7">
               <form onSubmit={handleComments}>
                            {error && (
                <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
                  {error}
                </p>
                            )}
  <input type="text" className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md" placeholder="Fikirlərinizi yazın…" onChange={(e)=>setComment(e.target.value)}/>
                    <h4 className=" mt-5 font-bold text-lg" >Rəylər</h4>
                        </form>
                      

             {
              comments.length > 0 && (
                
                <>
                    <h4 className="mb-3 mt-3 font-bold text-lg" ></h4>
   {  comments.map((comment)=>{
                return(
                    <>
<CommentCard key={comment._id} comment={comment}/>
                    </>
         )
            })}
            </>
        )}  
              
             
          </div>
     </div>
     </section>
     </>
    )
}
export default CourseDetail;