import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
// import categories from "../data/CategoryData";
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

// const [displayedCategories, setDisplayedCategories]=useState(categories.slice(0, 4))
// const [visibleCategories, setVisibleCategories]=useState(2)
// const  [query, setQuery]=useState("")
    // const handleMore=()=>{
    //     setVisibleCategories(prev=>{
    //     const newCount=prev+4
    //     setDisplayedCategories(categories.slice(0, newCount))
    //     return newCount;

    //    })}
        useEffect(() => {
    axios.get("http://localhost/cothink1/cothink/server/articles/articleRead.php")
        .then(res => {
            setArticles(res.data)
            console.log(res.data) // burda gələn datanı görə bilərsən
        })
        .catch(err => console.error(err))
}, []);
    //       const filteredArticles=articles.filter((item)=>
    //     item.title.toLowerCase().includes(query.toLowerCase()) || 
    //     item.category.toLowerCase().includes(query.toLowerCase())
    // )
    return(
        <>
        <section>
        <div>
            <div className="articles mt-3">
                      {articles.length===0 ? 
                  <p className="font-bold col-span-2 text-center text-2xl">Məqalə tapılmadı</p>   : (

                    articles.map((item)=>(
                                <ArticleCard key={item.article_id} item={item}/>
                    )))
                }
                    </div>
            {/* <div className="add-article flex justify-center">
            <Link className="bg-blue-800 text-white flex gap-3 items-center rounded-full px-3 py-2" to={"/addarticle"}>Məqalə əlavə et <FiPlus/></Link>
            </div> */}
        </div>
        </section>
                    </>
    )
}
export default Articles;