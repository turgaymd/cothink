import {  SlArrowDown, SlArrowUp } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { BsChatRightText } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { FaRegComments, FaRegFile } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import { ApiContext } from "../ApiContext";


const CourseDetail=()=>{
  const [course, setCourse]=useState(null)
   const [comments, setComments]=useState([])
  const [open, setOpen]=useState(true)
  const {apiUrl}=useContext(ApiContext)
    const { id } = useParams();  
    useEffect(() => {
      axios
        .get(`${apiUrl}/server/courses/courseDetails.php?id=${id}`)
        .then((res) => {
             console.log(res.data.data)
          setCourse(res.data.data);
       
        })
        .catch((err) => console.error(err));
    }, [id])

     axios
            .get(`${apiUrl}/server/courses/courseComments.php?course_id=${id}`)
            .then((res) => {
              setComments(res.data);
              // console.log(res.data);
            })

     const handleCollapse=()=>{
      setOpen(!open)
     }
    return(
     <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
    
            <div className="">
                <img src={course?.course_img} className="w-full"/>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500">{course?.course_title}</p>
                <a className="bg-blue-800 text-white px-4 py-2 rounded-md" href={`/courses/${course?.course_id}/content`}>Kursu əldə et</a>
            </div>
            <p className="text-blue-500">{course?.category_name}</p>
                <div className="flex  gap-5 mt-5">
            <div className="like-count flex items-center gap-2"><img src="/images/like.svg"></img>{course?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/images/comment.svg"></img>26</div>
            <div className="saved-count flex items-center gap-2"><img src="/images/save.svg"></img>{course?.saved}</div>
        </div>
        <div className="flex md:flex-row flex-col gap-3 justify-between mt-5 mb-5 w-full">
            <div className="flex gap-3">
            <img src={course?.profile_img} className="object-cover w-10 h-10"/>
            <div className="flex flex-col">
                <h4 className="font-bold">{course?.mentor_name}</h4>
                <p className="text-gray-400">Abunəçilər 11.2k</p>
                </div>
                
            </div>
            
            <div className="flex items-center gap-3 ">                 
                   <button className="bg-gray-300 rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   <button className="bg-blue-800 text-white rounded-md p-2"><BsChatRightText className="text-2xl"/></button>
                   <a className="text-blue-800 rounded-md px-5 py-2 border border-blue-700"  href={`/courses/${course?.course_id}/content`}>İzlə</a>
            </div>
            
            </div>
            
             </div>
             <div className="">
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
             {
              comments.length > 0 && (
                <>
   {  comments.map((comment)=>{
                return(
                    <>
    <div className="comment-item mt-4 mb-4" key={comment.comment_id} >
                    <div className="comment-header flex items-center ">
            <img  className="rounded-md avatar" src={comment.profile_img}></img>
            <div className="pl-4">
           <h4 className="font-semibold">{comment.mentor_name}</h4>
            <p className="text-gray-500">{comment.mentor_position}</p>
            <p className="mt-3 text-black">{comment.comment_text}</p>
            </div>
                    </div> 
                        <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>{comment?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>{comment?.comments}</div>
    </div>
                    </div>
                    </>
         )
            })}
            </>
        )}  
              
             
          
        </div>
     </section>
    )
}
export default CourseDetail;