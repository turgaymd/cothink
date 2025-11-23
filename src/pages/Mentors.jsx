
import { Link } from "react-router-dom";
import Search from "../components/Search";
const Mentors=()=>{
    return (
        <div className="md:col-span-10">
          <section>
            <Search/>
            <div className="mentor-banner mt-3">
                <div className="relative">
                <div className="">
                <h2 className="text-3xl font-medium pb-3">Öyrənmə Yolunuza Uyğun Mentorlar</h2>
                <p className="font-medium text-xl">Sizə ən uyğun mentor profillərini kəşf edin.</p>
                </div>
                <div className="absolute right-0 top-1">
                    <div className="overflow-hidden">
                   <img src="mentor_banner.jpg" className="w-40 h-40 shadow-2xs rounded-full"/>
                    </div>
 
                </div>
                </div>
      
            </div>
                        <div className="filter mb-5">
                        <div className=" flex justify-between mb-3">
                <h4 className="font-bold text-xl">Kategoriyalar</h4>
                <a className="text-blue-500">Hamısına bax</a>
            </div>
      <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex gap-3">
                    <span className="active rounded-md">Hamısı</span>
                    <span className="rounded-md">Fizika</span>
                    <span className="rounded-md">Riyaziyyat</span>
                    <span className="rounded-md">Qrafik dizayn</span>
                    <span className="rounded-md">Tarix</span>
                    <span className="rounded-md">Proqramlaşdırma</span>
                </div>
            </div>
            </div>
            <div className="flex justify-between">
                <h4 className="font-bold text-xl">Ən yaxşı mentorlar</h4>
                <a className="text-blue-500">Hamısına bax</a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 pt-5">
                <Link to={"/mentor"}>
                   <div className="mentor-item shadow-xl rounded-xl">
                <div className="flex items-center gap-5">
                    <img src="mentor.jpg" className="avatar rounded-full" alt="mentor"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold textxl">Nərgiz Əliyeva</h4>
                        <p>Proqramlaşdirma (Frontend) </p>
                         <div className="flex justify-end items-center gap-20 stats">
                        <div className="flex items-center gap-2">
                          <img src="users.svg"/>
                          <span>3.2k tələbə</span>
                        </div>
                         <div className="flex items-center gap-2">  
                        <img src="comment.svg"/>
                        <span>Rəy (200+)</span>
                        </div>
                        <div className="flex items-center gap-2">
                      <img src="stars.svg"/>
                    <span>4.8/5</span>
                        </div>
                    </div>
                    </div>
              
                </div>           
            </div>
                </Link>
         
                  <Link to={"/mentor"}>
                   <div className="mentor-item shadow-xl rounded-xl">
                <div className="flex items-center gap-5">
                    <img src="mentor.jpg" className="avatar rounded-full" alt="mentor"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold textxl">Nərgiz Əliyeva</h4>
                        <p>Proqramlaşdirma (Frontend) </p>
                         <div className="flex justify-end items-center gap-20 stats">
                        <div className="flex items-center gap-2">
                          <img src="users.svg"/>
                          <span>3.2k tələbə</span>
                        </div>
                         <div className="flex items-center gap-2">  
                        <img src="comment.svg"/>
                        <span>Rəy (200+)</span>
                        </div>
                        <div className="flex items-center gap-2">
                      <img src="stars.svg"/>
                    <span>4.8/5</span>
                        </div>
                    </div>
                    </div>
              
                </div>           
            </div>
                </Link>
            </div>
          </section>
        </div>
    )
}
export default Mentors;