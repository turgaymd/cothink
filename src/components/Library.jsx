import { useState } from "react";
import Search from "./Search";
import Articles from "./Articles";

const Library=()=>{
  const [activeTab, setActiveTab]=useState("library")
    return(
            <>
     <section>
    <div className="flex justify-center mb-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className=" bg-blue-700 text-white rounded-full w-full" onClick={()=>setActiveTab("books")}>Kitablar</button>
            <button className="rounded-full w-full " onClick={()=>setActiveTab("articles")}>Məqalələr</button>
        </div> 
                </div>
<Search/>
                    <div className="course-filter mt-5">
                    <div className="filtered-items flex gap-3">
                    <span className="filter-item active">Ən çox bəyənilənlər</span>
                    <span className="filter-item ">Hamısı</span>
                </div>
            </div>
            {activeTab==="articles" ? <Articles/> : <>
         
        <div className="flex gap-4 mt-5">
   <div className="library-item shadow-xl rounded-xl mt-4 w-1/3">
                <div className="flex items-center gap-5">
                    <img src="book_1.png" className="w-35 h-35"  alt="book"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold text-lg break-all">Rosen_Discrete_Mathematics_and_Its_Applications_7th_Edition</h4>
                        <p>PDF </p>
                         <div className="flex items-center gap-20 stats">
                        <div className="flex items-center gap-2">
                          <img src="download.svg"/>
                          <span>Yüklə</span>
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
            </div>
               <div className="library-item shadow-xl rounded-xl mt-4 w-1/3">
                <div className="flex items-center gap-5">
                    <img src="book_1.png" className="w-35 h-35"  alt="book"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold text-lg break-all">Rosen_Discrete_Mathematics_and_Its_Applications_7th_Edition</h4>
                        <p>PDF </p>
                         <div className="flex items-center gap-20 stats">
                        <div className="flex items-center gap-2">
                          <img src="download.svg"/>
                          <span>Yüklə</span>
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
            </div>
              <div className="library-item shadow-xl rounded-xl mt-4 w-1/3">
                <div className="flex items-center gap-5">
                    <img src="book_1.png" className="w-35 h-35"  alt="book"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold text-lg break-all">Rosen_Discrete_Mathematics_and_Its_Applications_7th_Edition</h4>
                        <p>PDF </p>
                         <div className="flex items-center gap-20 stats">
                        <div className="flex items-center gap-2">
                          <img src="download.svg"/>
                          <span>Yüklə</span>
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
            </div>
              </div>
                 </>} 
     </section>

                  </>
    )
}
export default Library;