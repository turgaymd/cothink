

import { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import categories from "../data/CategoryData";
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const MainHome=()=>{
    
const  [displayedCategories, setDisplayedCategories]=useState(categories.slice(0, 4))
const  [visibleCategories, setVisibleCategories]=useState(4)

    return (
        <section>
               <div className="mentor-banner mt-3">
                <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="">
                <h2 className="text-3xl font-medium pb-3">Daha məqsədli öyrən, daha az əziyyət çək.</h2>
                <p className="font-medium text-xl">Sənə uyğun öyrənmə metodları ilə tanış ol.</p>
                </div>
                <div className="flex md:justify-end justify-center">
                   <img src="/images/mentor_banner.jpg" className="w-32 h-32 md:w-40 md:h-40 shadow-2xs rounded-full object-cover"/>
                    </div>
                </div>
      
            </div>
            <div>
               <h2 className="font-bold text-2xl text-center mb-8">Ən Çox Bəyənilən Məqalələr</h2>
               <Swiper
               modules={[Navigation, Pagination,Autoplay]}
               autoplay={{
                delay:2500,
                disableOnInteraction:false,
               }}
               spaceBetween={10}
               navigation={{
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev"
               }}
               pagination={{
                clickable:true,
                el:".swiper-pagination"
            }}
                           
               >
                <SwiperSlide>
                        <div className="article-item mb-5 p-6" >
    <a href="/library/articles/id">
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between flex-col md:flex-row items-center">
                        <div className="article-author flex items-center gap-2">
                            <img src="/images/avatar.png"/>
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
                </SwiperSlide>
                   <SwiperSlide>  <div className="article-item mb-5 p-6" >
    <a href="/library/articles/id">
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between flex-col md:flex-row items-center">
                        <div className="article-author flex items-center gap-2">
                            <img src="/images/avatar.png"/>
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
            </div>  </SwiperSlide>
                      <SwiperSlide>  <div className="article-item mb-5 p-6" >
    <a href="/library/articles/id">
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between items-center flex-col md:flex-row ">
                        <div className="article-author flex items-center gap-2">
                            <img src="/images/avatar.png"/>
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
            </div>  </SwiperSlide>
<div className="swiper-pagination flex justify-center mt-8"></div>
               </Swiper>
                    <div className="filter mb-5">
                                         <div className=" flex justify-between mb-3">     
                             </div>
                       <div className="course-filter mt-4 mb-5">
                                     <div className="filter-items flex md:flex-row flex-col gap-3">
                                                             <span className="active rounded-md">Sizin üçün</span>
                                         {
                                             displayedCategories.map((item, index)=>(
                 
                                     <span className="rounded-md" key={index}>{item.name}</span>
                                             ))
                                         }
                                    
                                 </div>
                             </div>
                             </div>      
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                <div className="mentor-item rounded-md">
                                    <a href="/library/articles/:id">
                                    <div className="flex justify-between md:flex-row flex-col items-center gap-1">
                                        <div className="flex flex-col justify-between">
                                <div className="flex gap-3 items-center">
                                    <img src="/images/aydan.png"/>
                                    <h5>Ayan Əlizadə</h5>
                                    <span>•</span>
                                    <p>6 saat əvvəl</p>
                                </div>
                                <div>
                                    <p>C++ Pointers – Sadə Başlanğıc Bələdçisi</p>
                                </div>
                                </div>
                                <div>
                                    <img src="/images/most_liked.jpg"/>
                                </div>
                                  </div>
                                  </a>
                                </div>  
                                   <div className="mentor-item rounded-md">
                                    <a href="/library/articles/:id">
                                    <div className="flex justify-between md:flex-row flex-col items-center gap-1">
                                        <div className="flex flex-col justify-between">
                                <div className="flex gap-3 items-center">
                                    <img src="/images/aydan.png"/>
                                    <h5>Ayan Əlizadə</h5>
                                     <span>•</span>
                                    <p>6 saat əvvəl</p>
                                </div>
                                <div>
                                    <p>C++ Pointers – Sadə Başlanğıc Bələdçisi</p>
                                </div>
                                </div>
                                <div>
                                    <img src="/images/most_liked.jpg"/>
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