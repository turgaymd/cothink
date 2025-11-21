import { useState } from "react";

const MentorDetail=()=>{
    const [activeTab, setActiveTab]=useState("course")
    return (
        <div>
       <section>
        <h2 className="text-center font-bold text-2xl">Mentor Profili</h2>
        <div className="mentor-profile ">
            <div className="card ">
                <div className=" gap-2 grid grid-cols-12">
                <div className="profil-img flex  justify-center md:col-span-6">
                    <img src="mentor_avatar.jpg" className="mentor-avatar rounded-full"/>
                   <div className="flex justify-end gap-5 comment-reactions">
            <div className="like-count flex items-center gap-2"><img src="users.svg"></img>2.6k tələbə</div>
            <div className="comment-count flex items-center gap-2" ><img src="comment.svg"></img>26</div>
        </div>

                </div>
                <div className="mentor-info flex flex-col gap-2 md:col-span-6">
<h4 className="font-bold text-xl">Aysel Məmmədova</h4>
<p>UX dizayn və istifadəçi tədqiqatı üzrə 6 illik təcrübəyə malikdir.</p>
<div className="flex gap-4">
   <span className="bg-white rounded-full px-4 py-2 border border-gray-400"> UX/UI Designer</span>
</div>
<p>Danışıq dilləri:</p>
<div className="flex gap-3 mt-2 mb-5">
<span className="bg-white rounded-md px-4 py-2 border border-gray-400">Azərbaycan</span>
<span className="bg-white rounded-md px-4 py-2 border border-gray-400">Alman</span>
<span className="bg-white rounded-md px-4 py-2 border border-gray-400">Ingilis</span>
</div>
                </div>
                                    
                </div>
            </div>
        </div>
            <div className="flex justify-center mb-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={`rounded-full w-full ${activeTab==="course" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("course")}>Kurslar</button>
            <button  className={`rounded-full w-full ${activeTab==="posts" ?  "bg-blue-700 text-white" : ''}`}  onClick={()=>setActiveTab("posts")}>Postlar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
        </div> 
                </div>
                  <div className="grid grid-cols-2 gap-4">
            <div className="course-item shadow-lg rounded-2xl">
                        <article>
            <a>
              <img src="nuclear_reaction.jpg"></img>
            </a>
            </article>
            <div className="course-category mt-3 text-blue-400">Fizika</div>
            <div className="course-title mb-3 mt-3">
              <h4 className="font-bold text-2xl">
                Nüvə Reaksiyaları və Əsas Prinsiplər
              </h4>
            </div>
            <p>
              <span className="font-medium skills text-black">
                Əldə Edəcəyin Bacarıqlar:
              </span>
              Nüvənin parçalanması, birləşməsi və çevrilməsi proseslərinin necə
              baş verdiyini elmi şəkildə anlaya biləcəksən.
            </p>
            <div className="flex justify-between pb-3 mt-3">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                <img src="avatar.png" className=" rounded-full object-cover"/>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Aydan A</h4>
                  <p>20 Jan 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <img src="star.svg" /> <span>4.8</span>
                <img src="users.svg" /> <span>3.2k</span>
              </div>
            </div>
          </div>  
             <div className="course-item shadow-lg rounded-2xl">
                        <article>
            <a>
              <img src="nuclear_reaction.jpg"></img>
            </a>
            </article>
            <div className="course-category mt-3 text-blue-400">Fizika</div>
            <div className="course-title mb-3 mt-3">
              <h4 className="font-bold text-2xl">
                Nüvə Reaksiyaları və Əsas Prinsiplər
              </h4>
            </div>
            <p>
              <span className="font-medium skills text-black">
                Əldə Edəcəyin Bacarıqlar:
              </span>
              Nüvənin parçalanması, birləşməsi və çevrilməsi proseslərinin necə
              baş verdiyini elmi şəkildə anlaya biləcəksən.
            </p>
            <div className="flex justify-between pb-3 mt-3">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                <img src="avatar.png" className=" rounded-full object-cover"/>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Aydan A</h4>
                  <p>20 Jan 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <img src="star.svg" /> <span>4.8</span>
                <img src="users.svg" /> <span>3.2k</span>
              </div>
            </div>
          </div>  
        </div>
        </section>
        </div>
    )
}
export default MentorDetail;