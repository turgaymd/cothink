
// import courses from "../data/CoursesData";
import Search from "../utils/Search";
import { MdArrowOutward } from "react-icons/md";
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { ApiContext } from "../ApiContext";
export const CourseCard=({item})=>{

  return(
  <div className="course-item shadow-lg rounded-2xl">
                        <article>
            <a href={`/courses/${item.course_id}`}>
              <img src={`${item?.course_img?.trim()}`}></img>
            </a>
            </article>
            <div className="course-category mt-3 text-blue-600">{item.category}</div>
            <div className="course-title mb-3 mt-3 flex justify-between">
              <h4 className="font-bold text-2xl">
                 {item.course_title}
              </h4>
              <a href={`/courses/${item.course_id}`}><MdArrowOutward fontSize={24}/></a>
            </div>
            <p className="text-gray-500">
              <span className="font-medium skills text-black">
                Əldə Edəcəyin Bacarıqlar:
              </span>
             {item.course_desc}
            </p>
            <div className="flex justify-between pb-3 mt-4 flex-col md:flex-row gap-2">
              <div className="flex gap-5 items-center">
                <div>
                <img src={`${item.profile_img}`} className=" rounded-full object-cover"/>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">{item.mentor_name}</h4>
                  <p>{item.created_at}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <img src="/images/star.svg" /> <span>4.8</span>
                <img src="/images/users.svg" /> <span>3.2k</span>
              </div>
            </div>
          </div>  
  )
}

const Courses = () => {
    const [courses, setCourses]=useState([])
    const [query ,setQuery]=useState("")
    const {apiUrl}=useContext(ApiContext)
    
   useEffect(()=>{
        axios.get(`${apiUrl}/server/courses/courseRead.php`).then(res=>{
          console.log(res.data)
            setCourses(res.data)
        })
     },[])

       const filteredCourses=courses.filter((item)=>
        item.course_title.toLowerCase().includes(query.toLowerCase()) ||
        item?.mentor_name?.toLowerCase().includes(query.toLowerCase()) 
    )
  return (
    <>
      <section>
       <Search query={query} setQuery={setQuery}/>
                    <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex md:flex-row flex-col gap-3">
                    <span className="active rounded-full">Fizika</span>
                    <span className="rounded-full">Riyaziyyat</span>
                </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
{
  filteredCourses.map((item)=>(
    <CourseCard key={item.course_id} item={item}/>
))}
                  
                  
        </div>
      </section>
    </>
  );
};
export default Courses;
