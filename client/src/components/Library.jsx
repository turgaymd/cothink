import { useState,useEffect, useContext } from "react";
import Search from "../utils/Search";
import Articles from "./Articles";
import axios from "axios";
import Books from "./Books";
import { ApiContext } from "../context//ApiContext";
import Select from "react-select"

const Library=()=>{
  const [activeTab, setActiveTab]=useState("books")
  const [books, setBooks]=useState([])
  const  [query, setQuery]=useState("")
  const [categories,setCategories]=useState([])
  const [selectedCategory,setSelectedCategory]=useState(null)
  const [displayedCategories, setDisplayedCategories]=useState([])
  const [visibleCategories, setVisibleCategories]=useState(4)
  const [displayedBooks, setDisplayedBooks] = useState([])
  const [visibleBooks, setVisibleBooks] = useState()
  const {apiUrl}=useContext(ApiContext)


 useEffect(() => {
    axios 
      .get(`${apiUrl}/server/books/bookRead.php`) 
      .then((res) => {
        setBooks(res.data.data);
        setVisibleBooks(res.data.data.length)
        console.log(res.data.data)
      })
      .catch((err) => console.error(err)); 
          axios.get(`${apiUrl}/server/categories/categoryRead.php`).then(res=>{ 
            setCategories(res.data.data) ;
            setDisplayedCategories(res.data.data.slice(0,4))
        })
  }, []);

    const handleMore=()=>{
        setVisibleCategories(prev=>{
        const newCount=prev+4
        setDisplayedCategories(categories.slice(0, newCount))
        return newCount;
       })}

    const handleLess=()=>{
        setVisibleCategories(4)
        setDisplayedCategories(categories.slice(0, 4))
    }

    const handleMoreBooks=()=>{
        setVisibleBooks(books.length)
    }

    const handleLessBooks=()=>{
        setVisibleBooks(3)
    }

      const handleSelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory.value);
  };
    return(
            <>
     <section>
    <div className="flex justify-center mb-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full border border-gray-200">
            <button className={` rounded-full w-full ${activeTab==="books" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActiveTab("books")}>Kitablar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Bloqlar</button>
        </div> 
                </div>
<Search query={query} setQuery={setQuery}/>
            <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-xl">Mövzular</h4>
          {
                visibleCategories<categories.length ? (
                <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button>
                ) : visibleCategories>4 ? (
                <button className="text-blue-500" onClick={handleLess}>Daha azına bax</button>
                ) : null
            }
            </div>
                     <div className="topics  grid-cols-4  gap-4 hidden md:grid">
                {
                    displayedCategories.map((item, index)=>(
                        <>
                        <div className="w-full ">
                    <div className={`${selectedCategory===item.category_id ? "bg-gray-200 text-white topic-item h-20 mb-2" : "bg-gray-100 topic-item mb-2 h-20"}`} key={index} onClick={()=>setSelectedCategory(item?.category_id)}>
                    <a>
                        <img src={item.category_img}/>
                           
                    </a>   
                        </div> 
                            <span className="flex justify-center font-semibold">{item?.category}</span>
                    {/* <h4 className="font-bold text-center">{item.category}</h4> */}
                </div>
                

                        </>
                    ))
                }
                
            </div>
            <div className="md:hidden flex">
                 <Select className=" w-full outline-none"
              options={categories.map((item) => ({
                value: item.category_id,
                label: item.category,
              }))}
              onChange={handleSelect}
              placeholder="Kategoriya seçin"
              styles={{
                control:(base, state)=>({
                    ...base,
                    boxShadow:"none",
                    borderColor:"gray"

                })
              }}
              
            />
            </div>
                    <div className="course-filter mt-5">
                    <div className="filter-items flex gap-3">
                  
                    <button className="filter-item   px-8 py-2 active rounded-md md:leading-normal leading-none flex justify-center items-center" onClick={()=>setSelectedCategory(null)}>Hamısı</button>
                  <button className="filter-item px-8 py-2  rounded-md md:leading-normal leading-none flex justify-center items-center">Ən çox bəyənilənlər</button>
                </div>
            </div>
            {activeTab==="articles" ? <Articles query={query} selectedCategory={selectedCategory}/> : <>  
                   <Books books={books} query={query} selectedCategory={selectedCategory} visibleBooks={visibleBooks} handleMoreBooks={handleMoreBooks} handleLessBooks={handleLessBooks}/>
                 </>} 
     </section>
                  </>
    )
}
export default Library;