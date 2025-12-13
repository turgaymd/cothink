
import Search from "../utils/Search";
import { FaRegComments } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { ApiContext } from "../ApiContext";

const Questions=()=>{
    const [categories,setCategories]=useState([]);
    const [displayedCategories, setDisplayedCategories]=useState([])
    const [visibleCategories, setVisibleCategories]=useState(2)
    const [discussions,setDiscussions]=useState([])
    const [selectedCategory,setSelectedCategory]=useState(null)
    const [query, setQuery]=useState("")
    const {apiUrl}=useContext(ApiContext)
 

useEffect(()=>{ 
       axios.get(`${apiUrl}/server/posts/postsRead.php`).then(res=>{
            setDiscussions(res.data)
        })
           axios.get(`${apiUrl}/server/categories/categoryRead.php`).then(res=>{ 
            setCategories(res.data.data)
            setDisplayedCategories(res.data.data.slice(0,4))
        })
},[])
   const handleMore=()=>{
        setVisibleCategories(prev=>{
        const newCount=prev+4
        setDisplayedCategories(categories.slice(0, newCount))
        return newCount;
       })}
     
        const filteredDiscussions=discussions.filter((item)=>{
        const searchedQuery= item?.post_title?.toLowerCase().includes(query.toLowerCase()) ||
        item?.mentor_name?.toLowerCase().includes(query.toLowerCase()) 
        const matchedCategories=!selectedCategory ||  item?.category?.toLowerCase()===selectedCategory?.toLowerCase()
        return searchedQuery && matchedCategories
        }
    )

    return (
        <section>
            <Search query={query} setQuery={setQuery}/>
             <div className="flex justify-between items-center mb-2 ">
                <h4 className="font-semibold text-xl">Mövzular</h4>
                  {
                visibleCategories<categories.length && (
                <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button>
                )
            }
            </div>
            <div className="topics grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    displayedCategories.map((item, index)=>(
                        <>
                        <div className="w-full ">
                    <div className={`${selectedCategory===item.category ? "bg-gray-200 text-white topic-item  h-20 mb-2" : "bg-gray-100 topic-item h-20 mb-2"}`} key={index} onClick={()=>setSelectedCategory(item?.category)}>
                    <a>
                        {/* <button  >{item?.category}</button> */}
                            <img src={item?.category_img}/>
                    </a>   
                        </div> 
                     <span className="flex justify-center font-semibold">{item?.category}</span>
                </div>

                        </>
                    ))
                }
            </div>
            <div className="mt-5 mb-5 flex justify-between items-center">
                <h4 className="font-bold text-xl">Müzakirə formu</h4>
                <button className="text-blue-500" onClick={()=>setSelectedCategory(null)}>Hamısına bax</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    filteredDiscussions.map((item, index)=>(
                    <div className="rounded-md shadow-gray-100 bg-gray-100 shadow-2xl px-5 py-3" key={index}>
                           <div className="flex gap-3 justify-end items-center text-sm pb-3">
                        <span className="text-gray-400">
                            {item.mentor_name}
                        </span>
                        {/* <span className="leading-none text-gray-500">•</span> */}
                        <span className="text-gray-400">
                            {item.created_at}
                        </span>
                        </div>
                <div className="flex gap-7 md:flex-row flex-col items-center">
                    <img src={item.profile_img || "/images/admin.png"} className="rounded-full w-24 h-24"/>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-medium">{item.post_title}</h5>
                    <div className="flex gap-3"> <h4 className="font-bold">{item.category}</h4>  <p className="text-gray-400">{item.subcategory}</p></div>
                        <div>
                        <a className="rounded-xl border border-gray-300 flex w-40 gap-3 items-center px-3 py-2" href={`/questions/${item.post_id}`}><FaRegComments className="text-blue-500 text-xl"/>Fikrini paylaş</a>
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
        </section>
        
    )
}
export default Questions;