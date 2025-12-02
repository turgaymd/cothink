import { useState,useEffect } from "react";
import axios from "axios";

export const ArticleCard=({item})=>{
    return(
          <div className="article-item mb-5">
    <a href="/library/articles/id">
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between items-center">
                        <div className="article-author flex items-center gap-2">
                            <img src="/avatar.png"/>
                            <span>{item.mentor_name}</span>
                            <span>•</span>
                            <span>{item.created_at}</span>
                        </div>
                        <div className="category">
                            <span className="bg-blue-800 rounded-md px-5 py-2">{item.category}</span>
                        </div>
                    </div>
                    <div className="article-title">
                        <p className="text-white">{item.article_topic}</p>
                    </div>
                </div>
                </a>
            </div>   
    )
}
const Articles=()=>{

   const [articles,setArticles]=useState([])
   const  [query, setQuery]=useState("")
   
        useEffect(() => {
    axios.get("http://localhost/cothink1/cothink/server/articles/articleRead.php")
        .then(res => {
            setArticles(res.data)  // burda gələn datanı görə bilərsən
        })
        .catch(err => console.error(err))
}, []);

          const filteredArticles=articles.filter((item)=>
        item.article_title.toLowerCase().includes(query.toLowerCase()) 
          
    ) 
    return(
        <>
        <section>
        <div>
            <div className="articles mt-3">
                      {filteredArticles.length===0 ? 
                  <p className="font-bold col-span-2 text-center text-2xl">Məqalə tapılmadı</p>   : (
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