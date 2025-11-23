
import Search from "../components/Search";
const Mentors=()=>{
       const mentorss=[
        {
            name:"Nərgiz Əliyeva",
            img:"aysel.png",
            category:"Proqramlaşdirma",
            students:"3.2K",
            comments:"200+",
            rating:4
        },
           {
            name:"Nərgiz Əliyeva",
            img:"aysel.png",
            category:"Proqramlaşdirma",
            students:"3.2K",
            comments:"200+",
            rating:4
        }
       ]
    return (
        <div className="md:col-span-10">
          <section>
            <Search/>
            <div className="mentor-banner mt-3">
                <div className="relative">
                <div className="">
                <h2 className="text-3xl font-medium pb-3">Öyrənmə Yolunuza Uyğun Mentorlar</h2>
                <p className="font-medium text-xl">Sizə ən uyğun mentor profillərini kəşf edin.</p>
                </div>
                <div className="absolute right-0 top-1">
                    <div className="overflow-hidden">
                   <img src="mentor_banner.jpg" className="w-40 h-40 shadow-2xs rounded-full"/>
                    </div>
 
                </div>
                </div>
      
            </div>
                        <div className="filter mb-5">
                        <div className=" flex justify-between mb-3">
                <h4 className="font-bold text-xl">Kategoriyalar</h4>
                <a className="text-blue-500">Hamısına bax</a>
            </div>
      <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex gap-3">
                    <span className="active rounded-md">Hamısı</span>
                    <span className="rounded-md">Fizika</span>
                    <span className="rounded-md">Riyaziyyat</span>
                    <span className="rounded-md">Qrafik dizayn</span>
                    <span className="rounded-md">Tarix</span>
                    <span className="rounded-md">Proqramlaşdırma</span>
                </div>
            </div>
            </div>
            <div className="flex justify-between">
                <h4 className="font-bold text-xl">Ən yaxşı mentorlar</h4>
                <a className="text-blue-500">Hamısına bax</a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 pt-5">
                {mentorss.map((item,index)=>(
                   <div className="mentor-item shadow-xl rounded-xl" key={index}>
                <a className="flex items-center gap-5" href="/mentor">
                    <img src={item.img} className="avatar rounded-full" alt="mentor"></img>
                    <div className="mentor-title flex flex-col gap-3">
                        <h4 className="font-bold text-xl">{item.name}</h4>
                        <p>{item.category} </p>
                         <div className="flex justify-between gap-3 items-center stats">
                        <div className="flex items-center gap-2">
                          <img src="users.svg"/>
                          <span>{item.students} tələbə</span>
                        </div>
                         <div className="flex items-center gap-2">  
                        <img src="comment.svg"/>
                        <span>{item.comments}</span>
                        </div>
                        <div className="flex items-center gap-2">
                      <img src="stars.svg"/>
                    <span>{item.rating}</span>
                        </div>
                    </div>
                    </div>
              
                </a>           
            </div>
                   ))}       
            </div>
          </section>
        </div>
    )
}
export default Mentors;