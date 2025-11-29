
import { useState, useEffect } from "react";
import axios from "axios";
const Books=()=>{
      // const  [query, setQuery]=useState("")
      const [books, setBooks]=useState([])

    //    const filteredBooks=books.filter((item)=>
    //     item.title.toLowerCase().includes(query.toLowerCase())       
    // )
      useEffect(()=>{
        axios.get("http://localhost/cothinke/server/books/bookRead.php").then(res=>{
            setBooks(res.data)
            console.log(books)
        })
     })
    return (
        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
               {books.length===0 ? 
                  <p className="font-bold col-span-4 text-center text-2xl">Kitab tapılmadı</p>   : (
               books.map((item, index)=>(
                   <div className="library-item shadow-xl rounded-xl mt-4" key={index}>
                        <a href="/library/books/id">
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
        </>
    )
}
export default Books;