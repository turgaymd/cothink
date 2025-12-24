import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GrPrevious } from "react-icons/gr";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
import { ApiContext } from "../context/ApiContext";
import { ArticleCard } from "../components/Articles";
import { FaRegComments } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrNext } from "react-icons/gr";

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
                        navigation={{
                            nextEl:"swiper-button-next",
                            prevEl:"swiper-button-prev",
                        }}
                        pagination={{
                            clickable: true
                        }}
                    >
                                {likedArticles.map((item) => (
                                       <SwiperSlide>
                                  <div className="article-item mb-5 p-6 relative overflow-hidden rounded-lg mx-auto max-w-4xl"  >
                                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                                <a className="relative z-10 block h-full" href={`/library/articles/${item.article_id}`}>
                                    <div className="article-content  h-full gap-4 flex flex-col justify-between">
                                        <div className="article-header flex justify-between flex-col md:flex-row md:items-center gap-2">
                                            <div className="article-author flex  items-center gap-2">
                                                                 
                                                <img src={item?.profile_img ? item.profile_img.trim().startsWith("http") ? item.profile_img.trim()
                                                                        : `https://cothink.az/${item.profile_img.trim()}`
                                                                    : "/images/admin.png"
                                                                }
                                                                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                                                                alt="Avatar"
                                                                />
                                                <div className="flex flex-col  md:ml-0">
                                                         <span className="text-white font-medium text-sm md:text-base">{item.mentor_name}</span>
                                                    {/* <span className="text-gray-300 hidden md:inline">•</span> */}
                                                    <span className="text-gray-300 text-sm md:text-base">   {new Date (item.created_at).toLocaleDateString()}</span>
                                                </div>
                                             </div>
                                            <div className="category" >
                                                
                                                <span className="bg-blue-800 rounded-md px-5 py-2 text-white text-sm md:text-base">{item.category}</span>
                                            </div>
                                    </div>
                                           {/* <div className="article-title">
                                           
                                        </div> */}
                                            <div className="article-body  text-gray-200 text-sm md:text-base">
                        <p className="text-white font-semibold text-lg md:text-xl">{item.article_title}</p>
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
                                )
                              )}
                              <div className="swiper-button-prev "><GrPrevious className="text-gray-600"/></div>
                               <div className="swiper-button-next"><GrNext className="text-gray-600"/></div>
                        <div className="swiper-pagination flex justify-center"></div>
                    </Swiper>

                </div>

                <div className="filter mb-5">
                    <div className=" flex justify-between mb-3">
                    </div>
                    <div className="course-filter mt-4 mb-5">
                         
                            <div className="filter-items flex gap-3  md:overflow-hidden   overflow-x-scroll items-center">
                                  <button className={`rounded-md whitespace-nowrap ${selectedCategory===null ? "active" : ""}`} onClick={()=>setSelectedCategory(null)}>Hamısı</button>
                            {displayedCategories.map((item, index) => {
                                 const isActive=selectedCategory?.toLowerCase()===item?.category?.toLowerCase()
                                return(
                            
                                <button
                                    className={`rounded-md  whitespace-nowrap ${isActive ? "active" : ""} `}
                                    key={index} 
                                    onClick={() => setSelectedCategory(item?.category)}
                                >
                                    {item?.category}
                                </button>
                            )})}
                        </div>

                    </div>
                </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    filteredDiscussions.map((item, index)=>(
                        <div className="rounded-md shadow-gray-100 bg-gray-100 shadow-2xl px-5 py-3" key={index}>
                            <div className="flex gap-3 justify-end items-center text-sm pb-3">
                                <span className="text-gray-400">
                                    {item.mentor_name}
                                </span>
                                <span className="text-gray-400">
                                    {new Date(item.created_at).toLocaleDateString()}
                                    {/* {item.created_at} */}
                                </span>
                            </div>
                            <div className="flex gap-7 md:flex-row flex-col">
                            <img
                            src={
                                item?.profile_img
                                ? item.profile_img.trim().startsWith("http")
                                    ? item.profile_img.trim()
                                    : `https://cothink.az/${item.profile_img.trim()}`
                                : "/images/admin.png"
                            }
                            className="rounded-full w-24 h-24 object-cover"

                            />
                                <div className="flex flex-col gap-3">
                                    <h5 className="font-medium">{item.post_title}</h5>
                                    <div className="flex gap-3"> 
                                        <h4 className="font-bold">{item.category}</h4>  
                                        <p className="text-gray-400">{item.subcategory}</p>
                                         </div>
                                    {item?.post_img && (
                                    <img
                                        src={
                                        item.post_img.trim().startsWith("http")
                                            ? item.post_img.trim()
                                            : `https://cothink.az/server/uploads/posts/${item.post_img.trim()}`
                                        }
                                        className="rounded-md max-w-xs max-h-xs"
                                        alt="Post"
                                        onError={(e) => (e.target.style.display = "none")}
                                    />
                                    )}
                                                                    
                                    <div>
                                        <a className="rounded-xl border border-gray-300 flex w-40 gap-3 items-center px-3 py-2" href={`/questions/${item.post_id}`}>
                                            <FaRegComments className="text-blue-500 text-xl"/>
                                            Fikrini paylaş
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button><BsThreeDotsVertical fontSize={24}/></button>
                            </div>
                        </div>
                    ))
                }          
            </div>
               
            </div>
        </section>
    )
}

export default MainHome;