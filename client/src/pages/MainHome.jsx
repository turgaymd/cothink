import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
import { ApiContext } from "../ApiContext";
import { ArticleCard } from "../components/Articles";

const MainHome = () => {
    const [categories,setCategories]=useState([]);
    const [displayedCategories, setDisplayedCategories] = useState([])
    const [visibleCategories, setVisibleCategories] = useState(4);
    const [selectedCategory,setSelectedCategory]=useState(null)
    const [discussions,setDiscussions]=useState([])
    const [likedArticles, setLikedArticles]=useState([])
     const {apiUrl}=useContext(ApiContext)
   
        useEffect(() => { 

             axios.get(`${apiUrl}/server/categories/categoryRead.php`).then(res=>{ 
            setCategories(res.data.data)
            setDisplayedCategories(res.data.data.slice(0,4))
        })
    axios.get(`${apiUrl}/server/articles/articleRead.php`) 
        .then(res => {
            const mostLiked=res.data.sort((a, b)=>b.likes-a.likes).slice(0,3)
            setLikedArticles(mostLiked)  
              console.log(mostLiked)
        })
        .catch(err => console.error(err))

             axios.get(`${apiUrl}/server/posts/postsRead.php`).then(res=>{
            setDiscussions(res.data)
        })
}, []);

     const filteredDiscussions=discussions.filter((item)=>{
        const matchedCategories=!selectedCategory ||  item?.category?.toLowerCase()===selectedCategory?.toLowerCase()
        return  matchedCategories
        }
    )
    return (
        <section>


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
                <h2 className="font-bold text-2xl text-center mb-8 mt-10">Ən Çox Bəyənilən Bloqlar</h2>
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
                     
                                              {likedArticles.length === 0 ? (
                                <p className="text-center text-xl font-bold col-span-3">Bloq tapılmadı</p>
                              ) : (
                                likedArticles.map((item) => (
                                       <SwiperSlide>
                                  <div className="article-item mb-5 p-6 relative overflow-hidden rounded-lg mx-auto max-w-3xl"  >
                                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                                <a className="relative z-10" href={`/library/articles/${item.article_id}`}>
                                    <div className="article-content flex justify-between flex-col gap-3">
                                        <div className="article-header flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                                            <div className="article-author flex flex-col md:flex-row md:items-center gap-2">
                                                <div className="flex items-center gap-2">
                                                    <img src={item.profile_img || "/images/admin.png"} className="w-10 h-10 rounded-full" alt="Avatar" />
                                                    <span className="text-white text-sm md:text-base">{item.mentor_name}</span>
                                                </div>
                                                <div className="flex items-center gap-2 md:ml-0">
                                                    <span className="text-gray-300 hidden md:inline">•</span>
                                                    <span className="text-gray-300 text-sm md:text-base">{item.created_at}</span>
                                                </div>
                                            </div>
                                            <div className="category" >
                                                
                                                <span className="bg-blue-800 rounded-md px-5 py-2 text-white text-sm md:text-base">{item.category}</span>
                                            </div>
                                        </div>
                                           <div className="article-title">
                                            <p className="text-white font-semibold text-sm md:text-base">{item.article_title}</p>
                                        </div>
                                            <div className="article-title">
                        {
                            item?.article_topic?.length>90 ? (
                                <div className="flex flex-col items-center">
                                <p className="md:hidden flex text-white">
                                {item?.article_topic.substring(0,90) }  ...                                                        
                                </p>
                             <p className="hidden md:flex text-white">  {item?.article_topic.substring(0,200) }...  </p>
                             </div>) :
                             <p className="hidden md:flex text-white">{item?.article_topic}</p>
                        }
                    </div>      
                                    </div>
                                </a>
                            </div>
                                   </SwiperSlide>
                                ))
                              )}
                        <div className="swiper-pagination flex justify-center"></div>
                    </Swiper>

                </div>

                <div className="filter mb-5">
                    <div className=" flex justify-between mb-3">
                    </div>
                    <div className="course-filter mt-4 mb-5">
                        <div className="filter-items flex md:flex-row flex-col gap-3">
                            <span className={`rounded-md ${selectedCategory===null ? "active" : ""}`} onClick={()=>setSelectedCategory(null)}>Hamısı</span>
                            <div className="filtered-items flex gap-3 flex-col md:flex-row">
                            {displayedCategories.map((item, index) => {
                                 const isActive=selectedCategory?.toLowerCase()===item?.category?.toLowerCase()
                                return(
                                <button 
                                    className={`rounded-md ${isActive ? "active" : ""} `}
                                    key={index} 
                                    onClick={() => setSelectedCategory(item?.category)}
                                >
                                    {item?.category}
                                </button>
                            )})}
                        </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {
                        filteredDiscussions.map((item)=>(
  <div className="mentor-item rounded-md">
                        <a href={`/questions/${item.post_id}`} className="h-full">
                            <div className="flex justify-between flex-col gap-3 md:flex-row h-full">
                                <div className="flex flex-col h-full gap-3 justify-between">
                                    <div className="mentor-title flex gap-3  items-center">
                                        <img src={item.profile_img || "images/admin.png"} alt="Aydan" className="w-15 h-15 object-cover rounded-full" />
                                        <h5>{item.mentor_name}</h5>
                                        <span>•</span>
                                        <p>{item.created_at}</p>
                                    </div>
                                    <div>
                                        <p>{item.post_title}</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="/images/most_liked.jpg" className="w-full md:w-32 object-cover" alt="Article" />
                                </div>
                            </div>
                        </a>
                    </div>
                        ))
                    }
                
                    </div>
        
            </div>
        </section>
    )
}

export default MainHome;