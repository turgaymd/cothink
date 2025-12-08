
import { useState,useEffect, useContext } from "react";
import Search from "../utils/Search";
import Articles from "./Articles";
import axios from "axios";
import Books from "./Books";
import { ApiContext } from "../ApiContext";
const Library=()=>{
  const [activeTab, setActiveTab]=useState("books")
  const [books, setBooks]=useState([])
  const  [query, setQuery]=useState("")
  const [categories,setCategories]=useState([])
  const [displayedCategories, setDisplayedCategories]=useState([])
  const [visibleCategories, setVisibleCategories]=useState(2)
  const {apiUrl}=useContext(ApiContext)


 useEffect(() => {
    axios 
      .get(`${apiUrl}/server/books/bookRead.php`) 
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => console.error(err)); 
          axios.get(`${apiUrl}/server/categories/categoryRead.php`).then(res=>{ 
            setCategories(res.data.data) ;
            setDisplayedCategories(res.data.data.slice(0,4))
        })
  }, []);

    const handleMore=()=>{
        setVisibleCategories(prev=>{
        const newCount=prev+4
        setDisplayedCategories(categories.slice(0, newCount))
        return newCount;
       })}

    return(
            <>
     <section>
    <div className="flex justify-center mb-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={` rounded-full w-full ${activeTab==="books" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
        </div> 
                </div>
<Search query={query} setQuery={setQuery}/>
            <div className="flex justify-between mb-3">
                <h4 className="font-medium text-xl">Mövzular</h4>
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
                    <div className="topic-item mb-2" key={index}>
                    <a>
                               <h4>{item?.category}</h4>
                    </a>   
                        </div> 
                    {/* <h4 className="font-bold text-center">{item.category}</h4> */}
                </div>

                        </>
                    ))
                }
            </div>
                    <div className="course-filter mt-5">
                    <div className="filter-items flex gap-3">
                    <span className="filter-item active rounded-md bg-blue-800">Ən çox bəyənilənlər</span>
                    <span className="filter-item rounded-md bg-blue-800">Hamısı</span>
                </div>
            </div>
            {activeTab==="articles" ? <Articles/> : <>  
                   <Books books={books} query={query}/>
                 </>} 
     </section>
                  </>
    )
}
export default Library;