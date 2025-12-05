
import { useState,useEffect } from "react";
import Search from "../utils/Search";
import Articles from "./Articles";
import axios from "axios";
import Books from "./Books";
const Library=()=>{
  const [activeTab, setActiveTab]=useState("books")
  const [books, setBooks]=useState([])
  const  [query, setQuery]=useState("")
  const [categories,setCategories]=useState([])
  // const [displayedCategories, setDisplayedCategories]=useState(categories.slice(0, 4))
  const [visibleCategories, setVisibleCategories]=useState(2)


 useEffect(() => {
    axios
      .get("http://localhost/cothink/server/books/bookRead.php")
      .then((res) => {
        setBooks(res.data.data); // <--- backend JSON-da "data" key var
      })
      .catch((err) => console.error(err));
          axios.get("http://localhost/cothink/server/categories/categoryRead.php").then(res=>{
            setCategories(res.data) ;
            console.log(res.data)
        })
  }, []);
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
                <button className="text-blue-500" >Hamısına bax</button>
                )
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