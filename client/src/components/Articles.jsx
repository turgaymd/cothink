import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { ApiContext } from "../ApiContext";
import { BsThreeDotsVertical } from "react-icons/bs";


export const ArticleCard=({item})=>{
    // const [showMore, setShowMore]=useState(false)
        // const  handleMore=(e)=>{
        //     e.preventDefault()
        //         setShowMore(!showMore)
        //   }
    return(
  <>
          <div className="article-item mb-5 text-black ">
    <a href={`/library/articles/${item.article_id}`}>
                    <div className="article-content flex justify-between flex-col gap-2 border-b-gray-500">
                    <div className="article-header flex justify-between items-center md:flex-row flex-col gap-2">
                        <div className="article-author flex items-center gap-2">
                            <img src={item.profile_img || "/images/admin.png"}/>
                            <span>{item.mentor_name}</span>
                            <span>•</span>
                            <span>{item.created_at}</span>
                        </div>
                        <div className="category">
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
   const {apiUrl}=useContext(ApiContext)
   
        useEffect(() => { 
    axios.get(`${apiUrl}/server/articles/articleRead.php`) 
        .then(res => {
            setArticles(res.data)  
              console.log(res.data)
        })
        .catch(err => console.error(err))
}, []);

          const filteredArticles=articles.filter((item)=>{
       const searchedQuery= item?.article_title?.toLowerCase().includes(query.toLowerCase())
        const matchedCategories=!selectedCategory ||  item?.category_id===selectedCategory
        return searchedQuery && matchedCategories
     }
     
    ) 
    return(
        <>
        <section>
        <div>
            <div className="articles mt-3">
                      {filteredArticles.length===0 ? 
                  <p className="font-bold col-span-2 text-center text-2xl">Bloq tapılmadı</p>   : (
                    filteredArticles.map((item)=>(
                                <ArticleCard key={item._id} item={item}/>

                    )))
                }
                    </div>
        </div>
        </section>
                    </>
    )
}
export default Articles;