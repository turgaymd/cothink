import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import categories from "../data/CategoryData";
import { useState } from "react";
import articles from "../data/ArticlesData";
const Articles=()=>{
   
const [displayedCategories, setDisplayedCategories]=useState(categories.slice(0, 4))
const [visibleCategories, setVisibleCategories]=useState(2)

const  [query, setQuery]=useState("")

    const handleMore=()=>{
        setVisibleCategories(prev=>{
        const newCount=prev+4
        setDisplayedCategories(categories.slice(0, newCount))
        return newCount;

       })}
       
          const filteredArticles=articles.filter((item)=>
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
    )
    return(
        <>
        <section>
        <div>
            <div className="flex justify-between mb-3">
                <h4 className="font-medium text-xl">Mövzular</h4>
          {
                visibleCategories<categories.length && (
                <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button>
                )
            }
            </div>
            <div className="topics  flex gap-4">
               {
                    displayedCategories.map((item, index)=>(
                    <div className="topic-item flex-1" key={index}>
                    <a>
                        <img src={item.img}></img>
                    </a>
                </div>
                    ))
                }
            </div>
            <div className="article-filter mt-5">
                <div className="filter-items flex gap-3">
                    <span className="filter-item rounded-md active">Hamısı</span>
                    <span className="filter-item rounded-md">Trenddə</span>
                    <span className="filter-item rounded-md">Ən yenilər</span>
                </div>
            </div>
            <div className="articles mt-5">
                      {filteredArticles.length===0 ? 
                  <p className="font-bold col-span-2 text-center text-2xl">Məqalə tapılmadı</p>   : (

                    filteredArticles.map((item, index)=>(
  <div className="article-item mb-5" key={index}>
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between items-center">
                        <div className="article-author flex items-center gap-2">
                            <img src="avatar.png"/>
                            <span>{item.author}</span>
                            <span>•</span>
                            <span>{item.date}</span>
                        </div>
                        <div className="category">
                            <span className="bg-blue-800 rounded-md px-5 py-2">{item.category}</span>
                        </div>
                    </div>
                    <div className="article-title">
                        <p className="text-white">{item.title}</p>
                    </div>
                </div>
            </div>   
                    )))
                }
                    </div>
            <div className="add-article flex justify-center">
            <Link className="bg-blue-800 text-white flex gap-3 items-center rounded-full px-3 py-2" to={"/addarticle"}>Məqalə əlavə et <FiPlus/></Link>
            </div>
        </div>
        </section>
                    </>
    )
}
export default Articles;