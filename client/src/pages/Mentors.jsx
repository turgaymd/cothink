
import { useEffect, useState } from "react";
import Search from "../components/Search";
import categories from "../data/CategoryData";
import axios from "axios";
const Mentors=()=>{
const  [displayedCategories, setDisplayedCategories]=useState(categories.slice(0, 4))
const  [visibleCategories, setVisibleCategories]=useState(4)
const  [query, setQuery]=useState("")
const [mentors, setMentors]=useState([])

    //    const mentorss=[
    //     {
    //         name:"Nərgiz Əliyeva",
    //         img:"aysel.png",
    //         category:"Proqramlaşdirma (Frontend)",
    //         students:"3.2K",
    //         comments:"200+",
    //         rating:"4.8/5"
    //     },
    //        {
    //         name:"Elvin Quliyev",
    //         img:"elvin.jpg",
    //         category:"Riyaziyyat & Alqoritmlər",
    //         students:"2.6K",
    //         comments:"200+",
    //         rating:"4.8/5"
    //     }
    //    ]

     useEffect(()=>{
        axios.get("http://localhost/cothinke/server/mentors/mentors.php").then(res=>{
            setMentors(res.data)
            console.log(mentors)
        })
     })

    const handleMore=()=>{
        setVisibleCategories(prev=>{
        const newCount=prev+4
        setDisplayedCategories(categories.slice(0, newCount))
        return newCount;
       })}

    //       const filteredMentors=mentors.filter((item)=>
    //     item.name.toLowerCase().includes(query.toLowerCase()) || 
    //     item.category.toLowerCase().includes(query.toLowerCase())
    // )
    return (
        <div className="md:col-span-10">
          <section>
            <Search query={query} setQuery={setQuery}/>
            <div className="mentor-banner mt-3">
                <div className="relative flex flex-col md:flex-row">
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
                {
                visibleCategories<categories.length && (
                <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button>
                )
            }
            </div>
      <div className="course-filter mt-4 mb-5">
                    <div className="filter-items flex gap-3">
                                            <span className="active rounded-md">Hamısı</span>
                        {
                            displayedCategories.map((item, index)=>(

                    <span className="rounded-md" key={index}>{item.name}</span>
                            ))
                        }
                   
                </div>
            </div>
            </div>
            <div className="flex justify-between">
                <h4 className="font-bold text-xl">Ən yaxşı mentorlar</h4>
                <button className="text-blue-500" >Hamısına bax</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 pt-4">
                  {mentors.length===0 ? 
                  <p className="font-bold col-span-2 text-center text-2xl">Mentor tapılmadı</p>   : 
                  (mentors.map((item,index)=>(
                   <div className="mentor-item shadow-xl rounded-xl bg-white" key={index}>
                    <a href="/mentors/id" className="block">
                    <div className="mentor-title gap-5 flex">          
                            <img src={item.img} className="avatar rounded-full object-cover" alt="mentor"/>
                            <div className="flex flex-col w-full">
                                <h4 className="font-bold text-lg">{item.name}</h4>
                        <p>{item.category} </p>
                         <div className="flex justify-between gap-5 items-center pt-4">
                        <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <img src="users.svg" className="w-5 h-5"/>
                          <span>{item.students} tələbə</span>
                               </div>
                         <div className="flex items-center gap-2">  
                        <img src="comment.svg" className="w-5 h-5"/>
                        <span>{item.comments}</span>
                             </div>
                        </div>                               
                       <div className="flex flex-col items-center gap-2">
                        <span>{item.rating}</span>
                      <img src="stars.svg"/>
                        </div>
                       
                                   </div>
                           </div>   
                                                   
                            </div>
                        </a>
                                       
            </div>
            
                   )))}
            </div>
          </section>
        </div>
    )
}
export default Mentors;