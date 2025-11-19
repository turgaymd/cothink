const Library=()=>{
    return(
            <>
     <section>
        <div className="switch-toogle flex justify-center items-center mb-5">
            <button className="bg-blue-700 text-white rounded-full px-4 py-2 w-1/3">Kitablar</button>
            <button className="rounded-full p-4 py-2 w-1/3 border border-gray-300">Məqalələr</button>
        </div>
        <form className="flex justify-center">
          <div className="text-center mb-4 w-1/3 ">
                    <input type="text" placeholder="Axtarış..." className="form-input border bg-gray-100 border-gray-300 px-3 py-2 outline-none rounded-lg w-full"/>
                </div>
            </form>
                    <div className="course-filter mt-5">
                    <div className="filtered-items flex gap-3">
                    <span className="filter-item active">Ən çox bəyənilənlər</span>
                    <span className="filter-item ">Hamısı</span>
                </div>
            </div>
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
     </section>

                  </>
    )
}
export default Library;