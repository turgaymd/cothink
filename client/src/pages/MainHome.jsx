

import { useState } from "react";

import categories from "../data/CategoryData";
const MainHome=()=>{
const  [displayedCategories, setDisplayedCategories]=useState(categories.slice(0, 4))
const  [visibleCategories, setVisibleCategories]=useState(4)
    return (
        <section>
                <div className="mentor-banner mt-3">
                <div className="relative flex flex-col md:flex-row">
                <div className="">
                <h2 className="text-3xl font-medium pb-3">Daha məqsədli öyrən, daha az əziyyət çək.</h2>
                <p className="font-medium text-xl">Sənə uyğun öyrənmə metodları ilə tanış ol.</p>
                </div>
                <div className="absolute right-0 top-1">
                    <div className="overflow-hidden">
                   <img src="mentor_banner.jpg" className="w-40 h-40 shadow-2xs rounded-full"/>
                    </div>
 
                </div>
                </div>
      
            </div>
            <div>

               <h2 className="font-bold text-2xl text-center mb-5">Ən Çox Bəyənilən Məqalələr</h2>
          <div className="article-item mb-5" >
    <a href="/library/articles/id">
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between items-center">
                        <div className="article-author flex items-center gap-2">
                            <img src="/avatar.png"/>
                            <span>Elcan Məmmədov</span>
                            <span>•</span>
                            <span>10 saat əvvəl</span>
                        </div>
                        <div className="category">
                            <span className="bg-blue-800 rounded-md px-5 py-2">Riyaziyyat</span>
                        </div>
                    </div>
                    <div className="article-title">
                        <p className="text-white">3-cü Kurs Tələbəsindən Törəmələri Həqiqətən Anlamaq Üçün Addım-Addım Təlimat</p>
                    </div>
                </div>
                </a>
            </div>   
                    <div className="filter mb-5">
                                         <div className=" flex justify-between mb-3">
                          
                               
                             </div>
                       <div className="course-filter mt-4 mb-5">
                                     <div className="filter-items flex gap-3">
                                                             <span className="active rounded-md">Sizin üçün</span>
                                         {
                                             displayedCategories.map((item, index)=>(
                 
                                     <span className="rounded-md" key={index}>{item.name}</span>
                                             ))
                                         }
                                    
                                 </div>
                             </div>
                             </div>      
                             <div className="grid grid-cols-2 md:grid-col-2 gap-3 mt-2">
                                <div className="mentor-item rounded-md">
                                    <a href="/library/articles/:id">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col justify-between">
                                <div className="flex gap-3 items-center">
                                    <img src="aydan.png"/>
                                    <h5>Ayan Əlizadə</h5>
                                    <p>6 saat əvvəl</p>
                                </div>
                                <div>
                                    <p>C++ Pointers – Sadə Başlanğıc Bələdçisi</p>
                                </div>
                                </div>
                                <div>
                                    <img src="most_liked.jpg"/>
                                </div>
                                  </div>
                                  </a>
                                </div>  
                                   <div className="mentor-item rounded-md">
                                    <a href="/library/articles/:id">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col justify-between">
                                <div className="flex gap-3 items-center">
                                    <img src="aydan.png"/>
                                    <h5>Ayan Əlizadə</h5>
                                    <p>6 saat əvvəl</p>
                                </div>
                                <div>
                                    <p>C++ Pointers – Sadə Başlanğıc Bələdçisi</p>
                                </div>
                                </div>
                                <div>
                                    <img src="most_liked.jpg"/>
                                </div>
                                  </div>
                                  </a>
                                </div>    
                                 
                                </div> 
            </div>
        </section>

    )
}
export default MainHome;