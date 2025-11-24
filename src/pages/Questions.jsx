import categories from "../CategoryData";
import Search from "../components/Search";
import { FaRegComments } from "react-icons/fa";
import { useState } from "react";
import discussions from "../DiscussionsData";
const Questions=()=>{
 
    const  [displayedCategories, setDisplayedCategories]=useState(categories.slice(0, 4))
    const [visibleCategories, setVisibleCategories]=useState(2)

    const handleMore=()=>{
        setVisibleCategories(prev=>{
        const newCount=prev+4
        setDisplayedCategories(categories.slice(0, newCount))
        return newCount;
       })}
    return (
        <section>
            <Search/>
             <div className="flex justify-between mb-3">
                <h4 className="font-medium text-xl">Mövzular</h4>
                  {
                visibleCategories<categories.length && (
                <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button>
                )
            }
            </div>
            <div className="topics  flex gap-4">
                {
                    displayedCategories.map((item, index)=>(
                    <div className="topic-item flex-1" key={index}>
                    <a>
                        <img src={item.img}></img>
                    </a>
                </div>
                    ))
                }
            </div>
            <div className="mt-5 mb-5">
                <h4 className="font-bold text-xl">Müzakirə formu</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    discussions.map((item, index)=>(
                    <div className="rounded-md shadow-gray-300 bg-gray-100 shadow-2xl px-5 py-3" key={index}>
                           <div className="flex gap-3 justify-end">
                        <p className="text-gray-400">
                            {item.author}
                        </p>
                        <p className="text-gray-400">
                           * {item.date}
                        </p>
                        </div>
                <div className="flex gap-7 ">
                 
                    <img src={item.img} className="rounded-full w-24 h-24"/>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-medium">{item.title}</h5>
                    <div className="flex gap-3"> <img src={item.category} className="w-5 h-5"/>  <p className="text-gray-400">{item.subcategory}</p></div>
                        <div>
                        <a className="rounded-xl border border-gray-300 flex w-40 gap-3 items-center px-3 py-2" href="/discussion"><FaRegComments className="text-blue-500 text-xl"/>Fikrini paylaş</a>
                   </div>
                    </div>
                </div>
                </div>
                    ))
                }          
            </div>
        </section>
        
    )
}
export default Questions;