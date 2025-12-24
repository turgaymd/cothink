import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";
import { BsThreeDotsVertical } from "react-icons/bs";

export const ArticleCard=({item})=>{
    return(
        <>
            <div className="article-item mb-5 text-black ">
                <a href={`/library/articles/${item.article_id}`}>
                    <div className="article-content flex justify-between flex-col gap-2 border-b-gray-500">
                        <div className="article-header flex justify-between md:flex-row flex-col gap-2">
                            <div className="article-author flex items-center gap-2">
                              <img className="object-cover"
                                src={
                                    item?.profile_img
                                    ? item.profile_img.trim().startsWith("http")
                                        ? item.profile_img.trim()
                                        : `https://cothink.az/${item.profile_img.trim()}`
                                    : "/images/admin.png"
                                }
                                />

                                <span>{item.mentor_name}</span>
                                <span>•</span>
                                <span> {new Date (item.created_at).toLocaleDateString()}</span>
                            </div>
                            <div className="category flex items-center">
                                <span className="bg-blue-800 rounded-md px-5 py-2">{item.category}</span>
                            </div>
                        </div>
                        <h4 className="font-semibold">{item.article_title}</h4>
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
            <div className="border-t border-t-gray-200  pt-2 pb-2"></div>
        </>
    )
}

const Articles=({query,selectedCategory})=>{
    const [articles,setArticles]=useState([])
    const [visibleArticles, setVisibleArticles] = useState()
    const {apiUrl}=useContext(ApiContext)
   
    useEffect(() => { 
        axios.get(`${apiUrl}/server/articles/articleRead.php`) 
            .then(res => {
                setArticles(res.data)  
                setVisibleArticles()
            })
            .catch(err => console.error(err))
    }, []);

    const filteredArticles=articles.filter((item)=>{
        const searchedQuery= item?.article_title?.toLowerCase().includes(query.toLowerCase())
        const matchedCategories=!selectedCategory ||  item?.category_id===selectedCategory
        return searchedQuery && matchedCategories
    })

    const displayedArticles = filteredArticles.slice(0, visibleArticles)

    const handleMoreArticles=()=>{
        setVisibleArticles(filteredArticles.length)
    }

    const handleLessArticles=()=>{
        setVisibleArticles(3)
    }

    return(
        <>
                <div>
                    <div className="flex justify-between items-center mt-5 mb-3">
                        <h4 className="font-semibold text-xl">Bloqlar</h4>
                        {filteredArticles.length > 3 && (
                            visibleArticles >= filteredArticles.length ? (
                                <button className="text-blue-500" onClick={handleLessArticles}>
                                    Daha azını göstər
                                </button>
                            ) : (
                                <button className="text-blue-500" onClick={handleMoreArticles}>
                                    Hamısına bax
                                </button>
                            )
                        )}
                    </div>
                    <div className="articles mt-3">
                        {displayedArticles.length===0 ? 
                            <p className="font-bold col-span-2 text-center text-2xl">Bloq tapılmadı</p> : (
                            displayedArticles.map((item)=>(
                                <ArticleCard key={item._id} item={item}/>
                            )))
                        }
                    </div>
                </div>
        </>
    )
}
export default Articles;