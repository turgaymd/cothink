import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import categories from "../data/CategoryData";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainHome = () => {

    const [displayedCategories, setDisplayedCategories] = useState(categories.slice(0, 4))
    const [visibleCategories, setVisibleCategories] = useState(4)

    return (
        <section>
            <style>{`
     .swiper-button-prev,
.swiper-button-next {
    background: transparent;
    width: 34px;
    height: 34px;
    color: black !important;
    border: none;
    outline: none;
    transition: all 0.3s ease;
    top: 50% !important;
    transform: translateY(-50%) !important;
}
                .swiper-button-prev {
                    left: -50px;
                }
                
                .swiper-button-next {
                    right: -50px;
                }
                
                .swiper-button-prev:after,
                .swiper-button-next:after {
                    font-size: 28px;
                    font-weight: normal;
                }
                
                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                    transform: scale(1.2);
                }
                
                .swiper-button-prev:focus,
                .swiper-button-next:focus {
                    outline: none;
                }
                
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                 background: #3B82F6;
    opacity: 0.3;
    width: 10px;
    height: 10px;
    margin: 0 6px !important;
}
    .swiper-pagination {
    position: relative !important;
    margin-top: 0.2rem !important;
    bottom: 0 !important;
}
                
                .swiper-pagination-bullet-active {
   background: #3B82F6;
    opacity: 1;                }
            `}</style>

            <div className="mentor-banner mt-3 overflow-hidden">
                <div className="relative flex flex-col md:flex-row r justify-between">
                    <div className="">
                        <h2 className="text-3xl font-medium pb-3">Daha məqsədli öyrən, daha az əziyyət çək.</h2>
                        <p className="font-medium text-xl">Sənə uyğun öyrənmə metodları ilə tanış ol.</p>
                    </div>
                    <div className="flex justify-end  mb-1 ">
                        <img src="/images/image 5.svg" className="md:scale-x-130 md:rounded-2xl  w-32 h-32 md:w-40 md:size-45 scale-140   shadow-2xs" />
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font-bold text-2xl text-center mb-8 mt-10">Ən Çox Bəyənilən Məqalələr</h2>
                <div className="relative px-8 md:px-16">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{
                            clickable: true
                        }}
                    >
                        <SwiperSlide>
                            <div className="article-item mb-5 p-6 relative overflow-hidden rounded-lg mx-auto max-w-3xl">
                                {/* Qaranlıq overlay */}
                                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                                <a className="relative z-10">
                                    <div className="article-content flex justify-between flex-col gap-4">
                                        <div className="article-header flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                                            <div className="article-author flex flex-col md:flex-row md:items-center gap-2">
                                                <div className="flex items-center gap-2">
                                                    <img src="/images/avatar.png" className="w-10 h-10 rounded-full" alt="Avatar" />
                                                    <span className="text-white text-sm md:text-base">Elcan Məmmədov</span>
                                                </div>
                                                <div className="flex items-center gap-2 md:ml-0">
                                                    <span className="text-gray-300 hidden md:inline">•</span>
                                                    <span className="text-gray-300 text-sm md:text-base">10 saat əvvəl</span>
                                                </div>
                                            </div>
                                            <div className="category">
                                                <span className="bg-blue-800 rounded-md px-5 py-2 text-white text-sm md:text-base">Riyaziyyat</span>
                                            </div>
                                        </div>
                                        <div className="article-title">
                                            <p className="text-white font-semibold text-sm md:text-base">3-cü Kurs Tələbəsindən Törəmələri Həqiqətən Anlamaq Üçün Addım-Addım Təlimat</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="article-item mb-5 p-6 relative overflow-hidden rounded-lg mx-auto max-w-3xl">
                                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                                <a  className="relative z-10">
                                    <div className="article-content flex justify-between flex-col gap-4">
                                        <div className="article-header flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                                            <div className="article-author flex flex-col md:flex-row md:items-center gap-2">
                                                <div className="flex items-center gap-2">
                                                    <img src="/images/avatar.png" className="w-10 h-10 rounded-full" alt="Avatar" />
                                                    <span className="text-white text-sm md:text-base">Elcan Məmmədov</span>
                                                </div>
                                                <div className="flex items-center gap-2 md:ml-0">
                                                    <span className="text-gray-300 hidden md:inline">•</span>
                                                    <span className="text-gray-300 text-sm md:text-base">10 saat əvvəl</span>
                                                </div>
                                            </div>
                                            <div className="category">
                                                <span className="bg-blue-800 rounded-md px-5 py-2 text-white text-sm md:text-base">Riyaziyyat</span>
                                            </div>
                                        </div>
                                        <div className="article-title">
                                            <p className="text-white font-semibold text-sm md:text-base">3-cü Kurs Tələbəsindən Törəmələri Həqiqətən Anlamaq Üçün Addım-Addım Təlimat</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="article-item mb-5 p-6 relative overflow-hidden rounded-lg mx-auto max-w-3xl">
                                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                                <a  className="relative z-10">
                                    <div className="article-content flex justify-between flex-col gap-4">
                                        <div className="article-header flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                                            <div className="article-author flex flex-col md:flex-row md:items-center gap-2">
                                                <div className="flex items-center gap-2">
                                                    <img src="/images/avatar.png" className="w-10 h-10 rounded-full" alt="Avatar" />
                                                    <span className="text-white text-sm md:text-base">Elcan Məmmədov</span>
                                                </div>
                                                <div className="flex items-center gap-2 md:ml-0">
                                                    <span className="text-gray-300 hidden md:inline">•</span>
                                                    <span className="text-gray-300 text-sm md:text-base">10 saat əvvəl</span>
                                                </div>
                                            </div>
                                            <div className="category">
                                                <span className="bg-blue-800 rounded-md px-5 py-2 text-white text-sm md:text-base">Riyaziyyat</span>
                                            </div>
                                        </div>
                                        <div className="article-title">
                                            <p className="text-white font-semibold text-sm md:text-base">3-cü Kurs Tələbəsindən Törəmələri Həqiqətən Anlamaq Üçün Addım-Addım Təlimat</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <div className="swiper-pagination flex justify-center"></div>
                    </Swiper>

                </div>

                <div className="filter mb-5">
                    <div className=" flex justify-between mb-3">
                    </div>
                    <div className="course-filter mt-4 mb-5">
                        <div className="filter-items flex md:flex-row flex-col gap-3">
                            <span className="active rounded-md">Sizin üçün</span>
                            {
                                displayedCategories.map((item, index) => (
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
                                        <img src="/images/aydan.png" alt="Aydan" />
                                        <h5>Ayan Əlizadə</h5>
                                        <span>•</span>
                                        <p>6 saat əvvəl</p>
                                    </div>
                                    <div>
                                        <p>C++ Pointers – Sadə Başlanğıc Bələdçisi</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="/images/most_liked.jpg" alt="Article" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="mentor-item rounded-md">
                        <a href="/library/articles/:id">
                            <div className="flex justify-between md:flex-row flex-col items-center gap-1">
                                <div className="flex flex-col justify-between">
                                    <div className="flex gap-3 items-center">
                                        <img src="/images/aydan.png" alt="Aydan" />
                                        <h5>Ayan Əlizadə</h5>
                                        <span>•</span>
                                        <p>6 saat əvvəl</p>
                                    </div>
                                    <div>
                                        <p>C++ Pointers – Sadə Başlanğıc Bələdçisi</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="/images/most_liked.jpg" alt="Article" />
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