import { useState } from "react";
import Search from "./Search";
import Articles from "./Articles";
const books=[

  { 
    title:"Rosen_Discrete_Mathematics_and_Its_Applications_7th_Edition",
    img:"book_1.png"
},
 { 
    title:"Discrete Mathematics - Richard Johnsonbaugh - 8th ed",
    img:"book_1.png"
},
  { 
    title:"Thomas Calculus Early Transcendentals 12th txtbk",
    img:"book_1.png"
},
]
const Library=()=>{
  const [activeTab, setActiveTab]=useState("books")
    return(
            <>
     <section>
    <div className="flex justify-center mb-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={` rounded-full w-full ${activeTab==="books" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Məqalələr</button>
        </div> 
                </div>
<Search/>
                    <div className="course-filter mt-5">
                    <div className="filter-items flex gap-3">
                    <span className="filter-item active rounded-md">Ən çox bəyənilənlər</span>
                    <span className="filter-item rounded-md">Hamısı</span>
                </div>
            </div>
            {activeTab==="articles" ? <Articles/> : <>  
         
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
             {
               books.map((item, index)=>(
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
               ))
            }          
              </div>
                 </>} 
     </section>

                  </>
    )
}
export default Library;