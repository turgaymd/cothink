
import courses from "../data/CourseData";
import Search from "./Search";
import { MdArrowOutward } from "react-icons/md";

export const CourseCard=({item})=>{
  return(
  <div className="course-item shadow-lg rounded-2xl">
                        <article>
            <a>
              <img src={`/${item.img}`}></img>
            </a>
            </article>
            <div className="course-category mt-3 text-blue-600">{item.category}</div>
            <div className="course-title mb-3 mt-3 flex justify-between">
              <h4 className="font-bold text-2xl">
                 {item.title}
              </h4>
              <a href="courses/id"><MdArrowOutward fontSize={24}/></a>
            </div>
            <p className="text-gray-500">
              <span className="font-medium skills text-black">
                Əldə Edəcəyin Bacarıqlar:
              </span>
             {item.description}
            </p>
            <div className="flex justify-between pb-3 mt-4">
              <div className="flex gap-5 items-center">
                <div>
                <img src={`/${item.author_img}`} className=" rounded-full object-cover"/>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">{item.author}</h4>
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <img src="/star.svg" /> <span>4.8</span>
                <img src="/users.svg" /> <span>3.2k</span>
              </div>
            </div>
          </div>  
  )
}

const Courses = () => {
  return (
    <>
      <section>
       <Search/>
                    <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex gap-3">
                    <span className="active rounded-full">Fizika</span>
                    <span className="rounded-full">Riyaziyyat</span>
                </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
             {
              courses.map((item)=>(
               <CourseCard key={item._id} item={item}/>
              ))
             }
                  
                  
        </div>
      </section>
    </>
  );
};
export default Courses;
