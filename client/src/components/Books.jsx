import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import {WhatsappShareButton} from "react-share"
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
 
const Books = ({books, query, selectedCategory, visibleBooks, handleMoreBooks, handleLessBooks}) => {

  const [savedBooks,setSavedBooks]=useState([])
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)

  const filteredBooks=books.filter((item)=>{
    const searchedQuery=  item.book_title.toLowerCase().includes(query.toLowerCase())
    const matchedCategories=!selectedCategory ||  item?.category_id===selectedCategory
    return searchedQuery && matchedCategories
  })

  const displayedBooks = filteredBooks.slice(0, visibleBooks)
 
  useEffect(()=>{
    axios.get(
      `${apiUrl}/server/savedPages/savedBooks/getSaveBooks.php?student_id=${user.id}`)
      .then(res => {
        const book_ids=res.data.saved_books.map(book=>book.book_id)
        setSavedBooks(book_ids)
      })
      .catch(err => console.error(err))
  },[])

  const handleSave=async(item)=>{
    try {
      const res = await axios.post(
        `${apiUrl}/server/savedPages/savedBooks/postsaveBooks.php?book_id=${item.book_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.status === "success") {
        toast.success("Kitab yadda saxlanıldı");
        setSavedBooks((prev)=>[...prev, item.book_id])
      } else {
         toast.error("Tələbə kimi daxil olun");
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  }

  const handleUnsave=async(item)=>{
    setSavedBooks((prev)=>prev.filter((id)=>id!==item.book_id))
    await axios.delete(`${apiUrl}/server/savedPages/savedBooks/unSaveBooks.php?book_id=${item.book_id}`,
      {data:{book_id:item.book_id, student_id:user?.id},
      headers: { "Content-Type": "application/json" } },
    )
  }

  return (
    <>
      <ToastContainer/>
      <div className="flex justify-between items-center mt-5 mb-3">
        <h4 className="font-semibold text-xl">Kitablar</h4>
        {filteredBooks.length > 3 && (
          visibleBooks >= filteredBooks.length ? (
            <button className="text-blue-500" onClick={handleLessBooks}>
              Daha azını göstər
            </button>
          ) : (
            <button className="text-blue-500" onClick={handleMoreBooks}>
              Hamısına bax
            </button>
          )
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {displayedBooks.length===0 ? 
          <p className="font-bold col-span-full text-center text-2xl">Kitab tapılmadı</p> : (
          displayedBooks.map((item, index)=>(
            <div className="library-item  shadow-sm hover:shadow-md transition rounded-xl mt-4" key={index}>
              <div className="flex  gap-4">
                <a href={`/library/books/${item.book_id}`}>
                    <img
                      src={item.book_img}
                      className="w-20 h-28 object-cover rounded-md"
                      alt="book"
                    ></img>

                </a>
                <div className=" flex flex-col flex-1 gap-3">
                  <h4 className="font-semibold text-sm line-clamp-2">
                    {item.book_title}
                  </h4>
                  <span className="inline-block rounded w-fit bg-gray-100 px-2 py-0.5">PDF </span>
                    <div className="flex items-center gap-4 mt-auto pt-3 text-sm">
                      <a className="flex gap-1" download href={`item.book_url`}>
                        <img src="/images/download.svg" />
                        <span>Yüklə</span>
     </a>
                    <div className="flex items-center gap-1">
                      <img src="/images/share.svg"  className="w-5"/>
                      <WhatsappShareButton url={window.location.href} title={item.book_title}>Paylaş</WhatsappShareButton>
                    </div>
                    <button className="ml-auto">
                      {savedBooks.includes(item.book_id) ? 
                        (<FaBookmark fontSize={20} onClick={()=>handleUnsave(item)}/>) :
                        (<FaRegBookmark fontSize={20} onClick={()=>handleSave(item)}/>)}
                    </button>
                  </div>
                                   
                    </div>
                </div>
            </div>
          ))
        )}
      </div>
 

    </>
  );
};
export default Books;