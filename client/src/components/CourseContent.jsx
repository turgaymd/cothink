import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { CommentCard } from "./Comments";
const CourseContent=()=>{
        const { id } = useParams();  
        const [course, setCourse]=useState(null)
        const [currentIndex, setCurrentIndex]=useState(0)
        const {apiUrl}=useContext(ApiContext)
        const {user}=useContext(AuthContext)
        const [error,setError]=useState('')
        const [comments, setComments]=useState([])
        const [comment, setComment]=useState("")

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
        }, [id,])


    const handleNext=()=>{
        if(currentIndex<course.lessons.length-1){
          setCurrentIndex(currentIndex+1)
        }
    }
           const handlePrev=()=>{
        if(currentIndex>0){
          setCurrentIndex(currentIndex-1)
        }

    }
    const getEmbedUrl=(url)=>{
        const videoUrl=url?.split("youtu.be/")[1]?.split("?")[0]
            return `https://www.youtube.com/embed/${videoUrl}`;
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
    return(
        <>
        <ToastContainer/>
        <section>
            <h2 className="font-bold text-2xl">{course?.course_title}</h2>
            <p className="text-gray-400">{course?.category}</p>
          <div className="flex justify-between mt-3">
             <p>İrəliləyiş</p>
             <p>52%</p>
            </div> 
            <div className="w-full bg-gray-200 rounded-full h-3  mb-5">
                  <div className="bg-blue-800 progress-bar h-3 rounded-2xl w-3/4 animate-pulse" > </div>
            </div>
           
            <button className="text-white bg-blue-800 rounded-md py-3">Öyrənməyə davam edin</button>
            <div className="features_card shadow-sm inset-shadow-sm mt-4">
                <h4 className="font-semibold text-center text-xl pb-4">{course?.lessons[currentIndex]?.lesson_title}</h4>
            <div></div>
            <div className="flex justify-center relative flex-col items-center">
            <iframe src={course && getEmbedUrl(course?.lessons[currentIndex]?.video_link)} className="md:h-[64vh] h-[40vh] w-full object-cover rounded-md" controls={true}/>
               <div className="w-full flex gap-3 pt-2 pb-2 mt-3 justify-between shadow-sm inset-shadow-sm ">
                <button className="w-full flex gap-3" onClick={handlePrev} disabled={currentIndex===0}><SlArrowLeft className="text-blue-600" fontSize={24} />Əvvəlki</button>
                <button className="w-full flex justify-end gap-3"  onClick={handleNext}>Sonrakı<SlArrowRight className="text-blue-600" fontSize={24}/></button>
            </div>
            </div>
               </div>
               <div className="shadow-sm inset-shadow-sm mt-4 px-4 py-3 rounded-md">
                <div className="flex items-center gap-3">
                    <img src="/images/library.svg" className="w-10 h-10"/>
                    <div>
                <h5>{course?.lessons?.length} Dərs</h5>
                <p className="text-gray-500">Ümumi 15 dəqiqə</p>
                    </div>
                    </div>                
               </div>
                  <div className="features_card shadow-sm inset-shadow-sm mt-4 px-4 py-3  rounded-md">
                        <p className="text-gray-400 pb-4">Enerji, İstilik və İş” fizika mövzusu enerji növlərinin, istilik proseslərinin və mexaniki iş anlayışının öyrənilməsi üçün hazırlanmış dərs bölməsidir. </p>
                    {
                        course?.lessons.map((lesson, index)=>(
   <div className="flex justify-between border-b border-b-gray-200 pb-3 pt-3" key={index}>
                       <div className="flex gap-3">
                     
                        <RiArrowDownSLine fontSize={24}/>
                        <h4 className="font-bold text-lg">{lesson?.lesson_title}</h4>
                        </div>
                        <div className="flex gap-3 text-gray-400">
                         <p>0 Dərs</p>
                        <span>0 Dəqiqə</span>
                        </div>
                    </div>
                        ))
                    }
                                
                    </div>
                    <div className="comments">
                        <form onSubmit={handleComments}>
                            {error && (
                <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
                  {error}
                </p>
                            )}
  <input type="text" className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md" placeholder="Fikirlərinizi yazın…" onChange={(e)=>setComment(e.target.value)}/>
                    
                        </form>
                      
    <h4 className="mb-3 mt-3 font-bold text-lg" >Rəylər</h4>
       {
              comments.length > 0 && (
                <>
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
        </section>
        </>
    )
}
export default CourseContent;