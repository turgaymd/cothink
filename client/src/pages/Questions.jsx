import Search from "../utils/Search";
import { FaRegComments } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";
import Select from "react-select";
const Questions=()=>{
    const [categories,setCategories]=useState([]);
    const [displayedCategories, setDisplayedCategories]=useState([])
    const [visibleCategories, setVisibleCategories]=useState(4)
    const [discussions,setDiscussions]=useState([])
    const [posts, setPosts]=useState([])
    const [selectedCategory,setSelectedCategory]=useState(null)
    const [query, setQuery]=useState("")
    const {apiUrl}=useContext(ApiContext)
 

    useEffect(()=>{ 
        axios.get(`${apiUrl}/server/posts/postsRead.php`).then(res=>{
            setDiscussions(res.data)
        })
           axios.get(`${apiUrl}/server/studentPosts/postsRead.php`).then(res=>{
            setPosts(res.data.data)
        })
        axios.get(`${apiUrl}/server/categories/categoryRead.php`).then(res=>{ 
            setCategories(res.data.data)
            setDisplayedCategories(res.data.data.slice(0,4))
        })
    },[])

    const allPosts=[...discussions, ...posts].sort((a,b)=>new Date(a.created_at)-new Date (b.created_at))
    console.log(allPosts)
    const handleMore=()=>{
        setVisibleCategories(prev=>{
            const newCount=prev+4
            setDisplayedCategories(categories.slice(0, newCount))
            return newCount;
        })
    }

    const handleLess=()=>{
        setVisibleCategories(4)
        setDisplayedCategories(categories.slice(0, 4))
    }
     
    const filteredDiscussions=allPosts.filter((item)=>{
        const searchedQuery= item?.post_title?.toLowerCase().includes(query.toLowerCase())
        const matchedCategories=!selectedCategory ||  item?.category?.toLowerCase()===selectedCategory?.toLowerCase()
        return searchedQuery && matchedCategories
    })

      const handleSelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory.value);
  };
    return (
        <section>
            <Search query={query} setQuery={setQuery}/>
            <div className="flex justify-between items-center mb-2 ">
                <h4 className="font-semibold text-xl">Mövzular</h4>
                {
                    visibleCategories < categories.length ? (
                        <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button>
                    ) : visibleCategories > 4 ? (
                        <button className="text-blue-500" onClick={handleLess}>Daha azını göstər</button>
                    ) : null
                }
            </div>
            <div className="topics md:grid hidden grid-cols-2 md:grid-cols-4 gap-4 ">
                {
                    displayedCategories.map((item, index)=>(
                        <>
                        <div className="w-full ">
                    <div className={`${selectedCategory===item.category ? "bg-gray-200 text-white topic-item  h-20 mb-2" : "bg-gray-100 topic-item h-20 mb-2"}`} key={index} onClick={()=>setSelectedCategory(item?.category)}>
                    <a>
                            <img src={`${item?.category_img}`} className="" alt="category"/>
                    </a>   
                        </div> 
                     <span className="flex justify-center font-semibold">{item?.category}</span>
                </div>

                        </>
                    ))
                }
            </div>
             <div className="md:hidden flex">
                             <Select className=" w-full outline-none"
                          options={categories.map((item) => ({
                            value: item.category,
                            label: item.category,
                          }))}
                          onChange={handleSelect}
                          placeholder="Kategoriya seçin"
                          styles={{
                            control:(base, state)=>({
                                ...base,
                                boxShadow:"none",
                                borderColor:"gray"
            
                            })
                          }}
                          
                        />
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
                                <span className="text-gray-400 font-semibold">
                                    {item?.mentor_name || item?.student_name}
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
                            className="rounded-full w-24 h-24 object-cover" alt="profile"

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
        </section>
    )
}

export default Questions;