import axios from "axios";
import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
const CourseContent=()=>{
        const { id } = useParams();  
        const [course, setCourse]=useState(null)
        useEffect(() => {
          axios
            .get(`http://localhost/cothink1/cothink/server/courses/courseDetails.php?id=${id}`)
            .then((res) => {
              setCourse(res.data.data);
              console.log(res.data.data);
            })
            .catch((err) => console.error(err));
        }, [id])
    
         if (!course) return <Loading/>;
    return(
        <section>
            <h2 className="font-bold text-2xl">{course.course_title}</h2>
            <p className="text-gray-400">{course.category}</p>
          <div className="flex justify-between mt-3">
             <p>İrəliləyiş</p>
             <p>52%</p>
            </div> 
            <div className="w-full rounded-full pt-2 mb-5">
                  <div className="bg-blue-800 progress-bar h-3 rounded-2xl" > </div>
            </div>
            <button className="text-white bg-blue-800 rounded-md py-3">Öyrənməyə davam edin</button>
            <div className="features_card shadow-sm inset-shadow-sm mt-4">
                <h4 className="font-semibold text-center text-xl pb-4">{course.lessons[0].lesson_title}</h4>
            <div></div>
            <div className="flex justify-center relative flex-col items-center">
            <video src={course.video_link} className="md:h-[64vh] h-[40vh] w-full object-cover rounded-md" controls={true}/>
               <div className="w-full flex gap-3 pt-2 pb-2 mt-3 justify-between shadow-sm inset-shadow-sm ">
                <button className="w-full flex gap-3"><SlArrowLeft className="text-blue-600" fontSize={24}/>Əvvəlki</button>
                <button className="w-full flex justify-end gap-3">Sonrakı<SlArrowRight className="text-blue-600" fontSize={24}/></button>
            </div>
            </div>
               </div>
               <div className="shadow-sm inset-shadow-sm mt-4 px-4 py-3 rounded-md">
                <div className="flex items-center gap-3">
                    <img src="/library.svg" className="w-10 h-10"/>
                    <div>
                <h5>16 dərs</h5>
                <p className="text-gray-500">Ümumi 52 saat</p>
                    </div>
                    </div>
                 
               </div>
                  <div className="features_card shadow-sm inset-shadow-sm mt-4 px-4 py-3  rounded-md">
                        <p className="text-gray-400 pb-4">Enerji, İstilik və İş” fizika mövzusu enerji növlərinin, istilik proseslərinin və mexaniki iş anlayışının öyrənilməsi üçün hazırlanmış dərs bölməsidir. </p>
                    {
                        course.lessons.map((lesson, index)=>(
   <div className="flex justify-between border-b border-b-gray-200 pb-3 pt-3" key={index}>
                       <div className="flex gap-3">
                        <RiArrowDownSLine fontSize={24}/>
                        <h4 className="font-bold text-lg">{lesson.lesson_title}</h4>
                        </div>
                        <div className="flex gap-3 text-gray-400">
                         <p>5 Dərs</p>
                        <span>45 Dəqiqə</span>
                        </div>
                    </div>
                        ))
                    }
                                
                    </div>
                    <div className="comments">
                        <input type="text" className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md" placeholder="Fikirlərinizi yazın…"/>
    <h4 className="mb-3 mt-3 font-bold text-lg">Rəylər</h4>
    <div className="comment-item">
          <div className="comment-header flex items-center">
            <img  className="rounded-md avatar" src="/həcər.jpg"></img>
            <div className="pl-4">
           <h4 className="font-semibold">Həcər Quliyeva</h4>
            <p className="text-gray-500">Tələbə – Kompüter Mühəndisliyi</p>
            <p className="mt-3 text-black">Çox aydın izah olunub. Xüsusilə Enerji və İş anlayışları arasındakı fərqlərin real nümunələrlə göstərilməsi xoşuma gəldi</p>
            </div>
                    </div>
            <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>26</div>
    </div>
</div>
                    </div>
        </section>
    )
}
export default CourseContent;