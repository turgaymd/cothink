
const Mentors=()=>{
    return (
        <div className="md:col-span-10">
          <section>
                        <div className="filter mb-5">
                        <div className=" flex justify-between mb-3">
                <h4 className="font-bold text-xl">Kategoriyalar</h4>
                <a className="text-blue-500">Hamısına bax</a>
            </div>
            <div className="topics  flex gap-4">
                <div className="topic-item flex-1">
                    <a>
                        <img src="history.svg"></img>
                    </a>
                </div>
                   <div className="topic-item flex-1">
                    <a>
                        <img src="physics.svg"></img>
                    </a>
                </div>
                 <div className="topic-item flex-1">
                    <a>
                        <img src="math.svg"></img>
                    </a>
                </div>
                 <div className="topic-item flex-1">
                    <a>
                        <img src="coding.svg"></img>
                    </a>
                </div>
                                            
                        </div>
            </div>
            <div className="flex justify-between">
                <h4 className="font-bold text-xl">Ən yaxşı mentorlar</h4>
                <a className="text-blue-500">Hamısına bax</a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5 pt-5">
            <div className="mentor-item shadow-xl rounded-xl">
                <div className="flex items-center gap-5">
                    <img src="mentor.jpg" className="avatar rounded-full" alt="mentor"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold textxl">Nərgiz Əliyeva</h4>
                        <p>Proqramlaşdirma (Frontend) </p>
                         <div className="flex justify-end items-center gap-20 stats">
                        <div className="flex items-center gap-2">
                          <img src="users.svg"/>
                          <span>3.2k tələbə</span>
                        </div>
                         <div className="flex items-center gap-2">  
                        <img src="comment.svg"/>
                        <span>Rəy (200+)</span>
                        </div>
                        <div className="flex items-center gap-2">
                      <img src="stars.svg"/>
                    <span>4.8/5</span>
                        </div>
                    </div>
                    </div>
              
                </div>           
            </div>
                <div className="mentor-item shadow-xl rounded-xl">
                <div className="flex items-center gap-5">
                    <img src="mentor.jpg" className="avatar rounded-full" alt="mentor"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold textxl">Nərgiz Əliyeva</h4>
                        <p>Proqramlaşdirma (Frontend) </p>
                         <div className="flex justify-end items-center gap-20 stats">
                        <div className="flex items-center gap-2">
                          <img src="users.svg"/>
                          <span>3.2k tələbə</span>
                        </div>
                         <div className="flex items-center gap-2">  
                        <img src="comment.svg"/>
                        <span>Rəy (200+)</span>
                        </div>
                        <div className="flex items-center gap-2">
                      <img src="stars.svg"/>
                    <span>4.8/5</span>
                        </div>
                    </div>
                    </div>
              
                </div>           
            </div>
            </div>
          </section>
        </div>
    )
}
export default Mentors;