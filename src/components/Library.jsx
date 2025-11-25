import { useState } from "react";
import Search from "./Search";
import Articles from "./Articles";
import books from "../data/BooksData";

const Library=()=>{
  const [activeTab, setActiveTab]=useState("books")
  const  [query, setQuery]=useState("")

   const filteredBooks=books.filter((item)=>
        item.title.toLowerCase().includes(query.toLowerCase()) 
    )
    return(
            <>
     <section>
    <div className="flex justify-center mb-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={` rounded-full w-full ${activeTab==="books" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
        </div> 
                </div>
<Search query={query} setQuery={setQuery}/>
                    <div className="course-filter mt-5">
                    <div className="filter-items flex gap-3">
                    <span className="filter-item active rounded-md">Ən çox bəyənilənlər</span>
                    <span className="filter-item rounded-md">Hamısı</span>
                </div>
            </div>
            {activeTab==="articles" ? <Articles/> : <>  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
               {filteredBooks.length===0 ? 
                  <p className="font-bold col-span-4 text-center text-2xl">Kitab tapılmadı</p>   : (
               filteredBooks.map((item, index)=>(
                   <div className="library-item shadow-xl rounded-xl mt-4" key={index}>
                        <a href="/libraryy">
                <div className="flex items-center gap-5">
                    <img src={item.img} className="w-35 h-35"  alt="book"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold text-lg break-all">
                          {item.title}
                        </h4>
                        <p>PDF </p>
                         <div className="flex items-center gap-5 stats">
                        <div className="flex items-center gap-2">
                          <a className="flex gap-3" download href="/books">
                          <img src="download.svg"/>
                          <span>Yüklə</span>                     
                          </a>
                        </div>
                         <div className="flex items-center gap-2">  
                        <img src="share.svg"/>
                        <span>Paylaş</span>
                        </div>
                        <div className="flex items-center gap-2">
                      <img src="save.svg"/>
               
                        </div>
                    </div>
                    </div>
              
                </div>     
                       </a>      
            </div>
               )))
            }          
              </div>
                 </>} 
     </section>

                  </>
    )
}
export default Library;