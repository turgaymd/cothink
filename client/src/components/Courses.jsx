

import Search from "../utils/Search";
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";
import Select from "react-select"
export const CourseCard=({item})=>{

  const courseImg=item?.course_img?.startsWith("http") ? item?.course_img : `https://cothink.az/server/${item?.course_img}`

  return(
  <div className="course-item shadow-lg rounded-2xl">
                        <article>
            <a href={`/courses/${item?.course_id}`}>
              <img src={courseImg}/>
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
                      <img
            src={
              item?.profile_img
                ? item.profile_img.trim().startsWith("http")
                  ? item.profile_img.trim()
                  : `https://cothink.az/${item.profile_img.trim()}`
                : "/images/admin.png"
            }
            className="w-15 h-15 rounded-full object-cover"
            alt="profile"
          />

                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">{item?.mentor_name}</h4>
                  <p>  {new Date(item.created_at).toLocaleDateString()}</p>
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
    
  

   useEffect(()=>{
        axios.get(`${apiUrl}/server/courses/courseRead.php`).then(res=>{
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
     const handleSelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory.value);
  };
  return (
    <>
      <section>
       <Search query={query} setQuery={setQuery}/>
                    <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex md:flex-row flex-col gap-3">
                    <button className="active rounded-full md:w-64 w-full text-center" onClick={()=>setSelectedCategory(null)}>Hamısı</button>
                    <div className="relative md:w-64 w-full">
<div className="relative w-full">

 <Select className=" w-full outline-none"
              options={categories.map((item) => ({
                value: item.category,
                label: item.category,
              }))}
              onChange={handleSelect}
              placeholder="Kategoriya seçin"
              styles={{
                control:(base, state)=>({
                    ...base,
                    boxShadow:"none",
                    borderRadius:"9999px",
                    backgroundColor:"#1e40af",
                    color:"white !important",
                    borderColor:"gray",
                    padding:"0.25rem 1rem",
                }),
                placeholder: (base) => ({
      ...base,
        textAlign:"center",
      color: "white",
    }),
      singleValue: (base) => ({
      ...base,
        textAlign:"center",
      color: "white",
    }),
     dropdownIndicator: (base) => ({
      ...base,
      color: "white",
    }),
              }}
              
            />
            

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
