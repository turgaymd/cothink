
// import courses from "../data/CoursesData";
import Search from "../utils/Search";
import { MdArrowOutward } from "react-icons/md";
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { ApiContext } from "../ApiContext";
import Select from "react-select"
import { PiX } from "react-icons/pi";
export const CourseCard=({item})=>{

  return(
  <div className="course-item shadow-lg rounded-2xl">
                        <article>
            <a href={`/courses/${item?.course_id}`}>
              <img src={`${item?.course_img?.trim()}`}></img>
            </a>
            </article>
            <div className="course-category mt-3 text-blue-600">{item?.category}</div>
            <div className="course-title mb-3 mt-3 flex justify-between items-center">
              <h4 className="font-bold text-2xl">
                 {item?.course_title}
              </h4>
              <a href={`/courses/${item.course_id}`}>{item?.course_price} AZN</a>
            </div>
            <p className="text-gray-500">
              <span className="font-medium skills text-black">
                Əldə Edəcəyin Bacarıqlar:
              </span>
             {item?.course_desc}
            </p>
            <div className="flex justify-between pb-3 mt-4 flex-col md:flex-row gap-2">
              <div className="flex gap-5 items-center">
                <div>
                <img src={`${item?.profile_img}`} className="w-15 h-15 rounded-full object-cover"/>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">{item?.mentor_name}</h4>
                  <p>{item?.created_at}</p>
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
    const [selectedCategory,setSelectedCategory]=useState(null)
    const [categories,setCategories]=useState([])
    const [query ,setQuery]=useState("")
    const {apiUrl}=useContext(ApiContext)
    
      const handleSelect = (value) => {
    setSelectedCategory(value);
  };

   useEffect(()=>{
        axios.get(`${apiUrl}/server/courses/courseRead.php`).then(res=>{
          console.log(res.data)
            setCourses(res.data)
        })
           axios.get(`${apiUrl}/server/categories/categoryRead.php`).then(res=>{ 
            setCategories(res.data.data) ;
            // setDisplayedCategories(res.data.data.slice(0,4))
        })
     },[])

       const filteredCourses=courses.filter((item)=>{
       const searchedQuery= item?.course_title?.toLowerCase().includes(query.toLowerCase()) ||
        item?.mentor_name?.toLowerCase().includes(query.toLowerCase()) 
        const matchedCategories=!selectedCategory ||  item?.category===selectedCategory
        return searchedQuery && matchedCategories
       }
    )
  return (
    <>
      <section>
       <Search query={query} setQuery={setQuery}/>
                    <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex md:flex-row flex-col gap-3">
                    <button className="active rounded-full md:w-64 w-full text-center" onClick={()=>setSelectedCategory(null)}>Hamısı</button>
                    <div className="relative md:w-64 w-full">
<div className="relative w-full">
  <select
    value={selectedCategory || ""}
    onChange={(e) => handleSelect(e.target.value)}
    className={`rounded-full px-5 py-2 bg-blue-800 w-full appearance-none shadow-md text-white outline-none 
               border cursor-pointer ${!selectedCategory ? 'text-center' : 'text-center'}`}
    style={{ textAlign: 'center', textAlignLast: 'center' }}
  >
    <option value="" disabled hidden>
      Kateqoriya seçin
    </option>

    {categories.map((item) => (
      <option
        key={item.category_id}
        value={item.category}
        className="bg-white w-full border-none outline-none text-black font-medium"
        style={{ textAlign: 'left' }}
      >
        {item.category}
      </option>
    ))}
  </select>

  <div className="pointer-events-none absolute text-white right-5 inset-y-0 flex justify-center items-center">
    ▼
  </div>
</div>

          </div>
                </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
{
  filteredCourses.length>0 ? 
  filteredCourses.map((item)=>(
    <CourseCard key={item.course_id} item={item}/>
  )) : (
             <p className="text-center text-xl font-bold col-span-3">
              Kurs tapılmadı
            </p>
  )
}

                  
                  
        </div>
      </section>
    </>
  );
};
export default Courses;
